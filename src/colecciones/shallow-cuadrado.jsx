import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import shallowCuadrado1 from "../assets/imagenes/shallow-cuadrado/shallow-cuadrado-01.jpg";
import shallowCuadrado2 from "../assets/imagenes/shallow-cuadrado/shallow-cuadrado-02.jpg";
import shallowCuadrado3 from "../assets/imagenes/shallow-cuadrado/shallow-cuadrado-03.jpg";
import shallowCuadrado4 from "../assets/imagenes/shallow-cuadrado/shallow-cuadrado-04.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  shallowCuadrado1, // 0
  shallowCuadrado2, // 1
  shallowCuadrado3, // 2
  shallowCuadrado4, // 3
];

export function ShallowCuadrado({ onGoHome }) {
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
  const drawer = "I9";
  const title = "SHALLOW CUADRADO";
  const format = "6''X6''";
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

        {/* SHALLOW CUADRADO */}
        <section className="gallery-grid">
          <img
            src={shallowCuadrado1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SHALLOW CUADRADO 01"
          />

          <img
            src={shallowCuadrado2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SHALLOW CUADRADO 02"
          />

          <img
            src={shallowCuadrado3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SHALLOW CUADRADO 03"
          />

          <img
            src={shallowCuadrado4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="SHALLOW CUADRADO 04"
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