// src/App.jsx
import { useState } from "react";
import { IndexPage } from "./IndexPage";
import { Lucena } from "./colecciones/lucena";
import { ElegancePro } from "./colecciones/elegance-pro";
import { Elysian } from "./colecciones/elysian"; // ⬅️ NUEVO IMPORT

export function App() {
  const [page, setPage] = useState("home");

  function handleOpenCollection(name) {
    if (name === "LUCENA") {
      setPage("lucena");
    }

    if (name === "ELEGANCE PRO") {
      setPage("elegance-pro");
    }

    if (name === "ELYSIAN") {      // ⬅️ NUEVO
      setPage("elysian");
    }
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

  if (page === "elegance-pro") {
    return <ElegancePro onGoHome={handleGoHome} />;
  }

  if (page === "elysian") {        // ⬅️ NUEVO
    return <Elysian onGoHome={handleGoHome} />;
  }

  return null;
}

export default App;
