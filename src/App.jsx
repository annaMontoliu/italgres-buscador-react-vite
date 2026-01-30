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

import { Arenaria } from "./colecciones/arenaria";
import { Barcelona } from "./colecciones/barcelona";
import { OhTakeMountain } from "./colecciones/oh-take-mountain";

import { Portland } from "./colecciones/portland";
import { Chicago } from "./colecciones/chicago";
import { Icon } from "./colecciones/icon";

import { Bellevue } from "./colecciones/bellevue";
import { Ulisse } from "./colecciones/ulisse";

import { Dripart } from "./colecciones/dripart";

import { Oxyd } from "./colecciones/oxyd";
import { Bela } from "./colecciones/bela";

import { Kaizen } from "./colecciones/kaizen";
import { Retina } from "./colecciones/retina";
import { Jatoba } from "./colecciones/jatoba";
import { Verbier } from "./colecciones/verbier";

import { MoonCream } from "./colecciones/moon-cream";
import { Ribera } from "./colecciones/ribera";
import { Erawan } from "./colecciones/erawan";
import { Majestic } from "./colecciones/majestic";
import { Jurupa } from "./colecciones/jurupa";

import { TheRoom } from "./colecciones/the-room";
import { Bloom } from "./colecciones/bloom";
import { GlimGemme } from "./colecciones/glim-gemme";
import { Oxide } from "./colecciones/oxide";
import { WoodFog } from "./colecciones/wood-fog";

import { Unique } from "./colecciones/unique";
import { BlueRoma } from "./colecciones/blue-roma";
import { CanelaRoma } from "./colecciones/canela-roma";
import { Nordic } from "./colecciones/nordic";
import { FormCement } from "./colecciones/form-cement";

// 👉 MYCRO
import { Mycro } from "./colecciones/mycro";

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

    if (name === "ARENARIA") setPage("arenaria");
    if (name === "BARCELONA") setPage("barcelona");
    if (name === "OH TAKE MOUNTAIN") setPage("oh-take-mountain");

    if (name === "PORTLAND") setPage("portland");
    if (name === "CHICAGO") setPage("chicago");
    if (name === "ICON") setPage("icon");

    if (name === "BELLEVUE") setPage("bellevue");
    if (name === "ULISSE") setPage("ulisse");

    if (name === "DRIPART") setPage("dripart");
    if (name === "OXYD") setPage("oxyd");
    if (name === "BELA") setPage("bela");

    if (name === "KAIZEN") setPage("kaizen");
    if (name === "RETINA") setPage("retina");
    if (name === "JATOBA") setPage("jatoba");
    if (name === "VERBIER") setPage("verbier");

    if (name === "MOON CREAM") setPage("moon-cream");
    if (name === "RIBERA") setPage("ribera");
    if (name === "ERAWAN") setPage("erawan");
    if (name === "MAJESTIC") setPage("majestic");
    if (name === "JURUPA") setPage("jurupa");

    if (name === "THE ROOM") setPage("the-room");
    if (name === "BLOOM") setPage("bloom");
    if (name === "GLIM GEMME") setPage("glim-gemme");
    if (name === "OXIDE") setPage("oxide");
    if (name === "WOOD FOG") setPage("wood-fog");

    if (name === "UNIQUE") setPage("unique");
    if (name === "BLUE ROMA") setPage("blue-roma");
    if (name === "CANELA ROMA") setPage("canela-roma");
    if (name === "NORDIC") setPage("nordic");
    if (name === "FORM CEMENT") setPage("form-cement");

    // 👉 MYCRO
    if (name === "MYCRO") setPage("mycro");
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

  if (page === "moon-cream") return <MoonCream onGoHome={handleGoHome} />;
  if (page === "ribera") return <Ribera onGoHome={handleGoHome} />;
  if (page === "erawan") return <Erawan onGoHome={handleGoHome} />;
  if (page === "majestic") return <Majestic onGoHome={handleGoHome} />;
  if (page === "jurupa") return <Jurupa onGoHome={handleGoHome} />;

  if (page === "the-room") return <TheRoom onGoHome={handleGoHome} />;
  if (page === "bloom") return <Bloom onGoHome={handleGoHome} />;
  if (page === "glim-gemme") return <GlimGemme onGoHome={handleGoHome} />;
  if (page === "oxide") return <Oxide onGoHome={handleGoHome} />;
  if (page === "wood-fog") return <WoodFog onGoHome={handleGoHome} />;

  if (page === "unique") return <Unique onGoHome={handleGoHome} />;
  if (page === "blue-roma") return <BlueRoma onGoHome={handleGoHome} />;
  if (page === "canela-roma") return <CanelaRoma onGoHome={handleGoHome} />;
  if (page === "nordic") return <Nordic onGoHome={handleGoHome} />;
  if (page === "form-cement") return <FormCement onGoHome={handleGoHome} />;

  // 👉 MYCRO
  if (page === "mycro") return <Mycro onGoHome={handleGoHome} />;

  return null;
}

export default App;
