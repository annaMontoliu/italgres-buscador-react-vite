import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import complementto01 from "../assets/imagenes/complementto/complementto-matte-liso/complementto-matte-liso-01.jpg";

const images = [
  complementto01,
];

export function ComplementtoMatteLiso() {
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

  function goToDrawerG3() {
    sessionStorage.setItem("boutiqueCabinet", "G");
    sessionStorage.setItem("boutiqueDrawer", "G3");
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
            onClick={goToDrawerG3}
          >
            G3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">
            COMPLEMENTTO MATTE LISO
          </span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          COMPLEMENTTO MATTE LISO
        </h1>

        <div className="boutique-info">
          <p>2''x6'' · COMPLEMENTTO</p>
          <p>G3</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/COMPLEMENTTO-MATTE-LISO.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`COMPLEMENTTO MATTE LISO ${index + 1}`}
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