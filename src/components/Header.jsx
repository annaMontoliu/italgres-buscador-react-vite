// src/components/Header.jsx

import logo from "../assets/imagenes/logo/logo-blanco-italgres.png";

const TARIFA_PASSWORD = "Anna"; // 👉 aquí puedes cambiar la contraseña

export function Header() {

  const path = window.location.pathname;

  const isHome = path === "/" || path.includes("index");
  const isBoutique = path.includes("boutique");

  function handleHomeClick(event) {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("go-home"));
  }

  function handleBoutiqueClick(event) {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("go-boutique"));
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
        <a
          href="/docs/tarifa-italgres.xlsx"
          onClick={handleTarifaClick}
          rel="noopener noreferrer"
        >
          PRICELIST
        </a>

        <a
          href="/pdf/sample-map.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          SAMPLE MAP
        </a>

        <a
          href="/boutique"
          onClick={handleBoutiqueClick}
          className={isBoutique ? "is-active" : ""}
        >
          BOUTIQUE
        </a>

        <a
          href="/index.html"
          onClick={handleHomeClick}
          className={isHome ? "is-active" : ""}
        >
          HOME
        </a>
      </nav>
    </header>
  );
}
