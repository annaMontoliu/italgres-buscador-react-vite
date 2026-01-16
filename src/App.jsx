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
import { Palermo } from "./colecciones/palermo";
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

// BELLEVUE + ULISSE
import { Bellevue } from "./colecciones/bellevue";
import { Ulisse } from "./colecciones/ulisse";

// DRIPART
import { Dripart } from "./colecciones/dripart";

// OXYD
import { Oxyd } from "./colecciones/oxyd";

// BELA
import { Bela } from "./colecciones/bela";

// KAIZEN, RETINA, JATOBA, VERBIER
import { Kaizen } from "./colecciones/kaizen";
import { Retina } from "./colecciones/retina";
import { Jatoba } from "./colecciones/jatoba";
import { Verbier } from "./colecciones/verbier";

// NUEVAS (MOON CREAM, RIBERA, ERAWAN, MAJESTIC, JURUPA)
import { MoonCream } from "./colecciones/moon-cream";
import { Ribera } from "./colecciones/ribera";
import { Erawan } from "./colecciones/erawan";
import { Majestic } from "./colecciones/majestic";
import { Jurupa } from "./colecciones/jurupa";

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

    // NUEVAS PREVIAS
    if (name === "ARENARIA") setPage("arenaria");
    if (name === "BARCELONA") setPage("barcelona");
    if (name === "OH TAKE MOUNTAIN") setPage("oh-take-mountain");

    // NUEVAS
    if (name === "PORTLAND") setPage("portland");
    if (name === "CHICAGO") setPage("chicago");
    if (name === "ICON") setPage("icon");

    // BELLEVUE + ULISSE
    if (name === "BELLEVUE") setPage("bellevue");
    if (name === "ULISSE") setPage("ulisse");

    // DRIPART
    if (name === "DRIPART") setPage("dripart");

    // OXYD
    if (name === "OXYD") setPage("oxyd");

    // BELA
    if (name === "BELA") setPage("bela");

    // KAIZEN, RETINA, JATOBA, VERBIER
    if (name === "KAIZEN") setPage("kaizen");
    if (name === "RETINA") setPage("retina");
    if (name === "JATOBA") setPage("jatoba");
    if (name === "VERBIER") setPage("verbier");

    // 🌙 NUEVAS (MOON CREAM, RIBERA, ERAWAN, MAJESTIC, JURUPA)
    if (name === "MOON CREAM") setPage("moon-cream");
    if (name === "RIBERA") setPage("ribera");
    if (name === "ERAWAN") setPage("erawan");
    if (name === "MAJESTIC") setPage("majestic");
    if (name === "JURUPA") setPage("jurupa");
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

  // NUEVAS PREVIAS
  if (page === "arenaria") return <Arenaria onGoHome={handleGoHome} />;
  if (page === "barcelona") return <Barcelona onGoHome={handleGoHome} />;
  if (page === "oh-take-mountain")
    return <OhTakeMountain onGoHome={handleGoHome} />;

  if (page === "portland") return <Portland onGoHome={handleGoHome} />;
  if (page === "chicago") return <Chicago onGoHome={handleGoHome} />;
  if (page === "icon") return <Icon onGoHome={handleGoHome} />;

  if (page === "bellevue") return <Bellevue onGoHome={handleGoHome} />;
  if (page === "ulisse") return <Ulisse onGoHome={handleGoHome} />;

  if (page === "dripart") return <Dripart onGoHome={handleGoHome} />;

  if (page === "oxyd") return <Oxyd onGoHome={handleGoHome} />;

  if (page === "bela") return <Bela onGoHome={handleGoHome} />;

  if (page === "kaizen") return <Kaizen onGoHome={handleGoHome} />;
  if (page === "retina") return <Retina onGoHome={handleGoHome} />;
  if (page === "jatoba") return <Jatoba onGoHome={handleGoHome} />;
  if (page === "verbier") return <Verbier onGoHome={handleGoHome} />;

  // 🌙 NUEVAS (MOON CREAM, RIBERA, ERAWAN, MAJESTIC, JURUPA)
  if (page === "moon-cream") return <MoonCream onGoHome={handleGoHome} />;
  if (page === "ribera") return <Ribera onGoHome={handleGoHome} />;
  if (page === "erawan") return <Erawan onGoHome={handleGoHome} />;
  if (page === "majestic") return <Majestic onGoHome={handleGoHome} />;
  if (page === "jurupa") return <Jurupa onGoHome={handleGoHome} />;

  return null;
}

export default App;
