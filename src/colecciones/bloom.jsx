// src/colecciones/bloom.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// BLOOM STAR WHITE (4)
import bloomStarWhite01 from "../assets/imagenes/bloom/bloom-star-white/bloom-star-white-01.jpg";
import bloomStarWhite02 from "../assets/imagenes/bloom/bloom-star-white/bloom-star-white-02.jpg";
import bloomStarWhite03 from "../assets/imagenes/bloom/bloom-star-white/bloom-star-white-03.jpg";
import bloomStarWhite04 from "../assets/imagenes/bloom/bloom-star-white/bloom-star-white-04.jpg";

// BLOOM STAR BEIGE (3)
import bloomStarBeige01 from "../assets/imagenes/bloom/bloom-star-beige/bloom-star-beige-01.jpg";
import bloomStarBeige02 from "../assets/imagenes/bloom/bloom-star-beige/bloom-star-beige-02.jpg";
import bloomStarBeige03 from "../assets/imagenes/bloom/bloom-star-beige/bloom-star-beige-03.jpg";

// BLOOM BLUE (2)
import bloomBlue01 from "../assets/imagenes/bloom/bloom-blue/bloom-blue-01.jpg";
import bloomBlue02 from "../assets/imagenes/bloom/bloom-blue/bloom-blue-02.jpg";

// BLOOM MENTA (2)
import bloomMenta01 from "../assets/imagenes/bloom/bloom-menta/bloom-menta-01.jpg";
import bloomMenta02 from "../assets/imagenes/bloom/bloom-menta/bloom-menta-02.jpg";

// ORDEN EXACTO (modal): STAR WHITE, STAR BEIGE, BLUE, MENTA
const images = [
  bloomStarWhite01,
  bloomStarWhite02,
  bloomStarWhite03,
  bloomStarWhite04,

  bloomStarBeige01,
  bloomStarBeige02,
  bloomStarBeige03,

  bloomBlue01,
  bloomBlue02,

  bloomMenta01,
  bloomMenta02,
];

export function Bloom({ onGoHome }) {
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

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">BLOOM</h1>

        <ColeccionLayout infoUrl="https://www.fapceramiche.com/media/products/documents/collection/Bloom_2025.pdf" />

        {/* STAR WHITE */}
        <h3 className="color-title">BLOOM STAR WHITE</h3>
        <section className="gallery-grid">
          <img src={bloomStarWhite01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="BLOOM STAR WHITE 01" />
          <img src={bloomStarWhite02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="BLOOM STAR WHITE 02" />
          <img src={bloomStarWhite03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="BLOOM STAR WHITE 03" />
          <img src={bloomStarWhite04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="BLOOM STAR WHITE 04" />
        </section>

        {/* STAR BEIGE */}
        <h3 className="color-title">BLOOM STAR BEIGE</h3>
        <section className="gallery-grid">
          <img src={bloomStarBeige01} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="BLOOM STAR BEIGE 01" />
          <img src={bloomStarBeige02} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="BLOOM STAR BEIGE 02" />
          <img src={bloomStarBeige03} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="BLOOM STAR BEIGE 03" />
        </section>

        {/* BLUE */}
        <h3 className="color-title">BLOOM BLUE</h3>
        <section className="gallery-grid">
          <img src={bloomBlue01} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="BLOOM BLUE 01" />
          <img src={bloomBlue02} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="BLOOM BLUE 02" />
        </section>

        {/* MENTA */}
        <h3 className="color-title">BLOOM MENTA</h3>
        <section className="gallery-grid">
          <img src={bloomMenta01} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="BLOOM MENTA 01" />
          <img src={bloomMenta02} className="gallery-img" onClick={() => openModal(10)} loading="lazy" alt="BLOOM MENTA 02" />
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
