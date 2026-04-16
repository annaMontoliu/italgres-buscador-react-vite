import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import bulnes01 from "../assets/imagenes/bulnes/bulnes-01.jpg";
import bulnes02 from "../assets/imagenes/bulnes/bulnes-02.jpg";

const images = [bulnes01, bulnes02];

export function Bulnes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCabinet = sessionStorage.getItem("boutiqueCabinet") || "A";
  const currentDrawer = sessionStorage.getItem("boutiqueDrawer") || "A5";

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

          <span className="breadcrumb-current">BULNES</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BULNES</h1>

        <div className="boutique-info">
          <p>8''X8'' · VIVES</p>
          <p>A5 · C5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/BULNES.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BULNES ${index + 1}`}
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