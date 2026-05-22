import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import angle1 from "../assets/imagenes/angle/angle-01.jpg";
import angle2 from "../assets/imagenes/angle/angle-02.jpg";
import angle3 from "../assets/imagenes/angle/angle-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  angle1, // 0
  angle2, // 1
  angle3, // 2
];

export function Angle({ onGoHome }) {
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
  const drawer = "I6";
  const title = "ANGLE";
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

        {/* ANGLE */}
        <section className="gallery-grid">
          <img
            src={angle1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ANGLE 01"
          />

          <img
            src={angle2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ANGLE 02"
          />

          <img
            src={angle3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ANGLE 03"
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