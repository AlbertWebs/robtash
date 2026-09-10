import { Link } from "react-router-dom";
import heroImage from "../assets/hero/slidem1b.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { events } from "../data/content";

export function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Convenings, dialogues, and gatherings that move the work"
        lede="Conferences, festivals, roundtables and learning exchanges organised or participated in by Reform Initiatives across Africa and the diaspora."
        image={heroImage}
        actions={
          <Link to="/get-involved" className="btn btn-hero">
            Partner on a convening
          </Link>
        }
      />

      <section className="page-section">
        <div className="container">
          <p className="section-label">Selected events</p>
          <h2 className="section-title">Where dialogue becomes influence</h2>
          <p className="section-lede">
            Impact is embedded in the work that produced it. These gatherings
            show how RI convenes, participates and accompanies partners across
            reparatory justice, human rights, transitional justice and
            democratic governance.
          </p>
          <div className="approach-list">
            {events.map((item, index) => (
              <article key={item.id} className="approach-row">
                <span className="approach-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p className="meta" style={{ marginTop: "0.65rem" }}>
                    {item.partner}
                  </p>
                  <Link
                    to={`/work/${item.themeId}`}
                    className="approach-read"
                  >
                    View related theme →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageBand
        title="Bring a convening challenge to the table"
        text="Whether you are shaping a dialogue, festival, or learning exchange, we can help design the next gathering."
        ctaLabel="Get involved"
        ctaTo="/get-involved"
      />
    </>
  );
}
