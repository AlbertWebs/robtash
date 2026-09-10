import { useState } from "react";
import { Link } from "react-router-dom";
import { sixRs, themes } from "../data/content";
import { FloatingGeometry } from "./FloatingGeometry";
import { Reveal } from "./Reveal";
import "./Themes.css";

export function Themes() {
  const [active, setActive] = useState(0);

  return (
    <section className="section themes section-with-geo" aria-labelledby="themes-heading">
      <FloatingGeometry variant="a" />
      <div className="container">
        <Reveal className="themes-intro">
          <p className="section-label">Cross-thematic work</p>
          <h2 id="themes-heading" className="section-title">
            Justice issues do not travel alone
          </h2>
          <p className="section-lede">
            Reparatory justice, human rights, transitional justice, and
            democracy are one connected field of reform. We work across them -
            research, advocacy, convening, and partnerships - so African-led
            solutions can move together.
          </p>
        </Reveal>

        <Reveal className="themes-spine reveal-delay-1">
          <div className="theme-rail" role="tablist" aria-label="Thematic areas">
            {themes.map((theme, index) => (
              <button
                key={theme.id}
                type="button"
                role="tab"
                id={`theme-tab-${theme.id}`}
                aria-selected={active === index}
                aria-controls={`theme-panel-${theme.id}`}
                className={`theme-rail-item ${active === index ? "is-active" : ""}`}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="theme-index">0{index + 1}</span>
                <span className="theme-name">{theme.title}</span>
              </button>
            ))}
          </div>

          <div className="theme-panel-shell">
            <div
              key={themes[active].id}
              className="theme-panel"
              role="tabpanel"
              id={`theme-panel-${themes[active].id}`}
              aria-labelledby={`theme-tab-${themes[active].id}`}
            >
              <h3>{themes[active].title}</h3>
              <p>{themes[active].summary}</p>
              <Link
                to={`/work/${themes[active].id}`}
                className="theme-link"
              >
                Read how we work →
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="reveal-delay-2">
          <details className="sixrs">
            <summary>
              <span className="sixrs-kicker">Distinctive framework</span>
              <span className="sixrs-title">The 6Rs of reparatory justice</span>
              <span className="sixrs-hint">Expand</span>
            </summary>
            <div className="sixrs-grid">
              {sixRs.map((item) => (
                <article key={item.title} className="sixrs-item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
