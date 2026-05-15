import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import zelligeHandmade01 from "../assets/imagenes/zellige-handmade/zellige-handmade-01.jpg";
import zelligeHandmade02 from "../assets/imagenes/zellige-handmade/zellige-handmade-02.jpg";
import zelligeHandmade03 from "../assets/imagenes/zellige-handmade/zellige-handmade-03.png";

const images = [
  zelligeHandmade01,
  zelligeHandmade02,
  zelligeHandmade03,
];

export function ZelligeHandmade() {
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

  function goToDrawerH1() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H1");
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
            onClick={goToDrawerH1}
          >
            H1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ZELLIGE HANDMADE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          ZELLIGE HANDMADE
        </h1>

        <div className="boutique-info">
          <p>4''X4'' · ALTERET</p>
          <p>H1</p>
        </div>

        <ColeccionLayout infoUrl="https://www.alteret.com/en/products/14670-zellige-tiles/14671-collection/p-137087-zellige-10x10-cm-blanco-natural" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ZELLIGE HANDMADE ${index + 1}`}
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