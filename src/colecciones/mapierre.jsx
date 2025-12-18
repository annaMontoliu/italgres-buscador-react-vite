// src/colecciones/mapierre.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// =====================

// MAPIERRE BLANCO (6)
import mapierreBlanco01 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-01.jpg";
import mapierreBlanco02 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-02.jpg";
import mapierreBlanco03 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-03.jpg";
import mapierreBlanco04 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-04.jpg";
import mapierreBlanco05 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-05.jpg";
import mapierreBlanco06 from "../assets/imagenes/mapierre/mapierre-blanco/mapierre-blanco-06.jpg";

// MAPIERRE GREY (6)
import mapierreGrey01 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-01.jpg";
import mapierreGrey02 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-02.jpg";
import mapierreGrey03 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-03.jpg";
import mapierreGrey04 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-04.jpg";
import mapierreGrey05 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-05.jpg";
import mapierreGrey06 from "../assets/imagenes/mapierre/mapierre-grey/mapierre-grey-06.jpg";

// =====================
// ARRAY GLOBAL MODAL
// ORDEN EXACTO (como LUCENA)
// =====================
const images = [
  mapierreBlanco01,
  mapierreBlanco02,
  mapierreBlanco03,
  mapierreBlanco04,
  mapierreBlanco05,
  mapierreBlanco06,
  mapierreGrey01,
  mapierreGrey02,
  mapierreGrey03,
  mapierreGrey04,
  mapierreGrey05,
  mapierreGrey06,
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* TÍTULO */}
        <h1 className="titulo-coleccion">MAPIERRE</h1>

        {/* BOTÓN / BLOQUE COMO TODAS */}
        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/Mapierre%20Catalogo%202025.11%20Web.pdf" />

        {/* ===== COLOR BLANCO ===== */}
        <h3 className="color-title">MAPIERRE BLANCO</h3>
        <section className="gallery-grid">
          <img src={mapierreBlanco01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="MAPIERRE BLANCO 01" />
          <img src={mapierreBlanco02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="MAPIERRE BLANCO 02" />
          <img src={mapierreBlanco03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="MAPIERRE BLANCO 03" />
          <img src={mapierreBlanco04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="MAPIERRE BLANCO 04" />
          <img src={mapierreBlanco05} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="MAPIERRE BLANCO 05" />
          <img src={mapierreBlanco06} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="MAPIERRE BLANCO 06" />
        </section>

        {/* ===== COLOR GREY ===== */}
        <h3 className="color-title">MAPIERRE GREY</h3>
        <section className="gallery-grid">
          <img src={mapierreGrey01} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="MAPIERRE GREY 01" />
          <img src={mapierreGrey02} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="MAPIERRE GREY 02" />
          <img src={mapierreGrey03} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="MAPIERRE GREY 03" />
          <img src={mapierreGrey04} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="MAPIERRE GREY 04" />
          <img src={mapierreGrey05} className="gallery-img" onClick={() => openModal(10)} loading="lazy" alt="MAPIERRE GREY 05" />
          <img src={mapierreGrey06} className="gallery-img" onClick={() => openModal(11)} loading="lazy" alt="MAPIERRE GREY 06" />
        </section>
      </main>

      {/* MODAL REUTILIZABLE */}
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
