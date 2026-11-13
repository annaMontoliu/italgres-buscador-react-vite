
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import mediterranea01 from "../assets/imagenes/mediterranea/mediterranea-01.jpg";
import mediterranea02 from "../assets/imagenes/mediterranea/mediterranea-02.jpg";

const images = [mediterranea01, mediterranea02];

export function Mediterranea({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  function goToBoutique() {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCabinetJ() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerJ4() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J4");
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

          <button className="breadcrumb-link" onClick={goToCabinetJ}>
            J
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerJ4}>
            J4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">MEDITERRANEA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">MEDITERRANEA</h1>

        <div className="boutique-info">
          <p>7"x2" · NATUCER</p>
          <p>J4</p>
        </div>

        <ColeccionLayout infoUrl="https://www.natucer.es/PDFs/Fichas/Mediterranea-2026-Natucer.pdf" />

        <section className="gallery-grid">
          <img
            src={mediterranea01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MEDITERRANEA 1"
          />
          <img
            src={mediterranea02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MEDITERRANEA 2"
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
