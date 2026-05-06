import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import abacus01 from "../assets/imagenes/abacus/abacus-01.jpg";
import abacus02 from "../assets/imagenes/abacus/abacus-02.jpg";
import abacus03 from "../assets/imagenes/abacus/abacus-03.jpg";
import abacus04 from "../assets/imagenes/abacus/abacus-04.jpg";
import abacus05 from "../assets/imagenes/abacus/abacus-05.jpg";
import abacus06 from "../assets/imagenes/abacus/abacus-06.jpg";
import abacus07 from "../assets/imagenes/abacus/abacus-07.jpg";
import abacus08 from "../assets/imagenes/abacus/abacus-08.jpg";

const images = [
  abacus01,
  abacus02,
  abacus03,
  abacus04,
  abacus05,
  abacus06,
  abacus07,
  abacus08,
];

export function Abacus() {
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

          <span className="breadcrumb-current">ABACUS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ABACUS</h1>

        <div className="boutique-info">
          <p>3''X8'' · ERGON</p>
          <p>F1</p>
        </div>

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Abacus%20Catalogo%202026.02%20Web.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ABACUS ${index + 1}`}
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