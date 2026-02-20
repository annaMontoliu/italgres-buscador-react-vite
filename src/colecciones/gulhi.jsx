// src/colecciones/gulhi.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// GULHI PEARL (1)
import gulhiPearl01 from "../assets/imagenes/gulhi/gulhi-pearl/gulhi-pearl-01.jpg";

// GULHI SAND (1)
import gulhiSand01 from "../assets/imagenes/gulhi/gulhi-sand/gulhi-sand-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// Orden: PEARL → SAND
// =====================
const images = [
  gulhiPearl01, // 0
  gulhiSand01, // 1
];

export function Gulhi({ onGoHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openModal(index) {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  }

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">GULHI</h1>

        <ColeccionLayout infoUrl="/pdf/GULHI.pdf" />

        {/* GULHI PEARL */}
        <h3 className="color-title">GULHI PEARL</h3>
        <section className="gallery-grid">
          <img
            src={gulhiPearl01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="GULHI PEARL 01"
          />
        </section>

        {/* GULHI SAND */}
        <h3 className="color-title">GULHI SAND</h3>
        <section className="gallery-grid">
          <img
            src={gulhiSand01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="GULHI SAND 01"
          />
        </section>
      </main>

      <ImageModal
        images={images}
        isOpen={isModalOpen}
        currentIndex={currentIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}