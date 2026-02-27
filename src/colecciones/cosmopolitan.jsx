// src/colecciones/cosmopolitan.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// COSMOPOLITAN 05 (4)
import cosmopolitan0501 from "../assets/imagenes/cosmopolitan/cosmopolitan-05/cosmopolitan-05-01.jpg";
import cosmopolitan0502 from "../assets/imagenes/cosmopolitan/cosmopolitan-05/cosmopolitan-05-02.jpg";
import cosmopolitan0503 from "../assets/imagenes/cosmopolitan/cosmopolitan-05/cosmopolitan-05-03.jpg";
import cosmopolitan0504 from "../assets/imagenes/cosmopolitan/cosmopolitan-05/cosmopolitan-05-04.jpg";

// COSMOPOLITAN 06 (4)
import cosmopolitan0601 from "../assets/imagenes/cosmopolitan/cosmopolitan-06/cosmopolitan-06-01.jpg";
import cosmopolitan0602 from "../assets/imagenes/cosmopolitan/cosmopolitan-06/cosmopolitan-06-02.jpg";
import cosmopolitan0603 from "../assets/imagenes/cosmopolitan/cosmopolitan-06/cosmopolitan-06-03.jpg";
import cosmopolitan0604 from "../assets/imagenes/cosmopolitan/cosmopolitan-06/cosmopolitan-06-04.jpg";

// =====================
// ARRAY GLOBAL MODAL
// =====================
const images = [
  cosmopolitan0501, // 0
  cosmopolitan0502, // 1
  cosmopolitan0503, // 2
  cosmopolitan0504, // 3
  cosmopolitan0601, // 4
  cosmopolitan0602, // 5
  cosmopolitan0603, // 6
  cosmopolitan0604, // 7
];

export function Cosmopolitan({ onGoHome }) {
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
        <h1 className="titulo-coleccion">COSMOPOLITAN</h1>

        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/HHVN0G_Mirage_Catalogo_Jewels_Febbraio_2026_Q8LKHD.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogue-jewels-2-0-pdf.pdf%22" />

        {/* COLOR 05 */}
        <h3 className="color-title">COSMOPOLITAN 05</h3>
        <section className="gallery-grid">
          <img src={cosmopolitan0501} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="COSMOPOLITAN 05 01" />
          <img src={cosmopolitan0502} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="COSMOPOLITAN 05 02" />
          <img src={cosmopolitan0503} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="COSMOPOLITAN 05 03" />
          <img src={cosmopolitan0504} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="COSMOPOLITAN 05 04" />
        </section>

        {/* COLOR 06 */}
        <h3 className="color-title">COSMOPOLITAN 06</h3>
        <section className="gallery-grid">
          <img src={cosmopolitan0601} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="COSMOPOLITAN 06 01" />
          <img src={cosmopolitan0602} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="COSMOPOLITAN 06 02" />
          <img src={cosmopolitan0603} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="COSMOPOLITAN 06 03" />
          <img src={cosmopolitan0604} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="COSMOPOLITAN 06 04" />
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