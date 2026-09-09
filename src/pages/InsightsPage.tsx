import { Link } from "react-router-dom";
import { PageBand, PageHero } from "../components/PageChrome";
import { insightArticles } from "../data/content";

export function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, statements, and open calls"
        lede="A content-first stream for movements, policymakers, and communities — keeping African-led justice conversations alive between major campaigns."
        actions={
          <Link to="/get-involved#newsletter" className="btn btn-hero">
            Subscribe for updates
          </Link>
        }
      />

      <section className="page-section">
        <div className="container">
          <p className="section-label">Latest</p>
          <h2 className="section-title">Reading list</h2>
          <p className="section-lede">
            Prototype samples drawn from RI’s public communications. A full CMS
            would power filtering by theme, geography, and format.
          </p>

          <div className="insight-feed">
            {insightArticles.map((item) => (
              <article key={item.title} className="insight-article">
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <p className="meta">{item.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Formats ahead</p>
          <h2 className="section-title">What a full insights hub would hold</h2>
          <div className="value-grid">
            <article className="value-item">
              <h3>Briefings & statements</h3>
              <p>
                Rapid responses to policy moments, legislation, and diplomatic
                breakthroughs across the continent.
              </p>
            </article>
            <article className="value-item">
              <h3>Essays & explainers</h3>
              <p>
                Accessible writing that opens reparatory and transitional justice
                to new audiences, especially young people.
              </p>
            </article>
            <article className="value-item">
              <h3>Calls & opportunities</h3>
              <p>
                Applications, fellowships, and invitations to convenings that
                invite people into the work.
              </p>
            </article>
            <article className="value-item">
              <h3>Multimedia</h3>
              <p>
                Podcasts, event recordings, and campaign assets that carry RI’s
                narrative work beyond the page.
              </p>
            </article>
          </div>
        </div>
      </section>

      <PageBand
        title="Have a story or collaboration?"
        text="Share research, campaign updates, or partnership ideas with the RI team."
        ctaLabel="Contact us"
        ctaTo="/get-involved"
      />
    </>
  );
}
