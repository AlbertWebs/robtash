import { Link } from "react-router-dom";
import { contact, navLinks } from "../data/content";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/brand/logo-white-wide.png"
            alt="Reform Initiatives"
            className="footer-logo"
            width={200}
            height={54}
          />
          <p>
            An independent African CSO advancing reparatory justice,
            transitional justice, human rights, and democratic governance.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
            </li>
            <li>{contact.location}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Reform Initiatives. Homepage prototype
          for client review.
        </p>
        <p className="footer-tagline">Together, we advance African-led repair.</p>
      </div>
    </footer>
  );
}
