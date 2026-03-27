import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import sixties1 from "../assets/imagenes/sixties/sixties-01.jpg";
import sixties2 from "../assets/imagenes/sixties/sixties-02.jpg";
import sixties3 from "../assets/imagenes/sixties/sixties-03.jpg";
import sixties4 from "../assets/imagenes/sixties/sixties-04.jpg";
import sixties5 from "../assets/imagenes/sixties/sixties-05.jpg";
import sixties6 from "../assets/imagenes/sixties/sixties-06.jpg";
import sixties7 from "../assets/imagenes/sixties/sixties-07.jpg";

const images = [
  sixties1,
  sixties2,
  sixties3,
  sixties4,
  sixties5,
  sixties6,
  sixties7,
];

export function Sixties() {
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

  function goToDrawerA10() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A10");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA10}>
            A10
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">SIXTIES</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">SIXTIES</h1>

        <div className="boutique-info">
          <p>6''X6'' · VIVES</p>
          <p>A10</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/SIXTIES.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SIXTIES ${index + 1}`}
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