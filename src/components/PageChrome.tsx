import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./PageChrome.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt?: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
  actions,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-media" aria-hidden={imageAlt ? undefined : true}>
        <img src={image} alt={imageAlt} className="page-hero-photo" />
        <div className="page-hero-veil" />
      </div>
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <p className="section-label">{eyebrow}</p>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-lede">{lede}</p>
          {actions ? <div className="page-hero-actions">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

type PageBandProps = {
  title: string;
  text: string;
  ctaLabel: string;
  ctaTo: string;
};

export function PageBand({ title, text, ctaLabel, ctaTo }: PageBandProps) {
  return (
    <section className="page-band">
      <div className="container page-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to={ctaTo} className="btn btn-hero">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
