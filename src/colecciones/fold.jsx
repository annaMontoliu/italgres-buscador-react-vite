// src/colecciones/fold.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/fold/fold-01.jpg";
import img02 from "../assets/imagenes/fold/fold-02.jpg";
import img03 from "../assets/imagenes/fold/fold-03.jpg";
import img04 from "../assets/imagenes/fold/fold-04.jpg";
import img05 from "../assets/imagenes/fold/fold-05.jpg";
import img06 from "../assets/imagenes/fold/fold-06.jpg";
import img07 from "../assets/imagenes/fold/fold-07.jpg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
];

export function Fold() {
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

  function goToDrawerD4() {
    sessionStorage.setItem("boutiqueCabinet", "D");
    sessionStorage.setItem("boutiqueDrawer", "D4");
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

          <button className="breadcrumb-link" onClick={goToDrawerD4}>
            D4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">FOLD</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">FOLD</h1>

        <div className="boutique-info">
          <p>6''X15'' · HARMONY</p>
          <p>D4</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/FOLD.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`FOLD ${index + 1}`}
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