// src/components/ColeccionLayout.jsx

export function ColeccionLayout({ infoUrl }) {
  return (
    <div className="top-content">
      <div className="info-box">
        <h2>FINISHES & FORMATS</h2>

        <a
          href={infoUrl}
          className="btn-more-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE INFO
        </a>
      </div>
    </div>
  );
}