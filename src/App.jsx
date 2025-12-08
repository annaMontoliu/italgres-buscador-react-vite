// src/App.jsx
import { useState } from "react";
import { IndexPage } from "./IndexPage";
import { Lucena } from "./colecciones/lucena";

export function App() {
  // "home" = índice con buscador
  // "lucena" = página de la colección LUCENA
  const [page, setPage] = useState("home");

  function handleOpenCollection(name) {
    if (name === "LUCENA") {
      setPage("lucena");
    }
    // Más adelante aquí podremos añadir más colecciones
  }

  function handleGoHome() {
    setPage("home");
  }

  if (page === "home") {
    return <IndexPage onOpenCollection={handleOpenCollection} />;
  }

  if (page === "lucena") {
    return <Lucena onGoHome={handleGoHome} />;
  }

  return null;
}
