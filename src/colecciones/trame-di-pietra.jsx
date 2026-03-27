import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import trame1 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-01.jpg";
import trame2 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-02.jpg";
import trame3 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-03.jpg";
import trame4 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-04.jpg";
import trame5 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-05.jpg";
import trame6 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-06.jpg";
import trame7 from "../assets/imagenes/trame-di-pietra/trame-di-pietra-07.jpg";

const images = [
  trame1,
  trame2,
  trame3,
  trame4,
  trame5,
  trame6,
  trame7,
];

export function TrameDiPietra() {
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

  function goToDrawerA8() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A8");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA8}>
            A8
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">TRAME DI PIETRA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">TRAME DI PIETRA</h1>

        <div className="boutique-info">
          <p>3''X6'' · TRAME DI PIETRA</p>
          <p>A8</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/TRAME-DI-PIETRA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`TRAME DI PIETRA ${index + 1}`}
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