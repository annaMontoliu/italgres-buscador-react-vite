
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import wabisabi01 from "../assets/imagenes/wabisabi/wabisabi-01.jpg";
import wabisabi02 from "../assets/imagenes/wabisabi/wabisabi-02.jpg";
import wabisabi03 from "../assets/imagenes/wabisabi/wabisabi-03.jpg";
import wabisabi04 from "../assets/imagenes/wabisabi/wabisabi-04.jpg";
import wabisabi05 from "../assets/imagenes/wabisabi/wabisabi-05.jpg";
import wabisabi06 from "../assets/imagenes/wabisabi/wabisabi-06.jpg";
import wabisabi07 from "../assets/imagenes/wabisabi/wabisabi-07.jpg";

const images = [
  wabisabi01,
  wabisabi02,
  wabisabi03,
  wabisabi04,
  wabisabi05,
  wabisabi06,
  wabisabi07,
];

export function Wabisabi() {
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

  function goToDrawerA3() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A3");
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
            onClick={goToCabinetA}
          >
            A
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerA3}
          >
            A3
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">WABISABI</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">WABISABI</h1>

        <div className="boutique-info">
          <p>2"x6" · TONALITE</p>
          <p>A3</p>
        </div>

        <ColeccionLayout infoUrl="https://www.tonalite.it/media/wabisabi_tonalite.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`WABISABI ${index + 1}`}
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
