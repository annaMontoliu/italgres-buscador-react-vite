import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import samoa01 from "../assets/imagenes/samoa/samoa-01.jpg";
import samoa02 from "../assets/imagenes/samoa/samoa-02.jpg";
import samoa03 from "../assets/imagenes/samoa/samoa-03.jpg";
import samoa04 from "../assets/imagenes/samoa/samoa-04.jpg";
import samoa05 from "../assets/imagenes/samoa/samoa-05.jpg";

const images = [
  samoa01,
  samoa02,
  samoa03,
  samoa04,
  samoa05,
];

export function Samoa() {
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

  function goToCabinetG() {
    sessionStorage.setItem("boutiqueCabinet", "G");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerG5() {
    sessionStorage.setItem("boutiqueCabinet", "G");
    sessionStorage.setItem("boutiqueDrawer", "G5");
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
            onClick={goToCabinetG}
          >
            G
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerG5}
          >
            G5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">SAMOA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">SAMOA</h1>

        <div className="boutique-info">
          <p>6''X6'' & 9''x9'' · CERLAT</p>
          <p>G5</p>
        </div>

        <ColeccionLayout infoUrl="https://www.azulejosmijares.com/wp-content/uploads/samoa.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SAMOA ${index + 1}`}
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