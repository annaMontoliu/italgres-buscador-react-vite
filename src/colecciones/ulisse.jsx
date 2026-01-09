// src/colecciones/ulisse.jsx
import { useState } from "react";
import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// IMPORTS DE LAS FOTOS DESDE src/assets/imagenes/...

// BEIGE (6)
import ulisseBeige01 from "../assets/imagenes/ulisse/ulisse-beige/ulisse-beige-01.jpg";
import ulisseBeige02 from "../assets/imagenes/ulisse/ulisse-beige/ulisse-beige-02.jpg";
import ulisseBeige03 from "../assets/imagenes/ulisse/ulisse-beige/ulisse-beige-03.jpg";
import ulisseBeige04 from "../assets/imagenes/ulisse/ulisse-beige/ulisse-beige-04.jpg";
import ulisseBeige05 from "../assets/imagenes/ulisse/ulisse-beige/ulisse-beige-05.jpg";
import ulisseBeige06 from "../assets/imagenes/ulisse/ulisse-beige/ulisse-beige-06.jpg";

// NATURAL (4)
import ulisseNatural01 from "../assets/imagenes/ulisse/ulisse-natural/ulisse-natural-01.jpg";
import ulisseNatural02 from "../assets/imagenes/ulisse/ulisse-natural/ulisse-natural-02.jpg";
import ulisseNatural03 from "../assets/imagenes/ulisse/ulisse-natural/ulisse-natural-03.jpg";
import ulisseNatural04 from "../assets/imagenes/ulisse/ulisse-natural/ulisse-natural-04.jpg";

// PEARL (3)
import ulissePearl01 from "../assets/imagenes/ulisse/ulisse-pearl/ulisse-pearl-01.jpg";
import ulissePearl02 from "../assets/imagenes/ulisse/ulisse-pearl/ulisse-pearl-02.jpg";
import ulissePearl03 from "../assets/imagenes/ulisse/ulisse-pearl/ulisse-pearl-03.jpg";

// ORDEN EXACTO (modal)
const images = [
  // BEIGE
  ulisseBeige01,
  ulisseBeige02,
  ulisseBeige03,
  ulisseBeige04,
  ulisseBeige05,
  ulisseBeige06,

  // NATURAL
  ulisseNatural01,
  ulisseNatural02,
  ulisseNatural03,
  ulisseNatural04,

  // PEARL
  ulissePearl01,
  ulissePearl02,
  ulissePearl03,
];

export function Ulisse({ onGoHome }) {
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
        <h1 className="titulo-coleccion">ULISSE</h1>

        {/* Bloque FINISHES & FORMATS */}
        <ColeccionLayout infoUrl="https://stnceramica.es/wordpress2/wp-content/uploads/2024/09/STN_FOLLETO_CERSAIE_2024_ULISSE.pdf" />

        {/* ---- GALERÍA ---- */}

        {/* Color BEIGE */}
        <h3 className="color-title">ULISSE BEIGE</h3>
        <section className="gallery-grid">
          <img
            src={ulisseBeige01}
            className="gallery-img"
            onClick={() => openModal(0)}
            loading="lazy"
            alt="ULISSE BEIGE 1"
          />
          <img
            src={ulisseBeige02}
            className="gallery-img"
            onClick={() => openModal(1)}
            loading="lazy"
            alt="ULISSE BEIGE 2"
          />
          <img
            src={ulisseBeige03}
            className="gallery-img"
            onClick={() => openModal(2)}
            loading="lazy"
            alt="ULISSE BEIGE 3"
          />
          <img
            src={ulisseBeige04}
            className="gallery-img"
            onClick={() => openModal(3)}
            loading="lazy"
            alt="ULISSE BEIGE 4"
          />
          <img
            src={ulisseBeige05}
            className="gallery-img"
            onClick={() => openModal(4)}
            loading="lazy"
            alt="ULISSE BEIGE 5"
          />
          <img
            src={ulisseBeige06}
            className="gallery-img"
            onClick={() => openModal(5)}
            loading="lazy"
            alt="ULISSE BEIGE 6"
          />
        </section>

        {/* Color NATURAL */}
        <h3 className="color-title">ULISSE NATURAL</h3>
        <section className="gallery-grid">
          <img
            src={ulisseNatural01}
            className="gallery-img"
            onClick={() => openModal(6)}
            loading="lazy"
            alt="ULISSE NATURAL 1"
          />
          <img
            src={ulisseNatural02}
            className="gallery-img"
            onClick={() => openModal(7)}
            loading="lazy"
            alt="ULISSE NATURAL 2"
          />
          <img
            src={ulisseNatural03}
            className="gallery-img"
            onClick={() => openModal(8)}
            loading="lazy"
            alt="ULISSE NATURAL 3"
          />
          <img
            src={ulisseNatural04}
            className="gallery-img"
            onClick={() => openModal(9)}
            loading="lazy"
            alt="ULISSE NATURAL 4"
          />
        </section>

        {/* Color PEARL */}
        <h3 className="color-title">ULISSE PEARL</h3>
        <section className="gallery-grid">
          <img
            src={ulissePearl01}
            className="gallery-img"
            onClick={() => openModal(10)}
            loading="lazy"
            alt="ULISSE PEARL 1"
          />
          <img
            src={ulissePearl02}
            className="gallery-img"
            onClick={() => openModal(11)}
            loading="lazy"
            alt="ULISSE PEARL 2"
          />
          <img
            src={ulissePearl03}
            className="gallery-img"
            onClick={() => openModal(12)}
            loading="lazy"
            alt="ULISSE PEARL 3"
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
