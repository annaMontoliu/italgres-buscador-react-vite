import { useState, useEffect } from "react";
import logo from "../assets/imagenes/logo/logo-blanco-italgres.png";

const TARIFA_PASSWORD = "Anna";

export function Header() {
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    function handleHome() {
      setActiveMenu("home");
    }

    function handleBoutique() {
      setActiveMenu("boutique");
    }

    window.addEventListener("go-home", handleHome);
    window.addEventListener("go-boutique", handleBoutique);

    return () => {
      window.removeEventListener("go-home", handleHome);
      window.removeEventListener("go-boutique", handleBoutique);
    };
  }, []);

  function handleHomeClick(event) {
    event.preventDefault();
    setActiveMenu("home");
    window.dispatchEvent(new CustomEvent("go-home"));
  }

  function handleBoutiqueClick(event) {
    event.preventDefault();
    setActiveMenu("boutique");
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

    const fileUrl = `${window.location.origin}/docs/tarifa-italgres.xlsx`;

    const viewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
      fileUrl
    )}`;

    window.open(
      viewerUrl,
      "_blank",
      "width=1200,height=800,resizable=yes,scrollbars=yes"
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
          className={activeMenu === "boutique" ? "is-active" : ""}
        >
          BOUTIQUE
        </a>

        <a
          href="/index.html"
          onClick={handleHomeClick}
          className={activeMenu === "home" ? "is-active" : ""}
        >
          HOME
        </a>
      </nav>
    </header>
  );
}