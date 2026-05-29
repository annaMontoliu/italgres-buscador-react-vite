// src/colecciones/crisp-boutique.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import crispBoutique01 from "../assets/imagenes/crisp-boutique/crisp-boutique-01.jpg";
import crispBoutique02 from "../assets/imagenes/crisp-boutique/crisp-boutique-02.jpg";
import crispBoutique03 from "../assets/imagenes/crisp-boutique/crisp-boutique-03.jpg";
import crispBoutique04 from "../assets/imagenes/crisp-boutique/crisp-boutique-04.jpg";
import crispBoutique05 from "../assets/imagenes/crisp-boutique/crisp-boutique-05.jpg";

const images = [
  crispBoutique01,
  crispBoutique02,
  crispBoutique03,
  crispBoutique04,
  crispBoutique05,
];

export function CrispBoutique() {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function goToBoutique() {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCabinetJ() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerJ3() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J3");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinetJ}>
            J
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerJ3}>
            J3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">CRISP BOUTIQUE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">CRISP BOUTIQUE</h1>

        <div className="boutique-info">
          <p>8''X8'' · HARMONY</p>
          <p>J3</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/CRISP-BOUTIQUE.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`CRISP BOUTIQUE ${index + 1}`}
            />
          ))}
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