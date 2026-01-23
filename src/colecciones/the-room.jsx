// src/colecciones/the-room.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS (nombres raros tal cual)
import theRoomAbsWh from "../assets/imagenes/the-room/the-room-abs-wh.jpg";
import theRoomBluAq from "../assets/imagenes/the-room/the-room-blu-aq.jpg";
import theRoomBluGr from "../assets/imagenes/the-room/the-room-blu-gr.jpg";
import theRoomBreDu from "../assets/imagenes/the-room/the-room-bre-du.jpg";
import theRoomBrePl from "../assets/imagenes/the-room/the-room-bre-pl.jpg";
import theRoomCalOy from "../assets/imagenes/the-room/the-room-cal-oy.jpg";
import theRoomCalPi from "../assets/imagenes/the-room/the-room-cal-pi.jpg";
import theRoomCreDe from "../assets/imagenes/the-room/the-room-cre-de.jpg";
import theRoomGranAn from "../assets/imagenes/the-room/the-room-gran-an.jpg";
import theRoomGreRo from "../assets/imagenes/the-room/the-room-gre-ro.jpg";
import theRoomInfBr from "../assets/imagenes/the-room/the-room-inf-br.jpg";
import theRoomInvWh from "../assets/imagenes/the-room/the-room-inv-wh.jpg";
import theRoomInGr from "../assets/imagenes/the-room/the-room-in-gr.jpg";
import theRoomMonBl from "../assets/imagenes/the-room/the-room-mon-bl.jpg";
import theRoomOriAr from "../assets/imagenes/the-room/the-room-ori-ar.jpg";
import theRoomPanWh from "../assets/imagenes/the-room/the-room-pan-wh.jpg";
import theRoomPatWh from "../assets/imagenes/the-room/the-room-pat-wh.jpg";
import theRoomSanPe from "../assets/imagenes/the-room/the-room-san-pe.jpg";
import theRoomStaYp from "../assets/imagenes/the-room/the-room-sta-yp.jpg";
import theRoomTifGr from "../assets/imagenes/the-room/the-room-tif-gr.jpg";

// ORDEN EXACTO (modal) = el orden del explorador/carpeta
const images = [
  theRoomAbsWh,
  theRoomBluAq,
  theRoomBluGr,
  theRoomBreDu,
  theRoomBrePl,
  theRoomCalOy,
  theRoomCalPi,
  theRoomCreDe,
  theRoomGranAn,
  theRoomGreRo,
  theRoomInfBr,
  theRoomInvWh,
  theRoomInGr,
  theRoomMonBl,
  theRoomOriAr,
  theRoomPanWh,
  theRoomPatWh,
  theRoomSanPe,
  theRoomStaYp,
  theRoomTifGr,
];

export function TheRoom({ onGoHome }) {
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

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header onGoHome={onGoHome} />

      <main>
        {/* Título */}
        <h1 className="titulo-coleccion">THE ROOM</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="/pdf/THE-ROOM.pdf" />

        {/* ---- GALERÍA ---- */}
        <h3 className="color-title">THE ROOM</h3>
        <section className="gallery-grid">
          <img src={theRoomAbsWh} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="THE ROOM 01" />
          <img src={theRoomBluAq} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="THE ROOM 02" />
          <img src={theRoomBluGr} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="THE ROOM 03" />
          <img src={theRoomBreDu} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="THE ROOM 04" />
          <img src={theRoomBrePl} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="THE ROOM 05" />
          <img src={theRoomCalOy} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="THE ROOM 06" />
          <img src={theRoomCalPi} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="THE ROOM 07" />
          <img src={theRoomCreDe} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="THE ROOM 08" />
          <img src={theRoomGranAn} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="THE ROOM 09" />
          <img src={theRoomGreRo} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="THE ROOM 10" />
          <img src={theRoomInfBr} className="gallery-img" onClick={() => openModal(10)} loading="lazy" alt="THE ROOM 11" />
          <img src={theRoomInvWh} className="gallery-img" onClick={() => openModal(11)} loading="lazy" alt="THE ROOM 12" />
          <img src={theRoomInGr} className="gallery-img" onClick={() => openModal(12)} loading="lazy" alt="THE ROOM 13" />
          <img src={theRoomMonBl} className="gallery-img" onClick={() => openModal(13)} loading="lazy" alt="THE ROOM 14" />
          <img src={theRoomOriAr} className="gallery-img" onClick={() => openModal(14)} loading="lazy" alt="THE ROOM 15" />
          <img src={theRoomPanWh} className="gallery-img" onClick={() => openModal(15)} loading="lazy" alt="THE ROOM 16" />
          <img src={theRoomPatWh} className="gallery-img" onClick={() => openModal(16)} loading="lazy" alt="THE ROOM 17" />
          <img src={theRoomSanPe} className="gallery-img" onClick={() => openModal(17)} loading="lazy" alt="THE ROOM 18" />
          <img src={theRoomStaYp} className="gallery-img" onClick={() => openModal(18)} loading="lazy" alt="THE ROOM 19" />
          <img src={theRoomTifGr} className="gallery-img" onClick={() => openModal(19)} loading="lazy" alt="THE ROOM 20" />
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
