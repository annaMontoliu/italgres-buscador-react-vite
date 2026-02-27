// src/colecciones/civic.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// =====================
// IMPORT IMÁGENES
// Ruta verificada:
// /src/assets/imagenes/civic/
// =====================

// BROWN (2)  ⚠️ 02 es .jpeg
import civicBrown01 from "../assets/imagenes/civic/civic-brown/civic-brown-01.jpg";
import civicBrown02 from "../assets/imagenes/civic/civic-brown/civic-brown-02.jpeg";

// CENERE (1)
import civicCenere01 from "../assets/imagenes/civic/civic-cenere/civic-cenere-01.jpg";

// OAK (4) ⚠️ 01 es .jpeg
import civicOak01 from "../assets/imagenes/civic/civic-oak/civic-oak-01.jpeg";
import civicOak02 from "../assets/imagenes/civic/civic-oak/civic-oak-02.jpg";
import civicOak03 from "../assets/imagenes/civic/civic-oak/civic-oak-03.jpg";
import civicOak04 from "../assets/imagenes/civic/civic-oak/civic-oak-04.jpg";

// ORDEN EXACTO (modal): CENERE (1) -> OAK (4) -> BROWN (2)
const images = [
  // CENERE
  civicCenere01, // 0

  // OAK
  civicOak01, // 1
  civicOak02, // 2
  civicOak03, // 3
  civicOak04, // 4

  // BROWN
  civicBrown01, // 5
  civicBrown02, // 6
];

export function Civic({ onGoHome }) {
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
        <h1 className="titulo-coleccion">CIVIC</h1>

        {/* PDF LOCAL */}
        <ColeccionLayout infoUrl="/pdf/CIVIC.pdf" />

        {/* CENERE */}
        <h3 className="color-title">CIVIC CENERE</h3>
        <section className="gallery-grid">
          <img
            src={civicCenere01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="CIVIC CENERE 01"
          />
        </section>

        {/* OAK */}
        <h3 className="color-title">CIVIC OAK</h3>
        <section className="gallery-grid">
          <img
            src={civicOak01}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="CIVIC OAK 01"
          />
          <img
            src={civicOak02}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="CIVIC OAK 02"
          />
          <img
            src={civicOak03}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="CIVIC OAK 03"
          />
          <img
            src={civicOak04}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="CIVIC OAK 04"
          />
        </section>

        {/* BROWN */}
        <h3 className="color-title">CIVIC BROWN</h3>
        <section className="gallery-grid">
          <img
            src={civicBrown01}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="CIVIC BROWN 01"
          />
          <img
            src={civicBrown02}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="CIVIC BROWN 02"
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