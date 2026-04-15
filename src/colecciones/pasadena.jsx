// src/colecciones/pasadena.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/pasadena/pasadena-01.jpg";
import img02 from "../assets/imagenes/pasadena/pasadena-02.jpg";
import img03 from "../assets/imagenes/pasadena/pasadena-03.jpg";
import img04 from "../assets/imagenes/pasadena/pasadena-04.jpg";
import img05 from "../assets/imagenes/pasadena/pasadena-05.jpg";
import img06 from "../assets/imagenes/pasadena/pasadena-06.jpg";
import img07 from "../assets/imagenes/pasadena/pasadena-07.jpg";
import img08 from "../assets/imagenes/pasadena/pasadena-08.jpg";
import img09 from "../assets/imagenes/pasadena/pasadena-09.jpg";
import img10 from "../assets/imagenes/pasadena/pasadena-10.jpg";

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
];

export function Pasadena() {
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

  function goToDrawerC4() {
    sessionStorage.setItem("boutiqueCabinet", "C");
    sessionStorage.setItem("boutiqueDrawer", "C4");
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
            onClick={goToDrawerC4}
          >
            C4
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">PASADENA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">PASADENA</h1>

        <div className="boutique-info">
          <p>3''X10'' · HARMONY</p>
          <p>C4</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/PASADENA.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`PASADENA ${index + 1}`}
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