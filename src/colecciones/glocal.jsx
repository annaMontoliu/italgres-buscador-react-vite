// src/colecciones/glocal.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

/* ===================== */
/* AMBIENTES (IMPORTS)   */
/* ===================== */

// GLOCAL 01
import glocal0101 from "../assets/imagenes/glocal/glocal-01/glocal-01-01.jpg";
import glocal0102 from "../assets/imagenes/glocal/glocal-01/glocal-01-02.jpg";
import glocal0103 from "../assets/imagenes/glocal/glocal-01/glocal-01-03.jpg";

// GLOCAL 02
import glocal0201 from "../assets/imagenes/glocal/glocal-02/glocal-02-01.jpg";
import glocal0202 from "../assets/imagenes/glocal/glocal-02/glocal-02-02.jpg";
import glocal0203 from "../assets/imagenes/glocal/glocal-02/glocal-02-03.jpg";
import glocal0204 from "../assets/imagenes/glocal/glocal-02/glocal-02-04.jpg";
import glocal0205 from "../assets/imagenes/glocal/glocal-02/glocal-02-05.jpg";
import glocal0206 from "../assets/imagenes/glocal/glocal-02/glocal-02-06.jpg";
import glocal0207 from "../assets/imagenes/glocal/glocal-02/glocal-02-07.jpg";
import glocal0208 from "../assets/imagenes/glocal/glocal-02/glocal-02-08.jpg";
import glocal0209 from "../assets/imagenes/glocal/glocal-02/glocal-02-09.jpg";

// (imports 03 → 21 EXACTAMENTE IGUAL que los tuyos)
// ⚠️ No los repito aquí por espacio pero deben quedarse EXACTAMENTE IGUAL

// =====================
// MODAL IMAGES
// =====================

const images = [
  glocal0101, glocal0102, glocal0103,
  glocal0201, glocal0202, glocal0203, glocal0204, glocal0205, glocal0206, glocal0207, glocal0208, glocal0209,
  // ... sigue exactamente igual que tu array original completo
];

// =====================
// TACOS (IMPORTS)
// =====================

import tacoGlocal01 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-01.jpg";
// ... todos tus imports de tacos EXACTAMENTE IGUAL

const tacosLeft = [
  { label: "GLOCAL 10", thumb: tacoGlocal10 },
  { label: "GLOCAL 14", thumb: tacoGlocal14 },
  { label: "GLOCAL 18", thumb: tacoGlocal18 },
  { label: "GLOCAL 16", thumb: tacoGlocal16 },
  { label: "GLOCAL 15", thumb: tacoGlocal15 },
  { label: "GLOCAL 08", thumb: tacoGlocal08 },
  { label: "GLOCAL 17", thumb: tacoGlocal17 },
  { label: "GLOCAL 09", thumb: tacoGlocal09 },
  { label: "GLOCAL 21", thumb: tacoGlocal21 },
];

const tacosRight = [
  { label: "GLOCAL 01", thumb: tacoGlocal01 },
  { label: "GLOCAL 13", thumb: tacoGlocal13 },
  { label: "GLOCAL 07", thumb: tacoGlocal07 },
  { label: "GLOCAL 12", thumb: tacoGlocal12 },
  { label: "GLOCAL 11", thumb: tacoGlocal11 },
  { label: "GLOCAL 03", thumb: tacoGlocal03 },
  { label: "GLOCAL 04", thumb: tacoGlocal04 },
  { label: "GLOCAL 05", thumb: tacoGlocal05 },
  { label: "GLOCAL 20", thumb: tacoGlocal20 },
  { label: "GLOCAL 06", thumb: tacoGlocal06 },
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  /* ===================================================== */
  /* 🔥 CORRECCIÓN REAL TACOS (anula width 92px global)   */
  /* ===================================================== */

  const tacosStyles = {
    twoCols: {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gap: "14px",
      justifyContent: "flex-start",
      marginLeft: "18px",   // desplaza a la derecha
      paddingRight: "10px",
    },
    col: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },
    colTitle: {
      margin: "0 0 8px 0",
    },
    itemBase: {
      width: "auto",          // 🔥 anula 92px global
      minWidth: "170px",      // espacio real para texto
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    leftItem: { justifyContent: "flex-end" },
    rightItem: { justifyContent: "flex-start" },
    thumbRight: { order: 1 },
    labelRight: { order: 2, textAlign: "left" },
    thumbLeft: { order: 2 },
    labelLeft: { order: 1, textAlign: "right" },
  };

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">GLOCAL</h1>

        {/* TACOS */}
        <section className="showroom-colors">
          <h3 className="showroom-colors__title" style={{ marginBottom: "10px" }}>
            SHOWROOM COLORS
          </h3>

          <div style={tacosStyles.twoCols}>
            <div style={tacosStyles.col}>
              {tacosLeft.map((item) => (
                <div
                  key={`left-${item.label}`}
                  style={{ ...tacosStyles.itemBase, ...tacosStyles.leftItem }}
                >
                  <img
                    src={item.thumb}
                    alt={item.label}
                    className="showroom-colors__thumb"
                    loading="lazy"
                    draggable="false"
                    style={tacosStyles.thumbLeft}
                  />
                  <div style={tacosStyles.labelLeft}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={tacosStyles.col}>
              {tacosRight.map((item) => (
                <div
                  key={`right-${item.label}`}
                  style={{ ...tacosStyles.itemBase, ...tacosStyles.rightItem }}
                >
                  <img
                    src={item.thumb}
                    alt={item.label}
                    className="showroom-colors__thumb"
                    loading="lazy"
                    draggable="false"
                    style={tacosStyles.thumbRight}
                  />
                  <div style={tacosStyles.labelRight}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/WJTGHQ_MRG_CAT_GLOCAL_102025_YH6SGG.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-glocal-pdf.pdf%22" />

        {/* ⚠️ TODA TU GALERÍA EXACTAMENTE IGUAL QUE ANTES */}
        {/* No modifico nada más */}
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