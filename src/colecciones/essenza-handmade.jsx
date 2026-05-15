import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import essenzaHandmade01 from "../assets/imagenes/essenza-handmade/essenza-handmade-01.jpg";
import essenzaHandmade02 from "../assets/imagenes/essenza-handmade/essenza-handmade-02.jpg";
import essenzaHandmade03 from "../assets/imagenes/essenza-handmade/essenza-handmade-03.jpg";
import essenzaHandmade04 from "../assets/imagenes/essenza-handmade/essenza-handmade-04.jpg";
import essenzaHandmade05 from "../assets/imagenes/essenza-handmade/essenza-handmade-05.jpg";
import essenzaHandmade06 from "../assets/imagenes/essenza-handmade/essenza-handmade-06.jpg";

const images = [
  essenzaHandmade01,
  essenzaHandmade02,
  essenzaHandmade03,
  essenzaHandmade04,
  essenzaHandmade05,
  essenzaHandmade06,
];

export function EssenzaHandmade() {
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

  function goToDrawerH2() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H2");
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
            onClick={goToDrawerH2}
          >
            H2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ESSENZA HANDMADE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          ESSENZA HANDMADE
        </h1>

        <div className="boutique-info">
          <p>4''x9'' · ALTERET</p>
          <p>H2</p>
        </div>

        <ColeccionLayout infoUrl="https://www.alteret.com/en/products/7262-handmade-wall-tiles/7266-collections/p-141575-essenza-s" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ESSENZA HANDMADE ${index + 1}`}
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