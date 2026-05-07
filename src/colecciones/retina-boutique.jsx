import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import retina01 from "../assets/imagenes/retina/retina-boutique/retina-boutique-01.jpg";
import retina02 from "../assets/imagenes/retina/retina-boutique/retina-boutique-02.jpg";
import retina03 from "../assets/imagenes/retina/retina-boutique/retina-boutique-03.jpg";
import retina04 from "../assets/imagenes/retina/retina-boutique/retina-boutique-04.jpg";
import retina05 from "../assets/imagenes/retina/retina-boutique/retina-boutique-05.jpg";
import retina06 from "../assets/imagenes/retina/retina-boutique/retina-boutique-06.jpg";
import retina07 from "../assets/imagenes/retina/retina-boutique/retina-boutique-07.jpg";
import retina08 from "../assets/imagenes/retina/retina-boutique/retina-boutique-08.jpg";
import retina09 from "../assets/imagenes/retina/retina-boutique/retina-boutique-09.jpg";
import retina10 from "../assets/imagenes/retina/retina-boutique/retina-boutique-10.jpg";

const images = [
  retina01,
  retina02,
  retina03,
  retina04,
  retina05,
  retina06,
  retina07,
  retina08,
  retina09,
  retina10,
];

export function RetinaBoutique() {
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

  function goToDrawerG6() {
    sessionStorage.setItem("boutiqueCabinet", "G");
    sessionStorage.setItem("boutiqueDrawer", "G6");
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
            onClick={goToDrawerG6}
          >
            G6
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">RETINA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">RETINA</h1>

        <div className="boutique-info">
          <p>24''X24'', 24''X48'', 48''X48''... · IMOLA</p>
          <p>G6 / G7</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/RETINA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`RETINA ${index + 1}`}
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