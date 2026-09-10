import { Link } from "react-router-dom";
import heroImage from "../assets/work/work-5.jpg";
import { GeometryMotifPanel } from "../components/FloatingGeometry";
import { PageBand, PageHero } from "../components/PageChrome";
import {
  aboutLong,
  aboutShort,
  approaches,
  capacitySupport,
  howWeWorkIntro,
  missionActions,
  missionLead,
  partnerPlaces,
  registeredIn,
  strategicGoal,
  team,
  themes,
  valueDetails,
  vision,
  whatWeDo,
  whereWeWorkIntro,
} from "../data/content";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
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
          <p className="section-label">Who we are</p>
          <h2 className="section-title">Independent, multi-thematic, transcontinental</h2>
          <div className="approach-detail-sections">
            {aboutLong.map((paragraph) => (
              <article key={paragraph.slice(0, 32)} className="approach-detail-block">
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Vision, mission & strategic goal</p>
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
          <div className="approach-detail-sections" style={{ marginTop: "2rem" }}>
            <article className="approach-detail-block">
              <h2>We do this by</h2>
              <ul className="about-bullet-list">
                {missionActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="approach-detail-block">
              <h2>Strategic goal</h2>
              <p>{strategicGoal}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
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

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">What we do</p>
          <h2 className="section-title">
            Research, policy, advocacy, convening, communications and partnerships
          </h2>
          <ul className="about-bullet-list about-bullet-list-wide">
            {whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section" id="how-we-work">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title">Methods that connect ideas to influence</h2>
          <p className="section-lede">{howWeWorkIntro}</p>
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
          <div className="approach-detail-block" style={{ marginTop: "2.5rem" }}>
            <h2>Capacity support for CSOs and NGOs</h2>
            <ul className="about-bullet-list">
              {capacitySupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Where we work</p>
          <h2 className="section-title">Transcontinental by design</h2>
          <p className="section-lede">{whereWeWorkIntro}</p>
          <p className="section-lede">
            RI is registered in {registeredIn.join(", ")}.
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
