import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import argila01 from "../assets/imagenes/argila/argila-01.jpg";
import argila02 from "../assets/imagenes/argila/argila-02.jpg";
import argila03 from "../assets/imagenes/argila/argila-03.jpg";
import argila04 from "../assets/imagenes/argila/argila-04.jpg";
import argila05 from "../assets/imagenes/argila/argila-05.jpg";
import argila07 from "../assets/imagenes/argila/argila-07.jpg";
import argila08 from "../assets/imagenes/argila/argila-08.jpg";

const images = [
  argila01,
  argila02,
  argila03,
  argila04,
  argila05,
  argila07,
  argila08,
];

export function Argila() {
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

  function goToDrawerA4() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A4");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA4}>
            A4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ARGILA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ARGILA</h1>

        <div className="boutique-info">
          <p>4''X4'' · LIFE CERAMICA</p>
          <p>A4</p>
        </div>

        {/* PDF automático por nombre */}
        <ColeccionLayout infoUrl="/pdf/ARGILA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ARGILA ${index + 1}`}
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