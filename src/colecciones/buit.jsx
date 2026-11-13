
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ColeccionLayout from "../components/ColeccionLayout";
import ImageModal from "../components/ImageModal";

const images = Object.values(
  import.meta.glob("../assets/imagenes/buit/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  })
).sort((a, b) => {
  const getNumber = (path) =>
    Number(path.match(/buit-(\d+)\.jpg/)?.[1] || 0);

  return getNumber(a) - getNumber(b);
});

export default function Buit({ onGoHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const goToBoutique = () => {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  };

  const goToCabinetJ = () => {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  };

  const goToDrawerJ5 = () => {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J5");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  };

  return (
    <>
      <Header onGoHome={onGoHome} />

      <main>
        <div className="breadcrumb">
          <button onClick={goToBoutique}>BOUTIQUE</button>
          <span>/</span>
          <button onClick={goToCabinetJ}>J</button>
          <span>/</span>
          <button onClick={goToDrawerJ5}>J5</button>
          <span>/</span>
          <span>BUIT</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          BUIT
        </h1>

        <div className="boutique-info">
          <p>
            <strong>FORMAT:</strong> 7" x 7"
          </p>
          <p>
            <strong>MANUFACTURER:</strong> BUIT
          </p>
          <p>
            <strong>LOCATION:</strong> J5
          </p>
        </div>

        <ColeccionLayout infoUrl="/pdf/BUIT.pdf" />

        <section className="gallery-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`BUIT ${index + 1}`}
              loading="lazy"
              onClick={() => openModal(index)}
            />
          ))}
        </section>
      </main>

      {isModalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
