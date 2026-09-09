import { useEffect, useId, useRef, useState } from "react";
import "./LanguageSwitcher.css";

const languages = [
  { code: "en", abbr: "EN", name: "English", flag: "🇺🇸" },
  { code: "fr", abbr: "FR", name: "Français", flag: "🇫🇷" },
  { code: "ar", abbr: "AR", name: "العربية", flag: "🇸🇦" },
  { code: "pt", abbr: "PT", name: "Português", flag: "🇵🇹" },
  { code: "sw", abbr: "SW", name: "Kiswahili", flag: "🇰🇪" },
] as const;

type Lang = (typeof languages)[number];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>(languages[0]);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onPointer(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  function selectLang(lang: Lang) {
    setCurrent(lang);
    setOpen(false);
    document.documentElement.lang = lang.code;
  }

  return (
    <div className={`lang-switcher ${open ? "is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="lang-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={`Language: ${current.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-flag" aria-hidden="true">
          {current.flag}
        </span>
        <span className="lang-abbr">{current.abbr}</span>
        <svg
          className="lang-chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul
        id={listId}
        className="lang-menu"
        role="listbox"
        aria-label="Select language"
        hidden={!open}
      >
        {languages.map((lang) => (
          <li key={lang.code} role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={current.code === lang.code}
              aria-label={lang.name}
              className={current.code === lang.code ? "is-selected" : undefined}
              onClick={() => selectLang(lang)}
            >
              <span className="lang-flag" aria-hidden="true">
                {lang.flag}
              </span>
              <span className="lang-abbr">{lang.abbr}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
