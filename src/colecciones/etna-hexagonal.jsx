import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import etnaHexagonal01 from "../assets/imagenes/etna-hexagonal/etna-hexagonal-01.jpg";
import etnaHexagonal02 from "../assets/imagenes/etna-hexagonal/etna-hexagonal-02.jpg";
import etnaHexagonal03 from "../assets/imagenes/etna-hexagonal/etna-hexagonal-03.jpg";

const images = [
  etnaHexagonal01,
  etnaHexagonal02,
  etnaHexagonal03,
];

export function EtnaHexagonal() {
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

          <span className="breadcrumb-current">ETNA HEXAGONAL</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          ETNA HEXAGONAL
        </h1>

        <div className="boutique-info">
          <p>4''X5'' · ALTERET</p>
          <p>H2</p>
        </div>

        <ColeccionLayout infoUrl="https://www.alteret.com/es/productos/7262-azulejos-de-terracota-manual/7266-colecciones/p-69912-etna-hexagono" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ETNA HEXAGONAL ${index + 1}`}
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