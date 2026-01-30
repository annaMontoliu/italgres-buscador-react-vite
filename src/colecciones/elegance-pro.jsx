// src/colecciones/elegance-pro.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORTS DE IMÁGENES
// =====================

// WHITE (5)
import eleganceProWhite1 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-1.jpg";
import eleganceProWhite2 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-2.jpg";
import eleganceProWhite3 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-3.jpg";
import eleganceProWhite4 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-4.jpg";
import eleganceProWhite5 from "../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-5.jpg";

// DARK GREY (2)
import eleganceProDarkGrey1 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-01.jpg";
import eleganceProDarkGrey2 from "../assets/imagenes/elegance-pro/elegance-pro-dark-grey/elegance-pro-dark-grey-02.jpg";

// ANTRACITA (6)
import eleganceProAntracita1 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-01.jpg";
import eleganceProAntracita2 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-02.jpg";
import eleganceProAntracita3 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-03.jpg";
import eleganceProAntracita4 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-04.jpg";
import eleganceProAntracita5 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-05.jpg";
import eleganceProAntracita6 from "../assets/imagenes/elegance-pro/elegance-pro-antracita/elegance-pro-antracita-06.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN: WHITE → DARK GREY → ANTRACITA
// =====================
const images = [
  // WHITE
  eleganceProWhite1,
  eleganceProWhite2,
  eleganceProWhite3,
  eleganceProWhite4,
  eleganceProWhite5,

  // DARK GREY
  eleganceProDarkGrey1,
  eleganceProDarkGrey2,

  // ANTRACITA
  eleganceProAntracita1,
  eleganceProAntracita2,
  eleganceProAntracita3,
  eleganceProAntracita4,
  eleganceProAntracita5,
  eleganceProAntracita6,
];

export function ElegancePro({ onGoHome }) {
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
    setCurrentIndex((i) => (i + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">ELEGANCE PRO</h1>

        <ColeccionLayout
          infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Elegance%20Pro%20Catalogo%202024.12%20Web.pdf"
        />

        {/* WHITE */}
        <h3 className="color-title">ELEGANCE PRO WHITE</h3>
        <section className="gallery-grid">
          {[eleganceProWhite1, eleganceProWhite2, eleganceProWhite3, eleganceProWhite4, eleganceProWhite5].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                className="gallery-img"
                onClick={() => openModal(i)}
                loading="lazy"
                alt={`ELEGANCE PRO WHITE ${i + 1}`}
              />
            )
          )}
        </section>

        {/* DARK GREY */}
        <h3 className="color-title">ELEGANCE PRO DARK GREY</h3>
        <section className="gallery-grid">
          {[eleganceProDarkGrey1, eleganceProDarkGrey2].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(5 + i)}
              loading="lazy"
              alt={`ELEGANCE PRO DARK GREY ${i + 1}`}
            />
          ))}
        </section>

        {/* ANTRACITA */}
        <h3 className="color-title">ELEGANCE PRO ANTRACITA</h3>
        <section className="gallery-grid">
          {[
            eleganceProAntracita1,
            eleganceProAntracita2,
            eleganceProAntracita3,
            eleganceProAntracita4,
            eleganceProAntracita5,
            eleganceProAntracita6,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(7 + i)}
              loading="lazy"
              alt={`ELEGANCE PRO ANTRACITA ${i + 1}`}
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
