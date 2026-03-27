import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import zellige1 from "../assets/imagenes/zellige/zellige-01.jpg";
import zellige2 from "../assets/imagenes/zellige/zellige-02.jpg";
import zellige3 from "../assets/imagenes/zellige/zellige-03.jpg";
import zellige4 from "../assets/imagenes/zellige/zellige-04.jpg";
import zellige5 from "../assets/imagenes/zellige/zellige-05.jpg";
import zellige6 from "../assets/imagenes/zellige/zellige-06.jpg";
import zellige7 from "../assets/imagenes/zellige/zellige-07.jpg";
import zellige8 from "../assets/imagenes/zellige/zellige-08.jpg";
import zellige9 from "../assets/imagenes/zellige/zellige-09.jpg";
import zellige10 from "../assets/imagenes/zellige/zellige-10.jpg";

const images = [
  zellige1,
  zellige2,
  zellige3,
  zellige4,
  zellige5,
  zellige6,
  zellige7,
  zellige8,
  zellige9,
  zellige10,
];

export function Zellige() {
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

  function goToCabinetA() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerA9() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A9");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinetA}>
            A
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA9}>
            A9
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ZELLIGE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ZELLIGE</h1>

        <div className="boutique-info">
          <p>4''X4'' · CIFRE</p>
          <p>A9</p>
        </div>

        <ColeccionLayout infoUrl="https://cifreceramica.com/en/pdf-coleccion/ZELLIGE/" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ZELLIGE ${index + 1}`}
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