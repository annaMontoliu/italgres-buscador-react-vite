import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import jaipur1 from "../assets/imagenes/jaipur/jaipur-01.jpg";
import jaipur2 from "../assets/imagenes/jaipur/jaipur-02.jpg";
import jaipur3 from "../assets/imagenes/jaipur/jaipur-03.jpg";
import jaipur4 from "../assets/imagenes/jaipur/jaipur-04.jpg";
import jaipur5 from "../assets/imagenes/jaipur/jaipur-05.jpg";
import jaipur6 from "../assets/imagenes/jaipur/jaipur-06.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  jaipur1, // 0
  jaipur2, // 1
  jaipur3, // 2
  jaipur4, // 3
  jaipur5, // 4
  jaipur6, // 5
];

export function Jaipur({ onGoHome }) {
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

  // =====================
  // BOUTIQUE NAV
  // =====================

  const cabinet = "I";
  const drawer = "I1";
  const title = "JAIPUR";
  const format = "5''X9''";
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
          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToBoutique}
          >
            BOUTIQUE
          </button>

          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToCabinet}
          >
            {cabinet}
          </button>

          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawer}
          >
            {drawer}
          </button>

          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">{title}</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">{title}</h1>

        <div className="boutique-info">
          <p>
            {format} · {brand}
          </p>

          <p>{drawer}</p>
        </div>

        <ColeccionLayout infoUrl="https://eceramico.com/wp-content/uploads/2024/12/catalogo-serie-jaipur.pdf" />

        {/* JAIPUR */}
        <section className="gallery-grid">
          <img
            src={jaipur1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="JAIPUR 01"
          />

          <img
            src={jaipur2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="JAIPUR 02"
          />

          <img
            src={jaipur3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="JAIPUR 03"
          />

          <img
            src={jaipur4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="JAIPUR 04"
          />

          <img
            src={jaipur5}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="JAIPUR 05"
          />

          <img
            src={jaipur6}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="JAIPUR 06"
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