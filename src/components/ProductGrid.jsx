import React, { useEffect, useRef } from 'react';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    name: 'Waldmeister Aufbruchmesser',
    category: 'Damaststahl',
    description: 'Ein solides Jagdmesser mit Aufreißhaken und dunklem Moor-Holzgriff. Ausgestattet mit einer 200-lagigen Damastklinge. Bestehend aus Nickel-, Mangan- und Werkzeugstahl. Härte: 62 HRC', // Härte eigener absatz
    image: '/images/knife1.png'
  },
  {
    id: 2,
    name: 'Regentropfen Santoku',
    category: 'Damaststahl',
    description: 'Klassisches Küchenmesser mit 100-lagigem Tropfen-Damastmuster. Der Griff besteht aus poliertem  Olivenholz. Bestehend aus Nickel-, Mangan- und Werkzeugstahl. Härte: 63 HRC',
    image: '/images/knife2.png'
  },
  {
    id: 3,
    name: 'Naturwurz Chefmesser',
    category: 'Damaststahl',
    description: 'Kochmesser mit einem feinen, linearen, 100-lagigem Damastmuster und einem mehrfarbigen Holzgriff. Für den regelmäßigen Kücheneinsatz konzipiert. Bestehend aus Nickel-, Mangan- und Werkzeugstahl. Härte: 63 HRC',
    image: '/images/knife3.jpg'
  },
  {
    id: 4,
    name: 'Vulkan Outdoormesser',
    category: 'Kohlenstoffstahl (Poliert)',
    description: 'Outdoormesser mit glatt polierter Klinge. Verfügt über einen robusten, rot-schwarzen Strukturgriff. Härte: 61 HRC',
    image: '/images/knife4.png'
  },
  {
    id: 5,
    name: 'Herbstfeuer Jagdmesser',
    category: 'Damaststahl',
    description: 'Ein kompakter Skinner mit deutlich sichtbarem 200-lagigem Damastmuster. Der Griff ist aus rötlichem Wurzelholz gefertigt. Bestehend aus Nickel-, Mangan- und Werkzeugstahl. Härte: 62 HRC',
    image: '/images/knife5.jpg'
  },
  {
    id: 6,
    name: 'Roter Drache Nakiri',
    category: 'Damaststahl',
    description: 'Ein Nakiri für Gemüsearbeiten mit einer breiten 120-lagigen Damastklinge. Ausgestattet mit einem abgerundeten rötlichen Holzgriff. Bestehend aus Nickel-, Mangan- und Werkzeugstahl. Härte: 63 HRC',
    image: '/images/knife6.jpg'
  }
];

// TODO: Replace placeholder divs with actual images
export default function ProductGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const thresholds = Array.from({ length: 100 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progress = Math.min(entry.intersectionRatio / 0.35, 1);
          entry.target.style.opacity = progress;
          entry.target.style.transform = `translateY(${(1 - progress) * 40}px) scale(${0.92 + progress * 0.08})`;
        });
      },
      { threshold: thresholds }
    );

    const cards = gridRef.current.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="product-section">
      <div className="section-header">
        <h2 className="display-md section-title">Damast-Galerie</h2>
        <p className="body-md section-desc">
          Jedes Messer erzählt die Geschichte seiner Entstehung – von der ersten Glut bis zum finalen Schliff.
        </p>
      </div>

      <div className="product-grid" ref={gridRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              {product.image ? (
                <img src={product.image} alt={`Handgeschmiedetes Messer: ${product.name}`} className="product-image" />
              ) : (
                <div className="placeholder-image" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="label-sm">Image: {product.name}</span></div>
              )}
            </div>
            <div className="product-info" style={{ paddingBottom: 'var(--spacing-8)' }}>
              <h3 className="title-md" style={{ marginBottom: 'var(--spacing-2)' }}>{product.name}</h3>
              <p className="label-sm steel-type" style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-4)' }}>{product.category}</p>
              <p className="body-md text-secondary" style={{ lineHeight: '1.5' }}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-knives-cta">
        <span className="label-md kicker" style={{ display: 'block', marginBottom: 'var(--spacing-4)' }}>Auf Anfrage</span>
        <h3 className="display-md" style={{ marginBottom: 'var(--spacing-4)' }}>Ich fertige für Dich Dein Damastmesser</h3>
        <p className="body-lg text-secondary" style={{ marginBottom: 'var(--spacing-8)' }}>
          Von der Stahlauswahl nach Deinen Wünschen bis zum letzten Schliff entsteht in meiner Werkstatt ein Messer, das ganz Dir gehört. Du wählst das Holz, die Form, das Damastmuster — ich bringe Dein Projekt zum Leben und halte Dich auf Wunsch nach jedem Fertigungsschritt persönlich auf dem Laufenden. Kein Stück gleicht dem anderen, jedes trägt die Handschrift seines Entstehens. Am Ende hältst Du ein Kunstwerk in den Händen — gefertigt ganz nach Deinem Design.
        </p>
        <a href="tel:+436602361777" className="btn-primary">
          Jetzt anrufen: +43 660 2361777
        </a>
      </div>
    </section>
  );
}
