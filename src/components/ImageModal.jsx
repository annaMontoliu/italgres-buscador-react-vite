// src/components/ImageModal.jsx

import { useEffect, useRef, useState } from "react";

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

  // --- SWIPE refs (mantengo tu lógica) ---
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const mouseDownX = useRef(null);
  const mouseUpX = useRef(null);

  const SWIPE_THRESHOLD = 50; // px

  // --- ZOOM / PAN state ---
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Drag (pan)
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOrigin = useRef({ x: 0, y: 0 });

  // Touch pinch
  const pinchStartDist = useRef(null);
  const pinchStartScale = useRef(1);

  // Doble tap
  const lastTapTime = useRef(0);

  function clampScale(next) {
    const min = 1;
    const max = 4;
    return Math.min(max, Math.max(min, next));
  }

  function resetZoom() {
    setScale(1);
    setPos({ x: 0, y: 0 });
    isPanning.current = false;
    panStart.current = { x: 0, y: 0 };
    panOrigin.current = { x: 0, y: 0 };
    pinchStartDist.current = null;
    pinchStartScale.current = 1;
  }

  // Reset zoom al abrir/cambiar imagen
  useEffect(() => {
    if (isOpen) resetZoom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex]);

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

  // --- Wheel zoom (PC) ---
  function handleWheel(e) {
    if (!isOpen) return;
    e.preventDefault();

    // deltaY positivo = rueda hacia abajo (alejar), negativo = acercar
    const step = e.deltaY > 0 ? -0.15 : 0.15;
    setScale((s) => clampScale(Number((s + step).toFixed(2))));
  }

  // --- Quick zoom (doble click / doble tap) ---
  function toggleQuickZoom() {
    setScale((s) => {
      const next = s === 1 ? 2.5 : 1;
      if (next === 1) setPos({ x: 0, y: 0 });
      return next;
    });
  }

  // --- PAN helpers ---
  function startPan(clientX, clientY) {
    if (scale <= 1) return;
    isPanning.current = true;
    panStart.current = { x: clientX, y: clientY };
    panOrigin.current = { x: pos.x, y: pos.y };
  }

  function movePan(clientX, clientY) {
    if (!isPanning.current) return;
    const dx = clientX - panStart.current.x;
    const dy = clientY - panStart.current.y;
    setPos({ x: panOrigin.current.x + dx, y: panOrigin.current.y + dy });
  }

  function endPan() {
    isPanning.current = false;
  }

  // Touch pinch helpers
  function getTouchDist(t1, t2) {
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  const transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;

  return (
    <div
      id="imageModal"
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada"
      onWheel={handleWheel}
      onTouchStart={(e) => {
        if (!isOpen) return;

        // PINCH
        if (e.touches.length === 2) {
          pinchStartDist.current = getTouchDist(e.touches[0], e.touches[1]);
          pinchStartScale.current = scale;
          return;
        }

        // DOBLE TAP (rápido)
        if (e.touches.length === 1) {
          const now = Date.now();
          if (now - lastTapTime.current < 280) {
            toggleQuickZoom();
            lastTapTime.current = 0;
          } else {
            lastTapTime.current = now;
          }

          // Si hay zoom, pan; si no, swipe
          if (scale > 1) {
            startPan(e.touches[0].clientX, e.touches[0].clientY);
          } else {
            touchStartX.current = e.changedTouches[0].clientX;
          }
        }
      }}
      onTouchMove={(e) => {
        if (!isOpen) return;

        // PINCH MOVE
        if (e.touches.length === 2 && pinchStartDist.current) {
          e.preventDefault();
          const dist = getTouchDist(e.touches[0], e.touches[1]);
          const ratio = dist / pinchStartDist.current;
          const next = clampScale(
            Number((pinchStartScale.current * ratio).toFixed(2))
          );
          setScale(next);

          if (next === 1) setPos({ x: 0, y: 0 });
          return;
        }

        // PAN MOVE
        if (e.touches.length === 1 && scale > 1) {
          e.preventDefault();
          movePan(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={(e) => {
        if (!isOpen) return;

        // Si estábamos en pinch, reseteamos pinch refs
        pinchStartDist.current = null;
        pinchStartScale.current = scale;

        // Si hay zoom, terminamos pan
        if (scale > 1) {
          endPan();
          return;
        }

        // Swipe normal
        touchEndX.current = e.changedTouches[0].clientX;
        handleTouchSwipe();
      }}
      onMouseDown={(e) => {
        if (!isOpen) return;

        // Si hay zoom => pan; si no => swipe
        if (scale > 1) {
          startPan(e.clientX, e.clientY);
        } else {
          mouseDownX.current = e.clientX;
        }
      }}
      onMouseMove={(e) => {
        if (!isOpen) return;
        if (scale > 1 && isPanning.current) {
          e.preventDefault();
          movePan(e.clientX, e.clientY);
        }
      }}
      onMouseUp={(e) => {
        if (!isOpen) return;

        if (scale > 1) {
          endPan();
          return;
        }

        mouseUpX.current = e.clientX;
        handleMouseSwipe();
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        toggleQuickZoom();
      }}
      style={{
        display: displayStyle,
        cursor: scale > 1 ? (isPanning.current ? "grabbing" : "grab") : "default",
        touchAction: "none", // importante para pinch/pan
      }}
    >
      <span
        className="close"
        onClick={(e) => {
          e.stopPropagation();
          resetZoom();
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
          resetZoom();
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
        draggable="false"
        onClick={(e) => e.stopPropagation()}
        style={{
          transform,
          transformOrigin: "center center",
          userSelect: "none",
          pointerEvents: "auto", // ✅ ya no atraviesa clicks
        }}
      />

      <span
        className="arrow right"
        onClick={(e) => {
          e.stopPropagation();
          resetZoom();
          onNext();
        }}
        aria-label="Siguiente"
      >
        &#10095;
      </span>
    </div>
  );
}
