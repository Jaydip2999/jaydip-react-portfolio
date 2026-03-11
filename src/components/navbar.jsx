import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Portfolio", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#about" className="brand" aria-label="Go to about section">
          <span className="brand-mark">JD</span>
          <span className="brand-text">Jaydip Dumraliya</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`nav-menu ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavLinkClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
