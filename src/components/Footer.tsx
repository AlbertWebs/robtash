import { Link } from "react-router-dom";
import { contact, navLinks, socialLinks, themes } from "../data/content";
import "./Footer.css";

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.2 3H21l-6.6 7.5L22 21h-6.2l-4.3-5.6L6.2 21H3.4l7-8L2 3h6.3l3.9 5.2L18.2 3zm-1.1 16.2h1.7L7 4.7H5.2l11.9 14.5z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
          <path d="M17.5 6.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
          <path d="M12 3.5c2.4 0 2.7 0 3.6.1.9.1 1.5.2 2 .4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.5.4 1.1.4 2 .1.9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1.9-.2 1.5-.4 2-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.5.2-1.1.4-2 .4-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-.9-.1-1.5-.2-2-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.5-.4-1.1-.4-2-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6c.1-.9.2-1.5.4-2 .2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .5-.2 1.1-.4 2-.4.9-.1 1.2-.1 3.6-.1zm0-1.5c-2.4 0-2.7 0-3.7.1-1 .1-1.7.2-2.3.5-.6.2-1.2.5-1.7 1-.5.5-.8 1.1-1 1.7-.2.6-.4 1.3-.5 2.3-.1 1-.1 1.3-.1 3.7s0 2.7.1 3.7c.1 1 .2 1.7.5 2.3.2.6.5 1.2 1 1.7.5.5 1.1.8 1.7 1 .6.2 1.3.4 2.3.5 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.2-.5 1.7-1 .5-.5.8-1.1 1-1.7.2-.6.4-1.3.5-2.3.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-1-.2-1.7-.5-2.3-.2-.6-.5-1.2-1-1.7-.5-.5-1.1-.8-1.7-1-.6-.2-1.3-.4-2.3-.5-1-.1-1.3-.1-3.7-.1z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.3 9.3H3.5V20h2.8V9.3zM4.9 4A1.6 1.6 0 1 0 4.9 7.2 1.6 1.6 0 0 0 4.9 4zM20.5 20h-2.8v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H11V9.3h2.7v1.5h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V20z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img
              src="/brand/logo-white-wide.png"
              alt="Reform Initiatives"
              className="footer-logo"
              width={200}
              height={54}
            />
          </Link>
          <p>
            An ethics-driven Pan-African institution advancing African
            discourses on reparatory justice, transitional justice, human
            rights, democracy, and good governance.
          </p>
          <div className="footer-col footer-follow">
            <h2 className="footer-heading">Follow us</h2>
            <nav className="footer-social" aria-label="Social media">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Our work</h2>
          <ul className="footer-links">
            {themes.map((theme) => (
              <li key={theme.id}>
                <Link to={`/work/${theme.id}`}>{theme.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-links footer-contact">
            <li>
              <span className="footer-contact-label">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="footer-contact-label">Phone</span>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
            </li>
            <li>
              <span className="footer-contact-label">Location</span>
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Reform Initiatives. All rights reserved.
        </p>
        <p className="footer-tagline">Together, we advance African-led repair.</p>
      </div>
    </footer>
  );
}
