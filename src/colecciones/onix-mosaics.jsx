// src/colecciones/onix-mosaics.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import onixMosaics01 from "../assets/imagenes/onix-mosaics/onix-mosaics-01.jpg";
import onixMosaics02 from "../assets/imagenes/onix-mosaics/onix-mosaics-02.jpg";
import onixMosaics03 from "../assets/imagenes/onix-mosaics/onix-mosaics-03.jpg";
import onixMosaics04 from "../assets/imagenes/onix-mosaics/onix-mosaics-04.jpg";
import onixMosaics05 from "../assets/imagenes/onix-mosaics/onix-mosaics-05.jpg";
import onixMosaics06 from "../assets/imagenes/onix-mosaics/onix-mosaics-06.jpg";
import onixMosaics07 from "../assets/imagenes/onix-mosaics/onix-mosaics-07.jpg";
import onixMosaics08 from "../assets/imagenes/onix-mosaics/onix-mosaics-08.jpg";
import onixMosaics09 from "../assets/imagenes/onix-mosaics/onix-mosaics-09.jpg";
import onixMosaics10 from "../assets/imagenes/onix-mosaics/onix-mosaics-10.jpg";
import onixMosaics11 from "../assets/imagenes/onix-mosaics/onix-mosaics-11.jpg";
import onixMosaics12 from "../assets/imagenes/onix-mosaics/onix-mosaics-12.jpg";
import onixMosaics13 from "../assets/imagenes/onix-mosaics/onix-mosaics-13.jpg";
import onixMosaics14 from "../assets/imagenes/onix-mosaics/onix-mosaics-14.jpg";

const images = [
  onixMosaics01,
  onixMosaics02,
  onixMosaics03,
  onixMosaics04,
  onixMosaics05,
  onixMosaics06,
  onixMosaics07,
  onixMosaics08,
  onixMosaics09,
  onixMosaics10,
  onixMosaics11,
  onixMosaics12,
  onixMosaics13,
  onixMosaics14,
];

export function OnixMosaics() {
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

  function goToDrawerE5() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E5");
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

          <button type="button" className="breadcrumb-link" onClick={goToCabinetE}>
            E
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerE5}>
            E5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">ONIX MOSAICS</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">ONIX MOSAICS</h1>

        <div className="boutique-info">
          <p>1''X1'' & 2''X2'' · ONIX MOSAICS</p>
          <p>E5 & E10</p>
        </div>

        <ColeccionLayout infoUrl="https://www.onixmosaico.com/wp-content/uploads/2025/09/CAT_Mosaic_Trends_26_ONIX_LQ.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`ONIX MOSAICS ${index + 1}`}
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