// src/App.jsx
import { useState } from "react";
import { IndexPage } from "./IndexPage";

import { Lucena } from "./colecciones/lucena";
import { ElegancePro } from "./colecciones/elegance-pro";
import { Elysian } from "./colecciones/elysian";
import { SinaiCoem } from "./colecciones/sinai-coem";
import { SinaiKtl } from "./colecciones/sinai-ktl";
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
import { Palermo } from "./colecciones/palermo"];
import { Mapierre } from "./colecciones/mapierre";
import { Kora } from "./colecciones/kora";

// NUEVAS (bloque anterior)
import { Arenaria } from "./colecciones/arenaria";
import { Barcelona } from "./colecciones/barcelona";
import { OhTakeMountain } from "./colecciones/oh-take-mountain";

// NUEVAS (este bloque)
import { Portland } from "./colecciones/portland";
import { Chicago } from "./colecciones/chicago";
import { Icon } from "./colecciones/icon";

// NUEVAS (BELLEVUE + ULISSE)
import { Bellevue } from "./colecciones/bellevue";
import { Ulisse } from "./colecciones/ulisse";

// NUEVA (DRIPART)
import { Dripart } from "./colecciones/dripart";

// ✅ NUEVA (OXYD)
import { Oxyd } from "./colecciones/oxyd";

// ✅ NUEVA (BELA)
import { Bela } from "./colecciones/bela";

export function App() {
  const [page, setPage] = useState("home");

  function handleOpenCollection(name) {
    if (name === "LUCENA") setPage("lucena");
    if (name === "ELEGANCE PRO") setPage("elegance-pro");
    if (name === "ELYSIAN") setPage("elysian");
    if (name === "SINAI COEM") setPage("sinai-coem");
    if (name === "SINAI KTL") setPage("sinai-ktl");
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
    if (name === "KORA") setPage("kora");

    // NUEVAS (bloque anterior)
    if (name === "ARENARIA") setPage("arenaria");
    if (name === "BARCELONA") setPage("barcelona");
    if (name === "OH TAKE MOUNTAIN") setPage("oh-take-mountain");

    // NUEVAS (este bloque)
    if (name === "PORTLAND") setPage("portland");
    if (name === "CHICAGO") setPage("chicago");
    if (name === "ICON") setPage("icon");

    // NUEVAS (BELLEVUE + ULISSE)
    if (name === "BELLEVUE") setPage("bellevue");
    if (name === "ULISSE") setPage("ulisse");

    // NUEVA (DRIPART)
    if (name === "DRIPART") setPage("dripart");

    // ✅ NUEVA (OXYD)
    if (name === "OXYD") setPage("oxyd");

    // ✅ NUEVA (BELA)
    if (name === "BELA") setPage("bela");
  }

  function handleGoHome() {
    setPage("home");
  }

  if (page === "home")
    return <IndexPage onOpenCollection={handleOpenCollection} />;

  if (page === "lucena") return <Lucena onGoHome={handleGoHome} />;
  if (page === "elegance-pro") return <ElegancePro onGoHome={handleGoHome} />;
  if (page === "elysian") return <Elysian onGoHome={handleGoHome} />;
  if (page === "sinai-coem") return <SinaiCoem onGoHome={handleGoHome} />;
  if (page === "sinai-ktl") return <SinaiKtl onGoHome={handleGoHome} />;
  if (page === "glocal") return <Glocal onGoHome={handleGoHome} />;
  if (page === "materia") return <Materia onGoHome={handleGoHome} />;
  if (page === "sheer") return <Sheer onGoHome={handleGoHome} />;
  if (page === "motley") return <Motley onGoHome={handleGoHome} />;
  if (page === "supreme") return <Supreme onGoHome={handleGoHome} />;
  if (page === "imperial-stone")
    return <ImperialStone onGoHome={handleGoHome} />;
  if (page === "sybil") return <Sybil onGoHome={handleGoHome} />;
  if (page === "pulpis") return <Pulpis onGoHome={handleGoHome} />;
  if (page === "pierre-vive") return <PierreVive onGoHome={handleGoHome} />;
  if (page === "riverside") return <Riverside onGoHome={handleGoHome} />;
  if (page === "palermo") return <Palermo onGoHome={handleGoHome} />;
  if (page === "mapierre") return <Mapierre onGoHome={handleGoHome} />;
  if (page === "kora") return <Kora onGoHome={handleGoHome} />;

  // NUEVAS (bloque anterior)
  if (page === "arenaria") return <Arenaria onGoHome={handleGoHome} />;
  if (page === "barcelona") return <Barcelona onGoHome={handleGoHome} />;
  if (page === "oh-take-mountain")
    return <OhTakeMountain onGoHome={handleGoHome} />;

  // NUEVAS (este bloque)
  if (page === "portland") return <Portland onGoHome={handleGoHome} />;
  if (page === "chicago") return <Chicago onGoHome={handleGoHome} />;
  if (page === "icon") return <Icon onGoHome={handleGoHome} />;

  // NUEVAS (BELLEVUE + ULISSE)
  if (page === "bellevue") return <Bellevue onGoHome={handleGoHome} />;
  if (page === "ulisse") return <Ulisse onGoHome={handleGoHome} />;

  // NUEVA (DRIPART)
  if (page === "dripart") return <Dripart onGoHome={handleGoHome} />;

  // ✅ NUEVA (OXYD)
  if (page === "oxyd") return <Oxyd onGoHome={handleGoHome} />;

  // ✅ NUEVA (BELA)
  if (page === "bela") return <Bela onGoHome={handleGoHome} />;

  return null;
}

export default App;
