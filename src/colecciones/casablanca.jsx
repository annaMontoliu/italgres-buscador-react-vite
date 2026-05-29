// src/colecciones/casablanca.jsx

import { Header } from "../components/Header";

export function Casablanca() {
  function goToBoutique() {
    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToCabinetJ() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.removeItem("boutiqueDrawer");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  function goToDrawerJ8() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J8");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button type="button" className="breadcrumb-link" onClick={goToBoutique}>
            BOUTIQUE
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToCabinetJ}>
            J
          </button>
          <span className="breadcrumb-separator">/</span>

          <button type="button" className="breadcrumb-link" onClick={goToDrawerJ8}>
            J8
          </button>
          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">CASABLANCA</span>
        </div>

        <h1 className="titulo-coleccion boutique-title">CASABLANCA</h1>

        <div className="boutique-info">
          <p>2''X6'' · LUNGARNO CERAMICS</p>
          <p>J8</p>
        </div>

        <section className="gallery-grid">
          <p>No images available yet.</p>
        </section>
      </main>
    </>
  );
}