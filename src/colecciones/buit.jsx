
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import buit01 from "../assets/imagenes/buit/buit-01.jpg";
import buit02 from "../assets/imagenes/buit/buit-02.jpg";
import buit03 from "../assets/imagenes/buit/buit-03.jpg";
import buit04 from "../assets/imagenes/buit/buit-04.jpg";
import buit05 from "../assets/imagenes/buit/buit-05.jpg";
import buit06 from "../assets/imagenes/buit/buit-06.jpg";
import buit07 from "../assets/imagenes/buit/buit-07.jpg";
import buit08 from "../assets/imagenes/buit/buit-08.jpg";
import buit09 from "../assets/imagenes/buit/buit-09.jpg";
import buit10 from "../assets/imagenes/buit/buit-10.jpg";
import buit11 from "../assets/imagenes/buit/buit-11.jpg";
import buit12 from "../assets/imagenes/buit/buit-12.jpg";
import buit13 from "../assets/imagenes/buit/buit-13.jpg";
import buit14 from "../assets/imagenes/buit/buit-14.jpg";
import buit15 from "../assets/imagenes/buit/buit-15.jpg";
import buit16 from "../assets/imagenes/buit/buit-16.jpg";
import buit17 from "../assets/imagenes/buit/buit-17.jpeg";
import buit18 from "../assets/imagenes/buit/buit-18.png";
import buit19 from "../assets/imagenes/buit/buit-19.jpg";
import buit20 from "../assets/imagenes/buit/buit-20.jpg";
import buit21 from "../assets/imagenes/buit/buit-21.jpg";
import buit22 from "../assets/imagenes/buit/buit-22.jpg";

const images = [
  buit01,
  buit02,
  buit03,
  buit04,
  buit05,
  buit06,
  buit07,
  buit08,
  buit09,
  buit10,
  buit11,
  buit12,
  buit13,
  buit14,
  buit15,
  buit16,
  buit17,
  buit18,
  buit19,
  buit20,
  buit21,
  buit22,
];

export function Buit() {
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

  function goToCabinetJ() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerJ5() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J5");
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
            onClick={goToCabinetJ}
          >
            J
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerJ5}
          >
            J5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BUIT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BUIT</h1>

        <div className="boutique-info">
          <p>7"x7" · BUIT</p>
          <p>J5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/BUIT.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BUIT ${index + 1}`}
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
