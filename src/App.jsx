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
import { Supreme } from "./colecciones/supreme";
import { ImperialStone } from "./colecciones/imperial-stone";
import { Sybil } from "./colecciones/sybil";
import { Pulpis } from "./colecciones/pulpis";
import { PierreVive } from "./colecciones/pierre-vive";
import { Riverside } from "./colecciones/riverside";
import { Palermo } from "./colecciones/palermo";
import { Mapierre } from "./colecciones/mapierre";

export function App() {
  const [page, setPage] = useState("home");

  function handleOpenCollection(name) {
    if (name === "LUCENA") setPage("lucena");
    if (name === "ELEGANCE PRO") setPage("elegance-pro");
    if (name === "ELYSIAN") setPage("elysian");
    if (name === "SINAI") setPage("sinai");
    if (name === "GLOCAL") setPage("glocal");
    if (name === "MATERIA") setPage("materia");
    if (name === "MOTLEY") setPage("motley");
    if (name === "SHEER") setPage("sheer");
    if (name === "SUPREME") setPage("supreme");
    if (name === "IMPERIAL STONE") setPage("imperial-stone");
    if (name === "SYBIL") setPage("sybil");
    if (name === "PULPIS") setPage("pulpis");
    if (name === "PIERRE VIVE") setPage("pierre-vive");
    if (name === "RIVERSIDE") setPage("riverside");
    if (name === "PALERMO") setPage("palermo");
    if (name === "MAPIERRE") setPage("mapierre");
  }

  function handleGoHome() {
    setPage("home");
  }

  if (page === "home") return <IndexPage onOpenCollection={handleOpenCollection} />;

  if (page === "lucena") return <Lucena onGoHome={handleGoHome} />;
  if (page === "elegance-pro") return <ElegancePro onGoHome={handleGoHome} />;
  if (page === "elysian") return <Elysian onGoHome={handleGoHome} />;
  if (page === "sinai") return <Sinai onGoHome={handleGoHome} />;
  if (page === "glocal") return <Glocal onGoHome={handleGoHome} />;
  if (page === "materia") return <Materia onGoHome={handleGoHome} />;
  if (page === "sheer") return <Sheer onGoHome={handleGoHome} />;
  if (page === "motley") return <Motley onGoHome={handleGoHome} />;
  if (page === "supreme") return <Supreme onGoHome={handleGoHome} />;
  if (page === "imperial-stone") return <ImperialStone onGoHome={handleGoHome} />;
  if (page === "sybil") return <Sybil onGoHome={handleGoHome} />;
  if (page === "pulpis") return <Pulpis onGoHome={handleGoHome} />;
  if (page === "pierre-vive") return <PierreVive onGoHome={handleGoHome} />;
  if (page === "riverside") return <Riverside onGoHome={handleGoHome} />;
  if (page === "palermo") return <Palermo onGoHome={handleGoHome} />;
  if (page === "mapierre") return <Mapierre onGoHome={handleGoHome} />;

  return null;
}

export default App;
