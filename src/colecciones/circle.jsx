import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import circle01 from "../assets/imagenes/circle/circle-01.jpg";
import circle02 from "../assets/imagenes/circle/circle-02.jpg";
import circle03 from "../assets/imagenes/circle/circle-03.jpg";
import circle04 from "../assets/imagenes/circle/circle-04.jpg";
import circle05 from "../assets/imagenes/circle/circle-05.jpg";
import circle06 from "../assets/imagenes/circle/circle-06.jpg";
import circle07 from "../assets/imagenes/circle/circle-07.jpg";
import circle08 from "../assets/imagenes/circle/circle-08.jpg";
import circle09 from "../assets/imagenes/circle/circle-09.jpg";

const images = [
  circle01,
  circle02,
  circle03,
  circle04,
  circle05,
  circle06,
  circle07,
  circle08,
  circle09,
];

export function Circle() {
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

  function goToCabinetF() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerF2() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.setItem("boutiqueDrawer", "F2");
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
            onClick={goToCabinetF}
          >
            F
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerF2}
          >
            F2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">CIRCLE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">CIRCLE</h1>

        <div className="boutique-info">
          <p>12''X12'' · REALONDA</p>
          <p>F2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/CIRCLE.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`CIRCLE ${index + 1}`}
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