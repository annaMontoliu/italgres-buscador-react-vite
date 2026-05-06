import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import becolors01 from "../assets/imagenes/becolors/becolors-01.jpg";
import becolors02 from "../assets/imagenes/becolors/becolors-02.jpg";
import becolors03 from "../assets/imagenes/becolors/becolors-03.jpg";
import becolors04 from "../assets/imagenes/becolors/becolors-04.jpg";
import becolors05 from "../assets/imagenes/becolors/becolors-05.jpg";
import becolors06 from "../assets/imagenes/becolors/becolors-06.jpg";
import becolors07 from "../assets/imagenes/becolors/becolors-07.jpg";

const images = [
  becolors01,
  becolors02,
  becolors03,
  becolors04,
  becolors05,
  becolors06,
  becolors07,
];

export function Becolors() {
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

  function goToDrawerF4() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.setItem("boutiqueDrawer", "F4");
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
            onClick={goToDrawerF4}
          >
            F4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BECOLORS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BECOLORS</h1>

        <div className="boutique-info">
          <p>6''X6'' · CEVICA</p>
          <p>F4 / F8 / F9</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/BECOLORS.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BECOLORS ${index + 1}`}
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