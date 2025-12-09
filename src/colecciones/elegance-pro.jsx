import { useState } from "react";
import Header from "../../components/Header";
import ColeccionLayout from "../../components/ColeccionLayout";
import ImageModal from "../../components/ImageModal";

import eleganceProWhite1 from "../../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-1.jpg";
import eleganceProWhite2 from "../../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-2.jpg";
import eleganceProWhite3 from "../../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-3.jpg";
import eleganceProWhite4 from "../../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-4.jpg";
import eleganceProWhite5 from "../../assets/imagenes/elegance-pro/elegance-pro-white/elegance-pro-white-5.jpg";

const images = [
  { src: eleganceProWhite1, alt: "Elegance Pro White 1" },
  { src: eleganceProWhite2, alt: "Elegance Pro White 2" },
  { src: eleganceProWhite3, alt: "Elegance Pro White 3" },
  { src: eleganceProWhite4, alt: "Elegance Pro White 4" },
  { src: eleganceProWhite5, alt: "Elegance Pro White 5" },
];

const ElegancePro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />

      <main className="coleccion-page">
        <ColeccionLayout
          data-info-collection="ELEGANCE PRO"
          data-info-color="WHITE"
          data-info-look=""
          data-info-type=""
          data-info-size=""
          data-info-thickness=""
          data-info-finish=""
          data-info-slip-resistance=""
        />

        <section className="coleccion-intro">
          <div className="coleccion-intro-text">
            <h1 className="coleccion-title">ELEGANCE PRO</h1>
            <p className="coleccion-color">WHITE</p>
          </div>
        </section>

        <section className="coleccion-gallery">
          <h2 className="coleccion-gallery-title">ELEGANCE PRO WHITE</h2>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="gallery-item"
                onClick={() => openModal(index)}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </section>

        <ImageModal
          isOpen={isModalOpen}
          images={images}
          currentIndex={currentIndex}
          onClose={closeModal}
        />
      </main>
    </>
  );
};

export default ElegancePro;
