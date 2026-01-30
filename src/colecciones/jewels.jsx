// src/colecciones/jewels.jsx

import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES (exacto según capturas)
// =====================

// JEWELS 01 (2)
import jewels0101 from "../assets/imagenes/jewels/jewels-01/jewels-01-01.jpg";
import jewels0102 from "../assets/imagenes/jewels/jewels-01/jewels-01-02.jpg";

// JEWELS 02 (3)
import jewels0201 from "../assets/imagenes/jewels/jewels-02/jewels-02-01.jpg";
import jewels0202 from "../assets/imagenes/jewels/jewels-02/jewels-02-02.jpg";
import jewels0203 from "../assets/imagenes/jewels/jewels-02/jewels-02-03.jpg";

// JEWELS 12 (3)
import jewels1201 from "../assets/imagenes/jewels/jewels-12/jewels-12-01.jpg";
import jewels1202 from "../assets/imagenes/jewels/jewels-12/jewels-12-02.jpg";
import jewels1203 from "../assets/imagenes/jewels/jewels-12/jewels-12-03.jpg";

// JEWELS 14 (3)
import jewels1401 from "../assets/imagenes/jewels/jewels-14/jewels-14-01.jpg";
import jewels1402 from "../assets/imagenes/jewels/jewels-14/jewels-14-02.jpg";
import jewels1403 from "../assets/imagenes/jewels/jewels-14/jewels-14-03.jpg";

// JEWELS 15 (3)
import jewels1501 from "../assets/imagenes/jewels/jewels-15/jewels-15-01.jpg";
import jewels1502 from "../assets/imagenes/jewels/jewels-15/jewels-15-02.jpg";
import jewels1503 from "../assets/imagenes/jewels/jewels-15/jewels-15-03.jpg";

// JEWELS 16 (en captura NO aparece el 02, así que no se importa)
import jewels1601 from "../assets/imagenes/jewels/jewels-16/jewels-16-01.jpg";
import jewels1603 from "../assets/imagenes/jewels/jewels-16/jewels-16-03.jpg";
import jewels1604 from "../assets/imagenes/jewels/jewels-16/jewels-16-04.jpg";
import jewels1605 from "../assets/imagenes/jewels/jewels-16/jewels-16-05.jpg";
import jewels1606 from "../assets/imagenes/jewels/jewels-16/jewels-16-06.jpg";
import jewels1607 from "../assets/imagenes/jewels/jewels-16/jewels-16-07.jpg";
import jewels1608 from "../assets/imagenes/jewels/jewels-16/jewels-16-08.jpg";
import jewels1609 from "../assets/imagenes/jewels/jewels-16/jewels-16-09.jpg";
import jewels1610 from "../assets/imagenes/jewels/jewels-16/jewels-16-10.jpg";
import jewels1611 from "../assets/imagenes/jewels/jewels-16/jewels-16-11.jpg";
import jewels1612 from "../assets/imagenes/jewels/jewels-16/jewels-16-12.jpg";

// JEWELS 17 (6)
import jewels1701 from "../assets/imagenes/jewels/jewels-17/jewels-17-01.jpg";
import jewels1702 from "../assets/imagenes/jewels/jewels-17/jewels-17-02.jpg";
import jewels1703 from "../assets/imagenes/jewels/jewels-17/jewels-17-03.jpg";
import jewels1704 from "../assets/imagenes/jewels/jewels-17/jewels-17-04.jpg";
import jewels1705 from "../assets/imagenes/jewels/jewels-17/jewels-17-05.jpg";
import jewels1706 from "../assets/imagenes/jewels/jewels-17/jewels-17-06.jpg";

// JEWELS 19 (2)
import jewels1901 from "../assets/imagenes/jewels/jewels-19/jewels-19-01.jpg";
import jewels1902 from "../assets/imagenes/jewels/jewels-19/jewels-19-02.jpg";

// =====================
// ARRAY GLOBAL MODAL
// Orden de colores: 16, 14, 02, 12, 15, 19, 01, 17
// =====================
const images = [
  // 16 (11 en captura)
  jewels1601,
  jewels1603,
  jewels1604,
  jewels1605,
  jewels1606,
  jewels1607,
  jewels1608,
  jewels1609,
  jewels1610,
  jewels1611,
  jewels1612,

  // 14 (3)
  jewels1401,
  jewels1402,
  jewels1403,

  // 02 (3)
  jewels0201,
  jewels0202,
  jewels0203,

  // 12 (3)
  jewels1201,
  jewels1202,
  jewels1203,

  // 15 (3)
  jewels1501,
  jewels1502,
  jewels1503,

  // 19 (2)
  jewels1901,
  jewels1902,

  // 01 (2)
  jewels0101,
  jewels0102,

  // 17 (6)
  jewels1701,
  jewels1702,
  jewels1703,
  jewels1704,
  jewels1705,
  jewels1706,
];

export function Jewels({ onGoHome }) {
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
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">JEWELS</h1>

        {/* PDF en public/pdf */}
        <ColeccionLayout infoUrl="/pdf/JEWELS.pdf" />

        {/* JEWELS 16 */}
        <h3 className="color-title">JEWELS 16</h3>
        <section className="gallery-grid">
          {[
            jewels1601,
            jewels1603,
            jewels1604,
            jewels1605,
            jewels1606,
            jewels1607,
            jewels1608,
            jewels1609,
            jewels1610,
            jewels1611,
            jewels1612,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`JEWELS 16 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 14 */}
        <h3 className="color-title">JEWELS 14</h3>
        <section className="gallery-grid">
          {[jewels1401, jewels1402, jewels1403].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(11 + i)}
              loading="lazy"
              alt={`JEWELS 14 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 02 */}
        <h3 className="color-title">JEWELS 02</h3>
        <section className="gallery-grid">
          {[jewels0201, jewels0202, jewels0203].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(14 + i)}
              loading="lazy"
              alt={`JEWELS 02 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 12 */}
        <h3 className="color-title">JEWELS 12</h3>
        <section className="gallery-grid">
          {[jewels1201, jewels1202, jewels1203].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(17 + i)}
              loading="lazy"
              alt={`JEWELS 12 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 15 */}
        <h3 className="color-title">JEWELS 15</h3>
        <section className="gallery-grid">
          {[jewels1501, jewels1502, jewels1503].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(20 + i)}
              loading="lazy"
              alt={`JEWELS 15 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 19 */}
        <h3 className="color-title">JEWELS 19</h3>
        <section className="gallery-grid">
          {[jewels1901, jewels1902].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(23 + i)}
              loading="lazy"
              alt={`JEWELS 19 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 01 */}
        <h3 className="color-title">JEWELS 01</h3>
        <section className="gallery-grid">
          {[jewels0101, jewels0102].map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(25 + i)}
              loading="lazy"
              alt={`JEWELS 01 ${i + 1}`}
            />
          ))}
        </section>

        {/* JEWELS 17 */}
        <h3 className="color-title">JEWELS 17</h3>
        <section className="gallery-grid">
          {[jewels1701, jewels1702, jewels1703, jewels1704, jewels1705, jewels1706].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                className="gallery-img"
                onClick={() => openModal(27 + i)}
                loading="lazy"
                alt={`JEWELS 17 ${i + 1}`}
              />
            )
          )}
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
