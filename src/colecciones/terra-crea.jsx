// src/colecciones/terra-crea.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";
import { ShowroomColors } from "../components/ShowroomColors";

// IMPORTS DE LAS FOTOS
import terraCreaMattone1 from "../assets/imagenes/terra-crea/terra-crea-mattone/terra-crea-mattone.jpg";

import terraCreaCalce1 from "../assets/imagenes/terra-crea/terra-crea-calce/terra-crea-calce-01.jpg";
import terraCreaCalce2 from "../assets/imagenes/terra-crea/terra-crea-calce/terra-crea-calce-02.jpg";
import terraCreaCalce3 from "../assets/imagenes/terra-crea/terra-crea-calce/terra-crea-calce-03.jpg";

import terraCreaCorda1 from "../assets/imagenes/terra-crea/terra-crea-corda/terra-crea-corda-01.jpg";

import terraCreaLimo1 from "../assets/imagenes/terra-crea/terra-crea-limo/terra-crea-limo-01.jpg";

import terraCreaPomice1 from "../assets/imagenes/terra-crea/terra-crea-pomice/terra-crea-pomice-01.jpg";
import terraCreaPomice2 from "../assets/imagenes/terra-crea/terra-crea-pomice/terra-crea-pomice-02.jpg";
import terraCreaPomice3 from "../assets/imagenes/terra-crea/terra-crea-pomice/terra-crea-pomice-03.jpg";

// IMPORTS TACOS
import tacoTerraCreaMattone from "../assets/imagenes/terra-crea/terra-crea-tacos/taco-terra-crea-mattone.jpg";
import tacoTerraCreaCalce from "../assets/imagenes/terra-crea/terra-crea-tacos/taco-terra-crea-calce.jpg";
import tacoTerraCreaCorda from "../assets/imagenes/terra-crea/terra-crea-tacos/taco-terra-crea-corda.jpg";
import tacoTerraCreaLimo from "../assets/imagenes/terra-crea/terra-crea-tacos/taco-terra-crea-limo.jpg";
import tacoTerraCreaPomice from "../assets/imagenes/terra-crea/terra-crea-tacos/taco-terra-crea-pomice.jpg";

const images = [
  terraCreaMattone1,

  terraCreaCalce1,
  terraCreaCalce2,
  terraCreaCalce3,

  terraCreaCorda1,

  terraCreaLimo1,

  terraCreaPomice1,
  terraCreaPomice2,
  terraCreaPomice3,
];

export function TerraCrea({ onGoHome }) {
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
        <h1 className="titulo-coleccion">TERRA CREA</h1>

        <ShowroomColors
          title="showroom colors"
          items={[
            { label: "MATTONE", thumb: tacoTerraCreaMattone },
            { label: "CALCE", thumb: tacoTerraCreaCalce },
            { label: "CORDA", thumb: tacoTerraCreaCorda },
            { label: "LIMO", thumb: tacoTerraCreaLimo },
            { label: "POMICE", thumb: tacoTerraCreaPomice },
          ]}
        />

        <ColeccionLayout infoUrl="https://kronosceramiche.com/src/uploads/sites/3/2021/09/Terra-Crea.pdf" />

        <h3 className="color-title">TERRA CREA MATTONE</h3>
        <section className="gallery-grid">
          <img
            src={terraCreaMattone1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="TERRA CREA MATTONE 1"
          />
        </section>

        <h3 className="color-title">TERRA CREA CALCE</h3>
        <section className="gallery-grid">
          <img
            src={terraCreaCalce1}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="TERRA CREA CALCE 1"
          />
          <img
            src={terraCreaCalce2}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="TERRA CREA CALCE 2"
          />
          <img
            src={terraCreaCalce3}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="TERRA CREA CALCE 3"
          />
        </section>

        <h3 className="color-title">TERRA CREA CORDA</h3>
        <section className="gallery-grid">
          <img
            src={terraCreaCorda1}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="TERRA CREA CORDA 1"
          />
        </section>

        <h3 className="color-title">TERRA CREA LIMO</h3>
        <section className="gallery-grid">
          <img
            src={terraCreaLimo1}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="TERRA CREA LIMO 1"
          />
        </section>

        <h3 className="color-title">TERRA CREA POMICE</h3>
        <section className="gallery-grid">
          <img
            src={terraCreaPomice1}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="TERRA CREA POMICE 1"
          />
          <img
            src={terraCreaPomice2}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="TERRA CREA POMICE 2"
          />
          <img
            src={terraCreaPomice3}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="TERRA CREA POMICE 3"
          />
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