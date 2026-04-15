// src/colecciones/salou.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/salou/salou-01.jpg";
import img02 from "../assets/imagenes/salou/salou-02.jpg";
import img03 from "../assets/imagenes/salou/salou-03.jpg";
import img04 from "../assets/imagenes/salou/salou-04.jpg";

const images = [img01, img02, img03, img04];

export function Salou() {
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

  function goToCabinetC() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerC4() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.setItem("boutiqueDrawer", "C4");
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

          <button className="breadcrumb-link" onClick={goToCabinetC}>
            C
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerC4}>
            C4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">SALOU</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">SALOU</h1>

        <div className="boutique-info">
          <p>3''X12'' · VIVES</p>
          <p>C4</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/SALOU.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SALOU ${index + 1}`}
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