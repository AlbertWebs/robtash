import { Link } from "react-router-dom";
import heroImage from "../assets/work/work-5.jpg";
import { GeometryMotifPanel } from "../components/FloatingGeometry";
import { PageBand, PageHero } from "../components/PageChrome";
import {
  aboutShort,
  approaches,
  missionLead,
  partnerPlaces,
  registeredIn,
  team,
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
        image={heroImage}
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

      <section className="page-section" id="how-we-work">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title">Methods that connect ideas to influence</h2>
          <p className="section-lede">
            RI combines research, advocacy, convening, communications, and
            organisational support - always with a cross-thematic lens.
          </p>
          <div className="approach-list">
            {approaches.map((item, index) => (
              <Link
                key={item.id}
                to={`/about/how-we-work/${item.id}`}
                className="approach-row approach-row-link"
              >
                <span className="approach-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="approach-read">Read more →</span>
                </div>
              </Link>
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

      <section className="page-section" id="team">
        <div className="container">
          <p className="section-label">Team</p>
          <h2 className="section-title">People behind the work</h2>
          <p className="section-lede">
            A Pan-African team spanning research, finance, advocacy,
            communications, and strategy - rooted in Accra and connected across
            the continent and diaspora.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <article key={member.name} className="team-card">
                <div className="team-card-copy">
                  <h3>{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p>{member.text}</p>
                </div>
                <div className="team-card-media">
                  <GeometryMotifPanel motif={index + 1} />
                  <img src={member.image} alt={member.name} />
                </div>
              </article>
            ))}
          </div>
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
