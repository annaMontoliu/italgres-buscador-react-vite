import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import kiteHandmade01 from "../assets/imagenes/kite-handmade/kite-handmade-01.jpg";
import kiteHandmade02 from "../assets/imagenes/kite-handmade/kite-handmade-02.jpg";
import kiteHandmade03 from "../assets/imagenes/kite-handmade/kite-handmade-03.jpg";

const images = [
  kiteHandmade01,
  kiteHandmade02,
  kiteHandmade03,
];

export function KiteHandmade() {
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

  function goToCabinetH() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerH7() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H7");
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
            onClick={goToCabinetH}
          >
            H
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerH7}
          >
            H7
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">KITE HANDMADE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">KITE HANDMADE</h1>

        <div className="boutique-info">
          <p>5''X9'' · ALTERET</p>
          <p>H7</p>
        </div>

        <ColeccionLayout infoUrl="https://www.alteret.com/en/products/7262-handmade-wall-tiles/7266-collections/p-135130-kite" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`KITE HANDMADE ${index + 1}`}
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