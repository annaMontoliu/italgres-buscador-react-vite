import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import zelijMate2x801 from "../assets/imagenes/zelij/zelij-mate/zelij-mate-2x8/zelij-mate-2x8-01.jpg";
import zelijMate2x802 from "../assets/imagenes/zelij/zelij-mate/zelij-mate-2x8/zelij-mate-2x8-02.jpg";

const images = [zelijMate2x801, zelijMate2x802];

export function ZelijMate2x8({ onGoHome }) {
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

  function goToCabinetB() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerB1() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B1");
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

          <button className="breadcrumb-link" onClick={goToDrawerB1}>
            B1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ZELIJ MATE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ZELIJ MATE</h1>

        <div className="boutique-info">
          <p>2"x8" · CEVICA</p>
          <p>B1</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/Zelij.pdf" />

        <section className="gallery-grid">
          <img
            src={zelijMate2x801}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ZELIJ MATE 1"
          />
          <img
            src={zelijMate2x802}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ZELIJ MATE 2"
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