// src/components/Header.jsx

import logo from "../assets/imagenes/logo/logo-blanco-italgres.png";

export function Header({ onGoHome }) {
  function handleHomeClick(event) {
    if (onGoHome) {
      event.preventDefault();
      onGoHome();
    }
  }

  function handleTarifaClick(event) {
    event.preventDefault();

    // URL del archivo de tarifa dentro de tu web (Netlify / localhost)
    const baseUrl = window.location.origin;
    const fileUrl = `${baseUrl}/docs/tarifa-italgres.xlsx`;

    // Visor online de Microsoft para mostrar el Excel en el navegador
    const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      fileUrl
    )}`;

    // Abrimos una ventanita nueva (que se puede hacer más grande)
    window.open(
      viewerUrl,
      "tarifaItalgres",
      "width=900,height=600,resizable=yes,scrollbars=yes"
    );
  }

  return (
    <header>
      <a href="https://italgres.com/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Italgres Logo" />
      </a>

      <nav>
        {/* TARIFA a la izquierda */}
        <a
          href="/docs/tarifa-italgres.xlsx"
          onClick={handleTarifaClick}
          rel="noopener noreferrer"
        >
          TARIFA
        </a>

        {/* HOME como lo tenías */}
        <a href="/index.html" onClick={handleHomeClick}>
          HOME
        </a>
      </nav>
    </header>
  );
}
