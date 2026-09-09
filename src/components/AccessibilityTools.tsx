import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import "./AccessibilityTools.css";

type Prefs = {
  textScale: number;
  highContrast: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
};

const STORAGE_KEY = "ri-a11y-prefs";
const MIN_SCALE = 0.9;
const MAX_SCALE = 1.5;
const STEP = 0.1;

const DEFAULT_PREFS: Prefs = {
  textScale: 1,
  highContrast: false,
  underlineLinks: false,
  readableFont: false,
  reduceMotion: false,
};

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, +value.toFixed(1)));
}

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const system: Prefs = { ...DEFAULT_PREFS };
      if (window.matchMedia("(prefers-contrast: more)").matches) {
        system.highContrast = true;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        system.reduceMotion = true;
      }
      return system;
    }
    const parsed = JSON.parse(raw) as Partial<Prefs>;
    return {
      ...DEFAULT_PREFS,
      ...parsed,
      textScale: clampScale(Number(parsed.textScale) || 1),
    };
  } catch {
    return DEFAULT_PREFS;
  }
}

function savePrefs(prefs: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* private mode / quota */
  }
}

function applyPrefs(prefs: Prefs) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-text-scale", String(prefs.textScale));
  root.classList.toggle("a11y-contrast", prefs.highContrast);
  root.classList.toggle("a11y-underline-links", prefs.underlineLinks);
  root.classList.toggle("a11y-readable-font", prefs.readableFont);
  root.classList.toggle("a11y-reduce-motion", prefs.reduceMotion);
}

function prefsAreActive(prefs: Prefs) {
  return (
    prefs.textScale !== 1 ||
    prefs.highContrast ||
    prefs.underlineLinks ||
    prefs.readableFont ||
    prefs.reduceMotion
  );
}

function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

export function AccessibilityTools() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("");
  const panelId = useId();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = loadPrefs();
    setPrefs(saved);
    applyPrefs(saved);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyPrefs(prefs);
    savePrefs(prefs);
  }, [prefs, mounted]);

  const closePanel = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open || !panelRef.current) return;

    const panel = panelRef.current;
    const focusable = getFocusable(panel);
    focusable[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closePanel();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;
      const items = getFocusable(panelRef.current);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function onPointer(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      closePanel();
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [open, closePanel]);

  function update(partial: Partial<Prefs>, message?: string) {
    setPrefs((prev) => {
      const next = { ...prev, ...partial };
      if (partial.textScale != null) {
        next.textScale = clampScale(partial.textScale);
      }
      return next;
    });
    if (message) setStatus(message);
  }

  function reset() {
    setPrefs(DEFAULT_PREFS);
    setStatus("Accessibility settings reset");
  }

  function onToggleKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
    }
  }

  if (!mounted) return null;

  const active = prefsAreActive(prefs);
  const scalePercent = Math.round(prefs.textScale * 100);

  return createPortal(
    <div
      ref={rootRef}
      className={`a11y-tools ${open ? "is-open" : ""} ${active ? "has-active" : ""}`}
    >
      <button
        ref={buttonRef}
        type="button"
        className="a11y-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label={
          open ? "Close accessibility tools" : "Open accessibility tools"
        }
        title="Accessibility tools"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onToggleKeyDown}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle cx="12" cy="7" r="1.65" fill="currentColor" />
          <path
            d="M7.5 11.25h9M12 11.25v6.5M8.25 20.25 12 14.5l3.75 5.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className="a11y-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        hidden={!open}
      >
        <div className="a11y-panel-head">
          <p id={titleId} className="a11y-panel-title">
            Accessibility
          </p>
          <button
            type="button"
            className="a11y-close"
            aria-label="Close"
            onClick={closePanel}
          >
            ×
          </button>
        </div>

        <div className="a11y-row">
          <span id="a11y-text-label">Text size</span>
          <div
            className="a11y-text-controls"
            role="group"
            aria-labelledby="a11y-text-label"
          >
            <button
              type="button"
              aria-label="Decrease text size"
              disabled={prefs.textScale <= MIN_SCALE}
              onClick={() => {
                const next = clampScale(prefs.textScale - STEP);
                update(
                  { textScale: next },
                  `Text size ${Math.round(next * 100)}%`,
                );
              }}
            >
              A−
            </button>
            <span className="a11y-scale" aria-live="polite">
              {scalePercent}%
            </span>
            <button
              type="button"
              aria-label="Increase text size"
              disabled={prefs.textScale >= MAX_SCALE}
              onClick={() => {
                const next = clampScale(prefs.textScale + STEP);
                update(
                  { textScale: next },
                  `Text size ${Math.round(next * 100)}%`,
                );
              }}
            >
              A+
            </button>
          </div>
        </div>

        <label className="a11y-option">
          <input
            type="checkbox"
            checked={prefs.highContrast}
            onChange={(e) =>
              update(
                { highContrast: e.target.checked },
                e.target.checked
                  ? "High contrast on"
                  : "High contrast off",
              )
            }
          />
          High contrast
        </label>

        <label className="a11y-option">
          <input
            type="checkbox"
            checked={prefs.underlineLinks}
            onChange={(e) =>
              update(
                { underlineLinks: e.target.checked },
                e.target.checked
                  ? "Link underlines on"
                  : "Link underlines off",
              )
            }
          />
          Underline links
        </label>

        <label className="a11y-option">
          <input
            type="checkbox"
            checked={prefs.readableFont}
            onChange={(e) =>
              update(
                { readableFont: e.target.checked },
                e.target.checked
                  ? "Readable font on"
                  : "Readable font off",
              )
            }
          />
          Readable font
        </label>

        <label className="a11y-option">
          <input
            type="checkbox"
            checked={prefs.reduceMotion}
            onChange={(e) =>
              update(
                { reduceMotion: e.target.checked },
                e.target.checked ? "Motion reduced" : "Motion restored",
              )
            }
          />
          Reduce motion
        </label>

        <button type="button" className="a11y-reset" onClick={reset}>
          Reset all
        </button>
      </div>

      <div className="a11y-status" role="status" aria-live="polite">
        {status}
      </div>
    </div>,
    document.body,
  );
}
