import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero/slidem1d.jpg";
import { PageBand, PageHero } from "../components/PageChrome";
import { contact, involvePathways } from "../data/content";

export function GetInvolvedPage() {
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [contactDone, setContactDone] = useState(false);

  function onNewsletter(e: FormEvent) {
    e.preventDefault();
    setNewsletterDone(true);
  }

  function onContact(e: FormEvent) {
    e.preventDefault();
    setContactDone(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Partner, convene, or stay close to the work"
        lede="Whether you are a movement partner, policymaker, funder, or community organiser - there is a place in this network."
        image={heroImage}
        actions={
          <a href="#newsletter" className="btn btn-hero">
            Join the newsletter
          </a>
        }
      />

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Ways in</p>
          <h2 className="section-title">Choose how you engage</h2>
          <p className="section-lede">
            Clear pathways keep the door open without turning the page into a
            catch-all form dump.
          </p>
          <div className="pathway-grid">
            {involvePathways.map((item) => (
              <article key={item.title} className="pathway">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href.startsWith("mailto:") || item.href.startsWith("#") ? (
                  <a href={item.href}>{item.cta} →</a>
                ) : (
                  <Link to={item.href}>{item.cta} →</Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="newsletter">
        <div className="container contact-panel">
          <div>
            <p className="section-label">Newsletter</p>
            <h2 className="section-title">Stay in the conversation</h2>
            <p className="section-lede">
              Updates on convenings, research, and opportunities to advance
              African-led justice and democratic reform.
            </p>
          </div>

          {newsletterDone ? (
            <p className="form-thanks" role="status">
              Thank you - this prototype records your interest locally. On the
              live site, you would join the RI mailing list.
            </p>
          ) : (
            <form className="contact-form" onSubmit={onNewsletter}>
              <label>
                Name
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <button type="submit" className="btn btn-hero">
                Sign up
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Talk with the team</h2>
          <div className="contact-panel">
            <div className="contact-card">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
              <p>{contact.location}</p>
              <p>
                Prefer to browse first?{" "}
                <Link to="/work">Explore our work</Link> or{" "}
                <Link to="/resources">browse the latest resources</Link>.
              </p>
            </div>

            {contactDone ? (
              <p className="form-thanks" role="status">
                Message received for this prototype. In production, this would
                reach the RI inbox.
              </p>
            ) : (
              <form className="contact-form" onSubmit={onContact}>
                <label>
                  Name
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label>
                  I am interested in
                  <select name="interest" defaultValue="partnership">
                    <option value="partnership">Partnership</option>
                    <option value="convening">Convening / event</option>
                    <option value="media">Media enquiry</option>
                    <option value="other">Something else</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" required />
                </label>
                <button type="submit" className="btn btn-hero">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <PageBand
        title="Learn who stands behind the work"
        text="Meet the values, mission, and footprint that shape Reform Initiatives."
        ctaLabel="About RI"
        ctaTo="/about"
      />
    </>
  );
}
