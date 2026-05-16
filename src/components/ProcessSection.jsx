import React from 'react';
import './ProcessSection.css';

export default function ProcessSection() {
  const processSteps = [
    {
      step: '01',
      title: 'Jedes Meisterstück beginnt im Kopf',
      desc: (
        <>
          <p>Bevor der erste Funke fliegt, steht die Entscheidung: Welcher Stahl soll es sein? Diese Wahl ist keine Nebensache — sie ist das Fundament jeder Klinge, die meine Werkstatt verlässt.</p>
          <p>Ich arbeite mit extremen widerstandsfähigen Kohlenstoffstählen, Nickelstählen und Werkzeugstählen — präzise ausgewählt, teils gemischt mit Buntmetallen. Jede Kombination hat ihren Grund: Der optische Kontrast im fertigen Damastmuster entsteht nicht durch Zufall, sondern durch das bewusste Zusammenspiel unterschiedlicher Materialien und Schmiedetechniken.</p>
          <blockquote style={{ margin: '1.5rem 0', fontStyle: 'italic', borderLeft: '2px solid currentColor', paddingLeft: '1.5rem', opacity: 0.9 }}>Was aussieht wie Kunst, ist zuerst Kalkül.</blockquote>
          <p>Genauso wichtig ist die Schnitthaltigkeit. Ein Messer, das schön ist, aber nicht schneidet, ist kein Messer. Die richtige Materialwahl sorgt dafür, dass beides stimmt — die Klinge, die man sieht, und die Klinge, die man spürt.</p>
        </>
      ),
      mediaType: 'image',
      image: '/images/01_Meisterstück_beginnt_im_Kopf.jpeg'
    },
    {
      step: '02',
      title: 'Sauber, plan, präzise — bevor das Feuer beginnt',
      desc: (
        <>
          <p>Gutes Damast entsteht nicht im Feuer allein. Er entsteht lange davor — am Bandschleifer, mit dem Winkelschleifer, mit ruhiger Hand und einem klaren Blick für das Detail.</p>
          <p>Jeder Stahl wird von Hand geschliffen und gereinigt, bevor er in die Esse kommt. Oxidation an der Oberfläche, kleinste Unebenheiten — das alles hat in einem Ausgangspaket nichts verloren. Nur wer sauber beginnt, kann sauber schweißen.</p>
          <blockquote style={{ margin: '1.5rem 0', fontStyle: 'italic', borderLeft: '2px solid currentColor', paddingLeft: '1.5rem', opacity: 0.9 }}>Perfektion im Ergebnis beginnt mit Geduld am Anfang.</blockquote>
          <p>Die vorbereiteten Stähle werden absolut plan zugeschnitten und in vielen abwechselnden Lagen sorgfältig aufeinandergestapelt — Schicht für Schicht, bis das Paket stimmt. Erst dann werden sie miteinander verschweißt und werden zu dem, was später das Muster und die Härte einer echten Damasklinge ausmacht.</p>
        </>
      ),
      mediaType: 'image',
      image: '/images/02_Bevor_das_Feuer_beginnt.jpeg'
    },
    {
      step: '03',
      title: 'Wenn Feuer und Stahl zu einem werden',
      desc: (
        <>
          <p>Feuerschweißen ist eine der ältesten Techniken der Schmiedekunst — und bis heute eine der beeindruckendsten. Im Feuer der Esse, bei Temperaturen zwischen 850 und 1.100 Grad, erwacht das Metall zum Leben. Es glüht, es leuchtet, es wird weich genug, um sich zu fügen.</p>
          <p>In diesem Moment des Übergangs verbinden sich zwei Stücke Stahl unter dem Hammer zu einem einzigen — unlösbar, dauerhaft, untrennbar. Keine Schraube, kein Klebstoff, kein Schweißdraht. Nur Hitze, Kraft und das Wissen um den richtigen Augenblick.</p>
          <p>Dieses Wissen ist das Herzstück meiner Arbeit. Jede Klinge, die ich fertige, trägt die Spur des Feuers — und die Stärke einer Verbindung, die Jahrhunderte überdauert.</p>
        </>
      ),
      mediaType: 'image',
      image: '/images/03_Feuerverschweißen.jpeg'
    },
    {
      step: '04',
      title: 'Immer wieder ins Feuer — bis die Lagen stimmen',
      desc: (
        <>
          <p>Der feuerverschweißte Block glüht gelborange, wenn er unter den Schmiedehammer kommt. Jetzt beginnt die eigentliche Arbeit: Strecken, schneiden, wieder zusammenlegen, wieder verschweißen — und von vorn.</p>
          <p>Dieser Rhythmus wiederholt sich, bis 100, manchmal 200 Lagen übereinander liegen. Jede Lage bringt das spätere Muster einen Schritt näher. Was wie Wiederholung aussieht, ist in Wahrheit eine langsame Verwandlung — aus einem groben Paket wird ein lebendiger, vielschichtiger Stahl.</p>
          <blockquote style={{ margin: '1.5rem 0', fontStyle: 'italic', borderLeft: '2px solid currentColor', paddingLeft: '1.5rem', opacity: 0.9 }}>Damast entsteht nicht durch einen Schlag, sondern durch hunderte.</blockquote>
          <p>Wenn die Lagen stimmen, wird der Block in Form gebracht — der Rohling zeigt sich zum ersten Mal als das, was er werden soll. Dann kommt die Ruhe: eingebettet im Sand, kühlt er langsam ab.</p>
          <p>Doch die vielen Schläge des Schmiedehammers haben mehr bewirkt als nur Form. Sie haben das Material verdichtet — Lage für Lage, Schlag für Schlag. Genau das ist der Grund, warum handgeschmiedeter Damast widerstandsfähiger ist als gewalzter: Nicht das Muster macht den Unterschied, sondern was im Inneren des Stahls passiert ist.</p>
        </>
      ),
      mediaType: 'video',
      video: '/04_Immer_wieder_ins_Feuer.mp4'
    },
    {
      step: '05',
      title: 'Die Klingenformung',
      desc: (
        <>
          <p>Jetzt zeigt sich, was im Rohling steckt. Mit ruhiger, absolut gezielter Hand — Hammer und Bandschleifer — wird die endgültige Klingenform herausgearbeitet. Kein Schlag zu viel, kein Zug zu wenig.</p>
          <blockquote style={{ margin: '1.5rem 0', fontStyle: 'italic', borderLeft: '2px solid currentColor', paddingLeft: '1.5rem', opacity: 0.9 }}>Der Stahl weiß schon, was er werden will. Man muss nur genau genug hinhören.</blockquote>
          <p>Was dabei entsteht, ist mehr als Geometrie. Die feine Lagenstruktur des Damasts folgt der Formgebung auf seine Art, sie ergibt sich. Jede Kurve der Klinge spiegelt sich im Muster des Stahls, als wären Form und Struktur von Anfang an füreinander gedacht gewesen.</p>
        </>
      ),
      mediaType: 'image',
      image: '/images/05_Klingenformung.jpeg'
    },
    {
      step: '06',
      title: 'Härten & Anlassen',
      desc: (
        <>
          <p><strong>Die Seele des Messers — geboren im Schock</strong></p>
          <p>Alle Arbeit bis hierher war Vorbereitung. Dieser Moment entscheidet: Die Klinge wird auf 840 Grad erhitzt — und dann, im richtigen Augenblick, in einem Spezialöl schockgekühlt. Was danach aus dem Öl kommt, ist hart. Sehr hart.</p>
          <blockquote style={{ margin: '1.5rem 0', fontStyle: 'italic', borderLeft: '2px solid currentColor', paddingLeft: '1.5rem', opacity: 0.9 }}>Härte allein macht keine gute Klinge. Es braucht auch die Fähigkeit nachzugeben.</blockquote>
          <p>Deshalb folgt das Anlassen: Bei rund 180 Grad wird die Klinge sanft erwärmt — kontrolliert, geduldig. Dieser Schritt gibt dem Stahl seine Flexibilität zurück. Nicht so viel, dass er weich wird. Genau so viel, dass er im Einsatz nicht bricht.</p>
          <p>Härte und Zähigkeit im richtigen Gleichgewicht — das ist die Seele jedes Messers, das ich fertige.</p>
        </>
      ),
      mediaType: 'video'
    },
    {
      step: '07',
      title: 'Feinschliff und Ätzung',
      desc: (
        <p>Die stundenlange, filigrane Handarbeit geht weiter: Die Klinge wird noch einmal überarbeitet, ausgedünnt und rasiermesserscharf ausgeschliffen. Das finale Ätzen im Säurebad ist der magische Moment — das absolut individuelle, tiefgreifende Damastmuster wird zum ersten Mal sichtbar.</p>
      ),
      mediaType: 'image'
    },
    {
      step: '08',
      title: 'Griff, Montage und Vollendung',
      desc: (
        <p>Je nach Projekt werden exklusiv ausgewählte Edelhölzer oder tiefenwirksame Epoxidharz-Strukturen gewählt — in eine ergonomische Form gebracht und schließlich mit der Klinge zu einem Ganzen vereint. Am Ende hält man ein absolutes Unikat in den Händen: ein funktionales, langlebiges Werkzeug von höchstem Wert — geschaffen für Generationen.</p>
      ),
      mediaType: 'image',
      image: '/images/08_Vollendung.jpeg'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <span className="label-md kicker">Die Schmiedekunst</span>
        <h2 className="display-md section-title">Von Feuer und Stahl</h2>
        <p className="body-md section-desc text-secondary">
          Die Fertigung einer echten Damastklinge verlangt kompromisslose Präzision, körperliche Anstrengung und tiefen Respekt vor dem Feuer. Erfahren Sie, warum unsere Meisterstücke diesen besonderen Wert besitzen.
        </p>
      </div>
      
      <div className="process-timeline">
        {processSteps.map((item, index) => (
          <div key={index} className={`process-step ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="step-text-column">
              <div className="step-number display-md">{item.step}</div>
              <h3 className="title-lg" style={{ marginBottom: 'var(--spacing-4)' }}>{item.title}</h3>
              <div className="body-lg text-secondary" style={{ lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>{item.desc}</div>
            </div>
            <div className="step-media-column">
              {item.image ? (
                <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--elevation-2)' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : item.video ? (
                <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--elevation-2)' }}>
                  <video src={item.video} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div className="media-placeholder ghost-border">
                  {item.mediaType === 'video' ? (
                    <span className="label-md">▶ Video: {item.title}</span>
                  ) : (
                    <span className="label-md">Foto: {item.title}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
