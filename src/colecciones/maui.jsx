import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import maui01 from "../assets/imagenes/maui/maui-01.jpg";
import maui02 from "../assets/imagenes/maui/maui-02.jpg";
import maui03 from "../assets/imagenes/maui/maui-03.jpg";
import maui04 from "../assets/imagenes/maui/maui-04.jpg";

const images = [
  maui01,
  maui02,
  maui03,
  maui04,
];

export function Maui() {
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

  function goToCabinetH() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerH4() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H4");
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
            onClick={goToCabinetH}
          >
            H
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerH4}
          >
            H4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">MAUI</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">MAUI</h1>

        <div className="boutique-info">
          <p>3''X10'' · CERLAT</p>
          <p>H4 · H5</p>
        </div>

        <ColeccionLayout infoUrl="https://www.azulejosmijares.com/wp-content/uploads/MAUI-L25-L53.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`MAUI ${index + 1}`}
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