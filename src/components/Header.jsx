// src/components/Header.jsx

import logo from "../assets/imagenes/logo/logo-blanco-italgres.png";

const TARIFA_PASSWORD = "anna"; // 👉 aquí puedes cambiar la contraseña

export function Header({ onGoHome }) {
  function handleHomeClick(event) {
    if (onGoHome) {
      event.preventDefault();
      onGoHome();
    }
  }

  function handleTarifaClick(event) {
    event.preventDefault();

    // 1) Pedimos la contraseña
    const input = window.prompt("Introduce la contraseña de comerciales:");

    // Si cancela el prompt, no hacemos nada
    if (input === null) return;

    // Si la contraseña es incorrecta, avisamos y salimos
    if (input !== TARIFA_PASSWORD) {
      alert("Contraseña incorrecta");
      return;
    }

    // 2) Si la contraseña es correcta, abrimos la ventanita con la tarifa

    const baseUrl = window.location.origin;
    const filePath = "/docs/tarifa-italgres.xlsx";
    const fileUrl = `${baseUrl}${filePath}`;

    // Si estamos en localhost → abrimos directamente el archivo
    if (baseUrl.includes("localhost") || baseUrl.includes("127.0.0.1")) {
      window.open(
        fileUrl,
        "tarifaItalgres",
        "width=900,height=600,resizable=yes,scrollbars=yes"
      );
      return;
    }

    // Si estamos en producción (Netlify, dominio real...) → usar visor de Microsoft
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
