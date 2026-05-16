import React, { useState, useEffect } from 'react';
import './Navigation.css';

// TODO: Replace any placeholder links if real routes are added in the future
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#" onClick={(e) => scrollToSection(e, 'hero')}>MESSERSCHARF</a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="nav-link">Galerie</a>
          <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="nav-link">Workshops</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">Unsere Geschichte</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="nav-link">Die Schmiedekunst</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="display-md">Galerie</a>
        <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="display-md">Die Schmiedekunst</a>
        <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="display-md">Workshops</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="display-md">Unsere Geschichte</a>
      </div>
    </nav>
  );
}
