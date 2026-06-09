import React from 'react';
import './CourseSection.css';

const courses = [
  {
    id: 1,
    category: 'Monostahl Messer-Workshop',
    title: 'Schmiede dein eigenes Messer',
    subtitle: '1-Tages-Workshop für Einsteiger',
    intro: 'Ein Tag. Deine Hände. Ein Messer fürs Leben. Fertige in kleiner Gruppe dein ganz persönliches Unikat – von der rohen Klinge bis zum fertigen Messer, das du am Ende des Tages mit nach Hause nimmst. Sicherheitsausrüstung wird bereitgestellt.',
    highlights: [
      'Einführung in Materialien & Werkzeugkunde',
      'Klingenform nach eigenem Geschmack wählen',
      'Rohling bearbeiten, schleifen & formen',
      'Griffmaterial auswählen & befestigen',
      'Härten und anlassen',
      'Feinschliff & Schärfen deiner Klinge',
      'Dein fertiges Messer zum Mitnehmen'
    ],
    details: {
      duration: '1 Tag (ca. 8 Stunden)',
      group: 'Max. 2 Personen',
      level: 'Einsteiger – keine Vorkenntnisse nötig',
      material: 'Alles inklusive',
      outcome: 'Das Messer gehört dir!'
    },
    price: '€ 360.-',
    priceDetail: null,
    quote: 'Erschaffe mit deinen Händen ein Unikat – ein Messer, das dich ein Leben lang begleitet.',
    whatsappText: 'Hallo Michael, ich lade dich herzlich ein... Ich interessiere mich für den Monostahl Messer-Workshop!'
  },
  {
    id: 2,
    category: 'Lagenstahl-Workshop',
    title: 'Lagenstahl — Fertige dein eigenes Messer',
    subtitle: '1,5-Tages-Workshop',
    intro: 'In diesem 1,5-tägigen Workshop lernst du eine der ältesten Schmiedetechniken kennen: das Feuerschweißen von Lagenstahl. Du stapelst verschiedene Stähle, schweißt sie selbst im Feuer zusammen und schmiedest daraus — Schicht für Schicht — dein eigenes Messer. Keine Vorkenntnisse nötig.',
    highlights: [
      'Vorbereiten und Stapeln der Stähle',
      'Feuerschweißen im echten Schmiedefeuer',
      'Falten und Strecken – Schicht für Schicht',
      'Klingenform schmieden & schleifen',
      'Griffmaterial auswählen & befestigen',
      'Dein fertiges Lagenstahl-Messer zum Mitnehmen'
    ],
    details: {
      duration: '1,5 Tage',
      group: 'Max. 2 Personen',
      level: 'Einsteiger – keine Vorkenntnisse nötig',
      material: 'Alles inklusive',
      outcome: 'Ein Unikat aus echtem Lagenstahl – von dir!'
    },
    price: '€ 640.-',
    priceDetail: 'Da der Kurs 2 Tage dauert, kannst du ihn auch tagesweise zahlen: 2x € 340.-',
    quote: 'Handgefertigt, aus echtem Lagenstahl, von dir — ein Messer, das dich ein Leben lang begleitet.',
    whatsappText: 'Hallo Michael, ich interessiere mich für den Lagenstahl-Workshop!'
  },
  {
    id: 3,
    category: 'Damastmesser-Workshop',
    title: 'Dein Damaststahl-Kurs',
    subtitle: 'Fertige in ca. 18 Stunden dein Damastmesser',
    intro: 'Tauche ein in die alte, archaische Schmiedekunst der Antike — und erschaffe ein Messer, das Generationen überdauert. Am Ende deines Workshops hältst du ein Unikat in den Händen, das seinesgleichen sucht.\n\nJe nach deinem handwerklichen Geschick erstellst du dein Unikat weitgehend selbstständig — selbstverständlich wirst du in den Gebrauch aller Maschinen eingewiesen und bekommst Unterstützung, wo sie gebraucht wird.',
    highlights: [
      'Essenzielles Wissen über Stähle und deren Zusammensetzung',
      'Umgang mit Winkelschleifer, Esse & Schmiedepresse',
      'Schmiedehammer-Technik',
      'Schleiftechnik für die Messererstellung',
      'Härten & Anlassen',
      'Grifferstellung',
      'Dein fertiges Damastmesser zum Mitnehmen'
    ],
    details: {
      duration: 'Ca. 18 Stunden',
      group: 'Max. 2 Personen',
      level: 'Einsteiger – keine Vorkenntnisse nötig',
      material: 'Alles inklusive',
      outcome: 'Ein Damaststahl-Unikat — von dir, für Generationen'
    },
    price: '€ 840.-',
    priceDetail: 'Da der Kurs 3 Tage dauert, kannst du ihn auch tagesweise zahlen: 3x € 280.-',
    quote: 'Ein Messer, das Generationen überdauert — handgeschmiedet von dir, nach der uralten Kunst des Damaststahls.',
    whatsappText: 'Hallo Michael, ich interessiere mich für den Damastmesser-Workshop!'
  },
  {
    id: 4,
    category: 'Messerschleifen-Kurs',
    title: 'Was Generationen hüteten wie einen Schatz',
    subtitle: 'Das Messerschleifen — 3 Stunden für Einsteiger',
    intro: 'Es gibt ein Wissen, das von Hand zu Hand weitergegeben wurde — still, in Werkstätten, von Meister zu Schüler. Das Geheimnis der wirklich scharfen Klinge. Nicht jeder kannte es. Nicht jeder sollte es kennen. In diesem Kurs öffne ich dir diese Tür. In drei Stunden führe ich dich in die Kunst des Messerschleifens ein — den richtigen Winkel, das Gespür für den Stahl, den Moment, in dem die Schneide erwacht. Was sich wie Magie anfühlt, ist ein Handwerk. Und Handwerk kann man lernen. Eine wirklich scharfe Klinge spricht für sich — lautlos und ohne Zweifel.',
    highlights: [
      'Der richtige Winkel — die Grundlage von allem',
      'Das Gespür für den Stahl entwickeln',
      'Schleiftechniken, die wirklich funktionieren',
      'Den Moment erkennen, wenn die Schneide erwacht',
      'Material & Anleitung inklusive',
      'Bringe gerne ein eigenes Messer zum Schärfen mit'
    ],
    details: {
      duration: '3 Stunden',
      group: 'Max. 2 Personen',
      level: 'Einsteiger – keine Vorkenntnisse nötig',
      material: 'Inklusive',
      outcome: 'Du gehst mit einem Wissen nach Hause, das dich ein Leben lang begleitet.'
    },
    price: '€ 85.-',
    priceDetail: null,
    quote: 'Was Generationen hüteten wie einen Schatz — in drei Stunden gehört es auch dir.',
    whatsappText: 'Hallo Michael, ich interessiere mich für den Messerschleif-Kurs!'
  }
];

export default function CourseSection() {
  return (
    <section id="courses" className="course-section">
      <div className="course-container">
        <div className="course-header">
          <span className="label-md kicker">Exklusive Workshops</span>
          <h2 className="display-md">Schmiede dein eigenes Messer</h2>
          <p className="body-lg">
            Kleine Gruppen (max. 2 Personen) — Echtes Handwerk — Geführte Werkstatt.
          </p>
        </div>

        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-card-header">
                <span className="label-sm course-meta">{course.category}</span>
                <h3 className="title-lg course-title">{course.title}</h3>
                {course.subtitle && <p className="course-subtitle label-sm">{course.subtitle}</p>}
              </div>

              <div className="course-card-body">
                <p className="body-md course-desc">{course.intro}</p>

                <div className="course-details-block">
                  <h4 className="label-sm details-header">Was dich erwartet:</h4>
                  <ul className="course-highlights">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="body-md highlight-item">
                        <span className="checkmark-icon">✔</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-details-block">
                  <h4 className="label-sm details-header">Kursdetails:</h4>
                  <div className="course-details-table">
                    <div className="details-row">
                      <span className="details-label">📅 Dauer</span>
                      <span className="details-value">{course.details.duration}</span>
                    </div>
                    <div className="details-row">
                      <span className="details-label">👥 Gruppe</span>
                      <span className="details-value">{course.details.group}</span>
                    </div>
                    <div className="details-row">
                      <span className="details-label">🎓 Level</span>
                      <span className="details-value">{course.details.level}</span>
                    </div>
                    <div className="details-row">
                      <span className="details-label">🛠 Material</span>
                      <span className="details-value">{course.details.material}</span>
                    </div>
                    <div className="details-row">
                      <span className="details-label">🏠 Am Ende</span>
                      <span className="details-value">{course.details.outcome}</span>
                    </div>
                  </div>
                </div>

                {course.quote && (
                  <blockquote className="course-quote">
                    "{course.quote}"
                  </blockquote>
                )}
              </div>

              <div className="course-card-footer">
                <div className="price-info">
                  <div className="price-row">
                    <span className="label-sm">Preis</span>
                    <span className="course-price">{course.price}</span>
                  </div>
                  {course.priceDetail && (
                    <p className="price-detail body-sm">{course.priceDetail}</p>
                  )}
                </div>
                
                <div className="booking-cta">
                  <a
                    href={`https://wa.me/436602361777?text=${encodeURIComponent(course.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    💬 WhatsApp
                  </a>
                  <a href="tel:+436602361777" className="btn-call">
                    📞 Anrufen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="course-section-footer">
          <p className="body-lg">
            Möchtest du einen Kurs buchen oder hast du weitere Fragen? Melde dich einfach direkt bei mir!
          </p>
          <div className="general-booking-actions">
            <a href="tel:+436602361777" className="btn-call-large">
              📞 +43 (0) 660 2361777 anrufen
            </a>
            <a
              href="https://wa.me/436602361777?text=Hallo%20Michael,%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Messer-Workshops!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-large"
            >
              💬 Per WhatsApp schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
