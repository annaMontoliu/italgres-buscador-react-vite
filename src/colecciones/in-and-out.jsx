
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

import inAndOut01 from "../assets/imagenes/in-and-out/in-and-out-01.jpg";
import inAndOut02 from "../assets/imagenes/in-and-out/in-and-out-02.jpg";
import inAndOut03 from "../assets/imagenes/in-and-out/in-and-out-03.jpg";
import inAndOut04 from "../assets/imagenes/in-and-out/in-and-out-04.jpg";
import inAndOut05 from "../assets/imagenes/in-and-out/in-and-out-05.jpg";
import inAndOut06 from "../assets/imagenes/in-and-out/in-and-out-06.jpg";

const images = [
  inAndOut01,
  inAndOut02,
  inAndOut03,
  inAndOut04,
  inAndOut05,
  inAndOut06,
];

export function InAndOut() {
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

  function goToCabinetJ() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerJ5() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J5");
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
            onClick={goToCabinetJ}
          >
            J
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerJ5}
          >
            J5
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">IN & OUT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">IN & OUT</h1>

        <div className="boutique-info">
          <p>9"x9" · HARMONY</p>
          <p>J5</p>
        </div>

        <ColeccionLayout infoUrl="/pdf/IN-AND-OUT.pdf" />

        <section className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
              alt={`IN & OUT ${index + 1}`}
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
