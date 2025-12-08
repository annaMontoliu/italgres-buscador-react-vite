// src/components/ImageModal.jsx

// Modal genérico para todas las colecciones
// Recibe: images, isOpen, currentIndex, onClose, onPrev, onNext

export function ImageModal({ images, isOpen, currentIndex, onClose, onPrev, onNext }) {
  // Si no está abierto, lo ocultamos (pero mantenemos el mismo id y clases)
  const displayStyle = isOpen ? "flex" : "none";

  return (
    <div
      id="imageModal"
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada"
      style={{ display: displayStyle }}
    >
      <span className="close" onClick={onClose} aria-label="Cerrar">
        &times;
      </span>

      <span className="arrow left" onClick={onPrev} aria-label="Anterior">
        &#10094;
      </span>

      <img
        id="modalImage"
        src={images[currentIndex]}
        alt="Imagen ampliada"
      />

      <span className="arrow right" onClick={onNext} aria-label="Siguiente">
        &#10095;
      </span>
    </div>
  );
}
