import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import terre1 from "../assets/imagenes/terre/terre-01.jpg";
import terre2 from "../assets/imagenes/terre/terre-02.jpg";
import terre3 from "../assets/imagenes/terre/terre-03.jpg";
import terre4 from "../assets/imagenes/terre/terre-04.jpg";
import terre5 from "../assets/imagenes/terre/terre-05.jpg";
import terre6 from "../assets/imagenes/terre/terre-06.jpg";
import terre7 from "../assets/imagenes/terre/terre-07.jpg";

const images = [
  terre1,
  terre2,
  terre3,
  terre4,
  terre5,
  terre6,
  terre7,
];

export function Terre() {
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

  function goToDrawerA7() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A7");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA7}>
            A7
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">TERRE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">TERRE</h1>

        <div className="boutique-info">
          <p>2''X6'' · CEVICA</p>
          <p>A7</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/TERRE.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`TERRE ${index + 1}`}
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