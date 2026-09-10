import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/content";
import { Reveal } from "./Reveal";
import "./Engage.css";

export function Engage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section engage" aria-labelledby="engage-heading">
      <div className="container engage-grid">
        <Reveal className="engage-copy">
          <p className="section-label">Get involved</p>
          <h2 id="engage-heading" className="section-title">
            Stay in the conversation
          </h2>
          <p className="section-lede">
            Join our newsletter for convenings, research, and opportunities to
            advance African-led justice and democratic reform.
          </p>

          <ul className="engage-contact">
            <li>
              <span className="engage-contact-label">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="engage-contact-label">Phone</span>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
            </li>
            <li>
              <span className="engage-contact-label">Visit</span>
              <span>{contact.location}</span>
            </li>
          </ul>

          <Link to="/get-involved" className="engage-more">
            More ways to partner →
          </Link>
        </Reveal>

        <Reveal className="reveal-delay-1 engage-form-wrap">
          {submitted ? (
            <div className="engage-thanks" role="status">
              <p className="engage-form-kicker">You're on the list</p>
              <h3>Thank you for signing up</h3>
              <p>
                This prototype records your interest locally. On the live site,
                you would join the RI mailing list.
              </p>
            </div>
          ) : (
            <form className="engage-form" onSubmit={onSubmit}>
              <div className="engage-form-head">
                <p className="engage-form-kicker">Newsletter</p>
                <h3>Sign up for updates</h3>
                <p>
                  Occasional notes on policy moments, open calls, and upcoming
                  dialogues. No spam.
                </p>
              </div>

              <label>
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.org"
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary engage-submit">
                Sign up
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
