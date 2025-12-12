// src/colecciones/glocal.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// GLOCAL 01 (nuevo color)
import glocal0101 from "../assets/imagenes/glocal/glocal-01/glocal-01-01.jpg";
import glocal0102 from "../assets/imagenes/glocal/glocal-01/glocal-01-02.jpg";
import glocal0103 from "../assets/imagenes/glocal/glocal-01/glocal-01-03.jpg";

// GLOCAL 02 (existente + nuevas)
import glocal0201 from "../assets/imagenes/glocal/glocal-02/glocal-02-01.jpg";
import glocal0202 from "../assets/imagenes/glocal/glocal-02/glocal-02-02.jpg";
import glocal0203 from "../assets/imagenes/glocal/glocal-02/glocal-02-03.jpg";
import glocal0204 from "../assets/imagenes/glocal/glocal-02/glocal-02-04.jpg";
import glocal0205 from "../assets/imagenes/glocal/glocal-02/glocal-02-05.jpg";
import glocal0206 from "../assets/imagenes/glocal/glocal-02/glocal-02-06.jpg";
import glocal0207 from "../assets/imagenes/glocal/glocal-02/glocal-02-07.jpg";
import glocal0208 from "../assets/imagenes/glocal/glocal-02/glocal-02-08.jpg";
import glocal0209 from "../assets/imagenes/glocal/glocal-02/glocal-02-09.jpg";

// ORDEN EXACTO COMO EN TU HTML ORIGINAL
// (he puesto primero GLOCAL 01 y después GLOCAL 02 para que el modal siga el orden de la página)
const images = [
  glocal0101,
  glocal0102,
  glocal0103,
  glocal0201,
  glocal0202,
  glocal0203,
  glocal0204,
  glocal0205,
  glocal0206,
  glocal0207,
  glocal0208,
  glocal0209,
];

export function Glocal({ onGoHome }) {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">GLOCAL</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://mirage-cdn.thron.com/static/WJTGHQ_MRG_CAT_GLOCAL_102025_YH6SGG.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-glocal-pdf.pdf%22"
        />

        {/* ---- GALERÍA ---- */}

        {/* Color GLOCAL 01 */}
        <h3 className="color-title">GLOCAL 01</h3>
        <section className="gallery-grid">
          <img
            src={glocal0101}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="GLOCAL 01 1"
          />
          <img
            src={glocal0102}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="GLOCAL 01 2"
          />
          <img
            src={glocal0103}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="GLOCAL 01 3"
          />
        </section>

        {/* Color GLOCAL 02 */}
        <h3 className="color-title">GLOCAL 02</h3>
        <section className="gallery-grid">
          <img
            src={glocal0201}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="GLOCAL 02 1"
          />
          <img
            src={glocal0202}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="GLOCAL 02 2"
          />
          <img
            src={glocal0203}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="GLOCAL 02 3"
          />
          <img
            src={glocal0204}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="GLOCAL 02 4"
          />
          <img
            src={glocal0205}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="GLOCAL 02 5"
          />
          <img
            src={glocal0206}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="GLOCAL 02 6"
          />
          <img
            src={glocal0207}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="GLOCAL 02 7"
          />
          <img
            src={glocal0208}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="GLOCAL 02 8"
          />
          <img
            src={glocal0209}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="GLOCAL 02 9"
          />
        </section>
      </main>

      {/* ---- MODAL REUTILIZABLE ---- */}
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
