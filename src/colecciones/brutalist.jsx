import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import brutalist01 from "../assets/imagenes/brutalist/brutalist-01.jpg";
import brutalist02 from "../assets/imagenes/brutalist/brutalist-02.jpg";
import brutalist03 from "../assets/imagenes/brutalist/brutalist-03.jpg";
import brutalist04 from "../assets/imagenes/brutalist/brutalist-04.jpg";
import brutalist05 from "../assets/imagenes/brutalist/brutalist-05.jpg";
import brutalist06 from "../assets/imagenes/brutalist/brutalist-06.jpg";
import brutalist07 from "../assets/imagenes/brutalist/brutalist-07.jpg";
import brutalist08 from "../assets/imagenes/brutalist/brutalist-08.jpg";
import brutalist09 from "../assets/imagenes/brutalist/brutalist-09.jpg";
import brutalist10 from "../assets/imagenes/brutalist/brutalist-10.jpg";
import brutalist11 from "../assets/imagenes/brutalist/brutalist-11.jpg";
import brutalist12 from "../assets/imagenes/brutalist/brutalist-12.jpg";
import brutalist13 from "../assets/imagenes/brutalist/brutalist-13.jpg";
import brutalist14 from "../assets/imagenes/brutalist/brutalist-14.jpg";
import brutalist15 from "../assets/imagenes/brutalist/brutalist-15.jpg";

const images = [
  brutalist01,
  brutalist02,
  brutalist03,
  brutalist04,
  brutalist05,
  brutalist06,
  brutalist07,
  brutalist08,
  brutalist09,
  brutalist10,
  brutalist11,
  brutalist12,
  brutalist13,
  brutalist14,
  brutalist15,
];

export function Brutalist() {
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

  function goToDrawerA2() {
    sessionStorage.setItem("boutiqueCabinet", "A");
    sessionStorage.setItem("boutiqueDrawer", "A2");
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
            onClick={goToDrawerA2}
          >
            A2
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">BRUTALIST</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">BRUTALIST</h1>

        <div className="boutique-info">
          <p>2''X9'' · AMADIS</p>
          <p>A2</p>
        </div>

        <ColeccionLayout infoUrl="https://amadistiles.com/wp-content/uploads/2022/09/DIPTICO-BRUTALIST-BRICK.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`BRUTALIST ${index + 1}`}
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