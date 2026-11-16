
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import bryggen01 from "../assets/imagenes/bryggen/bryggen-01.jpg";
import bryggen02 from "../assets/imagenes/bryggen/bryggen-02.jpg";
import bryggen03 from "../assets/imagenes/bryggen/bryggen-03.jpg";
import bryggen04 from "../assets/imagenes/bryggen/bryggen-04.jpg";
import bryggen05 from "../assets/imagenes/bryggen/bryggen-05.jpg";
import bryggen06 from "../assets/imagenes/bryggen/bryggen-06.jpg";

const images = [
  bryggen01,
  bryggen02,
  bryggen03,
  bryggen04,
  bryggen05,
  bryggen06,
];

export function Bryggen() {
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

  function goToDrawerA6() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A6");
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
            onClick={goToCabinetA}
          >
            A
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerA6}
          >
            A6
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BRYGGEN</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BRYGGEN</h1>

        <div className="boutique-info">
          <p>2"x15" · TONALITE</p>
          <p>A6</p>
        </div>

        <ColeccionLayout infoUrl="https://www.tonalite.it/media/bryggen_tonalite-2.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BRYGGEN ${index + 1}`}
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
