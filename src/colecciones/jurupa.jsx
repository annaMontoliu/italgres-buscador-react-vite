// src/colecciones/jurupa.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS JURUPA 01 (2 fotos)
import jurupa01_01 from "../assets/imagenes/jurupa/jurupa-01/jurupa-01-01.jpg";
import jurupa01_02 from "../assets/imagenes/jurupa/jurupa-01/jurupa-01-02.jpg";

// IMPORTS JURUPA 02 (3 fotos)
import jurupa02_01 from "../assets/imagenes/jurupa/jurupa-02/jurupa-02-01.jpg";
import jurupa02_02 from "../assets/imagenes/jurupa/jurupa-02/jurupa-02-02.jpg";
import jurupa02_03 from "../assets/imagenes/jurupa/jurupa-02/jurupa-02-03.jpg";

// IMPORTS JURUPA 03 (3 fotos)
import jurupa03_01 from "../assets/imagenes/jurupa/jurupa-03/jurupa-03-01.jpg";
import jurupa03_02 from "../assets/imagenes/jurupa/jurupa-03/jurupa-03-02.jpg";
import jurupa03_03 from "../assets/imagenes/jurupa/jurupa-03/jurupa-03-03.jpg";

// IMPORTS JURUPA 04 (14 fotos)
import jurupa04_01 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-01.jpg";
import jurupa04_02 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-02.jpg";
import jurupa04_03 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-03.jpg";
import jurupa04_04 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-04.jpg";
import jurupa04_05 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-05.jpg";
import jurupa04_06 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-06.jpg";
import jurupa04_07 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-07.jpg";
import jurupa04_08 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-08.jpg";
import jurupa04_09 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-09.jpg";
import jurupa04_10 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-10.jpg";
import jurupa04_11 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-11.jpg";
import jurupa04_12 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-12.jpg";
import jurupa04_13 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-13.jpg";
import jurupa04_14 from "../assets/imagenes/jurupa/jurupa-04/jurupa-04-14.jpg";

// IMPORTS JURUPA 05 (5 fotos)
import jurupa05_01 from "../assets/imagenes/jurupa/jurupa-05/jurupa-05-01.jpg";
import jurupa05_02 from "../assets/imagenes/jurupa/jurupa-05/jurupa-05-02.jpg";
import jurupa05_03 from "../assets/imagenes/jurupa/jurupa-05/jurupa-05-03.jpg";
import jurupa05_04 from "../assets/imagenes/jurupa/jurupa-05/jurupa-05-04.jpg";
import jurupa05_05 from "../assets/imagenes/jurupa/jurupa-05/jurupa-05-05.jpg";

// ORDEN EXACTO: 01, 02, 03, 04, 05
const images = [
  // 01 (2)
  jurupa01_01,
  jurupa01_02,

  // 02 (3)
  jurupa02_01,
  jurupa02_02,
  jurupa02_03,

  // 03 (3)
  jurupa03_01,
  jurupa03_02,
  jurupa03_03,

  // 04 (14)
  jurupa04_01,
  jurupa04_02,
  jurupa04_03,
  jurupa04_04,
  jurupa04_05,
  jurupa04_06,
  jurupa04_07,
  jurupa04_08,
  jurupa04_09,
  jurupa04_10,
  jurupa04_11,
  jurupa04_12,
  jurupa04_13,
  jurupa04_14,

  // 05 (5)
  jurupa05_01,
  jurupa05_02,
  jurupa05_03,
  jurupa05_04,
  jurupa05_05,
];

export function Jurupa({ onGoHome }) {
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
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">JURUPA</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/CA4CDI_MRG_CAT_JURUPA_082025_QLKTHJ.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-jurupa-pdf.pdf%22" />

        {/* ---- GALERÍA ---- */}

        {/* JURUPA 01 */}
        <h3 className="color-title">JURUPA 01</h3>
        <section className="gallery-grid">
          <img
            src={jurupa01_01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="JURUPA 01 - 1"
          />
          <img
            src={jurupa01_02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="JURUPA 01 - 2"
          />
        </section>

        {/* JURUPA 02 */}
        <h3 className="color-title">JURUPA 02</h3>
        <section className="gallery-grid">
          <img
            src={jurupa02_01}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="JURUPA 02 - 1"
          />
          <img
            src={jurupa02_02}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="JURUPA 02 - 2"
          />
          <img
            src={jurupa02_03}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="JURUPA 02 - 3"
          />
        </section>

        {/* JURUPA 03 */}
        <h3 className="color-title">JURUPA 03</h3>
        <section className="gallery-grid">
          <img
            src={jurupa03_01}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="JURUPA 03 - 1"
          />
          <img
            src={jurupa03_02}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="JURUPA 03 - 2"
          />
          <img
            src={jurupa03_03}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="JURUPA 03 - 3"
          />
        </section>

        {/* JURUPA 04 */}
        <h3 className="color-title">JURUPA 04</h3>
        <section className="gallery-grid">
          <img
            src={jurupa04_01}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="JURUPA 04 - 1"
          />
          <img
            src={jurupa04_02}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="JURUPA 04 - 2"
          />
          <img
            src={jurupa04_03}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="JURUPA 04 - 3"
          />
          <img
            src={jurupa04_04}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="JURUPA 04 - 4"
          />
          <img
            src={jurupa04_05}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="JURUPA 04 - 5"
          />
          <img
            src={jurupa04_06}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="JURUPA 04 - 6"
          />
          <img
            src={jurupa04_07}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="JURUPA 04 - 7"
          />
          <img
            src={jurupa04_08}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="JURUPA 04 - 8"
          />
          <img
            src={jurupa04_09}
            className="gallery-img"
            onClick={() => openModal(16)}
            loading="lazy"
            alt="JURUPA 04 - 9"
          />
          <img
            src={jurupa04_10}
            className="gallery-img"
            onClick={() => openModal(17)}
            loading="lazy"
            alt="JURUPA 04 - 10"
          />
          <img
            src={jurupa04_11}
            className="gallery-img"
            onClick={() => openModal(18)}
            loading="lazy"
            alt="JURUPA 04 - 11"
          />
          <img
            src={jurupa04_12}
            className="gallery-img"
            onClick={() => openModal(19)}
            loading="lazy"
            alt="JURUPA 04 - 12"
          />
          <img
            src={jurupa04_13}
            className="gallery-img"
            onClick={() => openModal(20)}
            loading="lazy"
            alt="JURUPA 04 - 13"
          />
          <img
            src={jurupa04_14}
            className="gallery-img"
            onClick={() => openModal(21)}
            loading="lazy"
            alt="JURUPA 04 - 14"
          />
        </section>

        {/* JURUPA 05 */}
        <h3 className="color-title">JURUPA 05</h3>
        <section className="gallery-grid">
          <img
            src={jurupa05_01}
            className="gallery-img"
            onClick={() => openModal(22)}
            loading="lazy"
            alt="JURUPA 05 - 1"
          />
          <img
            src={jurupa05_02}
            className="gallery-img"
            onClick={() => openModal(23)}
            loading="lazy"
            alt="JURUPA 05 - 2"
          />
          <img
            src={jurupa05_03}
            className="gallery-img"
            onClick={() => openModal(24)}
            loading="lazy"
            alt="JURUPA 05 - 3"
          />
          <img
            src={jurupa05_04}
            className="gallery-img"
            onClick={() => openModal(25)}
            loading="lazy"
            alt="JURUPA 05 - 4"
          />
          <img
            src={jurupa05_05}
            className="gallery-img"
            onClick={() => openModal(26)}
            loading="lazy"
            alt="JURUPA 05 - 5"
          />
        </section>
      </main>

      {/* MODAL */}
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
