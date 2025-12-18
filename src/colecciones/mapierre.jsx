// src/colecciones/mapierre.jsx
import { useState } from "react";

import { Header } from "../components/Header";
import { ColeccionLayout } from "../components/ColeccionLayout";
import { ImageModal } from "../components/ImageModal";

// (cuando tengas imágenes, irán aquí)

export function Mapierre({ onGoHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <h1 className="titulo-coleccion">MAPIERRE</h1>

        <p className="descripcion-coleccion">
          MAPIERRE es una colección de inspiración mineral diseñada para aportar
          equilibrio, naturalidad y coherencia estética en todo tipo de espacios.
        </p>

        <ColeccionLayout infoUrl="" />
      </main>

      <ImageModal
        images={[]}
        isOpen={isModalOpen}
        currentIndex={currentIndex}
        onClose={() => setIsModalOpen(false)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </>
  );
}
