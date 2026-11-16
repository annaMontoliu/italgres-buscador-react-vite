
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import terracuita01 from "../assets/imagenes/terracuita/terracuita-01.jpg";
import terracuita02 from "../assets/imagenes/terracuita/terracuita-02.jpg";
import terracuita03 from "../assets/imagenes/terracuita/terracuita-03.jpg";
import terracuita04 from "../assets/imagenes/terracuita/terracuita-04.jpg";
import terracuita05 from "../assets/imagenes/terracuita/terracuita-05.jpg";
import terracuita06 from "../assets/imagenes/terracuita/terracuita-06.jpg";
import terracuita07 from "../assets/imagenes/terracuita/terracuita-07.jpg";
import terracuita08 from "../assets/imagenes/terracuita/terracuita-08.jpg";
import terracuita09 from "../assets/imagenes/terracuita/terracuita-09.jpg";
import terracuita10 from "../assets/imagenes/terracuita/terracuita-10.jpg";
import terracuita11 from "../assets/imagenes/terracuita/terracuita-11.jpg";
import terracuita12 from "../assets/imagenes/terracuita/terracuita-12.jpg";
import terracuita13 from "../assets/imagenes/terracuita/terracuita-13.jpg";
import terracuita14 from "../assets/imagenes/terracuita/terracuita-14.jpg";
import terracuita15 from "../assets/imagenes/terracuita/terracuita-15.jpg";
import terracuita16 from "../assets/imagenes/terracuita/terracuita-16.jpg";
import terracuita17 from "../assets/imagenes/terracuita/terracuita-17.jpg";
import terracuita18 from "../assets/imagenes/terracuita/terracuita-18.jpg";
import terracuita19 from "../assets/imagenes/terracuita/terracuita-19.jpg";
import terracuita20 from "../assets/imagenes/terracuita/terracuita-20.jpg";
import terracuita21 from "../assets/imagenes/terracuita/terracuita-21.jpg";
import terracuita22 from "../assets/imagenes/terracuita/terracuita-22.jpg";
import terracuita23 from "../assets/imagenes/terracuita/terracuita-23.jpg";
import terracuita24 from "../assets/imagenes/terracuita/terracuita-24.jpg";
import terracuita25 from "../assets/imagenes/terracuita/terracuita-25.jpg";
import terracuita26 from "../assets/imagenes/terracuita/terracuita-26.jpg";
import terracuita27 from "../assets/imagenes/terracuita/terracuita-27.jpg";

const images = [
  terracuita01,
  terracuita02,
  terracuita03,
  terracuita04,
  terracuita05,
  terracuita06,
  terracuita07,
  terracuita08,
  terracuita09,
  terracuita10,
  terracuita11,
  terracuita12,
  terracuita13,
  terracuita14,
  terracuita15,
  terracuita16,
  terracuita17,
  terracuita18,
  terracuita19,
  terracuita20,
  terracuita21,
  terracuita22,
  terracuita23,
  terracuita24,
  terracuita25,
  terracuita26,
  terracuita27,
];

export function Terracuita() {
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

  function goToCabinetG() {
    sessionStorage.setItem("boutiqueCabinet", "G");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerG1() {
    sessionStorage.setItem("boutiqueCabinet", "G");
    sessionStorage.setItem("boutiqueDrawer", "G1");
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
            onClick={goToCabinetG}
          >
            G
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerG1}
          >
            G1
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">TERRACUITA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">TERRACUITA</h1>

        <div className="boutique-info">
          <p>ANTIC FANG</p>
          <p>G1</p>
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
              alt={`TERRACUITA ${index + 1}`}
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
