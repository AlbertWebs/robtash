import { Link } from "react-router-dom";
import heroImage from "../assets/hero/slidem1c.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { resources } from "../data/content";

export function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Research, insights, and multimedia"
        lede="A knowledge hub for movements, policymakers, and communities - research reports, policy briefs, articles, convening notes, and multimedia resources produced through RI's work."
        image={heroImage}
        actions={
          <Link to="/get-involved#newsletter" className="btn btn-hero">
            Subscribe for updates
          </Link>
        }
      />

      <section className="page-section">
        <div className="container">
          <p className="section-label">Browse by type</p>
          <h2 className="section-title">Three ways into the work</h2>
          <p className="section-lede">
            Content is organised by resource type and tagged across themes so the
            same piece can surface in Insights & Resources and on relevant
            thematic pages.
          </p>
          <div className="theme-stack">
            {resources.map((resource, index) => (
              <Link
                key={resource.id}
                to={`/resources/${resource.id}`}
                className="theme-block theme-block-link"
                id={resource.id}
              >
                <span className="theme-block-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{resource.title}</h3>
                  <p>{resource.summary}</p>
                  <span className="approach-read">Explore →</span>
                </div>
              </Link>
            ))}
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
