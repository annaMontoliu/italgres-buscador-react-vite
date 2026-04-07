import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS IMÁGENES
import industrial01 from "../assets/imagenes/industrial/industrial-01.jpg";
import industrial02 from "../assets/imagenes/industrial/industrial-02.jpg";
import industrial03 from "../assets/imagenes/industrial/industrial-03.jpg";
import industrial04 from "../assets/imagenes/industrial/industrial-04.jpg";
import industrial05 from "../assets/imagenes/industrial/industrial-05.jpg";
import industrial06 from "../assets/imagenes/industrial/industrial-06.jpg";
import industrial07 from "../assets/imagenes/industrial/industrial-07.jpg";
import industrial08 from "../assets/imagenes/industrial/industrial-08.jpg";
import industrial09 from "../assets/imagenes/industrial/industrial-09.jpg";
import industrial10 from "../assets/imagenes/industrial/industrial-10.jpg";

// ARRAY IMÁGENES
const images = [
  industrial01,
  industrial02,
  industrial03,
  industrial04,
  industrial05,
  industrial06,
  industrial07,
  industrial08,
  industrial09,
  industrial10,
];

export function Industrial({ onGoHome }) {
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

  function goToDrawerB8() {
    sessionStorage.setItem("boutiqueCabinet", "B");
    sessionStorage.setItem("boutiqueDrawer", "B8");
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

          <button className="breadcrumb-link" onClick={goToDrawerB8}>
            B8
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">INDUSTRIAL</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">INDUSTRIAL</h1>

        <div className="boutique-info">
          <p>3x12 · CIFRE</p>
          <p>B8</p>
        </div>

        <ColeccionLayout infoUrl="https://cifreceramica.com/en/pdf-coleccion/Industrial/" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`INDUSTRIAL ${index + 1}`}
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