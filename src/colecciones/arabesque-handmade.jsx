import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import arabesqueHandmade01 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-01.jpg";
import arabesqueHandmade02 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-02.jpg";
import arabesqueHandmade03 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-03.jpg";
import arabesqueHandmade04 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-04.jpg";
import arabesqueHandmade05 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-05.jpg";
import arabesqueHandmade06 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-06.jpg";
import arabesqueHandmade07 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-07.jpg";
import arabesqueHandmade08 from "../assets/imagenes/arabesque-handmade/arabesque-handmade-08.jpg";

const images = [
  arabesqueHandmade01,
  arabesqueHandmade02,
  arabesqueHandmade03,
  arabesqueHandmade04,
  arabesqueHandmade05,
  arabesqueHandmade06,
  arabesqueHandmade07,
  arabesqueHandmade08,
];

export function ArabesqueHandmade() {
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

  function goToDrawerH2() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H2");
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

          <button type="button" className="breadcrumb-link" onClick={goToCabinetH}>
            H
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerH2}>
            H2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ARABESQUE HANDAMDE</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ARABESQUE HANDAMDE</h1>

        <div className="boutique-info">
          <p>5''X6'' · ALTERET</p>
          <p>H2</p>
        </div>

        <ColeccionLayout infoUrl="https://www.alteret.com/en/products/7262-handmade-wall-tiles/14142-arabesque-tiles/p-92802-arabesque" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ARASQUE HANDAMDE ${index + 1}`}
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