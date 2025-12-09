// src/colecciones/elegance-pro.jsx
import { useState } from "react";

export function ElegancePro({ onGoHome }) {
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    "imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-1.jpg",
    "imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-2.jpg",
    "imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-3.jpg",
    "imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-4.jpg",
    "imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-5.jpg",
  ];

  return (
    <div className="coleccion-container">

      <button className="back-button" onClick={onGoHome}>
        ⬅ Back to Home
      </button>

      <h1 className="coleccion-title">ELEGANCE PRO</h1>
      <h2 className="coleccion-color">WHITE</h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Elegance Pro White ${i + 1}`}
            className="gallery-thumb"
            onClick={() => setCurrentImage(src)}
          />
        ))}
      </div>

      {currentImage && (
        <div className="modal" onClick={() => setCurrentImage(null)}>
          <img src={currentImage} className="modal-image" />
        </div>
      )}
    </div>
  );
}

