import "./FloatingGeometry.css";

type FloatingGeometryProps = {
  variant?: "a" | "b";
  className?: string;
};

/** Sparse corner accents - kept away from body copy. */
export function FloatingGeometry({
  variant = "a",
  className = "",
}: FloatingGeometryProps) {
  return (
    <div
      className={`float-geo float-geo-${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="float-geo-piece float-eye" />
      <span className="float-geo-piece float-stripes" />
      <span className="float-geo-piece float-arc" />
    </div>
  );
}

/** Dense motif panel for team/founder card media areas. */
export function GeometryMotifPanel({ motif = 1 }: { motif?: number }) {
  return (
    <div
      className={`geo-motif-panel geo-motif-${((motif - 1) % 4) + 1}`}
      aria-hidden="true"
    >
      <span className="geo-tile geo-tile-eye" />
      <span className="geo-tile geo-tile-stripes" />
      <span className="geo-tile geo-tile-semi" />
      <span className="geo-tile geo-tile-arc" />
      <span className="geo-tile geo-tile-dots" />
      <span className="geo-tile geo-tile-check" />
      <span className="geo-tile geo-tile-solid-a" />
      <span className="geo-tile geo-tile-solid-b" />
    </div>
  );
}
