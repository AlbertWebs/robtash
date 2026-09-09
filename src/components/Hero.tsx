import { Link } from "react-router-dom";
import heroPhoto from "../assets/hero-convening.jpg";
import { missionLead, vision } from "../data/content";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        <img
          src={heroPhoto}
          alt=""
          className="hero-photo"
          width={1600}
          height={1067}
        />
      </div>

      <div className="container hero-shell">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            {vision}
          </h1>
          <p className="hero-lede">{missionLead}</p>
          <Link to="/work" className="btn btn-hero">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
