import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import sixty01 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-01.jpg";
import sixty02 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-02.jpg";
import sixty03 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-03.jpg";
import sixty04 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-04.jpg";
import sixty05 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-05.jpg";
import sixty06 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-06.jpg";
import sixty07 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-07.jpg";
import sixty08 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-08.jpg";
import sixty09 from "../assets/imagenes/sixty-minibrick/sixty-minibrick-09.jpg";

const images = [
  sixty01,
  sixty02,
  sixty03,
  sixty04,
  sixty05,
  sixty06,
  sixty07,
  sixty08,
  sixty09,
];

export function SixtyMinibrick() {
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

  function goToCabinetF() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerF1() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.setItem("boutiqueDrawer", "F1");
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
            onClick={goToCabinetF}
          >
            F
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerF1}
          >
            F1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">SIXTY MINIBRICK</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          SIXTY MINIBRICK
        </h1>

        <div className="boutique-info">
          <p>2''x6'' · EMIL</p>
          <p>F1</p>
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
              alt={`SIXTY MINIBRICK ${index + 1}`}
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