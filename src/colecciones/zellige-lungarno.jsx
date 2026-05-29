import { Header } from "../components/Header";

export function ZelligeLungarno() {
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

  function goToDrawerJ9() {
    sessionStorage.setItem("boutiqueCabinet", "J");
    sessionStorage.setItem("boutiqueDrawer", "J9");
    window.dispatchEvent(new CustomEvent("go-boutique"));
  }

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-boutique">
          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToBoutique}
          >
            BOUTIQUE
          </button>

          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToCabinetJ}
          >
            J
          </button>

          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className="breadcrumb-link"
            onClick={goToDrawerJ9}
          >
            J9
          </button>

          <span className="breadcrumb-separator">/</span>

          <span className="breadcrumb-current">
            ZELLIGE-LUNGARNO
          </span>
        </div>

        <h1 className="titulo-coleccion boutique-title">
          ZELLIGE-LUNGARNO
        </h1>

        <div className="boutique-info">
          <p>LUNGARNO CERAMICS</p>
          <p>J9</p>
        </div>

        <section className="gallery-grid">
          <p>No images available yet.</p>
        </section>
      </main>
    </>
  );
}