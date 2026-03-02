// src/colecciones/glocal.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// AMBIENTES (IMPORTS)
// =====================

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

// GLOCAL 03
import glocal0301 from "../assets/imagenes/glocal/glocal-03/glocal-03-01.jpg";
import glocal0302 from "../assets/imagenes/glocal/glocal-03/glocal-03-02.jpg";
import glocal0303 from "../assets/imagenes/glocal/glocal-03/glocal-03-03.jpg";
import glocal0304 from "../assets/imagenes/glocal/glocal-03/glocal-03-04.jpg";
import glocal0305 from "../assets/imagenes/glocal/glocal-03/glocal-03-05.jpg";
import glocal0306 from "../assets/imagenes/glocal/glocal-03/glocal-03-06.jpg";
import glocal0307 from "../assets/imagenes/glocal/glocal-03/glocal-03-07.jpg";

// GLOCAL 04
import glocal0401 from "../assets/imagenes/glocal/glocal-04/glocal-04-01.jpg";
import glocal0402 from "../assets/imagenes/glocal/glocal-04/glocal-04-02.jpg";
import glocal0403 from "../assets/imagenes/glocal/glocal-04/glocal-04-03.jpg";

// GLOCAL 05
import glocal0501 from "../assets/imagenes/glocal/glocal-05/glocal-05-01.jpg";
import glocal0502 from "../assets/imagenes/glocal/glocal-05/glocal-05-02.jpg";
import glocal0503 from "../assets/imagenes/glocal/glocal-05/glocal-05-03.jpg";
import glocal0504 from "../assets/imagenes/glocal/glocal-05/glocal-05-04.jpg";
import glocal0505 from "../assets/imagenes/glocal/glocal-05/glocal-05-05.jpg";
import glocal0506 from "../assets/imagenes/glocal/glocal-05/glocal-05-06.jpg";

// GLOCAL 06
import glocal0601 from "../assets/imagenes/glocal/glocal-06/glocal-06-01.jpg";
import glocal0602 from "../assets/imagenes/glocal/glocal-06/glocal-06-02.jpg";
import glocal0603 from "../assets/imagenes/glocal/glocal-06/glocal-06-03.jpg";
import glocal0604 from "../assets/imagenes/glocal/glocal-06/glocal-06-04.jpg";
import glocal0605 from "../assets/imagenes/glocal/glocal-06/glocal-06-05.jpg";

// GLOCAL 07
import glocal0701 from "../assets/imagenes/glocal/glocal-07/glocal-07-01.jpg";
import glocal0702 from "../assets/imagenes/glocal/glocal-07/glocal-07-02.jpg";
import glocal0703 from "../assets/imagenes/glocal/glocal-07/glocal-07-03.jpg";

// GLOCAL 08
import glocal0801 from "../assets/imagenes/glocal/glocal-08/glocal-08-01.jpg";

// GLOCAL 09
import glocal0901 from "../assets/imagenes/glocal/glocal-09/glocal-09-01.jpg";
import glocal0902 from "../assets/imagenes/glocal/glocal-09/glocal-09-02.jpg";

// GLOCAL 10
import glocal1001 from "../assets/imagenes/glocal/glocal-10/glocal-10-01.jpg";
import glocal1002 from "../assets/imagenes/glocal/glocal-10/glocal-10-02.jpg";

// GLOCAL 11
import glocal1101 from "../assets/imagenes/glocal/glocal-11/glocal-11-01.jpg";
import glocal1102 from "../assets/imagenes/glocal/glocal-11/glocal-11-02.jpg";
import glocal1103 from "../assets/imagenes/glocal/glocal-11/glocal-11-03.jpg";

// GLOCAL 12
import glocal1201 from "../assets/imagenes/glocal/glocal-12/glocal-12-01.jpg";

// GLOCAL 13
import glocal1301 from "../assets/imagenes/glocal/glocal-13/glocal-13-01.jpg";
import glocal1302 from "../assets/imagenes/glocal/glocal-13/glocal-13-02.jpg";
import glocal1303 from "../assets/imagenes/glocal/glocal-13/glocal-13-03.jpg";

// GLOCAL 14
import glocal1401 from "../assets/imagenes/glocal/glocal-14/glocal-14-01.jpg";
import glocal1402 from "../assets/imagenes/glocal/glocal-14/glocal-14-02.jpg";
import glocal1403 from "../assets/imagenes/glocal/glocal-14/glocal-14-03.jpg";

// GLOCAL 15
import glocal1501 from "../assets/imagenes/glocal/glocal-15/glocal-15-01.jpg";
import glocal1502 from "../assets/imagenes/glocal/glocal-15/glocal-15-02.jpg";
import glocal1503 from "../assets/imagenes/glocal/glocal-15/glocal-15-03.jpg";
import glocal1504 from "../assets/imagenes/glocal/glocal-15/glocal-15-04.jpg";
import glocal1505 from "../assets/imagenes/glocal/glocal-15/glocal-15-05.jpg";
import glocal1506 from "../assets/imagenes/glocal/glocal-15/glocal-15-06.jpg";

// GLOCAL 16
import glocal1601 from "../assets/imagenes/glocal/glocal-16/glocal-16-01.jpg";
import glocal1602 from "../assets/imagenes/glocal/glocal-16/glocal-16-02.jpg";
import glocal1603 from "../assets/imagenes/glocal/glocal-16/glocal-16-03.jpg";
import glocal1604 from "../assets/imagenes/glocal/glocal-16/glocal-16-04.jpg";
import glocal1605 from "../assets/imagenes/glocal/glocal-16/glocal-16-05.jpg";
import glocal1606 from "../assets/imagenes/glocal/glocal-16/glocal-16-06.jpg";

// GLOCAL 17
import glocal1701 from "../assets/imagenes/glocal/glocal-17/glocal-17-01.jpg";

// GLOCAL 18
import glocal1801 from "../assets/imagenes/glocal/glocal-18/glocal-18-01.jpg";
import glocal1802 from "../assets/imagenes/glocal/glocal-18/glocal-18-02.jpg";
import glocal1803 from "../assets/imagenes/glocal/glocal-18/glocal-18-03.jpg";

// (No existe GLOCAL 19 en tus carpetas)

// GLOCAL 20
import glocal2001 from "../assets/imagenes/glocal/glocal-20/glocal-20-01.jpg";
import glocal2002 from "../assets/imagenes/glocal/glocal-20/glocal-20-02.jpg";

// GLOCAL 21
import glocal2101 from "../assets/imagenes/glocal/glocal-21/glocal-21-01.jpg";
import glocal2102 from "../assets/imagenes/glocal/glocal-21/glocal-21-02.jpg";
import glocal2103 from "../assets/imagenes/glocal/glocal-21/glocal-21-03.jpg";

// =====================
// TACOS (IMPORTS)
// =====================
import tacoGlocal01 from "../assets/imagenes/glocal/glocal-tacos/taco-glocal-01.jpg";
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

// =====================
// MODAL: ORDEN EXACTO (01 -> 21, sin 19)
// =====================
const images = [
  // 01 (0-2)
  glocal0101,
  glocal0102,
  glocal0103,

  // 02 (3-11)
  glocal0201,
  glocal0202,
  glocal0203,
  glocal0204,
  glocal0205,
  glocal0206,
  glocal0207,
  glocal0208,
  glocal0209,

  // 03 (12-18)
  glocal0301,
  glocal0302,
  glocal0303,
  glocal0304,
  glocal0305,
  glocal0306,
  glocal0307,

  // 04 (19-21)
  glocal0401,
  glocal0402,
  glocal0403,

  // 05 (22-27)
  glocal0501,
  glocal0502,
  glocal0503,
  glocal0504,
  glocal0505,
  glocal0506,

  // 06 (28-32)
  glocal0601,
  glocal0602,
  glocal0603,
  glocal0604,
  glocal0605,

  // 07 (33-35)
  glocal0701,
  glocal0702,
  glocal0703,

  // 08 (36)
  glocal0801,

  // 09 (37-38)
  glocal0901,
  glocal0902,

  // 10 (39-40)
  glocal1001,
  glocal1002,

  // 11 (41-43)
  glocal1101,
  glocal1102,
  glocal1103,

  // 12 (44)
  glocal1201,

  // 13 (45-47)
  glocal1301,
  glocal1302,
  glocal1303,

  // 14 (48-50)
  glocal1401,
  glocal1402,
  glocal1403,

  // 15 (51-56)
  glocal1501,
  glocal1502,
  glocal1503,
  glocal1504,
  glocal1505,
  glocal1506,

  // 16 (57-62)
  glocal1601,
  glocal1602,
  glocal1603,
  glocal1604,
  glocal1605,
  glocal1606,

  // 17 (63)
  glocal1701,

  // 18 (64-66)
  glocal1801,
  glocal1802,
  glocal1803,

  // 20 (67-68)
  glocal2001,
  glocal2002,

  // 21 (69-71)
  glocal2101,
  glocal2102,
  glocal2103,
];

// TACOS (2 columnas, arriba -> abajo) — quitado GLOCAL 02 (pedido)
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
      gridTemplateColumns: "auto auto",
      gap: "12px",
      justifyContent: "flex-start",

      // ✅ NUEVO: desplazamos el bloque de tacos a la derecha (evita corte del texto en móvil)
      paddingLeft: "14px",
      paddingRight: "6px",
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

        {/* TACOS (2 columnas) */}
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
        <ColeccionLayout infoUrl="https://mirage-cdn.thron.com/static/WJTGHQ_MRG_CAT_GLOCAL_102025_YH6SGG.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22catalogo-glocal-pdf.pdf%22" />

        {/* =====================
            GALERÍA AMBIENTES
           ===================== */}

        {/* GLOCAL 01 (0-2) */}
        <h3 className="color-title">GLOCAL 01</h3>
        <section className="gallery-grid">
          <img src={glocal0101} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="GLOCAL 01 1" />
          <img src={glocal0102} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="GLOCAL 01 2" />
          <img src={glocal0103} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="GLOCAL 01 3" />
        </section>

        {/* GLOCAL 02 (3-11) */}
        <h3 className="color-title">GLOCAL 02</h3>
        <section className="gallery-grid">
          <img src={glocal0201} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="GLOCAL 02 1" />
          <img src={glocal0202} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="GLOCAL 02 2" />
          <img src={glocal0203} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="GLOCAL 02 3" />
          <img src={glocal0204} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="GLOCAL 02 4" />
          <img src={glocal0205} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="GLOCAL 02 5" />
          <img src={glocal0206} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="GLOCAL 02 6" />
          <img src={glocal0207} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="GLOCAL 02 7" />
          <img src={glocal0208} className="gallery-img" onClick={() => openModal(10)} loading="lazy" alt="GLOCAL 02 8" />
          <img src={glocal0209} className="gallery-img" onClick={() => openModal(11)} loading="lazy" alt="GLOCAL 02 9" />
        </section>

        {/* GLOCAL 03 (12-18) */}
        <h3 className="color-title">GLOCAL 03</h3>
        <section className="gallery-grid">
          <img src={glocal0301} className="gallery-img" onClick={() => openModal(12)} loading="lazy" alt="GLOCAL 03 1" />
          <img src={glocal0302} className="gallery-img" onClick={() => openModal(13)} loading="lazy" alt="GLOCAL 03 2" />
          <img src={glocal0303} className="gallery-img" onClick={() => openModal(14)} loading="lazy" alt="GLOCAL 03 3" />
          <img src={glocal0304} className="gallery-img" onClick={() => openModal(15)} loading="lazy" alt="GLOCAL 03 4" />
          <img src={glocal0305} className="gallery-img" onClick={() => openModal(16)} loading="lazy" alt="GLOCAL 03 5" />
          <img src={glocal0306} className="gallery-img" onClick={() => openModal(17)} loading="lazy" alt="GLOCAL 03 6" />
          <img src={glocal0307} className="gallery-img" onClick={() => openModal(18)} loading="lazy" alt="GLOCAL 03 7" />
        </section>

        {/* GLOCAL 04 (19-21) */}
        <h3 className="color-title">GLOCAL 04</h3>
        <section className="gallery-grid">
          <img src={glocal0401} className="gallery-img" onClick={() => openModal(19)} loading="lazy" alt="GLOCAL 04 1" />
          <img src={glocal0402} className="gallery-img" onClick={() => openModal(20)} loading="lazy" alt="GLOCAL 04 2" />
          <img src={glocal0403} className="gallery-img" onClick={() => openModal(21)} loading="lazy" alt="GLOCAL 04 3" />
        </section>

        {/* GLOCAL 05 (22-27) */}
        <h3 className="color-title">GLOCAL 05</h3>
        <section className="gallery-grid">
          <img src={glocal0501} className="gallery-img" onClick={() => openModal(22)} loading="lazy" alt="GLOCAL 05 1" />
          <img src={glocal0502} className="gallery-img" onClick={() => openModal(23)} loading="lazy" alt="GLOCAL 05 2" />
          <img src={glocal0503} className="gallery-img" onClick={() => openModal(24)} loading="lazy" alt="GLOCAL 05 3" />
          <img src={glocal0504} className="gallery-img" onClick={() => openModal(25)} loading="lazy" alt="GLOCAL 05 4" />
          <img src={glocal0505} className="gallery-img" onClick={() => openModal(26)} loading="lazy" alt="GLOCAL 05 5" />
          <img src={glocal0506} className="gallery-img" onClick={() => openModal(27)} loading="lazy" alt="GLOCAL 05 6" />
        </section>

        {/* GLOCAL 06 (28-32) */}
        <h3 className="color-title">GLOCAL 06</h3>
        <section className="gallery-grid">
          <img src={glocal0601} className="gallery-img" onClick={() => openModal(28)} loading="lazy" alt="GLOCAL 06 1" />
          <img src={glocal0602} className="gallery-img" onClick={() => openModal(29)} loading="lazy" alt="GLOCAL 06 2" />
          <img src={glocal0603} className="gallery-img" onClick={() => openModal(30)} loading="lazy" alt="GLOCAL 06 3" />
          <img src={glocal0604} className="gallery-img" onClick={() => openModal(31)} loading="lazy" alt="GLOCAL 06 4" />
          <img src={glocal0605} className="gallery-img" onClick={() => openModal(32)} loading="lazy" alt="GLOCAL 06 5" />
        </section>

        {/* GLOCAL 07 (33-35) */}
        <h3 className="color-title">GLOCAL 07</h3>
        <section className="gallery-grid">
          <img src={glocal0701} className="gallery-img" onClick={() => openModal(33)} loading="lazy" alt="GLOCAL 07 1" />
          <img src={glocal0702} className="gallery-img" onClick={() => openModal(34)} loading="lazy" alt="GLOCAL 07 2" />
          <img src={glocal0703} className="gallery-img" onClick={() => openModal(35)} loading="lazy" alt="GLOCAL 07 3" />
        </section>

        {/* GLOCAL 08 (36) */}
        <h3 className="color-title">GLOCAL 08</h3>
        <section className="gallery-grid">
          <img src={glocal0801} className="gallery-img" onClick={() => openModal(36)} loading="lazy" alt="GLOCAL 08 1" />
        </section>

        {/* GLOCAL 09 (37-38) */}
        <h3 className="color-title">GLOCAL 09</h3>
        <section className="gallery-grid">
          <img src={glocal0901} className="gallery-img" onClick={() => openModal(37)} loading="lazy" alt="GLOCAL 09 1" />
          <img src={glocal0902} className="gallery-img" onClick={() => openModal(38)} loading="lazy" alt="GLOCAL 09 2" />
        </section>

        {/* GLOCAL 10 (39-40) */}
        <h3 className="color-title">GLOCAL 10</h3>
        <section className="gallery-grid">
          <img src={glocal1001} className="gallery-img" onClick={() => openModal(39)} loading="lazy" alt="GLOCAL 10 1" />
          <img src={glocal1002} className="gallery-img" onClick={() => openModal(40)} loading="lazy" alt="GLOCAL 10 2" />
        </section>

        {/* GLOCAL 11 (41-43) */}
        <h3 className="color-title">GLOCAL 11</h3>
        <section className="gallery-grid">
          <img src={glocal1101} className="gallery-img" onClick={() => openModal(41)} loading="lazy" alt="GLOCAL 11 1" />
          <img src={glocal1102} className="gallery-img" onClick={() => openModal(42)} loading="lazy" alt="GLOCAL 11 2" />
          <img src={glocal1103} className="gallery-img" onClick={() => openModal(43)} loading="lazy" alt="GLOCAL 11 3" />
        </section>

        {/* GLOCAL 12 (44) */}
        <h3 className="color-title">GLOCAL 12</h3>
        <section className="gallery-grid">
          <img src={glocal1201} className="gallery-img" onClick={() => openModal(44)} loading="lazy" alt="GLOCAL 12 1" />
        </section>

        {/* GLOCAL 13 (45-47) */}
        <h3 className="color-title">GLOCAL 13</h3>
        <section className="gallery-grid">
          <img src={glocal1301} className="gallery-img" onClick={() => openModal(45)} loading="lazy" alt="GLOCAL 13 1" />
          <img src={glocal1302} className="gallery-img" onClick={() => openModal(46)} loading="lazy" alt="GLOCAL 13 2" />
          <img src={glocal1303} className="gallery-img" onClick={() => openModal(47)} loading="lazy" alt="GLOCAL 13 3" />
        </section>

        {/* GLOCAL 14 (48-50) */}
        <h3 className="color-title">GLOCAL 14</h3>
        <section className="gallery-grid">
          <img src={glocal1401} className="gallery-img" onClick={() => openModal(48)} loading="lazy" alt="GLOCAL 14 1" />
          <img src={glocal1402} className="gallery-img" onClick={() => openModal(49)} loading="lazy" alt="GLOCAL 14 2" />
          <img src={glocal1403} className="gallery-img" onClick={() => openModal(50)} loading="lazy" alt="GLOCAL 14 3" />
        </section>

        {/* GLOCAL 15 (51-56) */}
        <h3 className="color-title">GLOCAL 15</h3>
        <section className="gallery-grid">
          <img src={glocal1501} className="gallery-img" onClick={() => openModal(51)} loading="lazy" alt="GLOCAL 15 1" />
          <img src={glocal1502} className="gallery-img" onClick={() => openModal(52)} loading="lazy" alt="GLOCAL 15 2" />
          <img src={glocal1503} className="gallery-img" onClick={() => openModal(53)} loading="lazy" alt="GLOCAL 15 3" />
          <img src={glocal1504} className="gallery-img" onClick={() => openModal(54)} loading="lazy" alt="GLOCAL 15 4" />
          <img src={glocal1505} className="gallery-img" onClick={() => openModal(55)} loading="lazy" alt="GLOCAL 15 5" />
          <img src={glocal1506} className="gallery-img" onClick={() => openModal(56)} loading="lazy" alt="GLOCAL 15 6" />
        </section>

        {/* GLOCAL 16 (57-62) */}
        <h3 className="color-title">GLOCAL 16</h3>
        <section className="gallery-grid">
          <img src={glocal1601} className="gallery-img" onClick={() => openModal(57)} loading="lazy" alt="GLOCAL 16 1" />
          <img src={glocal1602} className="gallery-img" onClick={() => openModal(58)} loading="lazy" alt="GLOCAL 16 2" />
          <img src={glocal1603} className="gallery-img" onClick={() => openModal(59)} loading="lazy" alt="GLOCAL 16 3" />
          <img src={glocal1604} className="gallery-img" onClick={() => openModal(60)} loading="lazy" alt="GLOCAL 16 4" />
          <img src={glocal1605} className="gallery-img" onClick={() => openModal(61)} loading="lazy" alt="GLOCAL 16 5" />
          <img src={glocal1606} className="gallery-img" onClick={() => openModal(62)} loading="lazy" alt="GLOCAL 16 6" />
        </section>

        {/* GLOCAL 17 (63) */}
        <h3 className="color-title">GLOCAL 17</h3>
        <section className="gallery-grid">
          <img src={glocal1701} className="gallery-img" onClick={() => openModal(63)} loading="lazy" alt="GLOCAL 17 1" />
        </section>

        {/* GLOCAL 18 (64-66) */}
        <h3 className="color-title">GLOCAL 18</h3>
        <section className="gallery-grid">
          <img src={glocal1801} className="gallery-img" onClick={() => openModal(64)} loading="lazy" alt="GLOCAL 18 1" />
          <img src={glocal1802} className="gallery-img" onClick={() => openModal(65)} loading="lazy" alt="GLOCAL 18 2" />
          <img src={glocal1803} className="gallery-img" onClick={() => openModal(66)} loading="lazy" alt="GLOCAL 18 3" />
        </section>

        {/* GLOCAL 20 (67-68) */}
        <h3 className="color-title">GLOCAL 20</h3>
        <section className="gallery-grid">
          <img src={glocal2001} className="gallery-img" onClick={() => openModal(67)} loading="lazy" alt="GLOCAL 20 1" />
          <img src={glocal2002} className="gallery-img" onClick={() => openModal(68)} loading="lazy" alt="GLOCAL 20 2" />
        </section>

        {/* GLOCAL 21 (69-71) */}
        <h3 className="color-title">GLOCAL 21</h3>
        <section className="gallery-grid">
          <img src={glocal2101} className="gallery-img" onClick={() => openModal(69)} loading="lazy" alt="GLOCAL 21 1" />
          <img src={glocal2102} className="gallery-img" onClick={() => openModal(70)} loading="lazy" alt="GLOCAL 21 2" />
          <img src={glocal2103} className="gallery-img" onClick={() => openModal(71)} loading="lazy" alt="GLOCAL 21 3" />
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