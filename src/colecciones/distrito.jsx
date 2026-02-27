// src/colecciones/distrito.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// Ruta verificada:
// /src/assets/imagenes/distrito/
// =====================

// ALUMINIO (4)
import distritoAluminio01 from "../assets/imagenes/distrito/distrito-aluminio/distrito-aluminio-01.jpg";
import distritoAluminio02 from "../assets/imagenes/distrito/distrito-aluminio/distrito-aluminio-02.jpg";
import distritoAluminio03 from "../assets/imagenes/distrito/distrito-aluminio/distrito-aluminio-03.jpg";
import distritoAluminio04 from "../assets/imagenes/distrito/distrito-aluminio/distrito-aluminio-04.jpg";

// IRON (3)
import distritoIron01 from "../assets/imagenes/distrito/distrito-iron/distrito-iron-01.jpg";
import distritoIron02 from "../assets/imagenes/distrito/distrito-iron/distrito-iron-02.jpg";
import distritoIron03 from "../assets/imagenes/distrito/distrito-iron/distrito-iron-03.jpg";

// ZINC (2)
import distritoZinc01 from "../assets/imagenes/distrito/distrito-zinc/distrito-zinc-01.jpg";
import distritoZinc02 from "../assets/imagenes/distrito/distrito-zinc/distrito-zinc-02.jpg";

const images = [
  // ALUMINIO
  distritoAluminio01, // 0
  distritoAluminio02, // 1
  distritoAluminio03, // 2
  distritoAluminio04, // 3

  // IRON
  distritoIron01, // 4
  distritoIron02, // 5
  distritoIron03, // 6

  // ZINC
  distritoZinc01, // 7
  distritoZinc02, // 8
];

export function Distrito({ onGoHome }) {
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
        <h1 className="titulo-coleccion">DISTRITO</h1>

        <ColeccionLayout infoUrl="https://www.grespania.com/es/pdf-collection/44" />

        {/* ALUMINIO */}
        <h3 className="color-title">DISTRITO ALUMINIO</h3>
        <section className="gallery-grid">
          <img src={distritoAluminio01} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="DISTRITO ALUMINIO 01" />
          <img src={distritoAluminio02} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="DISTRITO ALUMINIO 02" />
          <img src={distritoAluminio03} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="DISTRITO ALUMINIO 03" />
          <img src={distritoAluminio04} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="DISTRITO ALUMINIO 04" />
        </section>

        {/* IRON */}
        <h3 className="color-title">DISTRITO IRON</h3>
        <section className="gallery-grid">
          <img src={distritoIron01} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="DISTRITO IRON 01" />
          <img src={distritoIron02} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="DISTRITO IRON 02" />
          <img src={distritoIron03} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="DISTRITO IRON 03" />
        </section>

        {/* ZINC */}
        <h3 className="color-title">DISTRITO ZINC</h3>
        <section className="gallery-grid">
          <img src={distritoZinc01} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="DISTRITO ZINC 01" />
          <img src={distritoZinc02} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="DISTRITO ZINC 02" />
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