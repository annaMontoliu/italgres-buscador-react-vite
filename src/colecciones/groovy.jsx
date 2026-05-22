import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import groovy1 from "../assets/imagenes/groovy/groovy-01.jpg";
import groovy2 from "../assets/imagenes/groovy/groovy-02.jpg";
import groovy3 from "../assets/imagenes/groovy/groovy-03.jpg";
import groovy4 from "../assets/imagenes/groovy/groovy-04.jpg";
import groovy5 from "../assets/imagenes/groovy/groovy-05.jpg";
import groovy6 from "../assets/imagenes/groovy/groovy-06.jpg";
import groovy7 from "../assets/imagenes/groovy/groovy-07.jpg";
import groovy8 from "../assets/imagenes/groovy/groovy-08.jpg";
import groovy9 from "../assets/imagenes/groovy/groovy-09.jpg";
import groovy10 from "../assets/imagenes/groovy/groovy-10.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  groovy1, // 0
  groovy2, // 1
  groovy3, // 2
  groovy4, // 3
  groovy5, // 4
  groovy6, // 5
  groovy7, // 6
  groovy8, // 7
  groovy9, // 8
  groovy10, // 9
];

export function Groovy({ onGoHome }) {
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
  const drawer = "I5";
  const title = "GROOVY";
  const format = "8''X8''";
  const brand = "CEVICA";

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

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/Groovy-20x20-1.pdf" />

        {/* GROOVY */}
        <section className="gallery-grid">
          <img src={groovy1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="GROOVY 01" />
          <img src={groovy2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="GROOVY 02" />
          <img src={groovy3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="GROOVY 03" />
          <img src={groovy4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="GROOVY 04" />
          <img src={groovy5} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="GROOVY 05" />
          <img src={groovy6} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="GROOVY 06" />
          <img src={groovy7} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="GROOVY 07" />
          <img src={groovy8} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="GROOVY 08" />
          <img src={groovy9} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="GROOVY 09" />
          <img src={groovy10} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="GROOVY 10" />
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