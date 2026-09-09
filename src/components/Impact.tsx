import { impactStories } from "../data/content";
import { Reveal } from "./Reveal";
import "./Impact.css";

export function Impact() {
  return (
    <section className="section impact" aria-labelledby="impact-heading">
      <div className="container">
        <Reveal className="impact-intro">
          <p className="section-label">Selected contributions</p>
          <h2 id="impact-heading" className="section-title">
            Proof that African-led repair can move policy
          </h2>
          <p className="section-lede">
            Since 2023, Reform Initiatives has contributed to major policy
            processes, convenings, and solidarity campaigns across Africa and
            the diaspora. A snapshot of the work:
          </p>
        </Reveal>

        <ol className="impact-list">
          {impactStories.map((story, index) => (
            <Reveal
              key={story.title}
              as="li"
              className={`impact-row reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <span className="impact-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="impact-body">
                <p className="impact-meta">{story.meta}</p>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
