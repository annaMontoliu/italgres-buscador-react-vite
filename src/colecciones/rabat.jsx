import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import rabat01 from "../assets/imagenes/rabat/rabat-01.jpg";
import rabat02 from "../assets/imagenes/rabat/rabat-02.jpg";
import rabat03 from "../assets/imagenes/rabat/rabat-03.jpg";
import rabat04 from "../assets/imagenes/rabat/rabat-04.jpg";
import rabat05 from "../assets/imagenes/rabat/rabat-05.jpg";
import rabat06 from "../assets/imagenes/rabat/rabat-06.jpg";

const images = [
  rabat01,
  rabat02,
  rabat03,
  rabat04,
  rabat05,
  rabat06,
];

export function Rabat({ onGoHome }) {
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

          <span className="breadcrumb-current">RABAT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">RABAT</h1>

        <div className="boutique-info">
          <p>2x10 · HARMONY</p>
          <p>B2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/RABAT.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`RABAT ${index + 1}`}
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