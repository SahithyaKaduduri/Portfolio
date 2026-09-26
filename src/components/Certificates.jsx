import { useEffect, useState } from 'react';
import { certificates } from '../data.js';
import { useTilt } from '../useTilt.js';

const certIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="M8.2 13.5 6.5 21l5.5-2.8 5.5 2.8-1.7-7.5" />
  </svg>
);

function CertBlock({ c, onClick }) {
  const tiltRef = useTilt();
  return (
    <button type="button" className="cert-row tilt" ref={tiltRef} onClick={onClick}>
      <span className="cert-icon">{certIcon}</span>
      <span className="cert-text">
        <span className="c-title">{c.title}</span>
        <div className="c-issuer">{c.issuer}</div>
      </span>
      <span className="c-view">View certificate</span>
    </button>
  );
}

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? certificates[activeIndex] : null;

  const showCert = (i) => setActiveIndex((i + certificates.length) % certificates.length);

  useEffect(() => {
    function onKey(e) {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') showCert(activeIndex - 1);
      if (e.key === 'ArrowRight') showCert(activeIndex + 1);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  return (
    <section id="certificates">
      <div className="wrap">
        <div className="sec-head">
          <span className="num">04</span>
          <h2>Certificates &amp; Participation</h2>
          <p>Click any certificate to view it in full.</p>
        </div>
        <div className="cert-list">
          {certificates.map((c, i) => (
            <CertBlock c={c} key={c.title} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox open" onClick={(e) => { if (e.target === e.currentTarget) setActiveIndex(null); }}>
          <button className="lb-close" aria-label="Close" onClick={() => setActiveIndex(null)}>&times;</button>
          <button className="lb-nav lb-prev" aria-label="Previous certificate" onClick={() => showCert(activeIndex - 1)}>&#8249;</button>
          <img src={active.img} alt={active.title} />
          <button className="lb-nav lb-next" aria-label="Next certificate" onClick={() => showCert(activeIndex + 1)}>&#8250;</button>
          <div className="lb-caption">{active.title} — {active.issuer}</div>
          <div className="lb-count">{activeIndex + 1} / {certificates.length}</div>
        </div>
      )}
    </section>
  );
}
