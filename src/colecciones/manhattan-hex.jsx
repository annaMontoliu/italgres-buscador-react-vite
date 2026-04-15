// src/colecciones/manhattan-hex.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/manhattan/manhattan-hex/manhattan-hex-01.jpg";
import img02 from "../assets/imagenes/manhattan/manhattan-hex/manhattan-hex-02.jpg";
import img03 from "../assets/imagenes/manhattan/manhattan-hex/manhattan-hex-03.jpg";
import img04 from "../assets/imagenes/manhattan/manhattan-hex/manhattan-hex-04.jpg";

const images = [img01, img02, img03, img04];

export function ManhattanHex() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCabinet = sessionStorage.getItem("boutiqueCabinet") || "C";
  const currentDrawer = sessionStorage.getItem("boutiqueDrawer") || "C2";

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

  function goToCurrentCabinet() {
    sessionStorage.setItem("boutiqueCabinet", currentCabinet);
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCurrentDrawer() {
    sessionStorage.setItem("boutiqueCabinet", currentCabinet);
    sessionStorage.setItem("boutiqueDrawer", currentDrawer);
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

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
            onClick={goToCurrentCabinet}
          >
            {currentCabinet}
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToCurrentDrawer}
          >
            {currentDrawer}
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">MANHATTAN HEX</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">MANHATTAN HEX</h1>

        <div className="boutique-info">
          <p>5''x6'' · CEVICA</p>
          <p>C2 · C6</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/Manhattan.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`MANHATTAN HEX ${index + 1}`}
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