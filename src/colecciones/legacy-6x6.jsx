import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import legacy6x601 from "../assets/imagenes/legacy/legacy-6x6/legacy-6x6-01.jpg";
import legacy6x602 from "../assets/imagenes/legacy/legacy-6x6/legacy-6x6-02.jpg";
import legacy6x603 from "../assets/imagenes/legacy/legacy-6x6/legacy-6x6-03.jpg";

const images = [legacy6x601, legacy6x602, legacy6x603];

export function Legacy6x6({ onGoHome }) {
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

          <span className="breadcrumb-current">LEGACY 6X6</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">LEGACY 6X6</h1>

        <div className="boutique-info">
          <p>6x6 · HARMONY</p>
          <p>B5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/LEGACY.PDF" />

        <section className="gallery-grid">
          <img
            src={legacy6x601}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="LEGACY 6X6 1"
          />
          <img
            src={legacy6x602}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="LEGACY 6X6 2"
          />
          <img
            src={legacy6x603}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="LEGACY 6X6 3"
          />
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