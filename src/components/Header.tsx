import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "./Header.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img
            src="/brand/logo-color.png"
            alt="Reform Initiatives"
            className="brand-logo"
            width={180}
            height={48}
          />
        </Link>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "is-active" : undefined
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <Link
              to="/get-involved"
              className="btn btn-nav-cta"
              onClick={() => setOpen(false)}
            >
              Newsletter Sign-Up
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
