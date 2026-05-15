import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import chevronHandmade01 from "../assets/imagenes/chevron-handmade/chevron-handmade-01.jpg";
import chevronHandmade02 from "../assets/imagenes/chevron-handmade/chevron-handmade-02.jpg";
import chevronHandmade03 from "../assets/imagenes/chevron-handmade/chevron-handmade-03.jpg";
import chevronHandmade04 from "../assets/imagenes/chevron-handmade/chevron-handmade-04.jpg";
import chevronHandmade05 from "../assets/imagenes/chevron-handmade/chevron-handmade-05.jpg";
import chevronHandmade06 from "../assets/imagenes/chevron-handmade/chevron-handmade-06.jpg";
import chevronHandmade07 from "../assets/imagenes/chevron-handmade/chevron-handmade-07.jpg";
import chevronHandmade08 from "../assets/imagenes/chevron-handmade/chevron-handmade-08.jpg";
import chevronHandmade09 from "../assets/imagenes/chevron-handmade/chevron-handmade-09.jpg";

const images = [
  chevronHandmade01,
  chevronHandmade02,
  chevronHandmade03,
  chevronHandmade04,
  chevronHandmade05,
  chevronHandmade06,
  chevronHandmade07,
  chevronHandmade08,
  chevronHandmade09,
];

export function ChevronHandmade() {
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
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinetH}>
            H
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerH1}>
            H1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">CHEVRON HANDMADE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">CHEVRON HANDMADE</h1>

        <div className="boutique-info">
          <p>2''X11' · ALTERET</p>
          <p>H1</p>
        </div>

        <ColeccionLayout infoUrl="https://www.alteret.com/en/products/7262-handmade-wall-tiles/7266-collections/p-82810-chevron" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`CHEVRON HANDMADE ${index + 1}`}
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