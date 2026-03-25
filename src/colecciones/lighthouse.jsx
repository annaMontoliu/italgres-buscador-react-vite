import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import lighthouse01 from "../assets/imagenes/lighthouse/lighthouse-01.jpg";
import lighthouse02 from "../assets/imagenes/lighthouse/lighthouse-02.jpg";
import lighthouse03 from "../assets/imagenes/lighthouse/lighthouse-03.jpg";
import lighthouse04 from "../assets/imagenes/lighthouse/lighthouse-04.jpg";
import lighthouse05 from "../assets/imagenes/lighthouse/lighthouse-05.jpg";
import lighthouse06 from "../assets/imagenes/lighthouse/lighthouse-06.jpg";
import lighthouse07 from "../assets/imagenes/lighthouse/lighthouse-07.jpg";
import lighthouse08 from "../assets/imagenes/lighthouse/lighthouse-08.jpg";
import lighthouse09 from "../assets/imagenes/lighthouse/lighthouse-09.jpg";
import lighthouse10 from "../assets/imagenes/lighthouse/lighthouse-10.jpg";
import lighthouse11 from "../assets/imagenes/lighthouse/lighthouse-11.jpg";

const images = [
  lighthouse01,
  lighthouse02,
  lighthouse03,
  lighthouse04,
  lighthouse05,
  lighthouse06,
  lighthouse07,
  lighthouse08,
  lighthouse09,
  lighthouse10,
  lighthouse11,
];

export function Lighthouse() {
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

          <span className="breadcrumb-current">LIGHTHOUSE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">LIGHTHOUSE</h1>

        <div className="boutique-info">
          <p>2''X10'' · PORTOBELLO</p>
          <p>A5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/LIGHTHOUSE.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`LIGHTHOUSE ${index + 1}`}
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