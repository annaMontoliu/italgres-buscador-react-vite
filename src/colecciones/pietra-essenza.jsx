// src/colecciones/pietra-essenza.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// ---- IMÁGENES ----

import pietraEssenzaCotone1 from "../assets/imagenes/pietra-essenza/pietra-essenza-cotone/pietra-essenza-cotone-01.jpg";
import pietraEssenzaCotone2 from "../assets/imagenes/pietra-essenza/pietra-essenza-cotone/pietra-essenza-cotone-02.jpg";
import pietraEssenzaCotone3 from "../assets/imagenes/pietra-essenza/pietra-essenza-cotone/pietra-essenza-cotone-03.jpg";

import pietraEssenzaAvorio1 from "../assets/imagenes/pietra-essenza/pietra-essenza-avorio/pietra-essenza-avorio-01.jpg";
import pietraEssenzaAvorio2 from "../assets/imagenes/pietra-essenza/pietra-essenza-avorio/pietra-essenza-avorio-02.jpg";

import pietraEssenzaSabbia1 from "../assets/imagenes/pietra-essenza/pietra-essenza-sabbia/pietra-essenza-sabbia-01.jpg";
import pietraEssenzaSabbia2 from "../assets/imagenes/pietra-essenza/pietra-essenza-sabbia/pietra-essenza-sabbia-02.jpg";

import pietraEssenzaMandorla1 from "../assets/imagenes/pietra-essenza/pietra-essenza-mandorla/pietra-essenza-mandorla-01.jpg";
import pietraEssenzaMandorla2 from "../assets/imagenes/pietra-essenza/pietra-essenza-mandorla/pietra-essenza-mandorla-02.jpg";
import pietraEssenzaMandorla3 from "../assets/imagenes/pietra-essenza/pietra-essenza-mandorla/pietra-essenza-mandorla-03.jpg";

import pietraEssenzaRosa1 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosa/pietra-essenza-rosa-01.jpg";
import pietraEssenzaRosa2 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosa/pietra-essenza-rosa-02.jpg";
import pietraEssenzaRosa3 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosa/pietra-essenza-rosa-03.jpg";

import pietraEssenzaRossoSiena1 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosso-siena/pietra-essenza-rosso-siena-01.jpg";
import pietraEssenzaRossoSiena2 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosso-siena/pietra-essenza-rosso-siena-02.jpg";
import pietraEssenzaRossoSiena3 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosso-siena/pietra-essenza-rosso-siena-03.jpg";
import pietraEssenzaRossoSiena4 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosso-siena/pietra-essenza-rosso-siena-04.jpg";
import pietraEssenzaRossoSiena5 from "../assets/imagenes/pietra-essenza/pietra-essenza-rosso-siena/pietra-essenza-rosso-siena-05.jpg";

// ---- TACOS ----

import tacoRossoSiena from "../assets/imagenes/pietra-essenza/taco-pietra-essenza/taco-pietra-essenza-rosso-siena.jpg";
import tacoMandorla from "../assets/imagenes/pietra-essenza/taco-pietra-essenza/taco-pietra-essenza-mandorla.jpg";
import tacoRosa from "../assets/imagenes/pietra-essenza/taco-pietra-essenza/taco-pietra-essenza-rosa.jpg";
import tacoSabbia from "../assets/imagenes/pietra-essenza/taco-pietra-essenza/taco-pietra-essenza-sabbia.jpg";
import tacoAvorio from "../assets/imagenes/pietra-essenza/taco-pietra-essenza/taco-pietra-essenza-avorio.jpg";

// ---- ORDEN ----

const images = [
  pietraEssenzaCotone1,
  pietraEssenzaCotone2,
  pietraEssenzaCotone3,

  pietraEssenzaAvorio1,
  pietraEssenzaAvorio2,

  pietraEssenzaSabbia1,
  pietraEssenzaSabbia2,

  pietraEssenzaMandorla1,
  pietraEssenzaMandorla2,
  pietraEssenzaMandorla3,

  pietraEssenzaRosa1,
  pietraEssenzaRosa2,
  pietraEssenzaRosa3,

  pietraEssenzaRossoSiena1,
  pietraEssenzaRossoSiena2,
  pietraEssenzaRossoSiena3,
  pietraEssenzaRossoSiena4,
  pietraEssenzaRossoSiena5,
];

export function PietraEssenza({ onGoHome }) {
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
        <h1 className="titulo-coleccion">PIETRA ESSENZA</h1>

        {/* TACOS */}
        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "ROSSO SIENA", thumb: tacoRossoSiena },
            { label: "MANDORLA", thumb: tacoMandorla },
            { label: "ROSA", thumb: tacoRosa },
            { label: "SABBIA", thumb: tacoSabbia },
            { label: "AVORIO", thumb: tacoAvorio },
          ]}
        />

        <ColeccionLayout infoUrl="https://www.emilgroup.it/emil/prodotti/documenticollezioni_emil/PietraEssenza%20Catalogo%202025.10%20Web.pdf" />

        {/* COTONE */}
        <h3 className="color-title">PIETRA ESSENZA COTONE</h3>
        <section className="gallery-grid">
          <img src={pietraEssenzaCotone1} className="gallery-img" onClick={() => openModal(0)} />
          <img src={pietraEssenzaCotone2} className="gallery-img" onClick={() => openModal(1)} />
          <img src={pietraEssenzaCotone3} className="gallery-img" onClick={() => openModal(2)} />
        </section>

        {/* AVORIO */}
        <h3 className="color-title">PIETRA ESSENZA AVORIO</h3>
        <section className="gallery-grid">
          <img src={pietraEssenzaAvorio1} className="gallery-img" onClick={() => openModal(3)} />
          <img src={pietraEssenzaAvorio2} className="gallery-img" onClick={() => openModal(4)} />
        </section>

        {/* SABBIA */}
        <h3 className="color-title">PIETRA ESSENZA SABBIA</h3>
        <section className="gallery-grid">
          <img src={pietraEssenzaSabbia1} className="gallery-img" onClick={() => openModal(5)} />
          <img src={pietraEssenzaSabbia2} className="gallery-img" onClick={() => openModal(6)} />
        </section>

        {/* MANDORLA */}
        <h3 className="color-title">PIETRA ESSENZA MANDORLA</h3>
        <section className="gallery-grid">
          <img src={pietraEssenzaMandorla1} className="gallery-img" onClick={() => openModal(7)} />
          <img src={pietraEssenzaMandorla2} className="gallery-img" onClick={() => openModal(8)} />
          <img src={pietraEssenzaMandorla3} className="gallery-img" onClick={() => openModal(9)} />
        </section>

        {/* ROSA */}
        <h3 className="color-title">PIETRA ESSENZA ROSA</h3>
        <section className="gallery-grid">
          <img src={pietraEssenzaRosa1} className="gallery-img" onClick={() => openModal(10)} />
          <img src={pietraEssenzaRosa2} className="gallery-img" onClick={() => openModal(11)} />
          <img src={pietraEssenzaRosa3} className="gallery-img" onClick={() => openModal(12)} />
        </section>

        {/* ROSSO SIENA */}
        <h3 className="color-title">PIETRA ESSENZA ROSSO SIENA</h3>
        <section className="gallery-grid">
          <img src={pietraEssenzaRossoSiena1} className="gallery-img" onClick={() => openModal(13)} />
          <img src={pietraEssenzaRossoSiena2} className="gallery-img" onClick={() => openModal(14)} />
          <img src={pietraEssenzaRossoSiena3} className="gallery-img" onClick={() => openModal(15)} />
          <img src={pietraEssenzaRossoSiena4} className="gallery-img" onClick={() => openModal(16)} />
          <img src={pietraEssenzaRossoSiena5} className="gallery-img" onClick={() => openModal(17)} />
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