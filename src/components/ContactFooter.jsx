import React, { useState } from 'react';
import './ContactFooter.css';
import LegalModal from './LegalModal';

export default function ContactFooter() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState('impressum');

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (e, docType) => {
    e.preventDefault();
    setActiveDoc(docType);
    setModalOpen(true);
  };

  return (
    <footer className="contact-footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="title-lg">Austrian Master Bladesmith</h2>
          <p className="body-md footer-text">
            Every blade is a unique signature of heat, pressure, and time.
          </p>
          <a href="mailto:kontakt@messerschmied.at" className="btn-tertiary">Kontaktieren Sie uns</a>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <span className="label-sm footer-heading">Navigation</span>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="footer-link">Galerie</a>
            <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="footer-link">Workshops</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="footer-link">Unsere Geschichte</a>
          </div>

          <div className="footer-column">
            <span className="label-sm footer-heading">Legal</span>
            <a href="#" onClick={(e) => openModal(e, 'impressum')} className="footer-link">Impressum</a>
            <a href="#" onClick={(e) => openModal(e, 'datenschutz')} className="footer-link">Datenschutz</a>
            <a href="#" onClick={(e) => openModal(e, 'agb')} className="footer-link">AGB</a>
          </div>

          <div className="footer-column">
            <span className="label-sm footer-heading">Standort</span>
            <p className="body-md footer-text">
              Gewerbepark 12<br />
              4800 Attnang-Puchheim<br />
              Oberösterreich, Österreich
            </p>
            {/* Placeholder Instagram icon/link */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">
               Instagram &nearr;
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <span className="body-sm text-secondary">© 2024 Austrian Master Bladesmith. All Rights Reserved.</span>
      </div>
      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        activeDoc={activeDoc} 
      />
    </footer>
  );
}
