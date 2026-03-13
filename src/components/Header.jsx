// src/components/Header.jsx

import logo from "../assets/imagenes/logo/logo-blanco-italgres.png";

const TARIFA_PASSWORD = "Anna"; // 👉 aquí puedes cambiar la contraseña

export function Header({ onGoHome, onOpenBoutique }) {
  function handleHomeClick(event) {
    if (onGoHome) {
      event.preventDefault();
      onGoHome();
    }
  }

  function handleBoutiqueClick(event) {
    event.preventDefault();

    if (onOpenBoutique) {
      onOpenBoutique();
    }
  }

  function handleTarifaClick(event) {
    event.preventDefault();

    const input = window.prompt("Introduce la contraseña de comerciales:");

    if (input === null) return;

    if (input !== TARIFA_PASSWORD) {
      alert("Contraseña incorrecta");
      return;
    }

    const baseUrl = window.location.origin;
    const filePath = "/docs/tarifa-italgres.xlsx";
    const fileUrl = `${baseUrl}${filePath}`;

    if (baseUrl.includes("localhost") || baseUrl.includes("127.0.0.1")) {
      window.open(
        fileUrl,
        "tarifaItalgres",
        "width=900,height=600,resizable=yes,scrollbars=yes"
      );
      return;
    }

    const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      fileUrl
    )}`;

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
        {/* PRICELIST */}
        <a
          href="/docs/tarifa-italgres.xlsx"
          onClick={handleTarifaClick}
          rel="noopener noreferrer"
        >
          PRICELIST
        </a>

        {/* SAMPLE MAP */}
        <a
          href="/pdf/sample-map.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          SAMPLE MAP
        </a>

        {/* BOUTIQUE */}
        <a href="/boutique" onClick={handleBoutiqueClick}>
          BOUTIQUE
        </a>

        {/* HOME */}
        <a href="/index.html" onClick={handleHomeClick}>
          HOME
        </a>
      </nav>
    </header>
  );
}