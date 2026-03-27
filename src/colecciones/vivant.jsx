import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import vivant1 from "../assets/imagenes/vivant/vivant-01.jpg";
import vivant2 from "../assets/imagenes/vivant/vivant-02.jpg";
import vivant3 from "../assets/imagenes/vivant/vivant-03.jpg";
import vivant4 from "../assets/imagenes/vivant/vivant-04.jpg";
import vivant5 from "../assets/imagenes/vivant/vivant-05.jpg";
import vivant6 from "../assets/imagenes/vivant/vivant-06.jpg";
import vivant7 from "../assets/imagenes/vivant/vivant-07.jpg";
import vivant8 from "../assets/imagenes/vivant/vivant-08.jpg";
import vivant9 from "../assets/imagenes/vivant/vivant-09.jpg";
import vivant10 from "../assets/imagenes/vivant/vivant-10.jpg";
import vivant11 from "../assets/imagenes/vivant/vivant-11.jpg";
import vivant12 from "../assets/imagenes/vivant/vivant-12.jpg";
import vivant13 from "../assets/imagenes/vivant/vivant-13.jpg";
import vivant14 from "../assets/imagenes/vivant/vivant-14.jpg";
import vivant15 from "../assets/imagenes/vivant/vivant-15.jpg";
import vivant16 from "../assets/imagenes/vivant/vivant-16.jpg";
import vivant17 from "../assets/imagenes/vivant/vivant-17.jpg";
import vivant18 from "../assets/imagenes/vivant/vivant-18.jpg";
import vivant19 from "../assets/imagenes/vivant/vivant-19.jpg";
import vivant20 from "../assets/imagenes/vivant/vivant-20.jpg";

const images = [
  vivant1,
  vivant2,
  vivant3,
  vivant4,
  vivant5,
  vivant6,
  vivant7,
  vivant8,
  vivant9,
  vivant10,
  vivant11,
  vivant12,
  vivant13,
  vivant14,
  vivant15,
  vivant16,
  vivant17,
  vivant18,
  vivant19,
  vivant20,
];

export function Vivant() {
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

          <span className="breadcrumb-current">VIVANT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">VIVANT</h1>

        <div className="boutique-info">
          <p>3''X10'' · PORTOBELLO</p>
          <p>A5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/VIVANT.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`VIVANT ${index + 1}`}
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