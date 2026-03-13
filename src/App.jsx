// src/App.jsx
import { useEffect, useState, useRef } from "react";
import { IndexPage } from "./IndexPage";
import { Boutique } from "./boutique";

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
import { Mycro } from "./colecciones/mycro";
import { Coralina } from "./colecciones/coralina";
import { Caementum } from "./colecciones/caementum";
import { Papier } from "./colecciones/papier";
import { Jewels } from "./colecciones/jewels";
import { EnglishStone } from "./colecciones/english-stone";
import { TajMahal } from "./colecciones/taj-mahal";
import { TweedStone } from "./colecciones/tweed-stone";
import { Tivoli } from "./colecciones/tivoli";
import { Seine } from "./colecciones/seine";
import { Sandstone } from "./colecciones/sandstone";
import { Memory } from "./colecciones/memory";
import { NatureMood } from "./colecciones/nature-mood";
import { GreenTrees } from "./colecciones/green-trees";
import { TropicalBlue } from "./colecciones/tropical-blue";
import { MateriaClassica } from "./colecciones/materia-classica";
import { Borneo } from "./colecciones/borneo";
import { Borealis } from "./colecciones/borealis";
import { Arte } from "./colecciones/arte";
import { Dual } from "./colecciones/dual";
import { Mainstone } from "./colecciones/mainstone";
import { Praline } from "./colecciones/praline";
import { Sublime } from "./colecciones/sublime";
import { Hope } from "./colecciones/hope";
import { Cruise } from "./colecciones/cruise";
import { PietraEssenza } from "./colecciones/pietra-essenza";
import { DualTravertine } from "./colecciones/dual-travertine";
import { MateraStone } from "./colecciones/matera-stone";
import { Avallon } from "./colecciones/avallon";
import { Baikal } from "./colecciones/baikal";
import { Savoy } from "./colecciones/savoy";
import { Dot } from "./colecciones/dot";
import { Dhara } from "./colecciones/dhara";
import { Oregon } from "./colecciones/oregon";
import { Halton } from "./colecciones/halton";
import { Gulhi } from "./colecciones/gulhi";
import { Calizia } from "./colecciones/calizia";
import { Hauteville } from "./colecciones/hauteville";
import { Vinci } from "./colecciones/vinci";
import { Cement } from "./colecciones/cement";
import { Emotion } from "./colecciones/emotion";
import { FluidMulticolor } from "./colecciones/fluid-multicolor";
import { Tattoo } from "./colecciones/tattoo";
import { Cassero } from "./colecciones/cassero";
import { Cosmopolitan } from "./colecciones/cosmopolitan";
import { Artic } from "./colecciones/artic";
import { Arken } from "./colecciones/arken";
import { CuarzoReno } from "./colecciones/cuarzo-reno";
import { Distrito } from "./colecciones/distrito";
import { Incisa } from "./colecciones/incisa";
import { Onix } from "./colecciones/onix";
import { Silverline } from "./colecciones/silverline";
import { Civic } from "./colecciones/civic";
import { Blanco } from "./colecciones/blanco";
import { Cottage } from "./colecciones/cottage";
import { Duomo } from "./colecciones/duomo";
import { LuminaStone } from "./colecciones/lumina-stone";
import { Micra } from "./colecciones/micra";
import { Mitica } from "./colecciones/mitica";
import { Oxo } from "./colecciones/oxo";
import { Surface } from "./colecciones/surface";
import { Dust } from "./colecciones/dust";

export function App() {
  const [page, setPage] = useState("home");
  const [previousPage, setPreviousPage] = useState("home");
  const [swipeX, setSwipeX] = useState(0);
  const [isDraggingSwipe, setIsDraggingSwipe] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const trackingSwipe = useRef(false);
  const swipeTimeout = useRef(null);

  function goToPage(nextPage) {
    if (nextPage === page) return;
    setPreviousPage(page);
    setPage(nextPage);
  }

  useEffect(() => {
    function handleGlobalGoHome() {
      if (page !== "home") {
        setPreviousPage(page);
      }
      setPage("home");
    }

    function handleGlobalGoBoutique() {
      if (page !== "boutique") {
        setPreviousPage(page);
      }
      setPage("boutique");
    }

    function handleTouchStart(e) {
      if (window.innerWidth > 1024) return;
      if (page === "home") return;
      if (e.touches.length !== 1) return;

      const touch = e.touches[0];

      if (touch.clientX <= 30) {
        trackingSwipe.current = true;
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
        setIsDraggingSwipe(true);
      } else {
        trackingSwipe.current = false;
      }
    }

    function handleTouchMove(e) {
      if (window.innerWidth > 1024) return;
      if (!trackingSwipe.current) return;

      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartX.current;
      const deltaY = touch.clientY - touchStartY.current;

      if (deltaX <= 0) {
        setSwipeX(0);
        return;
      }

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        setSwipeX(Math.min(deltaX, window.innerWidth));
      }
    }

    function handleTouchEnd(e) {
      if (window.innerWidth > 1024) return;
      if (!trackingSwipe.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX.current;
      const deltaY = Math.abs(touch.clientY - touchStartY.current);
      const targetPage = previousPage || "home";
      const shouldGoBack = deltaX > window.innerWidth * 0.28 && deltaY < 120;

      trackingSwipe.current = false;
      setIsDraggingSwipe(false);

      if (shouldGoBack) {
        setSwipeX(window.innerWidth);

        if (swipeTimeout.current) {
          clearTimeout(swipeTimeout.current);
        }

        swipeTimeout.current = window.setTimeout(() => {
          const currentPage = page;
          setPage(targetPage);
          setPreviousPage(currentPage);
          setSwipeX(0);
        }, 220);
      } else {
        setSwipeX(0);
      }
    }

    window.addEventListener("go-home", handleGlobalGoHome);
    window.addEventListener("go-boutique", handleGlobalGoBoutique);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("go-home", handleGlobalGoHome);
      window.removeEventListener("go-boutique", handleGlobalGoBoutique);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (swipeTimeout.current) {
        clearTimeout(swipeTimeout.current);
      }
    };
  }, [page, previousPage]);

  function handleOpenCollection(name) {
    if (name === "BOUTIQUE") goToPage("boutique");
    if (name === "DUST") goToPage("dust");

    if (name === "LUCENA") goToPage("lucena");
    if (name === "ELEGANCE PRO") goToPage("elegance-pro");
    if (name === "ELYSIAN") goToPage("elysian");
    if (name === "SINAI COEM") goToPage("sinai-coem");
    if (name === "SINAI KTL") goToPage("sinai-ktl");
    if (name === "GLOCAL") goToPage("glocal");
    if (name === "MATERIA") goToPage("materia");
    if (name === "MOTLEY") goToPage("motley");
    if (name === "SHEER") goToPage("sheer");
    if (name === "SUPREME") goToPage("supreme");
    if (name === "IMPERIAL STONE") goToPage("imperial-stone");
    if (name === "SYBIL") goToPage("sybil");
    if (name === "PULPIS") goToPage("pulpis");
    if (name === "PIERRE VIVE") goToPage("pierre-vive");
    if (name === "RIVERSIDE") goToPage("riverside");
    if (name === "PALERMO") goToPage("palermo");
    if (name === "MAPIERRE") goToPage("mapierre");
    if (name === "KORA") goToPage("kora");
    if (name === "ARENARIA") goToPage("arenaria");
    if (name === "BARCELONA") goToPage("barcelona");
    if (name === "OH TAKE MOUNTAIN") goToPage("oh-take-mountain");
    if (name === "PORTLAND") goToPage("portland");
    if (name === "CHICAGO") goToPage("chicago");
    if (name === "ICON") goToPage("icon");
    if (name === "BELLEVUE") goToPage("bellevue");
    if (name === "ULISSE") goToPage("ulisse");
    if (name === "DRIPART") goToPage("dripart");
    if (name === "OXYD") goToPage("oxyd");
    if (name === "BELA") goToPage("bela");
    if (name === "KAIZEN") goToPage("kaizen");
    if (name === "RETINA") goToPage("retina");
    if (name === "JATOBA") goToPage("jatoba");
    if (name === "VERBIER") goToPage("verbier");
    if (name === "MOON CREAM") goToPage("moon-cream");
    if (name === "RIBERA") goToPage("ribera");
    if (name === "ERAWAN") goToPage("erawan");
    if (name === "MAJESTIC") goToPage("majestic");
    if (name === "JURUPA") goToPage("jurupa");
    if (name === "THE ROOM") goToPage("the-room");
    if (name === "BLOOM") goToPage("bloom");
    if (name === "GLIM GEMME") goToPage("glim-gemme");
    if (name === "OXIDE") goToPage("oxide");
    if (name === "WOOD FOG") goToPage("wood-fog");
    if (name === "UNIQUE") goToPage("unique");
    if (name === "BLUE ROMA") goToPage("blue-roma");
    if (name === "CANELA ROMA") goToPage("canela-roma");
    if (name === "NORDIC") goToPage("nordic");
    if (name === "FORM CEMENT") goToPage("form-cement");
    if (name === "MYCRO") goToPage("mycro");
    if (name === "CORALINA") goToPage("coralina");
    if (name === "CAEMENTUM") goToPage("caementum");
    if (name === "PAPIER") goToPage("papier");
    if (name === "JEWELS") goToPage("jewels");
    if (name === "ENGLISH STONE") goToPage("english-stone");
    if (name === "TAJ MAHAL") goToPage("taj-mahal");
    if (name === "TWEED STONE") goToPage("tweed-stone");
    if (name === "TIVOLI") goToPage("tivoli");
    if (name === "SEINE") goToPage("seine");
    if (name === "SANDSTONE") goToPage("sandstone");
    if (name === "MEMORY") goToPage("memory");
    if (name === "NATURE MOOD") goToPage("nature-mood");
    if (name === "GREEN TREES") goToPage("green-trees");
    if (name === "TROPICAL BLUE") goToPage("tropical-blue");
    if (name === "MATERIA CLASSICA") goToPage("materia-classica");
    if (name === "BORNEO") goToPage("borneo");
    if (name === "BOREALIS") goToPage("borealis");
    if (name === "ARTE") goToPage("arte");
    if (name === "DUAL") goToPage("dual");
    if (name === "MAINSTONE") goToPage("mainstone");
    if (name === "PRALINE") goToPage("praline");
    if (name === "SUBLIME") goToPage("sublime");
    if (name === "HOPE") goToPage("hope");
    if (name === "CRUISE") goToPage("cruise");
    if (name === "PIETRA ESSENZA") goToPage("pietra-essenza");
    if (name === "DUAL TRAVERTINE") goToPage("dual-travertine");
    if (name === "MATERA STONE") goToPage("matera-stone");
    if (name === "AVALLON") goToPage("avallon");
    if (name === "BAIKAL") goToPage("baikal");
    if (name === "SAVOY") goToPage("savoy");
    if (name === "DOT") goToPage("dot");
    if (name === "DHARA") goToPage("dhara");
    if (name === "OREGON") goToPage("oregon");
    if (name === "HALTON") goToPage("halton");
    if (name === "GULHI") goToPage("gulhi");
    if (name === "CALIZIA") goToPage("calizia");
    if (name === "HAUTEVILLE") goToPage("hauteville");
    if (name === "VINCI") goToPage("vinci");
    if (name === "CEMENT") goToPage("cement");
    if (name === "EMOTION") goToPage("emotion");
    if (name === "FLUID MULTICOLOR") goToPage("fluid-multicolor");
    if (name === "TATTOO") goToPage("tattoo");
    if (name === "CASSERO") goToPage("cassero");
    if (name === "COSMOPOLITAN") goToPage("cosmopolitan");
    if (name === "ARTIC") goToPage("artic");
    if (name === "ARKEN") goToPage("arken");
    if (name === "CUARZO RENO") goToPage("cuarzo-reno");
    if (name === "DISTRITO") goToPage("distrito");
    if (name === "INCISA") goToPage("incisa");
    if (name === "ONIX") goToPage("onix");
    if (name === "SILVERLINE") goToPage("silverline");
    if (name === "CIVIC") goToPage("civic");
    if (name === "BLANCO") goToPage("blanco");
    if (name === "COTTAGE") goToPage("cottage");
    if (name === "DUOMO") goToPage("duomo");
    if (name === "LUMINA STONE") goToPage("lumina-stone");
    if (name === "MICRA") goToPage("micra");
    if (name === "MITICA") goToPage("mitica");
    if (name === "OXO") goToPage("oxo");
    if (name === "SURFACE") goToPage("surface");
  }

  function renderPage(targetPage) {
    if (targetPage === "home") {
      return <IndexPage onOpenCollection={handleOpenCollection} />;
    }

    if (targetPage === "boutique") {
      return <Boutique onOpenCollection={handleOpenCollection} />;
    }

    if (targetPage === "lucena") return <Lucena />;
    if (targetPage === "dust") return <Dust />;
    if (targetPage === "elegance-pro") return <ElegancePro />;
    if (targetPage === "elysian") return <Elysian />;
    if (targetPage === "sinai-coem") return <SinaiCoem />;
    if (targetPage === "sinai-ktl") return <SinaiKtl />;
    if (targetPage === "glocal") return <Glocal />;
    if (targetPage === "materia") return <Materia />;
    if (targetPage === "sheer") return <Sheer />;
    if (targetPage === "motley") return <Motley />;
    if (targetPage === "supreme") return <Supreme />;
    if (targetPage === "imperial-stone") return <ImperialStone />;
    if (targetPage === "sybil") return <Sybil />;
    if (targetPage === "pulpis") return <Pulpis />;
    if (targetPage === "pierre-vive") return <PierreVive />;
    if (targetPage === "riverside") return <Riverside />;
    if (targetPage === "palermo") return <Palermo />;
    if (targetPage === "mapierre") return <Mapierre />;
    if (targetPage === "kora") return <Kora />;
    if (targetPage === "arenaria") return <Arenaria />;
    if (targetPage === "barcelona") return <Barcelona />;
    if (targetPage === "oh-take-mountain") return <OhTakeMountain />;
    if (targetPage === "portland") return <Portland />;
    if (targetPage === "chicago") return <Chicago />;
    if (targetPage === "icon") return <Icon />;
    if (targetPage === "bellevue") return <Bellevue />;
    if (targetPage === "ulisse") return <Ulisse />;
    if (targetPage === "dripart") return <Dripart />;
    if (targetPage === "oxyd") return <Oxyd />;
    if (targetPage === "bela") return <Bela />;
    if (targetPage === "kaizen") return <Kaizen />;
    if (targetPage === "retina") return <Retina />;
    if (targetPage === "jatoba") return <Jatoba />;
    if (targetPage === "verbier") return <Verbier />;
    if (targetPage === "moon-cream") return <MoonCream />;
    if (targetPage === "ribera") return <Ribera />;
    if (targetPage === "erawan") return <Erawan />;
    if (targetPage === "majestic") return <Majestic />;
    if (targetPage === "jurupa") return <Jurupa />;
    if (targetPage === "the-room") return <TheRoom />;
    if (targetPage === "bloom") return <Bloom />;
    if (targetPage === "glim-gemme") return <GlimGemme />;
    if (targetPage === "oxide") return <Oxide />;
    if (targetPage === "wood-fog") return <WoodFog />;
    if (targetPage === "unique") return <Unique />;
    if (targetPage === "blue-roma") return <BlueRoma />;
    if (targetPage === "canela-roma") return <CanelaRoma />;
    if (targetPage === "nordic") return <Nordic />;
    if (targetPage === "form-cement") return <FormCement />;
    if (targetPage === "mycro") return <Mycro />;
    if (targetPage === "coralina") return <Coralina />;
    if (targetPage === "caementum") return <Caementum />;
    if (targetPage === "papier") return <Papier />;
    if (targetPage === "jewels") return <Jewels />;
    if (targetPage === "english-stone") return <EnglishStone />;
    if (targetPage === "taj-mahal") return <TajMahal />;
    if (targetPage === "tweed-stone") return <TweedStone />;
    if (targetPage === "tivoli") return <Tivoli />;
    if (targetPage === "seine") return <Seine />;
    if (targetPage === "sandstone") return <Sandstone />;
    if (targetPage === "memory") return <Memory />;
    if (targetPage === "nature-mood") return <NatureMood />;
    if (targetPage === "green-trees") return <GreenTrees />;
    if (targetPage === "tropical-blue") return <TropicalBlue />;
    if (targetPage === "materia-classica") return <MateriaClassica />;
    if (targetPage === "borneo") return <Borneo />;
    if (targetPage === "borealis") return <Borealis />;
    if (targetPage === "arte") return <Arte />;
    if (targetPage === "dual") return <Dual />;
    if (targetPage === "mainstone") return <Mainstone />;
    if (targetPage === "praline") return <Praline />;
    if (targetPage === "sublime") return <Sublime />;
    if (targetPage === "hope") return <Hope />;
    if (targetPage === "cruise") return <Cruise />;
    if (targetPage === "pietra-essenza") return <PietraEssenza />;
    if (targetPage === "dual-travertine") return <DualTravertine />;
    if (targetPage === "matera-stone") return <MateraStone />;
    if (targetPage === "avallon") return <Avallon />;
    if (targetPage === "baikal") return <Baikal />;
    if (targetPage === "savoy") return <Savoy />;
    if (targetPage === "dot") return <Dot />;
    if (targetPage === "dhara") return <Dhara />;
    if (targetPage === "oregon") return <Oregon />;
    if (targetPage === "halton") return <Halton />;
    if (targetPage === "gulhi") return <Gulhi />;
    if (targetPage === "calizia") return <Calizia />;
    if (targetPage === "hauteville") return <Hauteville />;
    if (targetPage === "vinci") return <Vinci />;
    if (targetPage === "cement") return <Cement />;
    if (targetPage === "emotion") return <Emotion />;
    if (targetPage === "fluid-multicolor") return <FluidMulticolor />;
    if (targetPage === "tattoo") return <Tattoo />;
    if (targetPage === "cassero") return <Cassero />;
    if (targetPage === "cosmopolitan") return <Cosmopolitan />;
    if (targetPage === "artic") return <Artic />;
    if (targetPage === "arken") return <Arken />;
    if (targetPage === "cuarzo-reno") return <CuarzoReno />;
    if (targetPage === "distrito") return <Distrito />;
    if (targetPage === "incisa") return <Incisa />;
    if (targetPage === "onix") return <Onix />;
    if (targetPage === "silverline") return <Silverline />;
    if (targetPage === "civic") return <Civic />;
    if (targetPage === "blanco") return <Blanco />;
    if (targetPage === "cottage") return <Cottage />;
    if (targetPage === "duomo") return <Duomo />;
    if (targetPage === "lumina-stone") return <LuminaStone />;
    if (targetPage === "micra") return <Micra />;
    if (targetPage === "mitica") return <Mitica />;
    if (targetPage === "oxo") return <Oxo />;
    if (targetPage === "surface") return <Surface />;

    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {page !== "home" && previousPage && previousPage !== page && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            minHeight: "100vh",
          }}
        >
          {renderPage(previousPage)}
        </div>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          transform: `translateX(${swipeX}px)`,
          transition: isDraggingSwipe ? "none" : "transform 0.22s ease-out",
          willChange: "transform",
          boxShadow:
            swipeX > 0 ? "0 0 30px rgba(0, 0, 0, 0.12)" : "none",
        }}
      >
        {renderPage(page)}
      </div>
    </div>
  );
}

export default App;