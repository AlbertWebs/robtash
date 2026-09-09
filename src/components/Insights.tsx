import { Link } from "react-router-dom";
import { insights } from "../data/content";
import { Reveal } from "./Reveal";
import "./Insights.css";

export function Insights() {
  return (
    <section className="section insights" aria-labelledby="insights-heading">
      <div className="container">
        <Reveal className="insights-head">
          <div>
            <p className="section-label">Insights & calls</p>
            <h2 id="insights-heading" className="section-title">
              Content that invites people into the work
            </h2>
          </div>
          <Link to="/insights" className="btn btn-outline insights-all">
            All insights
          </Link>
        </Reveal>

        <ul className="insights-list">
          {insights.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              className={`reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <Link to={item.href} className="insight-row">
                <span className="insight-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="insight-cta">Read →</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
