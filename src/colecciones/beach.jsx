// src/colecciones/beach.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/beach/beach-01.jpg";
import img02 from "../assets/imagenes/beach/beach-02.jpg";
import img03 from "../assets/imagenes/beach/beach-03.jpg";

const images = [img01, img02, img03];

export function Beach() {
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

  function goToCabinetD() {
    sessionStorage.setItem("boutiqueCabinet", "D");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerD9() {
    sessionStorage.setItem("boutiqueCabinet", "D");
    sessionStorage.setItem("boutiqueDrawer", "D9");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToCabinetD}>
            D
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerD9}>
            D9
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BEACH</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BEACH</h1>

        <div className="boutique-info">
          <p>6''X6'' · CIFRE</p>
          <p>D9</p>
        </div>

        <ColeccionLayout infoUrl="https://d7rh5s3nxmpy4.cloudfront.net/CMP8489/files/PDF_POOLS_15X15_WEB.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BEACH ${index + 1}`}
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