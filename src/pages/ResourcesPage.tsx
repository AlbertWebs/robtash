import { Link } from "react-router-dom";
import heroImage from "../assets/hero/slidem1c.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { resources } from "../data/content";

export function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Policy papers, insights, and podcasts"
        lede="A content hub for movements, policymakers, and communities - keeping African-led justice conversations alive between major campaigns."
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
            Choose a resource stream to go deeper - each page collects related
            papers, essays, calls, or audio.
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
