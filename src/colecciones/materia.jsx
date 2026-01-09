// src/colecciones/materia.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// GESSO (5)
import materiaGesso1 from "../assets/imagenes/materia/gesso/materia_gesso-01.jpg";
import materiaGesso2 from "../assets/imagenes/materia/gesso/materia_gesso-02.jpg";
import materiaGesso3 from "../assets/imagenes/materia/gesso/materia_gesso-03.jpg";
import materiaGesso4 from "../assets/imagenes/materia/gesso/materia_gesso-04.jpg";
import materiaGesso5 from "../assets/imagenes/materia/gesso/materia_gesso-05.jpg";

// SETA (6)
import materiaSeta1 from "../assets/imagenes/materia/seta/materia_seta-01.jpg";
import materiaSeta2 from "../assets/imagenes/materia/seta/materia_seta-02.jpg";
import materiaSeta3 from "../assets/imagenes/materia/seta/materia_seta-03.jpg";
import materiaSeta4 from "../assets/imagenes/materia/seta/materia_seta-04.jpg";
import materiaSeta5 from "../assets/imagenes/materia/seta/materia_seta-05.jpg";
import materiaSeta6 from "../assets/imagenes/materia/seta/materia_seta-06.jpg";

// CENERE (8)
import materiaCenere1 from "../assets/imagenes/materia/cenere/materia_cenere-01.jpg";
import materiaCenere2 from "../assets/imagenes/materia/cenere/materia_cenere-02.jpg";
import materiaCenere3 from "../assets/imagenes/materia/cenere/materia_cenere-03.jpg";
import materiaCenere4 from "../assets/imagenes/materia/cenere/materia_cenere-04.jpg";
import materiaCenere5 from "../assets/imagenes/materia/cenere/materia_cenere-05.jpg";
import materiaCenere6 from "../assets/imagenes/materia/cenere/materia_cenere-06.jpg";
import materiaCenere7 from "../assets/imagenes/materia/cenere/materia_cenere-07.jpg";
import materiaCenere8 from "../assets/imagenes/materia/cenere/materia_cenere-08.jpg";

// OLIVA (9)
import materiaOliva1 from "../assets/imagenes/materia/oliva/materia-oliva-01.jpg";
import materiaOliva2 from "../assets/imagenes/materia/oliva/materia-oliva-02.jpg";
import materiaOliva3 from "../assets/imagenes/materia/oliva/materia-oliva-03.jpg";
import materiaOliva4 from "../assets/imagenes/materia/oliva/materia-oliva-04.jpg";
import materiaOliva5 from "../assets/imagenes/materia/oliva/materia-oliva-05.jpg";
import materiaOliva6 from "../assets/imagenes/materia/oliva/materia-oliva-06.jpg";
import materiaOliva7 from "../assets/imagenes/materia/oliva/materia-oliva-07.jpg";
import materiaOliva8 from "../assets/imagenes/materia/oliva/materia-oliva-08.jpg";
import materiaOliva9 from "../assets/imagenes/materia/oliva/materia-oliva-09.jpg";

// ORDEN EXACTO DE LAS IMÁGENES
const images = [
  // GESSO
  materiaGesso1,
  materiaGesso2,
  materiaGesso3,
  materiaGesso4,
  materiaGesso5,

  // SETA
  materiaSeta1,
  materiaSeta2,
  materiaSeta3,
  materiaSeta4,
  materiaSeta5,
  materiaSeta6,

  // CENERE
  materiaCenere1,
  materiaCenere2,
  materiaCenere3,
  materiaCenere4,
  materiaCenere5,
  materiaCenere6,
  materiaCenere7,
  materiaCenere8,

  // OLIVA
  materiaOliva1,
  materiaOliva2,
  materiaOliva3,
  materiaOliva4,
  materiaOliva5,
  materiaOliva6,
  materiaOliva7,
  materiaOliva8,
  materiaOliva9,
];

export function Materia({ onGoHome }) {
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
        <h1 className="titulo-coleccion">MATERIA</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://kronosceramiche.com/src/uploads/sites/3/2025/03/Materia.pdf?_gl=1*1eq5iow*_up*MQ..*_ga*MTIyMTU1NTc1My4xNzY1NDgyOTky*_ga_4S4P65CL4D*czE3NjU0ODI5OTIkbzEkZzAkdDE3NjU0ODI5OTIkajYwJGwwJGgxNzY5MTYwNDY5" />

        {/* ---- GALERÍA ---- */}

        {/* Color GESSO */}
        <h3 className="color-title">MATERIA GESSO</h3>
        <section className="gallery-grid">
          <img
            src={materiaGesso1}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="MATERIA GESSO 1"
          />
          <img
            src={materiaGesso2}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="MATERIA GESSO 2"
          />
          <img
            src={materiaGesso3}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="MATERIA GESSO 3"
          />
          <img
            src={materiaGesso4}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="MATERIA GESSO 4"
          />
          <img
            src={materiaGesso5}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="MATERIA GESSO 5"
          />
        </section>

        {/* Color SETA */}
        <h3 className="color-title">MATERIA SETA</h3>
        <section className="gallery-grid">
          <img
            src={materiaSeta1}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="MATERIA SETA 1"
          />
          <img
            src={materiaSeta2}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="MATERIA SETA 2"
          />
          <img
            src={materiaSeta3}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="MATERIA SETA 3"
          />
          <img
            src={materiaSeta4}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="MATERIA SETA 4"
          />
          <img
            src={materiaSeta5}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="MATERIA SETA 5"
          />
          <img
            src={materiaSeta6}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="MATERIA SETA 6"
          />
        </section>

        {/* Color CENERE */}
        <h3 className="color-title">MATERIA CENERE</h3>
        <section className="gallery-grid">
          <img
            src={materiaCenere1}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="MATERIA CENERE 1"
          />
          <img
            src={materiaCenere2}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="MATERIA CENERE 2"
          />
          <img
            src={materiaCenere3}
            className="gallery-img"
            onClick={() => openModal(13)}
            loading="lazy"
            alt="MATERIA CENERE 3"
          />
          <img
            src={materiaCenere4}
            className="gallery-img"
            onClick={() => openModal(14)}
            loading="lazy"
            alt="MATERIA CENERE 4"
          />
          <img
            src={materiaCenere5}
            className="gallery-img"
            onClick={() => openModal(15)}
            loading="lazy"
            alt="MATERIA CENERE 5"
          />
          <img
            src={materiaCenere6}
            className="gallery-img"
            onClick={() => openModal(16)}
            loading="lazy"
            alt="MATERIA CENERE 6"
          />
          <img
            src={materiaCenere7}
            className="gallery-img"
            onClick={() => openModal(17)}
            loading="lazy"
            alt="MATERIA CENERE 7"
          />
          <img
            src={materiaCenere8}
            className="gallery-img"
            onClick={() => openModal(18)}
            loading="lazy"
            alt="MATERIA CENERE 8"
          />
        </section>

        {/* Color OLIVA */}
        <h3 className="color-title">MATERIA OLIVA</h3>
        <section className="gallery-grid">
          <img
            src={materiaOliva1}
            className="gallery-img"
            onClick={() => openModal(19)}
            loading="lazy"
            alt="MATERIA OLIVA 1"
          />
          <img
            src={materiaOliva2}
            className="gallery-img"
            onClick={() => openModal(20)}
            loading="lazy"
            alt="MATERIA OLIVA 2"
          />
          <img
            src={materiaOliva3}
            className="gallery-img"
            onClick={() => openModal(21)}
            loading="lazy"
            alt="MATERIA OLIVA 3"
          />
          <img
            src={materiaOliva4}
            className="gallery-img"
            onClick={() => openModal(22)}
            loading="lazy"
            alt="MATERIA OLIVA 4"
          />
          <img
            src={materiaOliva5}
            className="gallery-img"
            onClick={() => openModal(23)}
            loading="lazy"
            alt="MATERIA OLIVA 5"
          />
          <img
            src={materiaOliva6}
            className="gallery-img"
            onClick={() => openModal(24)}
            loading="lazy"
            alt="MATERIA OLIVA 6"
          />
          <img
            src={materiaOliva7}
            className="gallery-img"
            onClick={() => openModal(25)}
            loading="lazy"
            alt="MATERIA OLIVA 7"
          />
          <img
            src={materiaOliva8}
            className="gallery-img"
            onClick={() => openModal(26)}
            loading="lazy"
            alt="MATERIA OLIVA 8"
          />
          <img
            src={materiaOliva9}
            className="gallery-img"
            onClick={() => openModal(27)}
            loading="lazy"
            alt="MATERIA OLIVA 9"
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
