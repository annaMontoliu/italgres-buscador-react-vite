import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import arch1 from "../assets/imagenes/arch/arch-01.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  arch1, // 0
];

export function Arch({ onGoHome }) {
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

  const cabinet = "I";
  const drawer = "I7";
  const title = "ARCH";
  const format = "5''X12''";
  const brand = "NATUCER";

  function goToBoutique() {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCabinet() {
    sessionStorage.setItem("boutiqueCabinet", cabinet);
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawer() {
    sessionStorage.setItem("boutiqueCabinet", cabinet);
    sessionStorage.setItem("boutiqueDrawer", drawer);
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <div className="breadcrumb-boutique">
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>

          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinet}>
            {cabinet}
          </button>

          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawer}>
            {drawer}
          </button>

          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">{title}</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">{title}</h1>

        <div className="boutique-info">
          <p>{format} · {brand}</p>
          <p>{drawer}</p>
        </div>

        <ColeccionLayout infoUrl="https://www.natucer.es/PDFs/Fichas/DynamicAngleLuxTwo-2026-Natucer.pdf" />

        {/* ARCH */}
        <section className="gallery-grid">
          <img
            src={arch1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ARCH 01"
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