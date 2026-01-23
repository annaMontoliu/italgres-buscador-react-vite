// src/colecciones/retina.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// ARANCIO (4) — se queda como estaba
import retinaArancio1 from "../assets/imagenes/retina/retina-arancio/retina-arancio-01.jpg";
import retinaArancio2 from "../assets/imagenes/retina/retina-arancio/retina-arancio-02.jpg";
import retinaArancio3 from "../assets/imagenes/retina/retina-arancio/retina-arancio-03.jpg";
import retinaArancio4 from "../assets/imagenes/retina/retina-arancio/retina-arancio-04.jpg";

// NIEVE (3)
import retinaNieve1 from "../assets/imagenes/retina/retina-nieve/retina-nieve-01.jpg";
import retinaNieve2 from "../assets/imagenes/retina/retina-nieve/retina-nieve-02.jpg";
import retinaNieve3 from "../assets/imagenes/retina/retina-nieve/retina-nieve-03.jpg";

// CORDA (3)
import retinaCorda1 from "../assets/imagenes/retina/retina-corda/retina-corda-01.jpg";
import retinaCorda2 from "../assets/imagenes/retina/retina-corda/retina-corda-02.jpg";
import retinaCorda3 from "../assets/imagenes/retina/retina-corda/retina-corda-03.jpg";

// AVIO (4)
import retinaAvio1 from "../assets/imagenes/retina/retina-avio/retina-avio-01.jpg";
import retinaAvio2 from "../assets/imagenes/retina/retina-avio/retina-avio-02.jpg";
import retinaAvio3 from "../assets/imagenes/retina/retina-avio/retina-avio-03.jpg";
import retinaAvio4 from "../assets/imagenes/retina/retina-avio/retina-avio-04.jpg";

// CENERE (2)
import retinaCenere1 from "../assets/imagenes/retina/retina-cenere/retina-cenere-01.jpg";
import retinaCenere2 from "../assets/imagenes/retina/retina-cenere/retina-cenere-02.jpg";

// SENAPE (5)
import retinaSenape1 from "../assets/imagenes/retina/retina-senape/retina-senape-01.jpg";
import retinaSenape2 from "../assets/imagenes/retina/retina-senape/retina-senape-02.jpg";
import retinaSenape3 from "../assets/imagenes/retina/retina-senape/retina-senape-03.jpg";
import retinaSenape4 from "../assets/imagenes/retina/retina-senape/retina-senape-04.jpg";
import retinaSenape5 from "../assets/imagenes/retina/retina-senape/retina-senape-05.jpg";

// TERRACOTTA (3)
import retinaTerracotta1 from "../assets/imagenes/retina/retina-terracotta/retina-terracotta-01.jpg";
import retinaTerracotta2 from "../assets/imagenes/retina/retina-terracotta/retina-terracotta-02.jpg";
import retinaTerracotta3 from "../assets/imagenes/retina/retina-terracotta/retina-terracotta-03.jpg";

// MENTA (3)
import retinaMenta1 from "../assets/imagenes/retina/retina-menta/retina-menta-01.jpg";
import retinaMenta2 from "../assets/imagenes/retina/retina-menta/retina-menta-02.jpg";
import retinaMenta3 from "../assets/imagenes/retina/retina-menta/retina-menta-03.jpg";

// PETROLIO (1)
import retinaPetrolio1 from "../assets/imagenes/retina/retina-petrolio/retina-petrolio-01.jpg";

// FUMO (2)
import retinaFumo1 from "../assets/imagenes/retina/retina-fumo/retina-fumo-01.jpg";
import retinaFumo2 from "../assets/imagenes/retina/retina-fumo/retina-fumo-02.jpg";

// TACOS (showroom) — siempre en retina-tacos
import tacoRetinaArancio from "../assets/imagenes/retina/retina-tacos/taco-retina-arancio.jpg";
import tacoRetinaNieve from "../assets/imagenes/retina/retina-tacos/taco-retina-nieve.jpg";
import tacoRetinaCorda from "../assets/imagenes/retina/retina-tacos/taco-retina-corda.jpg";
import tacoRetinaAvio from "../assets/imagenes/retina/retina-tacos/taco-retina-avio.jpg";
import tacoRetinaCenere from "../assets/imagenes/retina/retina-tacos/taco-retina-cenere.jpg";
import tacoRetinaSenape from "../assets/imagenes/retina/retina-tacos/taco-retina-senape.jpg";
import tacoRetinaTerracotta from "../assets/imagenes/retina/retina-tacos/taco-retina-terracotta.jpg";
import tacoRetinaMenta from "../assets/imagenes/retina/retina-tacos/taco-retina-menta.jpg";
import tacoRetinaPetrolio from "../assets/imagenes/retina/retina-tacos/taco-retina-petrolio.jpg";
import tacoRetinaFumo from "../assets/imagenes/retina/retina-tacos/taco-retina-fumo.jpg";

// ORDEN EXACTO (modal): arancio, nieve, corda, avio, cenere, senape, terracotta, menta, petrolio, fumo
const images = [
  // ARANCIO (0-3)
  retinaArancio1,
  retinaArancio2,
  retinaArancio3,
  retinaArancio4,

  // NIEVE (4-6)
  retinaNieve1,
  retinaNieve2,
  retinaNieve3,

  // CORDA (7-9)
  retinaCorda1,
  retinaCorda2,
  retinaCorda3,

  // AVIO (10-13)
  retinaAvio1,
  retinaAvio2,
  retinaAvio3,
  retinaAvio4,

  // CENERE (14-15)
  retinaCenere1,
  retinaCenere2,

  // SENAPE (16-20)
  retinaSenape1,
  retinaSenape2,
  retinaSenape3,
  retinaSenape4,
  retinaSenape5,

  // TERRACOTTA (21-23)
  retinaTerracotta1,
  retinaTerracotta2,
  retinaTerracotta3,

  // MENTA (24-26)
  retinaMenta1,
  retinaMenta2,
  retinaMenta3,

  // PETROLIO (27)
  retinaPetrolio1,

  // FUMO (28-29)
  retinaFumo1,
  retinaFumo2,
];

export function Retina({ onGoHome }) {
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
        <h1 className="titulo-coleccion">RETINA</h1>

        {/* TACOS (primero) */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "ARANCIO", thumb: tacoRetinaArancio },
            { label: "NIEVE", thumb: tacoRetinaNieve },
            { label: "CORDA", thumb: tacoRetinaCorda },
            { label: "AVIO", thumb: tacoRetinaAvio },
            { label: "CENERE", thumb: tacoRetinaCenere },
            { label: "SENAPE", thumb: tacoRetinaSenape },
            { label: "TERRACOTTA", thumb: tacoRetinaTerracotta },
            { label: "MENTA", thumb: tacoRetinaMenta },
            { label: "PETROLIO", thumb: tacoRetinaPetrolio },
            { label: "FUMO", thumb: tacoRetinaFumo },
          ]}
        />

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://files.imolaceramica.com/collections/imola_produzione/collection_items_file_depliant/DP%20RETINA.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* ARANCIO */}
        <h3 className="color-title">RETINA ARANCIO</h3>
        <section className="gallery-grid">
          <img src={retinaArancio1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="RETINA ARANCIO 1" />
          <img src={retinaArancio2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="RETINA ARANCIO 2" />
          <img src={retinaArancio3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="RETINA ARANCIO 3" />
          <img src={retinaArancio4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="RETINA ARANCIO 4" />
        </section>

        {/* NIEVE */}
        <h3 className="color-title">RETINA NIEVE</h3>
        <section className="gallery-grid">
          <img src={retinaNieve1} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="RETINA NIEVE 1" />
          <img src={retinaNieve2} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="RETINA NIEVE 2" />
          <img src={retinaNieve3} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="RETINA NIEVE 3" />
        </section>

        {/* CORDA */}
        <h3 className="color-title">RETINA CORDA</h3>
        <section className="gallery-grid">
          <img src={retinaCorda1} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="RETINA CORDA 1" />
          <img src={retinaCorda2} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="RETINA CORDA 2" />
          <img src={retinaCorda3} className="gallery-img" onClick={() => openModal(9)} loading="lazy" alt="RETINA CORDA 3" />
        </section>

        {/* AVIO */}
        <h3 className="color-title">RETINA AVIO</h3>
        <section className="gallery-grid">
          <img src={retinaAvio1} className="gallery-img" onClick={() => openModal(10)} loading="lazy" alt="RETINA AVIO 1" />
          <img src={retinaAvio2} className="gallery-img" onClick={() => openModal(11)} loading="lazy" alt="RETINA AVIO 2" />
          <img src={retinaAvio3} className="gallery-img" onClick={() => openModal(12)} loading="lazy" alt="RETINA AVIO 3" />
          <img src={retinaAvio4} className="gallery-img" onClick={() => openModal(13)} loading="lazy" alt="RETINA AVIO 4" />
        </section>

        {/* CENERE */}
        <h3 className="color-title">RETINA CENERE</h3>
        <section className="gallery-grid">
          <img src={retinaCenere1} className="gallery-img" onClick={() => openModal(14)} loading="lazy" alt="RETINA CENERE 1" />
          <img src={retinaCenere2} className="gallery-img" onClick={() => openModal(15)} loading="lazy" alt="RETINA CENERE 2" />
        </section>

        {/* SENAPE */}
        <h3 className="color-title">RETINA SENAPE</h3>
        <section className="gallery-grid">
          <img src={retinaSenape1} className="gallery-img" onClick={() => openModal(16)} loading="lazy" alt="RETINA SENAPE 1" />
          <img src={retinaSenape2} className="gallery-img" onClick={() => openModal(17)} loading="lazy" alt="RETINA SENAPE 2" />
          <img src={retinaSenape3} className="gallery-img" onClick={() => openModal(18)} loading="lazy" alt="RETINA SENAPE 3" />
          <img src={retinaSenape4} className="gallery-img" onClick={() => openModal(19)} loading="lazy" alt="RETINA SENAPE 4" />
          <img src={retinaSenape5} className="gallery-img" onClick={() => openModal(20)} loading="lazy" alt="RETINA SENAPE 5" />
        </section>

        {/* TERRACOTTA */}
        <h3 className="color-title">RETINA TERRACOTTA</h3>
        <section className="gallery-grid">
          <img src={retinaTerracotta1} className="gallery-img" onClick={() => openModal(21)} loading="lazy" alt="RETINA TERRACOTTA 1" />
          <img src={retinaTerracotta2} className="gallery-img" onClick={() => openModal(22)} loading="lazy" alt="RETINA TERRACOTTA 2" />
          <img src={retinaTerracotta3} className="gallery-img" onClick={() => openModal(23)} loading="lazy" alt="RETINA TERRACOTTA 3" />
        </section>

        {/* MENTA */}
        <h3 className="color-title">RETINA MENTA</h3>
        <section className="gallery-grid">
          <img src={retinaMenta1} className="gallery-img" onClick={() => openModal(24)} loading="lazy" alt="RETINA MENTA 1" />
          <img src={retinaMenta2} className="gallery-img" onClick={() => openModal(25)} loading="lazy" alt="RETINA MENTA 2" />
          <img src={retinaMenta3} className="gallery-img" onClick={() => openModal(26)} loading="lazy" alt="RETINA MENTA 3" />
        </section>

        {/* PETROLIO */}
        <h3 className="color-title">RETINA PETROLIO</h3>
        <section className="gallery-grid">
          <img src={retinaPetrolio1} className="gallery-img" onClick={() => openModal(27)} loading="lazy" alt="RETINA PETROLIO 1" />
        </section>

        {/* FUMO */}
        <h3 className="color-title">RETINA FUMO</h3>
        <section className="gallery-grid">
          <img src={retinaFumo1} className="gallery-img" onClick={() => openModal(28)} loading="lazy" alt="RETINA FUMO 1" />
          <img src={retinaFumo2} className="gallery-img" onClick={() => openModal(29)} loading="lazy" alt="RETINA FUMO 2" />
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
