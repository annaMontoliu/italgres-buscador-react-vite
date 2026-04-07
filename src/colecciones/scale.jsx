import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS IMÁGENES
import scale01 from "../assets/imagenes/scale/scale-01.jpg";
import scale02 from "../assets/imagenes/scale/scale-02.jpg";
import scale03 from "../assets/imagenes/scale/scale-03.jpg";
import scale04 from "../assets/imagenes/scale/scale-04.jpg";
import scale05 from "../assets/imagenes/scale/scale-05.jpg";
import scale06 from "../assets/imagenes/scale/scale-06.jpg";
import scale07 from "../assets/imagenes/scale/scale-07.jpg";
import scale08 from "../assets/imagenes/scale/scale-08.jpg";
import scale09 from "../assets/imagenes/scale/scale-09.jpg";

// ARRAY IMÁGENES
const images = [
  scale01,
  scale02,
  scale03,
  scale04,
  scale05,
  scale06,
  scale07,
  scale08,
  scale09,
];

export function Scale({ onGoHome }) {
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

  function goToDrawerB10() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B10");
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

          <button className="breadcrumb-link" onClick={goToDrawerB10}>
            B10
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">SCALE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">SCALE</h1>

        <div className="boutique-info">
          <p>4x5 · LIFE CERAMICA</p>
          <p>B10</p>
        </div>

        <ColeccionLayout infoUrl="https://www.lifeceramica.com/wp-content/uploads/2020/09/Scale.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`SCALE ${index + 1}`}
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