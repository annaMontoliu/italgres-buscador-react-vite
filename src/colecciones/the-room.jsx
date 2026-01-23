// src/colecciones/the-room.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS (nombres raros tal cual)
import theRoomAbsWh from "../assets/imagenes/the-room/the-room-abs-wh.jpg";
import theRoomBluAq from "../assets/imagenes/the-room/the-room-blu-aq.jpg";
import theRoomBluJe from "../assets/imagenes/the-room/the-room-blu-je.jpg";
import theRoomBreDu from "../assets/imagenes/the-room/the-room-bre-du.jpg";
import theRoomBrePh from "../assets/imagenes/the-room/the-room-bre-ph.jpg";     // antes bre-pl
import theRoomCalOy from "../assets/imagenes/the-room/the-room-cal-oy.jpg";
import theRoomCalPi from "../assets/imagenes/the-room/the-room-cal-pi.jpg";
import theRoomCreDel from "../assets/imagenes/the-room/the-room-cre-del.jpg";   // antes cre-de
import theRoomGranAn from "../assets/imagenes/the-room/the-room-gran-an.jpg";
import theRoomGreRo from "../assets/imagenes/the-room/the-room-gre-ro.jpg";
import theRoomInfBr from "../assets/imagenes/the-room/the-room-inf-br.jpg";
import theRoomInvWh from "../assets/imagenes/the-room/the-room-inv-wh.jpg";
import theRoomInGr from "../assets/imagenes/the-room/the-room-in-gr.jpg";
import theRoomMonBl from "../assets/imagenes/the-room/the-room-mon-bl.jpg";
import theRoomOniAr from "../assets/imagenes/the-room/the-room-oni-ar.jpg";     // antes ori-ar
import theRoomPanWh from "../assets/imagenes/the-room/the-room-pan-wh.jpg";
import theRoomPatWh from "../assets/imagenes/the-room/the-room-pat-wh.jpg";
import theRoomSanPe from "../assets/imagenes/the-room/the-room-san-pe.jpg";
import theRoomStaVp from "../assets/imagenes/the-room/the-room-sta-vp.jpg";     // antes sta-yp
import theRoomTifGr from "../assets/imagenes/the-room/the-room-tif-gr.jpg";

// ORDEN EXACTO (modal)
const images = [
  theRoomAbsWh,
  theRoomBluAq,
  theRoomBluJe,
  theRoomBreDu,
  theRoomBrePh,
  theRoomCalOy,
  theRoomCalPi,
  theRoomCreDel,
  theRoomGranAn,
  theRoomGreRo,
  theRoomInfBr,
  theRoomInvWh,
  theRoomInGr,
  theRoomMonBl,
  theRoomOniAr,
  theRoomPanWh,
  theRoomPatWh,
  theRoomSanPe,
  theRoomStaVp,
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">THE ROOM</h1>

        <ColeccionLayout infoUrl="/pdf/THE-ROOM.pdf" />

        <h3 className="color-title">THE ROOM</h3>
        <section className="gallery-grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(i)}
              loading="lazy"
              alt={`THE ROOM ${i + 1}`}
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
