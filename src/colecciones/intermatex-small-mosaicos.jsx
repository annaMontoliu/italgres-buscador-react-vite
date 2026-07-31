import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import img01 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-01.jpg";
import img02 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-02.jpg";
import img03 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-03.jpg";
import img04 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-04.jpg";
import img05 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-05.jpg";
import img06 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-06.jpg";
import img07 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-07.jpg";
import img08 from "../assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-08.jpg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
];

export function IntermatexSmallMosaicos() {
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

  function goToDrawerE9() {
    sessionStorage.setItem("boutiqueCabinet", "E");
    sessionStorage.setItem("boutiqueDrawer", "E9");
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

          <button className="breadcrumb-link" onClick={goToCabinetE}>
            E
          </button>

          <span className="breadcrumb-separator">/</span>

          <button className="breadcrumb-link" onClick={goToDrawerE9}>
            E9
          </button>

          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">
            INTERMATEX SMALL MOSAICOS
          </span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          INTERMATEX SMALL MOSAICOS
        </h1>

        <div className="boutique-info">
          <p>INTERMATEX</p>
          <p>E9</p>
        </div>

        <ColeccionLayout infoUrl="https://www.intermatex.com/en/decorative-mosaic/" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`INTERMATEX SMALL MOSAICOS ${index + 1}`}
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