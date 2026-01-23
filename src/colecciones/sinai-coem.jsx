// src/colecciones/sinai-coem.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// AVORIO (3)
import sinaiCoemAvorio01 from "../assets/imagenes/sinai-coem/sinai-coem-avorio/sinai-coem-avorio-01.jpg";
import sinaiCoemAvorio02 from "../assets/imagenes/sinai-coem/sinai-coem-avorio/sinai-coem-avorio-02.jpg";
import sinaiCoemAvorio03 from "../assets/imagenes/sinai-coem/sinai-coem-avorio/sinai-coem-avorio-03.jpg";

// BEIGE (2)
import sinaiCoemBeige01 from "../assets/imagenes/sinai-coem/sinai-coem-beige/sinai-coem-beige-01.jpg";
import sinaiCoemBeige02 from "../assets/imagenes/sinai-coem/sinai-coem-beige/sinai-coem-beige-02.jpg";

// GRIGIO (1)
import sinaiCoemGrigio01 from "../assets/imagenes/sinai-coem/sinai-coem-grigio/sinai-coem-grigio-01.jpg";

// DORATO (1)
import sinaiCoemDorato01 from "../assets/imagenes/sinai-coem/sinai-coem-dorato/sinai-coem-dorato-01.jpg";

// IMPORTS TACOS (showroom) - siempre en sinai-coem-tacos
import tacoSinaiCoemAvorio from "../assets/imagenes/sinai-coem/sinai-coem-tacos/taco-sinai-coem-avorio.jpg";
import tacoSinaiCoemBeige from "../assets/imagenes/sinai-coem/sinai-coem-tacos/taco-sinai-coem-beige.jpg";
import tacoSinaiCoemGrigio from "../assets/imagenes/sinai-coem/sinai-coem-tacos/taco-sinai-coem-grigio.jpg";
import tacoSinaiCoemDorato from "../assets/imagenes/sinai-coem/sinai-coem-tacos/taco-sinai-coem-dorato.jpg";

// ORDEN EXACTO (modal): AVORIO, BEIGE, GRIGIO, DORATO
const images = [
  // AVORIO
  sinaiCoemAvorio01,
  sinaiCoemAvorio02,
  sinaiCoemAvorio03,

  // BEIGE
  sinaiCoemBeige01,
  sinaiCoemBeige02,

  // GRIGIO
  sinaiCoemGrigio01,

  // DORATO
  sinaiCoemDorato01,
];

export function SinaiCoem({ onGoHome }) {
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
        <h1 className="titulo-coleccion">SINAI COEM</h1>

        {/* SHOWROOM COLORS (TACOS) - orden: AVORIO, BEIGE, GRIGIO, DORATO */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "AVORIO", thumb: tacoSinaiCoemAvorio },
            { label: "BEIGE", thumb: tacoSinaiCoemBeige },
            { label: "GRIGIO", thumb: tacoSinaiCoemGrigio },
            { label: "DORATO", thumb: tacoSinaiCoemDorato },
          ]}
        />

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://www.coem.it/wp-content/uploads/2023/12/COEM-Sinai.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color AVORIO */}
        <h3 className="color-title">SINAI COEM AVORIO</h3>
        <section className="gallery-grid">
          <img
            src={sinaiCoemAvorio01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="SINAI COEM AVORIO 1"
          />
          <img
            src={sinaiCoemAvorio02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="SINAI COEM AVORIO 2"
          />
          <img
            src={sinaiCoemAvorio03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="SINAI COEM AVORIO 3"
          />
        </section>

        {/* Color BEIGE */}
        <h3 className="color-title">SINAI COEM BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={sinaiCoemBeige01}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="SINAI COEM BEIGE 1"
          />
          <img
            src={sinaiCoemBeige02}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="SINAI COEM BEIGE 2"
          />
        </section>

        {/* Color GRIGIO */}
        <h3 className="color-title">SINAI COEM GRIGIO</h3>
        <section className="gallery-grid">
          <img
            src={sinaiCoemGrigio01}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="SINAI COEM GRIGIO 1"
          />
        </section>

        {/* Color DORATO */}
        <h3 className="color-title">SINAI COEM DORATO</h3>
        <section className="gallery-grid">
          <img
            src={sinaiCoemDorato01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="SINAI COEM DORATO 1"
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
