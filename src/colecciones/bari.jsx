import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS IMÁGENES
import bari01 from "../assets/imagenes/bari/bari-01.jpg";
import bari02 from "../assets/imagenes/bari/bari-02.jpg";
import bari03 from "../assets/imagenes/bari/bari-03.jpg";
import bari04 from "../assets/imagenes/bari/bari-04.jpg";
import bari05 from "../assets/imagenes/bari/bari-05.jpg";
import bari06 from "../assets/imagenes/bari/bari-06.jpg";
import bari07 from "../assets/imagenes/bari/bari-07.jpg";

// ARRAY IMÁGENES
const images = [
  bari01,
  bari02,
  bari03,
  bari04,
  bari05,
  bari06,
  bari07,
];

export function Bari({ onGoHome }) {
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

  function goToDrawerB9() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B9");
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

          <button className="breadcrumb-link" onClick={goToDrawerB9}>
            B9
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BARI</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BARI</h1>

        <div className="boutique-info">
          <p>2x10 · HARMONY</p>
          <p>B9</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/BARI.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BARI ${index + 1}`}
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