import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import legacy3x1001 from "../assets/imagenes/legacy/legacy-3x10/legacy-3x10-01.jpg";
import legacy3x1002 from "../assets/imagenes/legacy/legacy-3x10/legacy-3x10-02.jpg";
import legacy3x1003 from "../assets/imagenes/legacy/legacy-3x10/legacy-3x10-03.jpg";

const images = [legacy3x1001, legacy3x1002, legacy3x1003];

export function Legacy3x10({ onGoHome }) {
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

          <span className="breadcrumb-current">LEGACY 3X10</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">LEGACY 3X10</h1>

        <div className="boutique-info">
          <p>3x10 · HARMONY</p>
          <p>B2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/LEGACY.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`LEGACY 3X10 ${index + 1}`}
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