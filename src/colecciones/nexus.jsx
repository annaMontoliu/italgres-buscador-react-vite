import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import nexus01 from "../assets/imagenes/nexus/nexus-01.jpg";
import nexus02 from "../assets/imagenes/nexus/nexus-02.jpg";
import nexus03 from "../assets/imagenes/nexus/nexus-03.jpg";

const images = [nexus01, nexus02, nexus03];

export function Nexus({ onGoHome }) {
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

          <span className="breadcrumb-current">NEXUS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">NEXUS</h1>

        <div className="boutique-info">
          <p>7x7 · CERLAT</p>
          <p>B5</p>
        </div>

        <ColeccionLayout infoUrl="https://www.azulejosmijares.com/fr/collections/cerlat/nexus/" />

        <section className="gallery-grid">
          <img
            src={nexus01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="NEXUS 1"
          />
          <img
            src={nexus02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="NEXUS 2"
          />
          <img
            src={nexus03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="NEXUS 3"
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