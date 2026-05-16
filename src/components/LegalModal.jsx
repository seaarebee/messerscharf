import React from 'react';
import './LegalModal.css';

export default function LegalModal({ isOpen, onClose, activeDoc }) {
  if (!isOpen) return null;

  const content = {
    impressum: {
      title: 'Impressum',
      text: (
        <>
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Meister Michael Barth<br />
            Messerschmiede Barth<br />
            Gewerbepark 12<br />
            4800 Attnang-Puchheim<br />
            Österreich
          </p>
          <h3>Kontakt</h3>
          <p>
            Telefon: +43 (0) 123 456789<br />
            E-Mail: kontakt@messerschmied.at
          </p>
          <h3>Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />ATU12345678</p>
        </>
      )
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      text: (
        <>
          <h3>1. Datenschutz auf einen Blick</h3>
          <p>Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          <h3>2. Datenerfassung auf dieser Website</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          <h3>3. Analyse-Tools und Tools von Drittanbietern</h3>
          <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Wir nutzen keine weitreichenden Tracker.</p>
        </>
      )
    },
    agb: {
      title: 'Allgemeine Geschäftsbedingungen (AGB)',
      text: (
        <>
          <h3>§1 Geltungsbereich</h3>
          <p>Diese Geschäftsbedingungen gelten für alle Bestellungen, die Privatpersonen und Unternehmer über diese Website oder im direkten Kontakt tätigen.</p>
          <h3>§2 Vertragspartner</h3>
          <p>Der Vertrag kommt zustande mit der Messerschmiede Barth, Inh. Michael Barth, Gewerbepark 12, 4800 Attnang-Puchheim, Österreich.</p>
          <h3>§3 Sonderanfertigungen</h3>
          <p>Bei der Anfertigung von individuellen Damastmustern ist der Umtausch ausgeschlossen, da es sich um exklusive Maßanfertigungen handelt.</p>
        </>
      )
    }
  };

  const current = content[activeDoc] || content['impressum'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="display-md">{current.title}</h2>
        <div className="modal-body body-md text-secondary">
          {current.text}
        </div>
      </div>
    </div>
  );
}
