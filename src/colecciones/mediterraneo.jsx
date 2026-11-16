
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import mediterraneo01 from "../assets/imagenes/mediterraneo/mediterraneo-01.jpg";
import mediterraneo02 from "../assets/imagenes/mediterraneo/mediterraneo-02.jpg";
import mediterraneo03 from "../assets/imagenes/mediterraneo/mediterraneo-03.jpg";
import mediterraneo04 from "../assets/imagenes/mediterraneo/mediterraneo-04.jpg";
import mediterraneo05 from "../assets/imagenes/mediterraneo/mediterraneo-05.jpg";
import mediterraneo06 from "../assets/imagenes/mediterraneo/mediterraneo-06.jpg";
import mediterraneo07 from "../assets/imagenes/mediterraneo/mediterraneo-07.jpg";
import mediterraneo08 from "../assets/imagenes/mediterraneo/mediterraneo-08.jpg";
import mediterraneo09 from "../assets/imagenes/mediterraneo/mediterraneo-09.jpg";
import mediterraneo10 from "../assets/imagenes/mediterraneo/mediterraneo-10.jpg";

const images = [
  mediterraneo01,
  mediterraneo02,
  mediterraneo03,
  mediterraneo04,
  mediterraneo05,
  mediterraneo06,
  mediterraneo07,
  mediterraneo08,
  mediterraneo09,
  mediterraneo10,
];

export function Mediterraneo() {
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

  function goToDrawerH8() {
    sessionStorage.setItem("boutiqueCabinet", "H");
    sessionStorage.setItem("boutiqueDrawer", "H8");
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
            onClick={goToDrawerH8}
          >
            H8
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">MEDITERRANEO</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">MEDITERRANEO</h1>

        <div className="boutique-info">
          <p>4"x4" · ANTIC FANG</p>
          <p>H8</p>
        </div>

        <ColeccionLayout infoUrl="https://anticfang.com/wp-content/uploads/2025/07/Catalec-Terracuita-2024-1.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`MEDITERRANEO ${index + 1}`}
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
