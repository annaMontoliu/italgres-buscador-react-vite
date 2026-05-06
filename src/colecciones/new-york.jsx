import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import newYork01 from "../assets/imagenes/new-york/new-york-01.jpg";
import newYork02 from "../assets/imagenes/new-york/new-york-02.jpg";
import newYork03 from "../assets/imagenes/new-york/new-york-03.jpg";
import newYork04 from "../assets/imagenes/new-york/new-york-04.jpg";
import newYork05 from "../assets/imagenes/new-york/new-york-05.jpg";

const images = [
  newYork01,
  newYork02,
  newYork03,
  newYork04,
  newYork05,
];

export function NewYork() {
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

  function goToCabinetF() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerF4() {
    sessionStorage.setItem("boutiqueCabinet", "F");
    sessionStorage.setItem("boutiqueDrawer", "F4");
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
            onClick={goToCabinetF}
          >
            F
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerF4}
          >
            F4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">NEW YORK</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">NEW YORK</h1>

        <div className="boutique-info">
          <p>6''x6'' · CEVICA</p>
          <p>F4 / F8 / F9</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/New-york-collection.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`NEW YORK ${index + 1}`}
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