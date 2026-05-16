import React from 'react';
import './AboutSection.css';

// TODO: Replace placeholder image with actual portrait of Meister Michael Barth
export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="placeholder-image about-portrait">
            <span className="label-md">Meister Michael Barth beim Schmieden eines neuen Damastmusters</span>
          </div>
        </div>
        
        <div className="about-text-column">
          <span className="label-md kicker">Über mich</span>
          <h2 className="display-md about-title">Eine Leidenschaft, die im Feuer begann</h2>
          
          <div className="about-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p className="body-lg">
              Schon als Kind war ich vom Feuer in der Schmiede fasziniert — das Sprühen der Funken, die lauten Hammerschläge, die durch die Halle hallten, der archaische Dreiklang aus Hitze, Glut und Metallgeruch. Die alten Damastklingen, die feinen Muster im Stahl, die Falttechnik der japanischen Schwertschmiede — das war für mich keine Geschichte aus einem Museum. Das war etwas, das ich begreifen, anfassen und eines Tages selbst können wollte.
            </p>
            <p className="body-md text-secondary">
              Ich absolvierte meine Ausbildung im Metallhandwerk und legte anschließend meinen Meister ab — mit 24 Jahren, als jüngster Meister in Oberbayern. Nicht weil ich es eilig hatte, sondern weil diese Arbeit mich einfach nicht loslässt.
            </p>
            <blockquote style={{ margin: '1rem 0', fontStyle: 'italic', borderLeft: '2px solid currentColor', paddingLeft: '1.5rem', opacity: 0.9 }} className="body-lg">
              Für mich ist das Schmieden kein Beruf. Es ist eine Lebensaufgabe.
            </blockquote>
            <p className="body-md text-secondary">
              Heute fertige ich hochwertige Messer in verschiedenen Damast-Schmiedetechniken — mit viel Hingabe und dem Anspruch, dass jede Klinge etwas Eigenes hat. Ich verbinde traditionelle Handwerkskunst mit modernen Methoden, weil ich glaube: Das eine schließt das andere nicht aus. Es macht es besser.
            </p>
            <p className="body-md text-secondary">
              Jedes Messer, das meine Werkstatt verlässt, erzählt seine eigene Geschichte. Die des Stahls, der Technik — und ein bisschen auch meine.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item ghost-border" style={{ borderTop: '4px solid var(--color-tertiary)' }}>
              <span className="title-lg">300+</span>
              <span className="label-sm">Lagen Damast</span>
            </div>
            <div className="stat-item ghost-border" style={{ borderTop: '4px solid var(--color-tertiary)' }}>
              <span className="title-lg">100%</span>
              <span className="label-sm">Handarbeit</span>
            </div>
            <div className="stat-item ghost-border" style={{ borderTop: '4px solid var(--color-tertiary)' }}>
              <span className="title-lg">∞</span>
              <span className="label-sm">Qualität</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
