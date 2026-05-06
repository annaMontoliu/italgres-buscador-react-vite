import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import chintz01 from "../assets/imagenes/chintz/chintz-01.jpg";
import chintz02 from "../assets/imagenes/chintz/chintz-02.jpg";
import chintz03 from "../assets/imagenes/chintz/chintz-03.jpg";
import chintz04 from "../assets/imagenes/chintz/chintz-04.jpg";

const images = [
  chintz01,
  chintz02,
  chintz03,
  chintz04,
];

export function Chintz() {
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

  function goToDrawerF3() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.setItem("boutiqueDrawer", "F3");
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
            onClick={goToDrawerF3}
          >
            F3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">CHINTZ</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">CHINTZ</h1>

        <div className="boutique-info">
          <p>7''X8'' · CEVICA</p>
          <p>F3</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/Chintz-inspiration.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`CHINTZ ${index + 1}`}
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