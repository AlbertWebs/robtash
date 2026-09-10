import { Link, Navigate, useParams } from "react-router-dom";
import work1 from "../assets/work/work-1.jpg";
import work2 from "../assets/work/work-2.jpg";
import work3 from "../assets/work/work-3.jpg";
import work4 from "../assets/work/work-4.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import {
  getThemeById,
  impactStories,
  resources,
  themes,
} from "../data/content";

const themeHeroes = {
  "reparatory-justice": work1,
  "human-rights": work4,
  "transitional-justice": work3,
  "democracy-governance": work2,
} as const;

export function ThemePage() {
  const { themeId } = useParams();
  const theme = getThemeById(themeId);

  if (!theme) {
    return <Navigate to="/work" replace />;
  }

  const index = themes.findIndex((item) => item.id === theme.id);
  const others = themes.filter((item) => item.id !== theme.id);
  const heroImage = themeHeroes[theme.id];
  const relatedWork = impactStories.filter((item) => item.themeId === theme.id);
  const relatedInsights = resources.flatMap((resource) =>
    resource.items
      .filter((item) => item.themeId === theme.id)
      .map((item) => ({ ...item, resourceId: resource.id })),
  );

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={theme.title}
        lede={theme.summary}
        image={heroImage}
        actions={
          <>
            <Link to="/work" className="btn btn-outline">
              All themes
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
            {String(themes.length).padStart(2, "0")}
          </p>
          <div className="approach-detail-sections">
            {theme.sections.map((section) => (
              <article key={section.title} className="approach-detail-block">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedWork.length > 0 ? (
        <section className="page-section alt">
          <div className="container">
            <p className="section-label">Selected contributions</p>
            <h2 className="section-title">Impact within this theme</h2>
            <div className="approach-list">
              {relatedWork.map((item, itemIndex) => (
                <article key={item.id} className="approach-row">
                  <span className="approach-num" aria-hidden="true">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="meta">{item.meta}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedInsights.length > 0 ? (
        <section className="page-section">
          <div className="container">
            <p className="section-label">Latest insights</p>
            <h2 className="section-title">From Insights & Resources</h2>
            <div className="insight-feed">
              {relatedInsights.map((item) => (
                <article key={item.title} className="insight-article">
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <p className="meta">{item.meta}</p>
                  <Link
                    to={`/resources/${item.resourceId}`}
                    className="approach-read"
                  >
                    Browse collection →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">More themes</p>
          <h2 className="section-title">Continue across the field of reform</h2>
          <p className="section-lede">
            These themes move together. Explore another entry point, or return
            to the full Our work overview.
          </p>
          <div className="approach-list">
            {others.map((item) => {
              const itemIndex = themes.findIndex((t) => t.id === item.id);
              return (
                <Link
                  key={item.id}
                  to={`/work/${item.id}`}
                  className="approach-row approach-row-link"
                >
                  <span className="approach-num" aria-hidden="true">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="approach-read">Read how we work →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="approach-back">
            <Link to="/work">← Back to Our work</Link>
          </p>
        </div>
      </section>

      <PageBand
        title="See how methods connect to themes"
        text="Research, advocacy, convening, communications, and partnerships cut across every thematic area."
        ctaLabel="About RI"
        ctaTo="/about#how-we-work"
      />
    </>
  );
}
