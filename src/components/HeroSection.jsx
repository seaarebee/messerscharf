import React, { useState, useEffect } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blendOpacity = Math.min(scrollY / 500, 1);
  const textOpacity = Math.max(1 - (scrollY / 300), 0);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-image">
        {/* Background image loaded via CSS with overlay */}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--color-surface)',
          opacity: blendOpacity,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div className="hero-content" style={{ opacity: textOpacity, position: 'relative', zIndex: 1 }}>
        <span className="label-md kicker">Handgeschmiedete Messer aus Österreich</span>
        <h1 className="display-lg hero-title">Im Feuer Geboren</h1>
        <p className="body-lg hero-subtitle">
          Kompromisslose Handwerkskunst für höchste Ansprüche. Jede Klinge ist ein archaisches Unikat, geschmiedet im Feuer, mit Druck und roher Leidenschaft.
        </p>
        <div className="hero-actions">
          <a href="#gallery" className="btn-primary">Zur Galerie &rarr;</a>
          <a href="#courses" className="btn-tertiary">Zu den Workshops</a>
        </div>
      </div>
    </section>
  );
}
