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

// ✅ NUEVAS 5 (THE ROOM, BLOOM, GLIM GEMME, OXIDE, WOOD FOG)
import { TheRoom } from "./colecciones/the-room";
import { Bloom } from "./colecciones/bloom";
import { GlimGemme } from "./colecciones/glim-gemme";
import { Oxide } from "./colecciones/oxide";
import { WoodFog } from "./colecciones/wood-fog";

// ✅ NUEVAS 5 (UNIQUE, BLUE ROMA, CANELA ROMA, NORDIC, FORM CEMENT)
import { Unique } from "./colecciones/unique";
import { BlueRoma } from "./colecciones/blue-roma";
import { CanelaRoma } from "./colecciones/canela-roma";
import { Nordic } from "./colecciones/nordic";
import { FormCement } from "./colecciones/form-cement";

// ✅ MYCRO (ya estaba)
import { Mycro } from "./colecciones/mycro";

// ✅ NUEVAS (CORALINA, CAEMENTUM)
import { Coralina } from "./colecciones/coralina";
import { Caementum } from "./colecciones/caementum";

// ✅ NUEVAS (PAPIER, JEWELS)
import { Papier } from "./colecciones/papier";
import { Jewels } from "./colecciones/jewels";

// ✅ NUEVAS (ENGLISH STONE, TAJ MAHAL, TWEED STONE)
import { EnglishStone } from "./colecciones/english-stone";
import { TajMahal } from "./colecciones/taj-mahal";
import { TweedStone } from "./colecciones/tweed-stone";

// ✅ NUEVAS (TIVOLI, SEINE, SANDSTONE, MEMORY)
import { Tivoli } from "./colecciones/tivoli";
import { Seine } from "./colecciones/seine";
import { Sandstone } from "./colecciones/sandstone";
import { Memory } from "./colecciones/memory";

// ✅ NUEVAS (NATURE MOOD, GREEN TREES, TROPICAL BLUE, MATERIA CLASSICA, BORNEO, BOREALIS)
import { NatureMood } from "./colecciones/nature-mood";
import { GreenTrees } from "./colecciones/green-trees";
import { TropicalBlue } from "./colecciones/tropical-blue";
import { MateriaClassica } from "./colecciones/materia-classica";
import { Borneo } from "./colecciones/borneo";
import { Borealis } from "./colecciones/borealis";

// ✅ NUEVAS (ARTE, DUAL, MAINSTONE, PRALINE, SUBLIME)
import { Arte } from "./colecciones/arte";
import { Dual } from "./colecciones/dual";
import { Mainstone } from "./colecciones/mainstone";
import { Praline } from "./colecciones/praline";
import { Sublime } from "./colecciones/sublime";

// ✅ NUEVAS (HOPE, CRUISE, PIETRA ESSENZA, DUAL TRAVERTINE)
import { Hope } from "./colecciones/hope";
import { Cruise } from "./colecciones/cruise";
import { PietraEssenza } from "./colecciones/pietra-essenza";
import { DualTravertine } from "./colecciones/dual-travertine";

// ✅ NUEVAS (MATERA STONE, AVALLON, BAIKAL, SAVOY)
import { MateraStone } from "./colecciones/matera-stone";
import { Avallon } from "./colecciones/avallon";
import { Baikal } from "./colecciones/baikal";
import { Savoy } from "./colecciones/savoy";

// ✅ NUEVAS (DOT, DHARA, OREGON, HALTON)
import { Dot } from "./colecciones/dot";
import { Dhara } from "./colecciones/dhara";
import { Oregon } from "./colecciones/oregon";
import { Halton } from "./colecciones/halton";

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

    // ✅ NUEVAS 5
    if (name === "THE ROOM") setPage("the-room");
    if (name === "BLOOM") setPage("bloom");
    if (name === "GLIM GEMME") setPage("glim-gemme");
    if (name === "OXIDE") setPage("oxide");
    if (name === "WOOD FOG") setPage("wood-fog");

    // ✅ NUEVAS 5 (este bloque)
    if (name === "UNIQUE") setPage("unique");
    if (name === "BLUE ROMA") setPage("blue-roma");
    if (name === "CANELA ROMA") setPage("canela-roma");
    if (name === "NORDIC") setPage("nordic");
    if (name === "FORM CEMENT") setPage("form-cement");

    // ✅ MYCRO
    if (name === "MYCRO") setPage("mycro");

    // ✅ CORALINA + CAEMENTUM
    if (name === "CORALINA") setPage("coralina");
    if (name === "CAEMENTUM") setPage("caementum");

    // ✅ PAPIER + JEWELS
    if (name === "PAPIER") setPage("papier");
    if (name === "JEWELS") setPage("jewels");

    // ✅ ENGLISH STONE + TAJ MAHAL + TWEED STONE
    if (name === "ENGLISH STONE") setPage("english-stone");
    if (name === "TAJ MAHAL") setPage("taj-mahal");
    if (name === "TWEED STONE") setPage("tweed-stone");

    // ✅ TIVOLI + SEINE + SANDSTONE + MEMORY
    if (name === "TIVOLI") setPage("tivoli");
    if (name === "SEINE") setPage("seine");
    if (name === "SANDSTONE") setPage("sandstone");
    if (name === "MEMORY") setPage("memory");

    // ✅ NATURE MOOD, GREEN TREES, TROPICAL BLUE, MATERIA CLASSICA, BORNEO, BOREALIS
    if (name === "NATURE MOOD") setPage("nature-mood");
    if (name === "GREEN TREES") setPage("green-trees");
    if (name === "TROPICAL BLUE") setPage("tropical-blue");
    if (name === "MATERIA CLASSICA") setPage("materia-classica");
    if (name === "BORNEO") setPage("borneo");
    if (name === "BOREALIS") setPage("borealis");

    // ✅ ARTE, DUAL, MAINSTONE, PRALINE, SUBLIME
    if (name === "ARTE") setPage("arte");
    if (name === "DUAL") setPage("dual");
    if (name === "MAINSTONE") setPage("mainstone");
    if (name === "PRALINE") setPage("praline");
    if (name === "SUBLIME") setPage("sublime");

    // ✅ HOPE, CRUISE, PIETRA ESSENZA, DUAL TRAVERTINE
    if (name === "HOPE") setPage("hope");
    if (name === "CRUISE") setPage("cruise");
    if (name === "PIETRA ESSENZA") setPage("pietra-essenza");
    if (name === "DUAL TRAVERTINE") setPage("dual-travertine");

    // ✅ MATERA STONE, AVALLON, BAIKAL, SAVOY
    if (name === "MATERA STONE") setPage("matera-stone");
    if (name === "AVALLON") setPage("avallon");
    if (name === "BAIKAL") setPage("baikal");
    if (name === "SAVOY") setPage("savoy");

    // ✅ NUEVAS (DOT, DHARA, OREGON, HALTON)
    if (name === "DOT") setPage("dot");
    if (name === "DHARA") setPage("dhara");
    if (name === "OREGON") setPage("oregon");
    if (name === "HALTON") setPage("halton");
  }

  function handleGoHome() {
    setPage("home");
  }

  if (page === "home") {
    return <IndexPage onOpenCollection={handleOpenCollection} />;
  }

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

  // ✅ NUEVAS 5
  if (page === "the-room") return <TheRoom onGoHome={handleGoHome} />;
  if (page === "bloom") return <Bloom onGoHome={handleGoHome} />;
  if (page === "glim-gemme") return <GlimGemme onGoHome={handleGoHome} />;
  if (page === "oxide") return <Oxide onGoHome={handleGoHome} />;
  if (page === "wood-fog") return <WoodFog onGoHome={handleGoHome} />;

  // ✅ NUEVAS 5 (este bloque)
  if (page === "unique") return <Unique onGoHome={handleGoHome} />;
  if (page === "blue-roma") return <BlueRoma onGoHome={handleGoHome} />;
  if (page === "canela-roma") return <CanelaRoma onGoHome={handleGoHome} />;
  if (page === "nordic") return <Nordic onGoHome={handleGoHome} />;
  if (page === "form-cement") return <FormCement onGoHome={handleGoHome} />;

  // ✅ MYCRO
  if (page === "mycro") return <Mycro onGoHome={handleGoHome} />;

  // ✅ CORALINA + CAEMENTUM
  if (page === "coralina") return <Coralina onGoHome={handleGoHome} />;
  if (page === "caementum") return <Caementum onGoHome={handleGoHome} />;

  // ✅ PAPIER + JEWELS
  if (page === "papier") return <Papier onGoHome={handleGoHome} />;
  if (page === "jewels") return <Jewels onGoHome={handleGoHome} />;

  // ✅ ENGLISH STONE + TAJ MAHAL + TWEED STONE
  if (page === "english-stone") return <EnglishStone onGoHome={handleGoHome} />;
  if (page === "taj-mahal") return <TajMahal onGoHome={handleGoHome} />;
  if (page === "tweed-stone") return <TweedStone onGoHome={handleGoHome} />;

  // ✅ TIVOLI + SEINE + SANDSTONE + MEMORY
  if (page === "tivoli") return <Tivoli onGoHome={handleGoHome} />;
  if (page === "seine") return <Seine onGoHome={handleGoHome} />;
  if (page === "sandstone") return <Sandstone onGoHome={handleGoHome} />;
  if (page === "memory") return <Memory onGoHome={handleGoHome} />;

  // ✅ NATURE MOOD, GREEN TREES, TROPICAL BLUE, MATERIA CLASSICA, BORNEO, BOREALIS
  if (page === "nature-mood") return <NatureMood onGoHome={handleGoHome} />;
  if (page === "green-trees") return <GreenTrees onGoHome={handleGoHome} />;
  if (page === "tropical-blue")
    return <TropicalBlue onGoHome={handleGoHome} />;
  if (page === "materia-classica")
    return <MateriaClassica onGoHome={handleGoHome} />;
  if (page === "borneo") return <Borneo onGoHome={handleGoHome} />;
  if (page === "borealis") return <Borealis onGoHome={handleGoHome} />;

  // ✅ ARTE, DUAL, MAINSTONE, PRALINE, SUBLIME
  if (page === "arte") return <Arte onGoHome={handleGoHome} />;
  if (page === "dual") return <Dual onGoHome={handleGoHome} />;
  if (page === "mainstone") return <Mainstone onGoHome={handleGoHome} />;
  if (page === "praline") return <Praline onGoHome={handleGoHome} />;
  if (page === "sublime") return <Sublime onGoHome={handleGoHome} />;

  // ✅ HOPE, CRUISE, PIETRA ESSENZA, DUAL TRAVERTINE
  if (page === "hope") return <Hope onGoHome={handleGoHome} />;
  if (page === "cruise") return <Cruise onGoHome={handleGoHome} />;
  if (page === "pietra-essenza")
    return <PietraEssenza onGoHome={handleGoHome} />;
  if (page === "dual-travertine")
    return <DualTravertine onGoHome={handleGoHome} />;

  // ✅ MATERA STONE, AVALLON, BAIKAL, SAVOY
  if (page === "matera-stone") return <MateraStone onGoHome={handleGoHome} />;
  if (page === "avallon") return <Avallon onGoHome={handleGoHome} />;
  if (page === "baikal") return <Baikal onGoHome={handleGoHome} />;
  if (page === "savoy") return <Savoy onGoHome={handleGoHome} />;

  // ✅ NUEVAS (DOT, DHARA, OREGON, HALTON)
  if (page === "dot") return <Dot onGoHome={handleGoHome} />;
  if (page === "dhara") return <Dhara onGoHome={handleGoHome} />;
  if (page === "oregon") return <Oregon onGoHome={handleGoHome} />;
  if (page === "halton") return <Halton onGoHome={handleGoHome} />;

  return null;
}

export default App;