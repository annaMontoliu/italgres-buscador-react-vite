import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import organicClay1 from "../assets/imagenes/organic-clay/organic-clay-01.jpg";
import organicClay2 from "../assets/imagenes/organic-clay/organic-clay-02.jpg";
import organicClay3 from "../assets/imagenes/organic-clay/organic-clay-03.jpg";
import organicClay4 from "../assets/imagenes/organic-clay/organic-clay-04.jpg";
import organicClay5 from "../assets/imagenes/organic-clay/organic-clay-05.jpg";
import organicClay6 from "../assets/imagenes/organic-clay/organic-clay-06.jpg";
import organicClay7 from "../assets/imagenes/organic-clay/organic-clay-07.jpg";
import organicClay8 from "../assets/imagenes/organic-clay/organic-clay-08.jpg";
import organicClay9 from "../assets/imagenes/organic-clay/organic-clay-09.jpg";
import organicClay10 from "../assets/imagenes/organic-clay/organic-clay-10.jpg";
import organicClay11 from "../assets/imagenes/organic-clay/organic-clay-11.jpg";
import organicClay12 from "../assets/imagenes/organic-clay/organic-clay-12.jpg";
import organicClay13 from "../assets/imagenes/organic-clay/organic-clay-13.jpg";
import organicClay14 from "../assets/imagenes/organic-clay/organic-clay-14.jpg";

const images = [
  organicClay1,
  organicClay2,
  organicClay3,
  organicClay4,
  organicClay5,
  organicClay6,
  organicClay7,
  organicClay8,
  organicClay9,
  organicClay10,
  organicClay11,
  organicClay12,
  organicClay13,
  organicClay14,
];

export function OrganicClay() {
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

  function goToDrawerA5() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A5");
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

          <button type="button" className="breadcrumb-link" onClick={goToDrawerA5}>
            A5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ORGANIC CLAY</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ORGANIC CLAY</h1>

        <div className="boutique-info">
          <p>2''X10'' · PORTOBELLO</p>
          <p>A5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/ORGANIC-CLAY.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ORGANIC CLAY ${index + 1}`}
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