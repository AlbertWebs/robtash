import { Link } from "react-router-dom";
import { PageBand, PageHero } from "../components/PageChrome";
import {
  aboutShort,
  approaches,
  missionLead,
  partnerPlaces,
  registeredIn,
  themes,
  valueDetails,
  vision,
} from "../data/content";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="An ethics-driven Pan-African institution"
        lede={aboutShort}
        actions={
          <>
            <Link to="/work" className="btn btn-hero">
              Explore our work
            </Link>
            <Link to="/get-involved" className="btn btn-outline">
              Get involved
            </Link>
          </>
        }
      />

      <section className="page-section">
        <div className="container">
          <p className="section-label">Vision & mission</p>
          <h2 className="section-title">What we are working toward</h2>
          <div className="mission-split">
            <article className="mission-block">
              <h3>Vision</h3>
              <p>{vision}</p>
            </article>
            <article className="mission-block">
              <h3>Mission</h3>
              <p>{missionLead}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Core values</p>
          <h2 className="section-title">How we show up in the work</h2>
          <p className="section-lede">
            Our values keep research, advocacy, and partnership accountable to
            African agency and public trust.
          </p>
          <div className="value-grid">
            {valueDetails.map((value) => (
              <article key={value.title} className="value-item">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title">Methods that connect ideas to influence</h2>
          <p className="section-lede">
            RI combines research, advocacy, convening, communications, and
            organisational support — always with a cross-thematic lens.
          </p>
          <div className="approach-list">
            {approaches.map((item, index) => (
              <article key={item.title} className="approach-row">
                <span className="approach-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Where we work</p>
          <h2 className="section-title">Transcontinental by design</h2>
          <p className="section-lede">
            Registered in {registeredIn.join(", ")}. Partnerships and activities
            extend across Africa and the diaspora.
          </p>
          <div className="place-chips" aria-label="Partner geographies">
            {partnerPlaces.map((place) => (
              <span key={place}>{place}</span>
            ))}
          </div>
          <p className="section-lede" style={{ marginTop: "1.75rem" }}>
            Our thematic field spans{" "}
            {themes.map((t) => t.title).join(" · ")}.
          </p>
        </div>
      </section>

      <PageBand
        title="See how the themes connect"
        text="Reparatory justice, human rights, transitional justice, and democracy move together in our programme design."
        ctaLabel="Our work"
        ctaTo="/work"
      />
    </>
  );
}
