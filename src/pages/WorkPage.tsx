import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/work/work-1.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { approaches, impactStories, sixRs, themes } from "../data/content";
import "./WorkPage.css";

type FilterId = "all" | (typeof themes)[number]["id"];

export function WorkPage() {
  const [filter, setFilter] = useState<FilterId>("all");

  const activeTheme = useMemo(
    () => (filter === "all" ? undefined : themes.find((t) => t.id === filter)),
    [filter],
  );

  const stories = useMemo(
    () =>
      filter === "all"
        ? impactStories
        : impactStories.filter((story) => story.themeId === filter),
    [filter],
  );

  const heading = activeTheme
    ? `Designing for ${activeTheme.title.toLowerCase()}`
    : "Selected work across justice, rights, and democratic dignity";

  return (
    <div className="work-page">
      <PageHero
        eyebrow="Our work"
        title={heading}
        lede={
          activeTheme
            ? activeTheme.summary
            : "A living portfolio of research, advocacy, convening, and partnership - rooted in African leadership and built to move policy, solidarity, and public imagination."
        }
        image={activeTheme ? stories[0]?.image ?? heroImage : heroImage}
        actions={
          activeTheme ? (
            <Link to={`/work/${activeTheme.id}`} className="btn btn-hero">
              Explore this theme
            </Link>
          ) : (
            <Link to="/get-involved" className="btn btn-hero">
              Partner with RI
            </Link>
          )
        }
      />

      <div className="work-filters-wrap">
        <div className="container">
          <div
            className="work-filters"
            role="tablist"
            aria-label="Filter work by theme"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === "all"}
              className={`work-filter${filter === "all" ? " is-active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                role="tab"
                aria-selected={filter === theme.id}
                className={`work-filter${filter === theme.id ? " is-active" : ""}`}
                onClick={() => setFilter(theme.id)}
              >
                {theme.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="work-portfolio" aria-live="polite">
        <div className="container">
          <p className="work-count">
            Showing {stories.length}{" "}
            {stories.length === 1 ? "project" : "projects"}
            {activeTheme ? ` in ${activeTheme.title}` : ""}
          </p>

          <div className="work-grid">
            {stories.map((story, index) => {
              const theme = themes.find((t) => t.id === story.themeId);
              return (
                <Link
                  key={story.id}
                  to={`/work/${story.themeId}`}
                  className={`work-card work-card-${(index % 3) + 1}`}
                >
                  <div className="work-card-media">
                    <img
                      src={story.image}
                      alt=""
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="work-card-body">
                    <p className="work-card-partner">{story.partner}</p>
                    <h2 className="work-card-title">{story.title}</h2>
                    {theme ? (
                      <p className="work-card-theme">{theme.title}</p>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>

          {stories.length === 0 ? (
            <p className="work-empty">
              No projects in this theme yet.{" "}
              <button type="button" onClick={() => setFilter("all")}>
                View all work
              </button>
            </p>
          ) : null}
        </div>
      </section>

      <section className="page-section green">
        <div className="container">
          <p className="section-label">Distinctive framework</p>
          <h2 className="section-title">The 6Rs of reparatory justice</h2>
          <p className="section-lede">
            A practical vocabulary for African-led repair - from reclaiming
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

      <section className="page-section alt" id="how-we-deliver">
        <div className="container">
          <p className="section-label">How we deliver</p>
          <h2 className="section-title">Approaches across the portfolio</h2>
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

      <PageBand
        title="Bring a challenge to the table"
        text="Whether you are building a campaign, a research agenda, or a partnership, we can help shape the next step."
        ctaLabel="Get involved"
        ctaTo="/get-involved"
      />
    </div>
  );
}
