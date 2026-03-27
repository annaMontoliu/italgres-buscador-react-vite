import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import terralma1 from "../assets/imagenes/terralma/terralma-01.jpg";
import terralma2 from "../assets/imagenes/terralma/terralma-02.jpg";
import terralma3 from "../assets/imagenes/terralma/terralma-03.jpg";
import terralma4 from "../assets/imagenes/terralma/terralma-04.jpg";
import terralma5 from "../assets/imagenes/terralma/terralma-05.jpg";
import terralma6 from "../assets/imagenes/terralma/terralma-06.jpg";
import terralma7 from "../assets/imagenes/terralma/terralma-07.jpg";
import terralma8 from "../assets/imagenes/terralma/terralma-08.jpg";
import terralma9 from "../assets/imagenes/terralma/terralma-09.jpg";
import terralma10 from "../assets/imagenes/terralma/terralma-10.jpg";
import terralma11 from "../assets/imagenes/terralma/terralma-11.jpg";
import terralma12 from "../assets/imagenes/terralma/terralma-12.jpg";

const images = [
  terralma1,
  terralma2,
  terralma3,
  terralma4,
  terralma5,
  terralma6,
  terralma7,
  terralma8,
  terralma9,
  terralma10,
  terralma11,
  terralma12,
];

export function Terralma() {
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

  function goToDrawerA5() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A5");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA5}>
            A5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">TERRALMA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">TERRALMA</h1>

        <div className="boutique-info">
          <p>3''X14'' · PORTOBELLO</p>
          <p>A5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/TERRALMA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`TERRALMA ${index + 1}`}
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