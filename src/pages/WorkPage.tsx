import { Link } from "react-router-dom";
import { PageBand, PageHero } from "../components/PageChrome";
import { approaches, impactStories, sixRs, themes } from "../data/content";

export function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Cross-thematic justice, rooted in African leadership"
        lede="We work across research, advocacy, convening, communications, and partnerships — connecting reparatory justice, human rights, transitional justice, and democratic governance."
        actions={
          <>
            <Link to="/insights" className="btn btn-hero">
              Read insights
            </Link>
            <Link to="/get-involved" className="btn btn-outline">
              Partner with RI
            </Link>
          </>
        }
      />

      <section className="page-section">
        <div className="container">
          <p className="section-label">Thematic areas</p>
          <h2 className="section-title">One field of reform, four entry points</h2>
          <p className="section-lede">
            Issues do not travel alone. Each theme is a doorway into a shared
            agenda for repair, accountability, and democratic dignity.
          </p>
          <div className="theme-stack">
            {themes.map((theme, index) => (
              <article key={theme.id} className="theme-block" id={theme.id}>
                <span className="theme-block-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{theme.title}</h3>
                  <p>{theme.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section green">
        <div className="container">
          <p className="section-label">Distinctive framework</p>
          <h2 className="section-title">The 6Rs of reparatory justice</h2>
          <p className="section-lede">
            A practical vocabulary for African-led repair — from reclaiming
            histories to reimagining just futures.
          </p>
          <div className="rs-grid">
            {sixRs.map((item) => (
              <article key={item.title} className="rs-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">How we deliver</p>
          <h2 className="section-title">Approaches across the portfolio</h2>
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

      <section className="page-section">
        <div className="container">
          <p className="section-label">Selected contributions</p>
          <h2 className="section-title">Proof of influence</h2>
          <p className="section-lede">
            A snapshot of work that moved policy, solidarity, and public
            conversation since 2023.
          </p>
          <div className="approach-list">
            {impactStories.map((story, index) => (
              <article key={story.title} className="approach-row">
                <span className="approach-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="meta"
                    style={{
                      marginBottom: "0.35rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ri-green)",
                    }}
                  >
                    {story.meta}
                  </p>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageBand
        title="Bring a challenge to the table"
        text="Whether you are building a campaign, a research agenda, or a partnership, we can help shape the next step."
        ctaLabel="Get involved"
        ctaTo="/get-involved"
      />
    </>
  );
}
