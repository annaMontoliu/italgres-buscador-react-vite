// src/components/ColeccionLayout.jsx

export function ColeccionLayout({ infoUrl }) {
  return (
    <div className="top-content">
      <div className="info-box">
        <h2>FINISHES & FORMATS</h2>

        {/* Antes el href="#" lo rellenaba include-partials.js.
            Ahora lo controlamos con la prop infoUrl. */}
        <a
          href={infoUrl}
          className="button info-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE INFO
        </a>
      </div>
    </div>
  );
}
