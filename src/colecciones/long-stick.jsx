import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import longStick01 from "../assets/imagenes/long-stick/long-stick-01.jpg";
import longStick02 from "../assets/imagenes/long-stick/long-stick-02.jpg";
import longStick03 from "../assets/imagenes/long-stick/long-stick-03.jpg";
import longStick04 from "../assets/imagenes/long-stick/long-stick-04.jpg";
import longStick05 from "../assets/imagenes/long-stick/long-stick-05.jpg";
import longStick06 from "../assets/imagenes/long-stick/long-stick-06.jpg";
import longStick07 from "../assets/imagenes/long-stick/long-stick-07.jpg";
import longStick08 from "../assets/imagenes/long-stick/long-stick-08.jpg";
import longStick09 from "../assets/imagenes/long-stick/long-stick-09.jpg";

const images = [
  longStick01,
  longStick02,
  longStick03,
  longStick04,
  longStick05,
  longStick06,
  longStick07,
  longStick08,
  longStick09,
];

export function LongStick() {
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

  function goToCabinetA() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerA2() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A2");
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

          <button type="button" className="breadcrumb-link" onClick={goToCabinetA}>
            A
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA2}>
            A2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">LONG STICK</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">LONG STICK</h1>

        <div className="boutique-info">
          <p>1''X18'' · AMADIS</p>
          <p>A2</p>
        </div>

        <ColeccionLayout infoUrl="https://amadistiles.com/wp-content/uploads/2024/08/DIPTICO-LONG-STICK-APAISADO-julio-2024-web-2.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`LONG STICK ${index + 1}`}
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