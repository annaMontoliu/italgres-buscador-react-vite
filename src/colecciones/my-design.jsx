// src/colecciones/my-design.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/my-design/my-design-01.jpg";
import img02 from "../assets/imagenes/my-design/my-design-02.jpg";
import img03 from "../assets/imagenes/my-design/my-design-03.jpg";
import img04 from "../assets/imagenes/my-design/my-design-04.jpg";
import img05 from "../assets/imagenes/my-design/my-design-05.jpg";
import img06 from "../assets/imagenes/my-design/my-design-06.jpg";
import img07 from "../assets/imagenes/my-design/my-design-07.jpg";
import img08 from "../assets/imagenes/my-design/my-design-08.jpg";
import img09 from "../assets/imagenes/my-design/my-design-09.jpg";
import img10 from "../assets/imagenes/my-design/my-design-10.jpg";
import img11 from "../assets/imagenes/my-design/my-design-11.jpg";
import img12 from "../assets/imagenes/my-design/my-design-12.jpg";
import img13 from "../assets/imagenes/my-design/my-design-13.jpg";
import img14 from "../assets/imagenes/my-design/my-design-14.jpg";
import img15 from "../assets/imagenes/my-design/my-design-15.jpg";
import img16 from "../assets/imagenes/my-design/my-design-16.jpg";
import img17 from "../assets/imagenes/my-design/my-design-17.jpg";
import img18 from "../assets/imagenes/my-design/my-design-18.jpg";

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
  img14,
  img15,
  img16,
  img17,
  img18,
];

export function MyDesign() {
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

  function goToDrawerD10() {
    sessionStorage.setItem("boutiqueCabinet", "D");
    sessionStorage.setItem("boutiqueDrawer", "D10");
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

          <button className="breadcrumb-link" onClick={goToDrawerD10}>
            D10
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">MY DESIGN</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">MY DESIGN</h1>

        <div className="boutique-info">
          <p>9''x9'' · CERLAT</p>
          <p>D10</p>
        </div>

        <ColeccionLayout infoUrl="https://www.azulejosmijares.com/wp-content/uploads/MyDesign2023.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`MY DESIGN ${index + 1}`}
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