import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import kanji1 from "../assets/imagenes/kanji/kanji-01.jpg";
import kanji2 from "../assets/imagenes/kanji/kanji-02.jpg";
import kanji3 from "../assets/imagenes/kanji/kanji-03.jpg";
import kanji4 from "../assets/imagenes/kanji/kanji-04.jpg";
import kanji5 from "../assets/imagenes/kanji/kanji-05.jpg";
import kanji6 from "../assets/imagenes/kanji/kanji-06.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  kanji1, // 0
  kanji2, // 1
  kanji3, // 2
  kanji4, // 3
  kanji5, // 4
  kanji6, // 5
];

export function Kanji({ onGoHome }) {
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
  const drawer = "I1";
  const title = "KANJI";
  const format = "5''X8''";
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

        <ColeccionLayout infoUrl="https://eceramico.com/wp-content/uploads/2025/01/catalogo-serie-kanji.pdf" />

        {/* KANJI */}
        <section className="gallery-grid">
          <img src={kanji1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="KANJI 01" />
          <img src={kanji2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="KANJI 02" />
          <img src={kanji3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="KANJI 03" />
          <img src={kanji4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="KANJI 04" />
          <img src={kanji5} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="KANJI 05" />
          <img src={kanji6} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="KANJI 06" />
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