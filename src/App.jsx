// src/App.jsx
import { useState } from "react";
import { IndexPage } from "./IndexPage";
import { Lucena } from "./colecciones/lucena";
import { ElegancePro } from "./colecciones/elegance-pro";

export function App() {
  // Páginas disponibles:
  // "home" = índice con buscador
  // "lucena" = colección LUCENA
  // "elegance-pro" = colección ELEGANCE PRO
  const [page, setPage] = useState("home");

  function handleOpenCollection(name) {
    if (name === "LUCENA") {
      setPage("lucena");
    }

    if (name === "ELEGANCE PRO") {
      setPage("elegance-pro");
    }

    // Aquí iremos añadiendo más colecciones en el futuro
  }

  function handleGoHome() {
    setPage("home");
  }

  // HOME
  if (page === "home") {
    return <IndexPage onOpenCollection={handleOpenCollection} />;
  }

  // LUCENA
  if (page === "lucena") {
    return <Lucena onGoHome={handleGoHome} />;
  }

  // ELEGANCE PRO
  if (page === "elegance-pro") {
    return <ElegancePro onGoHome={handleGoHome} />;
  }

  return null;
}

// 👇 ESTA LÍNEA ES LA QUE FALTABA PARA NETLIFY
export default App;
