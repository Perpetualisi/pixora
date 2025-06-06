import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">🔮 Pixora</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => handleLinkClick("home")}>Home</a></li>
          <li><a href="#features" onClick={() => handleLinkClick("features")}>Features</a></li>
          <li><a href="#demo" onClick={() => handleLinkClick("demo")}>Demo</a></li>
          <li><a href="#pricing" onClick={() => handleLinkClick("pricing")}>Pricing</a></li>
          <li><a href="#contact" onClick={() => handleLinkClick("contact")}>Contact</a></li>
          <li>
            <button
              className="cta"
              onClick={() => {
                handleLinkClick("try-now");
              }}
            >
              Try Now
            </button>
          </li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
