import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import creta01 from "../assets/imagenes/creta/creta-01.jpg";
import creta02 from "../assets/imagenes/creta/creta-02.jpg";
import creta03 from "../assets/imagenes/creta/creta-03.jpg";
import creta04 from "../assets/imagenes/creta/creta-04.jpg";
import creta05 from "../assets/imagenes/creta/creta-05.jpg";
import creta06 from "../assets/imagenes/creta/creta-06.jpg";
import creta07 from "../assets/imagenes/creta/creta-07.jpg";
import creta08 from "../assets/imagenes/creta/creta-08.jpg";
import creta09 from "../assets/imagenes/creta/creta-09.jpg";
import creta10 from "../assets/imagenes/creta/creta-10.jpg";

const images = [
  creta01,
  creta02,
  creta03,
  creta04,
  creta05,
  creta06,
  creta07,
  creta08,
  creta09,
  creta10,
];

export function Creta() {
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

  function goToCabinetA() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerA5() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A5");
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

          <button type="button" className="breadcrumb-link" onClick={goToCabinetA}>
            A
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA5}>
            A5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">CRETA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">CRETA</h1>

        <div className="boutique-info">
          <p>2''X10'' · PORTOBELLO</p>
          <p>A5 · F5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/CRETA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`CRETA ${index + 1}`}
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