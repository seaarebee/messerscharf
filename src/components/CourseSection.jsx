import React from 'react';
import './CourseSection.css';

const courses = [
  {
    id: 1,
    title: 'Einsteigerkurs',
    description: '1-Tages Workshop. Fertige Dein eigenes Messer fürs Leben erschaffe mit deinen Händen ein Unikat. Am Ende nimmst du dein erstes selbstgefertigtes Messer mit nach Hause.',
    price: 'Preis auf Anfrage',
    details: 'Kleine Gruppen (max 2)',
  },
  {
    id: 2,
    title: 'Damast-Kurs',
    description: '2-Tages Intensiv-Workshop. Falte deinen eigenen 100-Lagen Damaststahl. Du schmiedest ein komplettes Messer deiner Wahl mit eigenem Griff unter meiner persönlichen Anleitung.',
    price: 'Preis auf Anfrage',
    details: 'Für Fortgeschrittene',
  },
  {
    id: 3,
    title: 'Lagenstahl — Fertige dein eigenes Messer',
    description: 'In diesem 1,5-tägigen Workshop lernst du eine der ältesten Schmiedetechniken kennen: das Feuerschweißen von Lagenstahl. Du stapelst verschiedene Stähle, schweißt sie selbst im Feuer zusammen und schmiedest daraus — Schicht für Schicht — dein eigenes Messer. Keine Vorkenntnisse nötig. Du wirst durch jeden Schritt des Prozesses begleitet: vom Vorbereiten der Stähle über das Falten und Strecken bis zur fertigen Klinge. Am Ende nimmst du ein Unikat mit nach Hause — handgefertigt, aus echtem Lagenstahl, von dir.',
    price: 'Preis auf Anfrage',
    details: '1,5-Tages Workshop',
  },
  {
    id: 4,
    title: 'Was Generationen hüteten wie einen Schatz, das Messerschleifen',
    description: 'Es gibt ein Wissen, das von Hand zu Hand weitergegeben wurde — still, in Werkstätten, von Meister zu Schüler. Das Geheimnis der wirklich scharfen Klinge. Nicht jeder kannte es. Nicht jeder sollte es kennen. In diesem Kurs öffne ich diese Tür. In drei Stunden führe ich dich in die Kunst des Messerschleifens ein — den richtigen Winkel, das Gespür für den Stahl, den Moment, in dem die Schneide erwacht. Was sich wie Magie anfühlt, ist ein Handwerk. Und Handwerk kann man lernen. Eine wirklich scharfe Klinge spricht für sich — lautlos, und ohne Zweifel. Du gehst nicht nur mit einem geschärften Messer nach Hause. Du gehst mit einem Wissen, das dich ein Leben lang begleitet. Inklusive Material & Anleitung. Bringe gerne ein eigenes Messer zum Schärfen mit.',
    price: 'Preis auf Anfrage',
    details: '3 Stunden, Keine Vorkenntnisse',
  }
];

export default function CourseSection() {
  return (
    <section id="courses" className="course-section">
      <div className="course-container">
        <div className="course-header">
          <span className="label-md kicker">Workshops & Kurse</span>
          <h2 className="display-md">Lerne das Schmiedehandwerk</h2>
          <p className="body-lg">
            Kleine Gruppen — Echtes Handwerk — Geführte Werkstatt. "Eisen ist meine Sprache."
          </p>
        </div>

        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-content">
                <span className="label-sm course-meta">{course.details}</span>
                <h3 className="title-lg course-title">{course.title}</h3>
                <p className="body-md course-desc">{course.description}</p>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <div className="course-booking-action" style={{ textAlign: 'right' }}>
                    <span className="label-sm text-secondary" style={{ display: 'block', marginBottom: '8px' }}>Zur Buchung anrufen:</span>
                    <a href="tel:+430123456789" className="btn-primary">
                      +43 (0) 660 2361777
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
