import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import jazba01 from "../assets/imagenes/jazba/jazba-01.jpg";
import jazba02 from "../assets/imagenes/jazba/jazba-02.jpg";
import jazba03 from "../assets/imagenes/jazba/jazba-03.jpg";
import jazba04 from "../assets/imagenes/jazba/jazba-04.jpg";
import jazba05 from "../assets/imagenes/jazba/jazba-05.jpg";
import jazba06 from "../assets/imagenes/jazba/jazba-06.jpg";
import jazba07 from "../assets/imagenes/jazba/jazba-07.jpg";
import jazba08 from "../assets/imagenes/jazba/jazba-08.jpg";
import jazba09 from "../assets/imagenes/jazba/jazba-09.jpg";
import jazba10 from "../assets/imagenes/jazba/jazba-10.jpg";
import jazba11 from "../assets/imagenes/jazba/jazba-11.jpg";
import jazba12 from "../assets/imagenes/jazba/jazba-12.jpg";
import jazba13 from "../assets/imagenes/jazba/jazba-13.jpg";
import jazba14 from "../assets/imagenes/jazba/jazba-14.jpg";
import jazba15 from "../assets/imagenes/jazba/jazba-15.jpg";

const images = [
  jazba01,
  jazba02,
  jazba03,
  jazba04,
  jazba05,
  jazba06,
  jazba07,
  jazba08,
  jazba09,
  jazba10,
  jazba11,
  jazba12,
  jazba13,
  jazba14,
  jazba15,
];

export function Jazba({ onGoHome }) {
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

  function goToDrawerB3() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B3");
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

          <button className="breadcrumb-link" onClick={goToDrawerB3}>
            B3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">JAZBA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">JAZBA</h1>

        <div className="boutique-info">
          <p>2x10 · CIFRE</p>
          <p>B3</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/RUSTIC.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`JAZBA ${index + 1}`}
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