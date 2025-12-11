// src/App.jsx
import { useState } from "react";
import { IndexPage } from "./IndexPage";
import { Lucena } from "./colecciones/lucena";
import { ElegancePro } from "./colecciones/elegance-pro";
import { Elysian } from "./colecciones/elysian";
import { Sinai } from "./colecciones/sinai";
import { Glocal } from "./colecciones/glocal";
import { Materia } from "./colecciones/materia";
import { Sheer } from "./colecciones/sheer";
import { Motley } from "./colecciones/motley";

export function App() {
  const [page, setPage] = useState("home");

  function handleOpenCollection(name) {
    if (name === "LUCENA") {
      setPage("lucena");
    }

    if (name === "ELEGANCE PRO") {
      setPage("elegance-pro");
    }

    if (name === "ELYSIAN") {
      setPage("elysian");
    }

    if (name === "SINAI") {
      setPage("sinai");
    }

    if (name === "GLOCAL") {
      setPage("glocal");
    }

    if (name === "MATERIA") {
      setPage("materia");
    }

    if (name === "SHEER") {
      setPage("sheer");
    }

    if (name === "MOTLEY") {
      setPage("motley");
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

  if (page === "elysian") {
    return <Elysian onGoHome={handleGoHome} />;
  }

  if (page === "sinai") {
    return <Sinai onGoHome={handleGoHome} />;
  }

  if (page === "glocal") {
    return <Glocal onGoHome={handleGoHome} />;
  }

  if (page === "materia") {
    return <Materia onGoHome={handleGoHome} />;
  }

  if (page === "sheer") {
    return <Sheer onGoHome={handleGoHome} />;
  }

  if (page === "motley") {
    return <Motley onGoHome={handleGoHome} />;
  }

  return null;
}

export default App;
