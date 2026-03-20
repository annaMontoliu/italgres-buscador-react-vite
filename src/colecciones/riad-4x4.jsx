import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import riad01 from "../assets/imagenes/riad/riad-4x4/riad-4x4-01.jpg";
import riad02 from "../assets/imagenes/riad/riad-4x4/riad-4x4-02.jpg";
import riad03 from "../assets/imagenes/riad/riad-4x4/riad-4x4-03.jpg";
import riad04 from "../assets/imagenes/riad/riad-4x4/riad-4x4-04.jpg";
import riad05 from "../assets/imagenes/riad/riad-4x4/riad-4x4-05.jpg";
import riad06 from "../assets/imagenes/riad/riad-4x4/riad-4x4-06.jpg";
import riad07 from "../assets/imagenes/riad/riad-4x4/riad-4x4-07.jpg";
import riad08 from "../assets/imagenes/riad/riad-4x4/riad-4x4-08.jpg";
import riad09 from "../assets/imagenes/riad/riad-4x4/riad-4x4-09.jpg";
import riad10 from "../assets/imagenes/riad/riad-4x4/riad-4x4-10.jpg";

const images = [
  riad01,
  riad02,
  riad03,
  riad04,
  riad05,
  riad06,
  riad07,
  riad08,
  riad09,
  riad10,
];

export function Riad4x4() {
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

  function goToDrawerA4() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A4");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA4}>
            A4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">RIAD</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">RIAD</h1>

        <div className="boutique-info">
          <p>4''X4'' · HARMONY</p>
          <p>A4 · D3</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/RIAD.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`RIAD ${index + 1}`}
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