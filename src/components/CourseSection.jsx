import React from 'react';
import './CourseSection.css';

const courses = [
  {
    id: 1,
    title: 'Einsteigerkurs',
    description: '1-Tages Workshop. Fertige Dein eigenes Messer fürs Leben erschaffe mit deinen Händen ein Unikat. Am Ende nimmst du dein erstes selbstgefertigtes Messer mit nach Hause.',
    price: '€ 360',
    details: 'Kleine Gruppen (max 2)',
  },
  {
    id: 2,
    title: 'Damast-Kurs',
    description: '2-Tages Intensiv-Workshop. Falte deinen eigenen 100-Lagen Damaststahl. Du schmiedest ein komplettes Messer deiner Wahl mit eigenem Griff unter meiner persönlichen Anleitung.',
    price: '€ 840',
    details: 'Für Fortgeschrittene',
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
