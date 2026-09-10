import { Link, Navigate, useParams } from "react-router-dom";
import slideA from "../assets/hero/slidem1a.jpg";
import slideB from "../assets/hero/slidem1b.jpg";
import slideC from "../assets/hero/slidem1c.jpg";
import slideD from "../assets/hero/slidem1d.jpg";
import work5 from "../assets/work/work-5.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { approaches, getApproachById } from "../data/content";

const approachHeroes = [slideA, slideB, slideC, slideD, work5] as const;

export function ApproachPage() {
  const { approachId } = useParams();
  const approach = getApproachById(approachId);

  if (!approach) {
    return <Navigate to="/about#how-we-work" replace />;
  }

  const index = approaches.findIndex((item) => item.id === approach.id);
  const others = approaches.filter((item) => item.id !== approach.id);
  const heroImage = approachHeroes[index % approachHeroes.length];

  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={approach.title}
        lede={approach.text}
        image={heroImage}
        actions={
          <>
            <Link to="/about#how-we-work" className="btn btn-outline">
              All approaches
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
            {String(approaches.length).padStart(2, "0")}
          </p>
          <div className="approach-detail-sections">
            {approach.sections.map((section) => (
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
          <p className="section-label">More approaches</p>
          <h2 className="section-title">Continue exploring how we work</h2>
          <p className="section-lede">
            Each method reinforces the others. Move to another approach, or
            return to the full list on About.
          </p>
          <div className="approach-list">
            {others.map((item) => {
              const itemIndex = approaches.findIndex((a) => a.id === item.id);
              return (
                <Link
                  key={item.id}
                  to={`/about/how-we-work/${item.id}`}
                  className="approach-row approach-row-link"
                >
                  <span className="approach-num" aria-hidden="true">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="approach-read">Read more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="approach-back">
            <Link to="/about#how-we-work">← Back to How we work</Link>
          </p>
        </div>
      </section>

      <PageBand
        title="See these methods in practice"
        text="Explore thematic programmes and selected contributions that show how approaches turn into influence."
        ctaLabel="Our work"
        ctaTo="/work"
      />
    </>
  );
}
