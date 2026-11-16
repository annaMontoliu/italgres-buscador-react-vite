
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import pompei01 from "../assets/imagenes/pompei/pompei-01.jpg";
import pompei02 from "../assets/imagenes/pompei/pompei-02.jpg";
import pompei03 from "../assets/imagenes/pompei/pompei-03.jpg";
import pompei04 from "../assets/imagenes/pompei/pompei-04.jpg";
import pompei05 from "../assets/imagenes/pompei/pompei-05.jpg";

const images = [
  pompei01,
  pompei02,
  pompei03,
  pompei04,
  pompei05,
];

export function Pompei() {
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
            onClick={goToCabinetB}
          >
            B
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerB2}
          >
            B2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">POMPEI</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">POMPEI</h1>

        <div className="boutique-info">
          <p>2"x6" · 8"x8" · TONALITE</p>
          <p>B2 · B10</p>
        </div>

        <ColeccionLayout infoUrl="https://www.tonalite.it/media/pompei_tonalite.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`POMPEI ${index + 1}`}
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
