import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import samira01 from "../assets/imagenes/samira/samira-01.jpg";
import samira02 from "../assets/imagenes/samira/samira-02.jpg";
import samira03 from "../assets/imagenes/samira/samira-03.jpg";
import samira04 from "../assets/imagenes/samira/samira-04.jpg";
import samira05 from "../assets/imagenes/samira/samira-05.jpg";
import samira06 from "../assets/imagenes/samira/samira-06.jpg";
import samira07 from "../assets/imagenes/samira/samira-07.jpg";
import samira08 from "../assets/imagenes/samira/samira-08.jpg";
import samira09 from "../assets/imagenes/samira/samira-09.jpg";
import samira10 from "../assets/imagenes/samira/samira-10.jpg";
import samira11 from "../assets/imagenes/samira/samira-11.jpg";
import samira12 from "../assets/imagenes/samira/samira-12.jpg";

const images = [
  samira01,
  samira02,
  samira03,
  samira04,
  samira05,
  samira06,
  samira07,
  samira08,
  samira09,
  samira10,
  samira11,
  samira12,
];

export function Samira() {
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

          <span className="breadcrumb-current">SAMIRA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">SAMIRA</h1>

        <div className="boutique-info">
          <p>4''X4'' · HARMONY</p>
          <p>G5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/SAMIRA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SAMIRA ${index + 1}`}
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