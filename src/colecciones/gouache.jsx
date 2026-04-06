import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import gouache01 from "../assets/imagenes/gouache/gouache-01.jpg";
import gouache02 from "../assets/imagenes/gouache/gouache-02.jpg";
import gouache03 from "../assets/imagenes/gouache/gouache-03.jpg";
import gouache04 from "../assets/imagenes/gouache/gouache-04.jpg";
import gouache05 from "../assets/imagenes/gouache/gouache-05.jpg";
import gouache06 from "../assets/imagenes/gouache/gouache-06.jpg";
import gouache07 from "../assets/imagenes/gouache/gouache-07.jpg";
import gouache08 from "../assets/imagenes/gouache/gouache-08.jpg";
import gouache09 from "../assets/imagenes/gouache/gouache-09.jpg";
import gouache10 from "../assets/imagenes/gouache/gouache-10.jpg";

const images = [
  gouache01,
  gouache02,
  gouache03,
  gouache04,
  gouache05,
  gouache06,
  gouache07,
  gouache08,
  gouache09,
  gouache10,
];

export function Gouache({ onGoHome }) {
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

  function goToCabinetB() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerB5() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B5");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <div className="breadcrumb-boutique">
          <button className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToCabinetB}>
            B
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerB5}>
            B5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">GOUACHE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">GOUACHE</h1>

        <div className="boutique-info">
          <p>6x6 · PORTOBELLO</p>
          <p>B5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/GOUACHE.PDF" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`GOUACHE ${index + 1}`}
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