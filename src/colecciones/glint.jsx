import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import glint01 from "../assets/imagenes/glint/glint-01.jpg";
import glint02 from "../assets/imagenes/glint/glint-02.jpg";
import glint03 from "../assets/imagenes/glint/glint-03.jpg";
import glint04 from "../assets/imagenes/glint/glint-04.jpg";
import glint05 from "../assets/imagenes/glint/glint-05.jpg";
import glint06 from "../assets/imagenes/glint/glint-06.jpg";
import glint07 from "../assets/imagenes/glint/glint-07.jpg";

const images = [
  glint01,
  glint02,
  glint03,
  glint04,
  glint05,
  glint06,
  glint07,
];

export function Glint() {
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

  function goToDrawerA3() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A3");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA3}>
            A3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">GLINT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">GLINT</h1>

        <div className="boutique-info">
          <p>2''X6'' · HARMONY</p>
          <p>A3</p>
        </div>

        {/* ✅ PDF en carpeta /pdf */}
        <ColeccionLayout infoUrl="/pdf/GLINT.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`GLINT ${index + 1}`}
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