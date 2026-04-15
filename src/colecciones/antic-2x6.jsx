import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import antic01 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-01.jpg";
import antic02 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-02.jpg";
import antic03 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-03.jpg";
import antic04 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-04.jpg";
import antic05 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-05.jpg";
import antic06 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-06.jpg";
import antic07 from "../assets/imagenes/antic/antic/antic-2x6/antic-2x6-07.jpg";

const images = [
  antic01,
  antic02,
  antic03,
  antic04,
  antic05,
  antic06,
  antic07,
];

export function Antic2x6() {
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

  function goToCabinetC() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerC1() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.setItem("boutiqueDrawer", "C1");
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
            onClick={goToCabinetC}
          >
            C
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerC1}
          >
            C1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ANTIC 2X6</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ANTIC 2X6</h1>

        <div className="boutique-info">
          <p>2''X6'' · CEVICA</p>
          <p>C1</p>
        </div>

        <ColeccionLayout infoUrl="https://www.cevica.es/wp-content/uploads/ANTIC-COLLECTION.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ANTIC 2X6 ${index + 1}`}
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