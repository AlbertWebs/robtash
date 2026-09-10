import { partnerPlaces, registeredIn, whereWeWorkIntro } from "../data/content";
import { FloatingGeometry } from "./FloatingGeometry";
import { Reveal } from "./Reveal";
import "./Geography.css";

export function Geography() {
  return (
    <section className="section geography section-with-geo" aria-labelledby="geo-heading">
      <FloatingGeometry variant="b" />
      <div className="container">
        <Reveal>
          <p className="section-label">Where we work</p>
          <h2 id="geo-heading" className="section-title">
            Transcontinental by design
          </h2>
          <p className="section-lede">{whereWeWorkIntro}</p>
        </Reveal>

        <Reveal className="geo-registered reveal-delay-1">
          <h3>Registered in</h3>
          <ul>
            {registeredIn.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="geo-partners reveal-delay-2">
          <h3>Partner geographies include</h3>
          <p className="geo-marquee-label">A living network of collaboration</p>
          <div className="geo-track-wrap" aria-hidden="true">
            <div className="geo-track">
              {[...partnerPlaces, ...partnerPlaces].map((place, i) => (
                <span key={`${place}-${i}`}>{place}</span>
              ))}
            </div>
          </div>
          <ul className="visually-hidden">
            {partnerPlaces.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
