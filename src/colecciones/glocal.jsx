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

// TACOS (Showroom)  ✅ Ajusta extensiones/rutas si Netlify te sigue diciendo "Could not resolve"
import tacoGlocal01 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-01.jpg";
// import tacoGlocal02 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-02.jpg"; // ❌ NO lo usamos (pedido)
import tacoGlocal03 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-03.jpg";
import tacoGlocal04 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-04.jpg";
import tacoGlocal05 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-05.jpg";
import tacoGlocal06 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-06.jpg";
import tacoGlocal07 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-07.jpg";
import tacoGlocal08 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-08.jpg";
import tacoGlocal09 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-09.jpg";
import tacoGlocal10 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-10.jpg";
import tacoGlocal11 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-11.jpg";
import tacoGlocal12 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-12.jpg";
import tacoGlocal13 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-13.jpg";
import tacoGlocal14 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-14.jpg";
import tacoGlocal15 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-15.jpg";
import tacoGlocal16 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-16.jpg";
import tacoGlocal17 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-17.jpg";
import tacoGlocal18 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-18.jpg";
import tacoGlocal20 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-20.jpg";
import tacoGlocal21 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-21.jpg";

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

// TACOS (2 columnas, arriba -> abajo)
// ❌ quitado GLOCAL 02 (pedido)
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  // Estilos inline SOLO para esta página (no tocamos style.css)
  const tacosStyles = {
    twoCols: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px", // ✅ más cerca (como "un dedo")
    },
    col: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    colTitle: {
      margin: "0 0 6px 0",
    },
    itemBase: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
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
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">GLOCAL</h1>

        {/* TACOS (2 columnas) - TODO dentro de glocal.jsx */}
        <section className="showroom-colors">
          <h3 className="showroom-colors__title" style={{ marginBottom: "10px" }}>
            SHOWROOM COLORS
          </h3>

          <div style={tacosStyles.twoCols}>
            {/* LEFT COLUMN */}
            <div style={tacosStyles.col}>
              <h4 style={tacosStyles.colTitle}>LEFT COLUMN</h4>

              {tacosLeft.map((item) => (
                <div
                  className="showroom-colors__item"
                  role="listitem"
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
                  <div className="showroom-colors__label" style={tacosStyles.labelLeft}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div style={tacosStyles.col}>
              <h4 style={tacosStyles.colTitle}>RIGHT COLUMN</h4>

              {tacosRight.map((item) => (
                <div
                  className="showroom-colors__item"
                  role="listitem"
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
                  <div className="showroom-colors__label" style={tacosStyles.labelRight}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
