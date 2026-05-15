import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import antique01 from "../assets/imagenes/antique/antique-01.jpg";
import antique02 from "../assets/imagenes/antique/antique-02.jpg";
import antique03 from "../assets/imagenes/antique/antique-03.jpg";
import antique04 from "../assets/imagenes/antique/antique-04.jpg";
import antique05 from "../assets/imagenes/antique/antique-05.jpg";
import antique06 from "../assets/imagenes/antique/antique-06.jpg";
import antique07 from "../assets/imagenes/antique/antique-07.jpg";

const images = [
  antique01,
  antique02,
  antique03,
  antique04,
  antique05,
  antique06,
  antique07,
];

export function Antique() {
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

  function goToDrawerH10() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H10");
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
            onClick={goToDrawerH10}
          >
            H10
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ANTIQUE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ANTIQUE</h1>

        <div className="boutique-info">
          <p>6''X6'' · ESTUDIO CERAMICO</p>
          <p>H10</p>
        </div>

        <ColeccionLayout infoUrl="https://eceramico.com/wp-content/uploads/2023/07/catalogo-coleccion-ANTIQUE.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ANTIQUE ${index + 1}`}
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