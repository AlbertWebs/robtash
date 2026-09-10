import { Link, Navigate, useParams } from "react-router-dom";
import slideA from "../assets/hero/slidem1a.jpg";
import slideB from "../assets/hero/slidem1b.jpg";
import slideC from "../assets/hero/slidem1c.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { getResourceById, resources } from "../data/content";

const resourceHeroes = [slideB, slideC, slideA] as const;

export function ResourcePage() {
  const { resourceId } = useParams();
  const resource = getResourceById(resourceId);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const index = resources.findIndex((item) => item.id === resource.id);
  const others = resources.filter((item) => item.id !== resource.id);
  const heroImage = resourceHeroes[index % resourceHeroes.length];

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={resource.title}
        lede={resource.summary}
        image={heroImage}
        actions={
          <>
            <Link to="/resources" className="btn btn-outline">
              All resources
            </Link>
            <Link to="/get-involved" className="btn btn-hero">
              Get involved
            </Link>
          </>
        }
      />

      <section className="page-section">
        <div className="container approach-detail">
          <p className="approach-detail-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")} of{" "}
            {String(resources.length).padStart(2, "0")}
          </p>
          <div className="approach-detail-sections">
            {resource.sections.map((section) => (
              <article key={section.title} className="approach-detail-block">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Selected pieces</p>
          <h2 className="section-title">From this collection</h2>
          <div className="insight-feed">
            {resource.items.map((item) => (
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

      <section className="page-section">
        <div className="container">
          <p className="section-label">More resources</p>
          <h2 className="section-title">Continue exploring</h2>
          <p className="section-lede">
            Move to another resource type, or return to the full Resources
            overview.
          </p>
          <div className="approach-list">
            {others.map((item) => {
              const itemIndex = resources.findIndex((r) => r.id === item.id);
              return (
                <Link
                  key={item.id}
                  to={`/resources/${item.id}`}
                  className="approach-row approach-row-link"
                >
                  <span className="approach-num" aria-hidden="true">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="approach-read">Explore →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="approach-back">
            <Link to="/resources">← Back to Resources</Link>
          </p>
        </div>
      </section>

      <PageBand
        title="Stay close to new releases"
        text="Get updates when RI publishes papers, insights, and podcast episodes."
        ctaLabel="Join the newsletter"
        ctaTo="/get-involved#newsletter"
      />
    </>
  );
}
