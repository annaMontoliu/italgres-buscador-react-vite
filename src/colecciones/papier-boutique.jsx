// src/colecciones/papier-boutique.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import papier01 from "../assets/imagenes/papier-mirage/papier-01.jpg";
import papier02 from "../assets/imagenes/papier-mirage/papier-02.jpg";
import papier03 from "../assets/imagenes/papier-mirage/papier-03.jpg";
import papier04 from "../assets/imagenes/papier-mirage/papier-04.jpg";
import papier05 from "../assets/imagenes/papier-mirage/papier-05.jpg";
import papier06 from "../assets/imagenes/papier-mirage/papier-06.jpg";
import papier07 from "../assets/imagenes/papier-mirage/papier-07.jpg";
import papier08 from "../assets/imagenes/papier-mirage/papier-08.jpg";
import papier09 from "../assets/imagenes/papier-mirage/papier-09.jpg";
import papier10 from "../assets/imagenes/papier-mirage/papier-10.jpg";
import papier11 from "../assets/imagenes/papier-mirage/papier-11.jpg";
import papier12 from "../assets/imagenes/papier-mirage/papier-12.jpg";
import papier13 from "../assets/imagenes/papier-mirage/papier-13.jpg";
import papier14 from "../assets/imagenes/papier-mirage/papier-14.jpg";
import papier15 from "../assets/imagenes/papier-mirage/papier-15.jpg";
import papier16 from "../assets/imagenes/papier-mirage/papier-16.jpg";

const images = [
  papier01,
  papier02,
  papier03,
  papier04,
  papier05,
  papier06,
  papier07,
  papier08,
  papier09,
  papier10,
  papier11,
  papier12,
  papier13,
  papier14,
  papier15,
  papier16,
];

export function PapierBoutique() {
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

  function goToDrawerE8() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E8");
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
            onClick={goToDrawerE8}
          >
            E8
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">PAPIER</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">PAPIER</h1>

        <div className="boutique-info">
          <p>24''X48'' · MIRAGE</p>
          <p>E8</p>
        </div>

        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/XIFEF0_MRG_CAT_PAPIER_112025_710956.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-papier-pdf.pdf%22" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`PAPIER ${index + 1}`}
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