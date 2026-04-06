import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import lagoon01 from "../assets/imagenes/lagoon/lagoon-01.jpg";
import lagoon02 from "../assets/imagenes/lagoon/lagoon-02.jpg";
import lagoon03 from "../assets/imagenes/lagoon/lagoon-03.jpg";
import lagoon04 from "../assets/imagenes/lagoon/lagoon-04.jpg";
import lagoon05 from "../assets/imagenes/lagoon/lagoon-05.jpg";
import lagoon06 from "../assets/imagenes/lagoon/lagoon-06.jpg";
import lagoon07 from "../assets/imagenes/lagoon/lagoon-07.jpg";
import lagoon08 from "../assets/imagenes/lagoon/lagoon-08.jpg";
import lagoon09 from "../assets/imagenes/lagoon/lagoon-09.jpg";
import lagoon10 from "../assets/imagenes/lagoon/lagoon-10.jpg";

const images = [
  lagoon01,
  lagoon02,
  lagoon03,
  lagoon04,
  lagoon05,
  lagoon06,
  lagoon07,
  lagoon08,
  lagoon09,
  lagoon10,
];

export function Lagoon({ onGoHome }) {
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

  function goToCabinetB() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerB2() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B2");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <div className="breadcrumb-boutique">
          <button className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToCabinetB}>
            B
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerB2}>
            B2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">LAGOON</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">LAGOON</h1>

        <div className="boutique-info">
          <p>3''x10'' · HARMONY</p>
          <p>B2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/LAGOON.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`LAGOON ${index + 1}`}
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