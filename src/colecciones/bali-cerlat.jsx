import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import bali01 from "../assets/imagenes/bali-cerlat/bali-cerlat-01.jpg";
import bali02 from "../assets/imagenes/bali-cerlat/bali-cerlat-02.jpg";
import bali03 from "../assets/imagenes/bali-cerlat/bali-cerlat-03.jpg";
import bali04 from "../assets/imagenes/bali-cerlat/bali-cerlat-04.jpg";
import bali05 from "../assets/imagenes/bali-cerlat/bali-cerlat-05.jpg";
import bali06 from "../assets/imagenes/bali-cerlat/bali-cerlat-06.jpg";
import bali07 from "../assets/imagenes/bali-cerlat/bali-cerlat-07.jpg";

const images = [
  bali01,
  bali02,
  bali03,
  bali04,
  bali05,
  bali06,
  bali07,
];

export function BaliCerlat({ onGoHome }) {
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

          <span className="breadcrumb-current">BALI CERLAT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BALI CERLAT</h1>

        <div className="boutique-info">
          <p>6x6 · CERLAT</p>
          <p>B5 · D9 · G5</p>
        </div>

        <ColeccionLayout infoUrl="https://www.azulejosmijares.com/wp-content/uploads/bali.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BALI CERLAT ${index + 1}`}
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