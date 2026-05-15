import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import glenbrook01 from "../assets/imagenes/glenbrook/glenbrook-01.jpg";
import glenbrook02 from "../assets/imagenes/glenbrook/glenbrook-02.jpg";
import glenbrook03 from "../assets/imagenes/glenbrook/glenbrook-03.jpg";
import glenbrook04 from "../assets/imagenes/glenbrook/glenbrook-04.jpg";
import glenbrook05 from "../assets/imagenes/glenbrook/glenbrook-05.jpg";
import glenbrook06 from "../assets/imagenes/glenbrook/glenbrook-06.jpg";

const images = [
  glenbrook01,
  glenbrook02,
  glenbrook03,
  glenbrook04,
  glenbrook05,
  glenbrook06,
];

export function Glenbrook() {
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

  function goToCabinetE() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerE3() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E3");
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
            onClick={goToCabinetE}
          >
            E
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerE3}
          >
            E3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">GLENBROOK</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">GLENBROOK</h1>

        <div className="boutique-info">
          <p>2''X8'' · ESTUDIO CERAMICO</p>
          <p>E3</p>
        </div>

        <ColeccionLayout infoUrl="https://eceramico.com/wp-content/uploads/2024/01/catalogo-coleccion-glenbrook.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`GLENBROOL ${index + 1}`}
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