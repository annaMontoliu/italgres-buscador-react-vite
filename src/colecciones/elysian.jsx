// src/colecciones/elysian.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// ELYSIAN 01 (8 fotos)
import elysian01_1 from "../assets/imagenes/elysian/elysian-01/elysian-01-1.jpg";
import elysian01_2 from "../assets/imagenes/elysian/elysian-01/elysian-01-2.jpg";
import elysian01_3 from "../assets/imagenes/elysian/elysian-01/elysian-01-3.jpg";
import elysian01_4 from "../assets/imagenes/elysian/elysian-01/elysian-01-4.jpg";
import elysian01_5 from "../assets/imagenes/elysian/elysian-01/elysian-01-5.jpg";
import elysian01_6 from "../assets/imagenes/elysian/elysian-01/elysian-01-6.jpg";


// ELYSIAN 02 (5 fotos)
import elysian02_1 from "../assets/imagenes/elysian/elysian-02/elysian-02-1.jpg";
import elysian02_2 from "../assets/imagenes/elysian/elysian-02/elysian-02-2.jpg";
import elysian02_3 from "../assets/imagenes/elysian/elysian-02/elysian-02-3.jpg";
import elysian02_4 from "../assets/imagenes/elysian/elysian-02/elysian-02-4.jpg";
import elysian02_5 from "../assets/imagenes/elysian/elysian-02/elysian-02-5.jpg";

// ELYSIAN 03 (6 fotos)
import elysian03_1 from "../assets/imagenes/elysian/elysian-03/elysian-03-1.jpg";
import elysian03_2 from "../assets/imagenes/elysian/elysian-03/elysian-03-2.jpg";
import elysian03_3 from "../assets/imagenes/elysian/elysian-03/elysian-03-3.jpg";
import elysian03_4 from "../assets/imagenes/elysian/elysian-03/elysian-03-4.jpg";
import elysian03_5 from "../assets/imagenes/elysian/elysian-03/elysian-03-5.jpg";
import elysian03_6 from "../assets/imagenes/elysian/elysian-03/elysian-03-6.jpg";

// ELYSIAN 04 (3 fotos)
import elysian04_1 from "../assets/imagenes/elysian/elysian-04/elysian-04-1.jpg";
import elysian04_2 from "../assets/imagenes/elysian/elysian-04/elysian-04-2.jpg";
import elysian04_3 from "../assets/imagenes/elysian/elysian-04/elysian-04-3.jpg";

// ELYSIAN 05 (2 fotos)
import elysian05_1 from "../assets/imagenes/elysian/elysian-05/elysian-05-1.jpg";
import elysian05_2 from "../assets/imagenes/elysian/elysian-05/elysian-05-2.jpg";

// (NO HAY 06)

// ELYSIAN 07 (8 fotos)
import elysian07_1 from "../assets/imagenes/elysian/elysian-07/elysian-07-1.jpg";
import elysian07_2 from "../assets/imagenes/elysian/elysian-07/elysian-07-2.jpg";
import elysian07_3 from "../assets/imagenes/elysian/elysian-07/elysian-07-3.jpg";
import elysian07_4 from "../assets/imagenes/elysian/elysian-07/elysian-07-4.jpg";
import elysian07_5 from "../assets/imagenes/elysian/elysian-07/elysian-07-5.jpg";
import elysian07_6 from "../assets/imagenes/elysian/elysian-07/elysian-07-6.jpg";
import elysian07_7 from "../assets/imagenes/elysian/elysian-07/elysian-07-7.jpg";
import elysian07_8 from "../assets/imagenes/elysian/elysian-07/elysian-07-8.jpg";

// ELYSIAN 08 (3 fotos)
import elysian08_1 from "../assets/imagenes/elysian/elysian-08/elysian-08-1.jpg";
import elysian08_2 from "../assets/imagenes/elysian/elysian-08/elysian-08-2.jpg";
import elysian08_3 from "../assets/imagenes/elysian/elysian-08/elysian-08-3.jpg";

// ELYSIAN 09 (3 fotos)
import elysian09_1 from "../assets/imagenes/elysian/elysian-09/elysian-09-1.jpg";
import elysian09_2 from "../assets/imagenes/elysian/elysian-09/elysian-09-2.jpg";
import elysian09_3 from "../assets/imagenes/elysian/elysian-09/elysian-09-3.jpg";

// ORDEN EXACTO DE TODAS LAS FOTOS
const images = [
  // 01 (8 fotos) → índices 0–7
  elysian01_1, // 0
  elysian01_2, // 1
  elysian01_3, // 2
  elysian01_4, // 3
  elysian01_5, // 4
  elysian01_6, // 5

  // 02 (5 fotos) → índices 8–12
  elysian02_1, // 8
  elysian02_2, // 9
  elysian02_3, // 10
  elysian02_4, // 11
  elysian02_5, // 12

  // 03 (6 fotos) → índices 13–18
  elysian03_1, // 13
  elysian03_2, // 14
  elysian03_3, // 15
  elysian03_4, // 16
  elysian03_5, // 17
  elysian03_6, // 18

  // 04 (3 fotos) → índices 19–21
  elysian04_1, // 19
  elysian04_2, // 20
  elysian04_3, // 21

  // 05 (2 fotos) → índices 22–23
  elysian05_1, // 22
  elysian05_2, // 23

  // 07 (8 fotos) → índices 24–31
  elysian07_1, // 24
  elysian07_2, // 25
  elysian07_3, // 26
  elysian07_4, // 27
  elysian07_5, // 28
  elysian07_6, // 29
  elysian07_7, // 30
  elysian07_8, // 31

  // 08 (3 fotos) → índices 32–34
  elysian08_1, // 32
  elysian08_2, // 33
  elysian08_3, // 34

  // 09 (3 fotos) → índices 35–37
  elysian09_1, // 35
  elysian09_2, // 36
  elysian09_3, // 37
];

export function Elysian({ onGoHome }) {
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">ELYSIAN</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://mirage-cdn.thron.com/static/1PXRJB_MRG_CAT_ELYSIAN_102025_O3MDR5.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-elysian-pdf.pdf%22"
        />

        {/* ---- GALERÍA ---- */}

        {/* ELYSIAN 01 */}
        <h3 className="color-title">ELYSIAN 01</h3>
        <section className="gallery-grid">
          <img
            src={elysian01_1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ELYSIAN 01 - 1"
          />
          <img
            src={elysian01_2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ELYSIAN 01 - 2"
          />
          <img
            src={elysian01_3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ELYSIAN 01 - 3"
          />
          <img
            src={elysian01_4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ELYSIAN 01 - 4"
          />
          <img
            src={elysian01_5}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="ELYSIAN 01 - 5"
          />
          <img
            src={elysian01_6}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="ELYSIAN 01 - 6"
          />
          
        </section>

        {/* ELYSIAN 02 */}
        <h3 className="color-title">ELYSIAN 02</h3>
        <section className="gallery-grid">
          <img
            src={elysian02_1}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="ELYSIAN 02 - 1"
          />
          <img
            src={elysian02_2}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="ELYSIAN 02 - 2"
          />
          <img
            src={elysian02_3}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="ELYSIAN 02 - 3"
          />
          <img
            src={elysian02_4}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="ELYSIAN 02 - 4"
          />
          <img
            src={elysian02_5}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="ELYSIAN 02 - 5"
          />
        </section>

        {/* ELYSIAN 03 */}
        <h3 className="color-title">ELYSIAN 03</h3>
        <section className="gallery-grid">
          <img
            src={elysian03_1}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="ELYSIAN 03 - 1"
          />
          <img
            src={elysian03_2}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="ELYSIAN 03 - 2"
          />
          <img
            src={elysian03_3}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="ELYSIAN 03 - 3"
          />
          <img
            src={elysian03_4}
            className="gallery-img"
            onClick={() => openModal(16)}
            loading="lazy"
            alt="ELYSIAN 03 - 4"
          />
          <img
            src={elysian03_5}
            className="gallery-img"
            onClick={() => openModal(17)}
            loading="lazy"
            alt="ELYSIAN 03 - 5"
          />
          <img
            src={elysian03_6}
            className="gallery-img"
            onClick={() => openModal(18)}
            loading="lazy"
            alt="ELYSIAN 03 - 6"
          />
        </section>

        {/* ELYSIAN 04 */}
        <h3 className="color-title">ELYSIAN 04</h3>
        <section className="gallery-grid">
          <img
            src={elysian04_1}
            className="gallery-img"
            onClick={() => openModal(19)}
            loading="lazy"
            alt="ELYSIAN 04 - 1"
          />
          <img
            src={elysian04_2}
            className="gallery-img"
            onClick={() => openModal(20)}
            loading="lazy"
            alt="ELYSIAN 04 - 2"
          />
          <img
            src={elysian04_3}
            className="gallery-img"
            onClick={() => openModal(21)}
            loading="lazy"
            alt="ELYSIAN 04 - 3"
          />
        </section>

        {/* ELYSIAN 05 */}
        <h3 className="color-title">ELYSIAN 05</h3>
        <section className="gallery-grid">
          <img
            src={elysian05_1}
            className="gallery-img"
            onClick={() => openModal(22)}
            loading="lazy"
            alt="ELYSIAN 05 - 1"
          />
          <img
            src={elysian05_2}
            className="gallery-img"
            onClick={() => openModal(23)}
            loading="lazy"
            alt="ELYSIAN 05 - 2"
          />
        </section>

        {/* ELYSIAN 07 */}
        <h3 className="color-title">ELYSIAN 07</h3>
        <section className="gallery-grid">
          <img
            src={elysian07_1}
            className="gallery-img"
            onClick={() => openModal(24)}
            loading="lazy"
            alt="ELYSIAN 07 - 1"
          />
          <img
            src={elysian07_2}
            className="gallery-img"
            onClick={() => openModal(25)}
            loading="lazy"
            alt="ELYSIAN 07 - 2"
          />
          <img
            src={elysian07_3}
            className="gallery-img"
            onClick={() => openModal(26)}
            loading="lazy"
            alt="ELYSIAN 07 - 3"
          />
          <img
            src={elysian07_4}
            className="gallery-img"
            onClick={() => openModal(27)}
            loading="lazy"
            alt="ELYSIAN 07 - 4"
          />
          <img
            src={elysian07_5}
            className="gallery-img"
            onClick={() => openModal(28)}
            loading="lazy"
            alt="ELYSIAN 07 - 5"
          />
          <img
            src={elysian07_6}
            className="gallery-img"
            onClick={() => openModal(29)}
            loading="lazy"
            alt="ELYSIAN 07 - 6"
          />
          <img
            src={elysian07_7}
            className="gallery-img"
            onClick={() => openModal(30)}
            loading="lazy"
            alt="ELYSIAN 07 - 7"
          />
          <img
            src={elysian07_8}
            className="gallery-img"
            onClick={() => openModal(31)}
            loading="lazy"
            alt="ELYSIAN 07 - 8"
          />
        </section>

        {/* ELYSIAN 08 */}
        <h3 className="color-title">ELYSIAN 08</h3>
        <section className="gallery-grid">
          <img
            src={elysian08_1}
            className="gallery-img"
            onClick={() => openModal(32)}
            loading="lazy"
            alt="ELYSIAN 08 - 1"
          />
          <img
            src={elysian08_2}
            className="gallery-img"
            onClick={() => openModal(33)}
            loading="lazy"
            alt="ELYSIAN 08 - 2"
          />
          <img
            src={elysian08_3}
            className="gallery-img"
            onClick={() => openModal(34)}
            loading="lazy"
            alt="ELYSIAN 08 - 3"
          />
        </section>

        {/* ELYSIAN 09 */}
        <h3 className="color-title">ELYSIAN 09</h3>
        <section className="gallery-grid">
          <img
            src={elysian09_1}
            className="gallery-img"
            onClick={() => openModal(35)}
            loading="lazy"
            alt="ELYSIAN 09 - 1"
          />
          <img
            src={elysian09_2}
            className="gallery-img"
            onClick={() => openModal(36)}
            loading="lazy"
            alt="ELYSIAN 09 - 2"
          />
          <img
            src={elysian09_3}
            className="gallery-img"
            onClick={() => openModal(37)}
            loading="lazy"
            alt="ELYSIAN 09 - 3"
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
