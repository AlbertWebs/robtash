import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slideA from "../assets/hero/slidem1a.jpg";
import slideB from "../assets/hero/slidem1b.jpg";
import slideC from "../assets/hero/slidem1c.jpg";
import slideD from "../assets/hero/slidem1d.jpg";
import { missionLead, vision } from "../data/content";
import "./Hero.css";

const heroSlides = [slideA, slideB, slideC, slideD] as const;

const SLIDE_MS = 5000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setTimeout(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, SLIDE_MS);

    return () => window.clearTimeout(id);
  }, [active, reduceMotion]);

  function goToSlide(index: number) {
    setActive(index);
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        {heroSlides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`hero-photo${index === active ? " is-active" : ""}`}
            width={1920}
            height={800}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
          />
        ))}
        <div className="hero-veil" />
      </div>

      <div className="container hero-shell">
        <div className="hero-content">
          <p className="hero-kicker">Reform Initiatives</p>
          <h1 id="hero-heading" className="hero-title">
            {vision}
          </h1>
          <p className="hero-lede">{missionLead}</p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-hero">
              Discover More
            </Link>
            <Link to="/get-involved" className="btn btn-hero-ghost">
              Get involved
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <div
          className="hero-progress"
          role="tablist"
          aria-label="Hero slides"
        >
          {heroSlides.map((src, index) => {
            const state =
              index < active ? "is-done" : index === active ? "is-active" : "";
            return (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show slide ${index + 1}`}
                className={`hero-progress-track ${state}`}
                onClick={() => goToSlide(index)}
              >
                <span
                  key={`${index}-${active}`}
                  className="hero-progress-fill"
                  style={
                    index === active && !reduceMotion
                      ? { animationDuration: `${SLIDE_MS}ms` }
                      : undefined
                  }
                />
              </button>
            );
          })}
        </div>
        <p className="hero-slide-count" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(heroSlides.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
