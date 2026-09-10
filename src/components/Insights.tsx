import { Link } from "react-router-dom";
import { resources } from "../data/content";
import { Reveal } from "./Reveal";
import "./Insights.css";

export function Insights() {
  return (
    <section className="section insights" aria-labelledby="resources-heading">
      <div className="container">
        <Reveal className="insights-head">
          <div>
            <p className="section-label">Resources</p>
            <h2 id="resources-heading" className="section-title">
              Policy papers, insights, and podcasts
            </h2>
          </div>
          <Link to="/resources" className="btn btn-outline insights-all">
            All resources
          </Link>
        </Reveal>

        <ul className="insights-list">
          {resources.map((item, index) => (
            <Reveal
              key={item.id}
              as="li"
              className={`reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <Link to={`/resources/${item.id}`} className="insight-row">
                <span className="insight-tag">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="insight-cta">Explore →</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
