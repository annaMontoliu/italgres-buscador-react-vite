import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import intermix01 from "../assets/imagenes/intermix/intermix-01.jpg";
import intermix02 from "../assets/imagenes/intermix/intermix-02.jpg";
import intermix03 from "../assets/imagenes/intermix/intermix-03.jpg";
import intermix04 from "../assets/imagenes/intermix/intermix-04.jpg";

const images = [intermix01, intermix02, intermix03, intermix04];

export function Intermix() {
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

          <span className="breadcrumb-current">INTERMIX</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">INTERMIX</h1>

        <div className="boutique-info">
          <p>6''X6'' · PORTOBELLO</p>
          <p>A5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/INTERMIX.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`INTERMIX ${index + 1}`}
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