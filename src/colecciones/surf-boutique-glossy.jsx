// src/colecciones/surf-boutique-glossy.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import surfBoutique01 from "../assets/imagenes/surf-boutique/surf-boutique-01.jpg";
import surfBoutique02 from "../assets/imagenes/surf-boutique/surf-boutique-02.jpg";
import surfBoutique03 from "../assets/imagenes/surf-boutique/surf-boutique-03.jpg";
import surfBoutique04 from "../assets/imagenes/surf-boutique/surf-boutique-04.jpg";
import surfBoutique05 from "../assets/imagenes/surf-boutique/surf-boutique-05.jpg";
import surfBoutique06 from "../assets/imagenes/surf-boutique/surf-boutique-06.jpg";
import surfBoutique07 from "../assets/imagenes/surf-boutique/surf-boutique-07.jpg";
import surfBoutique08 from "../assets/imagenes/surf-boutique/surf-boutique-08.jpg";
import surfBoutique09 from "../assets/imagenes/surf-boutique/surf-boutique-09.jpg";
import surfBoutique10 from "../assets/imagenes/surf-boutique/surf-boutique-10.jpg";
import surfBoutique11 from "../assets/imagenes/surf-boutique/surf-boutique-11.jpg";
import surfBoutique12 from "../assets/imagenes/surf-boutique/surf-boutique-12.jpg";
import surfBoutique13 from "../assets/imagenes/surf-boutique/surf-boutique-13.jpg";
import surfBoutique14 from "../assets/imagenes/surf-boutique/surf-boutique-14.jpg";
import surfBoutique15 from "../assets/imagenes/surf-boutique/surf-boutique-15.jpg";

const images = [
  surfBoutique01,
  surfBoutique02,
  surfBoutique03,
  surfBoutique04,
  surfBoutique05,
  surfBoutique06,
  surfBoutique07,
  surfBoutique08,
  surfBoutique09,
  surfBoutique10,
  surfBoutique11,
  surfBoutique12,
  surfBoutique13,
  surfBoutique14,
  surfBoutique15,
];

export function SurfGlossy() {
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

  function goToCabinetJ() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerJ1() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J1");
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
            onClick={goToCabinetJ}
          >
            J
          </button>

          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerJ1}
          >
            J1
          </button>

          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">
            SURF GLOSSY
          </span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          SURF GLOSSY
        </h1>

        <div className="boutique-info">
          <p>10''X14'' · VIVES</p>
          <p>J1</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/SURF.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SURF GLOSSY ${index + 1}`}
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