// src/colecciones/mapierre.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// =====================
// IMPORT IMÁGENES
// =====================

// MAPIERRE GREY (6)
import mapierreGrey01 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-01.jpg";
import mapierreGrey02 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-02.jpg";
import mapierreGrey03 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-03.jpg";
import mapierreGrey04 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-04.jpg";
import mapierreGrey05 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-05.jpg";
import mapierreGrey06 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-06.jpg";

// MAPIERRE BLANCO (6) — se queda EXACTAMENTE como estaba
import mapierreBlanco01 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-01.jpg";
import mapierreBlanco02 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-02.jpg";
import mapierreBlanco03 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-03.jpg";
import mapierreBlanco04 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-04.jpg";
import mapierreBlanco05 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-05.jpg";
import mapierreBlanco06 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-06.jpg";

// MAPIERRE BEIGE (5)
import mapierreBeige01 from "../assets/imagenes/mapierre/mapierre-beige/mapierre-beige-01.jpg";
import mapierreBeige02 from "../assets/imagenes/mapierre/mapierre-beige/mapierre-beige-02.jpg";
import mapierreBeige03 from "../assets/imagenes/mapierre/mapierre-beige/mapierre-beige-03.jpg";
import mapierreBeige04 from "../assets/imagenes/mapierre/mapierre-beige/mapierre-beige-04.jpg";
import mapierreBeige05 from "../assets/imagenes/mapierre/mapierre-beige/mapierre-beige-05.jpg";

// MAPIERRE NOIR (2)
import mapierreNoir01 from "../assets/imagenes/mapierre/mapierre-noir/mapierre-noir-01.jpg";
import mapierreNoir02 from "../assets/imagenes/mapierre/mapierre-noir/mapierre-noir-02.jpg";

// =====================
// TACOS (showroom)
// Orden: GREY, BLANCO, BEIGE, NOIR
// =====================
import tacoMapierreGrey from "../assets/imagenes/mapierre/mapierre-tacos/taco-mapierre-grey.jpg";
import tacoMapierreBlanco from "../assets/imagenes/mapierre/mapierre-tacos/taco-mapierre-blanco.jpg";
import tacoMapierreBeige from "../assets/imagenes/mapierre/mapierre-tacos/taco-mapierre-beige.jpg";
import tacoMapierreNoir from "../assets/imagenes/mapierre/mapierre-tacos/taco-mapierre-noir.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO
// GREY → BLANCO → BEIGE → NOIR
// =====================
const images = [
  // GREY (0–5)
  mapierreGrey01,
  mapierreGrey02,
  mapierreGrey03,
  mapierreGrey04,
  mapierreGrey05,
  mapierreGrey06,

  // BLANCO (6–11)
  mapierreBlanco01,
  mapierreBlanco02,
  mapierreBlanco03,
  mapierreBlanco04,
  mapierreBlanco05,
  mapierreBlanco06,

  // BEIGE (12–16)
  mapierreBeige01,
  mapierreBeige02,
  mapierreBeige03,
  mapierreBeige04,
  mapierreBeige05,

  // NOIR (17–18)
  mapierreNoir01,
  mapierreNoir02,
];

export function Mapierre({ onGoHome }) {
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

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MAPIERRE</h1>

        {/* TACOS */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "GREY", thumb: tacoMapierreGrey },
            { label: "BLANCO", thumb: tacoMapierreBlanco },
            { label: "BEIGE", thumb: tacoMapierreBeige },
            { label: "NOIR", thumb: tacoMapierreNoir },
          ]}
        />

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Mapierre%20Catalogo%202025.11%20Web.pdf" />

        {/* GREY */}
        <h3 className="color-title">MAPIERRE GREY</h3>
        <section className="gallery-grid">
          {images.slice(0, 6).map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`MAPIERRE GREY ${i + 1}`}
            />
          ))}
        </section>

        {/* BLANCO */}
        <h3 className="color-title">MAPIERRE BLANCO</h3>
        <section className="gallery-grid">
          {images.slice(6, 12).map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i + 6)}
              loading="lazy"
              alt={`MAPIERRE BLANCO ${i + 1}`}
            />
          ))}
        </section>

        {/* BEIGE */}
        <h3 className="color-title">MAPIERRE BEIGE</h3>
        <section className="gallery-grid">
          {images.slice(12, 17).map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i + 12)}
              loading="lazy"
              alt={`MAPIERRE BEIGE ${i + 1}`}
            />
          ))}
        </section>

        {/* NOIR */}
        <h3 className="color-title">MAPIERRE NOIR</h3>
        <section className="gallery-grid">
          {images.slice(17, 19).map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i + 17)}
              loading="lazy"
              alt={`MAPIERRE NOIR ${i + 1}`}
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
