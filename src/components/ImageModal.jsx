// src/components/ImageModal.jsx

import { useEffect, useRef } from "react";

// Modal genérico para todas las colecciones
// Recibe: images, isOpen, currentIndex, onClose, onPrev, onNext
export function ImageModal({
  images,
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  // Si no está abierto, lo ocultamos (pero mantenemos el mismo id y clases)
  const displayStyle = isOpen ? "flex" : "none";

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const mouseDownX = useRef(null);
  const mouseUpX = useRef(null);

  const SWIPE_THRESHOLD = 50; // px

  function handleTouchSwipe() {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0) onNext(); // izquierda -> siguiente
    else onPrev(); // derecha -> anterior

    touchStartX.current = null;
    touchEndX.current = null;
  }

  function handleMouseSwipe() {
    if (mouseDownX.current == null || mouseUpX.current == null) return;

    const diff = mouseDownX.current - mouseUpX.current;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0) onNext();
    else onPrev();

    mouseDownX.current = null;
    mouseUpX.current = null;
  }

  // Teclado: ESC cierra, flechas cambian
  useEffect(() => {
    function onKeyDown(e) {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <div
      id="imageModal"
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada"
      style={{ display: displayStyle }}
      onClick={onClose} // click fuera de la imagen cierra
      onTouchStart={(e) => {
        if (!isOpen) return;
        touchStartX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (!isOpen) return;
        touchEndX.current = e.changedTouches[0].clientX;
        handleTouchSwipe();
      }}
      onMouseDown={(e) => {
        if (!isOpen) return;
        mouseDownX.current = e.clientX;
      }}
      onMouseUp={(e) => {
        if (!isOpen) return;
        mouseUpX.current = e.clientX;
        handleMouseSwipe();
      }}
    >
      <span
        className="close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Cerrar"
      >
        &times;
      </span>

      <span
        className="arrow left"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Anterior"
      >
        &#10094;
      </span>

      <img
        id="modalImage"
        src={images[currentIndex]}
        alt="Imagen ampliada"
        onClick={(e) => e.stopPropagation()} // evitar que cierre al tocar la imagen
        draggable="false"
      />

      <span
        className="arrow right"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Siguiente"
      >
        &#10095;
      </span>
    </div>
  );
}
