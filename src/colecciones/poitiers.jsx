// src/colecciones/poitiers.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/poitiers/poitiers-01.jpg";
import img02 from "../assets/imagenes/poitiers/poitiers-02.jpg";
import img03 from "../assets/imagenes/poitiers/poitiers-03.jpg";
import img04 from "../assets/imagenes/poitiers/poitiers-04.jpg";
import img05 from "../assets/imagenes/poitiers/poitiers-05.jpg";
import img06 from "../assets/imagenes/poitiers/poitiers-06.jpg";
import img07 from "../assets/imagenes/poitiers/poitiers-07.jpg";
import img08 from "../assets/imagenes/poitiers/poitiers-08.jpg";
import img09 from "../assets/imagenes/poitiers/poitiers-09.jpg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
];

export function Poitiers() {
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

  function goToDrawerC3() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.setItem("boutiqueDrawer", "C3");
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

          <button className="breadcrumb-link" onClick={goToDrawerC3}>
            C3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">POITIERS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">POITIERS</h1>

        <div className="boutique-info">
          <p>2''X10'' & 3''X6'' · HARMONY</p>
          <p>C3</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/POITIERS.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`POITIERS ${index + 1}`}
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