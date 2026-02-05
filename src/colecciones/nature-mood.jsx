import { useState } from "react";

import { Header } from "../../components/Header";
import { ColeccionLayout } from "../../components/ColeccionLayout";
import { ImageModal } from "../../components/ImageModal";

// IMPORTS DE IMÁGENES

// TUNDRA (4)
import tundra1 from "../../assets/imagenes/nature-mood/nature-mood-tundra/nature-mood-tundra-01.jpg";
import tundra2 from "../../assets/imagenes/nature-mood/nature-mood-tundra/nature-mood-tundra-02.jpg";
import tundra3 from "../../assets/imagenes/nature-mood/nature-mood-tundra/nature-mood-tundra-03.jpg";
import tundra4 from "../../assets/imagenes/nature-mood/nature-mood-tundra/nature-mood-tundra-04.jpg";

// PLANK 01 (2)
import plank1 from "../../assets/imagenes/nature-mood/nature-mood-plank-01/nature-mood-plank-01-01.jpg";
import plank2 from "../../assets/imagenes/nature-mood/nature-mood-plank-01/nature-mood-plank-01-02.jpg";

// GLACIER (3)
import glacier1 from "../../assets/imagenes/nature-mood/nature-mood-glacier/nature-mood-glacier-01.jpg";
import glacier2 from "../../assets/imagenes/nature-mood/nature-mood-glacier/nature-mood-glacier-02.jpg";
import glacier3 from "../../assets/imagenes/nature-mood/nature-mood-glacier/nature-mood-glacier-03.jpg";

// ORDEN EXACTO PARA EL MODAL
const images = [
  // TUNDRA
  tundra1,
  tundra2,
  tundra3,
  tundra4,

  // PLANK 01
  plank1,
  plank2,

  // GLACIER
  glacier1,
  glacier2,
  glacier3,
];

export function NatureMood({ onGoHome }) {
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
        {/* Título */}
        <h1 className="titulo-coleccion">NATURE MOOD</h1>

        {/* FINISHES & FORMATS */}
        <ColeccionLayout
          infoUrl="https://florim-cdn.thron.com/static/HZMQWP_Cat_Nature_Mood_5VC2CH.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22Cat_Nature_Mood.pdf%22&dt=exp=1770243961~hmac=17ac5fd88a6b0aaf0720e8e406c2876971ab9e1617f8321c1de121aece0c39d5"
        />

        {/* ---- GALERÍA ---- */}

        {/* TUNDRA */}
        <h3 className="color-title">NATURE MOOD TUNDRA</h3>
        <section className="gallery-grid">
          <img src={tundra1} className="gallery-img" onClick={() => openModal(0)} loading="lazy" alt="NATURE MOOD TUNDRA 1" />
          <img src={tundra2} className="gallery-img" onClick={() => openModal(1)} loading="lazy" alt="NATURE MOOD TUNDRA 2" />
          <img src={tundra3} className="gallery-img" onClick={() => openModal(2)} loading="lazy" alt="NATURE MOOD TUNDRA 3" />
          <img src={tundra4} className="gallery-img" onClick={() => openModal(3)} loading="lazy" alt="NATURE MOOD TUNDRA 4" />
        </section>

        {/* PLANK 01 */}
        <h3 className="color-title">NATURE MOOD PLANK 01</h3>
        <section className="gallery-grid">
          <img src={plank1} className="gallery-img" onClick={() => openModal(4)} loading="lazy" alt="NATURE MOOD PLANK 01 - 1" />
          <img src={plank2} className="gallery-img" onClick={() => openModal(5)} loading="lazy" alt="NATURE MOOD PLANK 01 - 2" />
        </section>

        {/* GLACIER */}
        <h3 className="color-title">NATURE MOOD GLACIER</h3>
        <section className="gallery-grid">
          <img src={glacier1} className="gallery-img" onClick={() => openModal(6)} loading="lazy" alt="NATURE MOOD GLACIER 1" />
          <img src={glacier2} className="gallery-img" onClick={() => openModal(7)} loading="lazy" alt="NATURE MOOD GLACIER 2" />
          <img src={glacier3} className="gallery-img" onClick={() => openModal(8)} loading="lazy" alt="NATURE MOOD GLACIER 3" />
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
