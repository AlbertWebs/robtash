import { useState, type FormEvent } from "react";
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
        <Reveal>
          <p className="section-label">Get involved</p>
          <h2 id="engage-heading" className="section-title">
            Stay in the conversation
          </h2>
          <p className="section-lede">
            Join our newsletter for convenings, research, and opportunities to
            advance African-led justice and democratic reform.
          </p>
          <div className="engage-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            <p>{contact.location}</p>
          </div>
        </Reveal>

        <Reveal className="reveal-delay-1 engage-form-wrap">
          {submitted ? (
            <p className="engage-thanks" role="status">
              Thank you — this prototype records your interest locally. In the
              live site, you would be added to the RI mailing list.
            </p>
          ) : (
            <form className="engage-form" onSubmit={onSubmit}>
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
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
