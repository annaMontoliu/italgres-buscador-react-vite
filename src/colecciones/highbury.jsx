import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

import highbury1 from "../assets/imagenes/highbury/highbury-01.jpg";
import highbury2 from "../assets/imagenes/highbury/highbury-02.jpg";
import highbury3 from "../assets/imagenes/highbury/highbury-03.jpg";
import highbury4 from "../assets/imagenes/highbury/highbury-04.jpg";
import highbury5 from "../assets/imagenes/highbury/highbury-05.jpg";
import highbury6 from "../assets/imagenes/highbury/highbury-06.jpg";
import highbury7 from "../assets/imagenes/highbury/highbury-07.jpg";
import highbury8 from "../assets/imagenes/highbury/highbury-08.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================

const images = [
  highbury1, // 0
  highbury2, // 1
  highbury3, // 2
  highbury4, // 3
  highbury5, // 4
  highbury6, // 5
  highbury7, // 6
  highbury8, // 7
];

export function Highbury({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  const cabinet = "I";
  const drawer = "I10";
  const title = "HIGHBURY";
  const format = "6''X6''";
  const brand = "ESTUDIO CERAMICO";

  function goToBoutique() {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCabinet() {
    sessionStorage.setItem("boutiqueCabinet", cabinet);
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawer() {
    sessionStorage.setItem("boutiqueCabinet", cabinet);
    sessionStorage.setItem("boutiqueDrawer", drawer);
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <div className="breadcrumb-boutique">
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinet}>
            {cabinet}
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawer}>
            {drawer}
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">{title}</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">{title}</h1>

        <div className="boutique-info">
          <p>{format} · {brand}</p>
          <p>{drawer}</p>
        </div>

        <ColeccionLayout infoUrl="https://eceramico.com/wp-content/uploads/2025/10/cartalogo-azulejos-highbury.pdf" />

        {/* HIGHBURY */}
        <section className="gallery-grid">
          <img src={highbury1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="HIGHBURY 01" />
          <img src={highbury2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="HIGHBURY 02" />
          <img src={highbury3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="HIGHBURY 03" />
          <img src={highbury4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="HIGHBURY 04" />
          <img src={highbury5} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="HIGHBURY 05" />
          <img src={highbury6} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="HIGHBURY 06" />
          <img src={highbury7} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="HIGHBURY 07" />
          <img src={highbury8} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="HIGHBURY 08" />
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