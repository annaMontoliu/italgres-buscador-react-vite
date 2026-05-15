import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import sixtyHexagonal01 from "../assets/imagenes/sixty-hexagonal/sixty-hexagonal-01.jpg";
import sixtyHexagonal02 from "../assets/imagenes/sixty-hexagonal/sixty-hexagonal-02.jpg";
import sixtyHexagonal03 from "../assets/imagenes/sixty-hexagonal/sixty-hexagonal-03.jpg";
import sixtyHexagonal04 from "../assets/imagenes/sixty-hexagonal/sixty-hexagonal-04.jpg";

const images = [
  sixtyHexagonal01,
  sixtyHexagonal02,
  sixtyHexagonal03,
  sixtyHexagonal04,
];

export function SixtyHexagonal() {
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

  function goToCabinetH() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerH5() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H5");
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
            onClick={goToCabinetH}
          >
            H
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerH5}
          >
            H5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">SIXTY HEXAGONAL</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          SIXTY HEXAGONAL
        </h1>

        <div className="boutique-info">
          <p>6''X7'' · EMIL</p>
          <p>H5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/SIXTY-MINIBRICK.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SIXTY HEXAGONAL ${index + 1}`}
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