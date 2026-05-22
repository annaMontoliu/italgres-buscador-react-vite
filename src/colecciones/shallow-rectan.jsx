import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import shallowRectan1 from "../assets/imagenes/shallow-rectan/shallow-rectan-01.jpg";
import shallowRectan2 from "../assets/imagenes/shallow-rectan/shallow-rectan-02.jpg";
import shallowRectan3 from "../assets/imagenes/shallow-rectan/shallow-rectan-03.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  shallowRectan1, // 0
  shallowRectan2, // 1
  shallowRectan3, // 2
];

export function ShallowRectan({ onGoHome }) {
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
  const drawer = "I8";
  const title = "SHALLOW RECTAN";
  const format = "2''X9''";
  const brand = "ESTUDIO CERAMICO";

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

        <ColeccionLayout infoUrl="https://eceramico.com/wp-content/uploads/2025/10/catalogo-azulejos-shallow.pdf" />

        {/* SHALLOW RECTAN */}
        <section className="gallery-grid">
          <img
            src={shallowRectan1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SHALLOW RECTAN 01"
          />

          <img
            src={shallowRectan2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SHALLOW RECTAN 02"
          />

          <img
            src={shallowRectan3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SHALLOW RECTAN 03"
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