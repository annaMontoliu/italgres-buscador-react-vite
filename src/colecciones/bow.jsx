// src/colecciones/bow.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/bow/bow-01.jpg";
import img02 from "../assets/imagenes/bow/bow-02.jpg";
import img03 from "../assets/imagenes/bow/bow-03.jpg";
import img04 from "../assets/imagenes/bow/bow-04.jpg";
import img05 from "../assets/imagenes/bow/bow-05.jpg";
import img06 from "../assets/imagenes/bow/bow-06.jpg";
import img07 from "../assets/imagenes/bow/bow-07.jpg";
import img08 from "../assets/imagenes/bow/bow-08.jpg";
import img09 from "../assets/imagenes/bow/bow-09.jpg";
import img10 from "../assets/imagenes/bow/bow-10.jpg";
import img11 from "../assets/imagenes/bow/bow-11.jpg";
import img12 from "../assets/imagenes/bow/bow-12.jpg";
import img13 from "../assets/imagenes/bow/bow-13.jpg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
];

export function Bow() {
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

  function goToCabinetD() {
    sessionStorage.setItem("boutiqueCabinet", "D");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerD2() {
    sessionStorage.setItem("boutiqueCabinet", "D");
    sessionStorage.setItem("boutiqueDrawer", "D2");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToCabinetD}>
            D
          </button>
          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerD2}>
            D2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BOW</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BOW</h1>

        <div className="boutique-info">
          <p>6''X18'' · HARMONY</p>
          <p>D2</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/BOW.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BOW ${index + 1}`}
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