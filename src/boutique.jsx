import { useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import dust01 from "./assets/imagenes/dust/dust-01.jpg";
import beck01 from "./assets/imagenes/beck/beck-01.jpg";
import brutalist01 from "./assets/imagenes/brutalist/brutalist-01.jpg";
import longStick01 from "./assets/imagenes/long-stick/long-stick-01.jpg";
import alma01 from "./assets/imagenes/alma/alma-01.jpg";
import alure01 from "./assets/imagenes/alure/alure-01.jpg";
import glint01 from "./assets/imagenes/glint/glint-01.jpg";
import argila01 from "./assets/imagenes/argila/argila-01.jpg";
import joy01 from "./assets/imagenes/joy/joy-01.jpg";
import provenza01 from "./assets/imagenes/provenza/provenza-01.jpg";
import riad01 from "./assets/imagenes/riad/riad-4x4/riad-4x4-01.jpg";
import zelij01 from "./assets/imagenes/zelij/zelij-4x4/zelij-4x4-01.jpg";
import zelijMate01 from "./assets/imagenes/zelij/zelij-mate/zelij-mate-4x4/zelij-mate-4x4-01.jpg";
import zelijSpecial01 from "./assets/imagenes/zelij/zelij-special/zelij-special-4x4/zelij-special-4x4-01.jpg";
import andrasy01 from "./assets/imagenes/andrassy/andrassy-01.jpg";
import beltri01 from "./assets/imagenes/beltri/beltri-01.jpg";
import blomknopp01 from "./assets/imagenes/blomknopp/blomknopp-01.jpg";
import bucareli01 from "./assets/imagenes/bucareli/bucareli-01.jpg";
import bulnes01 from "./assets/imagenes/bulnes/bulnes-01.jpg";
import cestio01 from "./assets/imagenes/cestio/cestio-01.jpg";
import comillas01 from "./assets/imagenes/comillas/comillas-01.jpg";
import creta01 from "./assets/imagenes/creta/creta-01.jpg";
import eliseos01 from "./assets/imagenes/eliseos/eliseos-01.jpg";
import florentina01 from "./assets/imagenes/florentina/florentina-01.jpg";
import gibert01 from "./assets/imagenes/gibert/gibert-01.jpg";
import goroka01 from "./assets/imagenes/goroka/goroka-01.jpg";
import intermix01 from "./assets/imagenes/intermix/intermix-01.jpg";
import jimbaran01 from "./assets/imagenes/jimbaran/jimbaran-01.jpg";
import jujol01 from "./assets/imagenes/jujol/jujol-01.jpg";
import linden01 from "./assets/imagenes/linden/linden-01.jpg";
import llagostera01 from "./assets/imagenes/llagostera/llagostera-01.jpg";
import lighthouse01 from "./assets/imagenes/lighthouse/lighthouse-01.jpg";
import macaya01 from "./assets/imagenes/macaya/macaya-01.jpg";
import norvins01 from "./assets/imagenes/norvins/norvins-01.jpg";
import nusa01 from "./assets/imagenes/nusa/nusa-01.jpg";
import orchard01 from "./assets/imagenes/orchard/orchard-01.jpg";
import organicClay01 from "./assets/imagenes/organic-clay/organic-clay-01.jpg";
import palau01 from "./assets/imagenes/palau/palau-01.jpg";
import suanzes01 from "./assets/imagenes/suanzes/suanzes-01.jpg";
import terralma01 from "./assets/imagenes/terralma/terralma-01.jpg";
import tuban01 from "./assets/imagenes/tuban/tuban-01.jpg";
import tulban01 from "./assets/imagenes/tulban/tulban-01.jpg";
import ubud01 from "./assets/imagenes/ubud/ubud-01.jpg";
import valvanera01 from "./assets/imagenes/valvanera/valvanera-01.jpg";
import vivant01 from "./assets/imagenes/vivant/vivant-01.jpg";


const cabinets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const boutiqueDrawers = {
  A1: [
    {
      name: "DUST",
      format: '2"x8"',
      brand: "ELIOS",
      locations: ["A1"],
      thumbnail: dust01,
    },
  ],
  A2: [
    {
      name: "BECK",
      format: '4"x4"',
      brand: "CIFRE",
      locations: ["A2"],
      thumbnail: beck01,
    },
    {
      name: "BRUTALIST",
      format: "2''X9''",
      brand: "AMADIS",
      locations: ["A2"],
      thumbnail: brutalist01,
    },
    {
      name: "LONG STICK",
      format: "1''X18''",
      brand: "AMADIS",
      locations: ["A2"],
      thumbnail: longStick01,
    },
  ],
    A3: [
    {
      name: "ALMA",
      format: "3''X8''",
      brand: "CIFRE",
      locations: ["A3"],
      thumbnail: alma01,
    },
    {
      name: "ALURE",
      format: "3''X8''",
      brand: "CIFRE",
      locations: ["A3"],
      thumbnail: alure01,
    },
    {
      name: "GLINT",
      format: "2''X6''",
      brand: "HARMONY",
      locations: ["A3"],
      thumbnail: glint01,
    },
  ],
    A4: [
    {
      name: "ARGILA",
      format: "4''X4''",
      brand: "LIFE CERAMICA",
      locations: ["A4"],
      thumbnail: argila01,
    },
    {
      name: "JOY",
      format: "4''X4''",
      brand: "LIFE CERAMICA",
      locations: ["A4"],
      thumbnail: joy01,
    },
    {
      name: "PROVENZA",
      format: '4"x4"',
      brand: "CEVICA",
      locations: ["A4"],
      thumbnail: provenza01,
    },
    {
      name: "RIAD",
      format: "4''X4''",
      brand: "HARMONY",
      locations: ["A4", "D3"],
      thumbnail: riad01,
    },
    {
      name: "ZELIJ",
      format: '4"x4"',
      brand: "HARMONY",
      locations: ["A4"],
      thumbnail: zelij01,
    },
    {
      name: "ZELIJ MATE",
      format: '4"x4"',
      brand: "CEVICA",
      locations: ["A4"],
      thumbnail: zelijMate01,
    },
    {
      name: "ZELIJ SPECIAL",
      format: '4"x4"',
      brand: "CEVICA",
      locations: ["A4"],
      thumbnail: zelijSpecial01,
    },
  ],

    A5: [
    {
      name: "ANDRASSY",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: andrasy01,
    },
    {
      name: "BELTRI",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: beltri01,
    },
    {
      name: "BLOMKNOPP",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: blomknopp01,
    },
    {
      name: "BUCARELI",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: bucareli01,
    },
    {
      name: "BULNES",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: bulnes01,
    },
    {
      name: "CESTIO",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: cestio01,
    },
    {
      name: "COMILLAS",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: comillas01,
    },
    {
      name: "CRETA",
      format: "2''X10''",
      brand: "PORTOBELLO",
      locations: ["A5", "F5"],
      thumbnail: creta01,
    },
    {
      name: "ELISEOS",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: eliseos01,
    },
    {
      name: "FLORENTINA",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: florentina01,
    },
    {
      name: "GIBERT",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: gibert01,
    },
    {
      name: "GOROKA",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: goroka01,
    },
     {
    name: "INTERMIX",
    format: "6''X6''",
    brand: "PORTOBELLO",
    locations: ["A5"],
    thumbnail: intermix01,
  },
  {
    name: "JIMBARAN",
    format: "8''x8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: jimbaran01,
  },
  {
    name: "JUJOL",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: jujol01,
  },
  {
    name: "LIGHTHOUSE",
    format: "2''X10''",
    brand: "PORTOBELLO",
    locations: ["A5"],
    thumbnail: lighthouse01,
  },
  {
    name: "LINDEN",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: linden01,
  },
  {
    name: "LLAGOSTERA",
    format: "8''x8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: llagostera01,
  },
  {
    name: "MACAYA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: macaya01,
  },
  {
    name: "NORVINS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: norvins01,
  },
  {
    name: "NUSA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: nusa01,
  },
  {
    name: "ORCHARD",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: orchard01,
  },
  {
  name: "ORGANIC CLAY",
  format: `2''X10''`,
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: organicClay01,
},
{
  name: "PALAU",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: palau01,
},
{
  name: "SUANZES",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5", "C5"],
  thumbnail: suanzes01,
},
{
  name: "TERRALMA",
  format: `3''X14''`,
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: terralma01,
},
{
  name: "TUBAN",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5", "C5", "F5"],
  thumbnail: tuban01,
},
{
  name: "TULBAN",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: tulban01,
},
{
  name: "UBUD",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: ubud01,
},
{
  name: "VALVANERA",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5", "F5"],
  thumbnail: valvanera01,
},
{
  name: "VIVANT",
  format: `3''X10''`,
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: vivant01,
},
],
    C5: [
    {
      name: "ANDRASSY",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: andrasy01,
    },
    {
      name: "BUCARELI",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: bucareli01,
    },
    {
      name: "ELISEOS",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: eliseos01,
    },
    C5: [
  {
    name: "ANDRASSY",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: andrasy01,
  },
  {
    name: "BUCARELI",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: bucareli01,
  },
  {
    name: "ELISEOS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: eliseos01,
  },
  {
    name: "SUANZES",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: suanzes01,
  },
  {
    name: "TUBAN",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5", "F5"],
    thumbnail: tuban01,
  },
],
  ],
    D3: [
    {
      name: "RIAD",
      format: "4''X4''",
      brand: "HARMONY",
      locations: ["A4", "D3"],
      thumbnail: riad01,
    },
  ],
    F5: [
    {
      name: "COMILLAS",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: comillas01,
    },
    {
      name: "CRETA",
      format: "2''X10''",
      brand: "PORTOBELLO",
      locations: ["A5", "F5"],
      thumbnail: creta01,
    },
    {
      name: "FLORENTINA",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: florentina01,
    },
    {
      name: "GIBERT",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: gibert01,
    },
    {
      name: "GOROKA",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: goroka01,
    },
    {
    name: "COMILLAS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: comillas01,
  },
  {
    name: "CRETA",
    format: "2''X10''",
    brand: "PORTOBELLO",
    locations: ["A5", "F5"],
    thumbnail: creta01,
  },
  {
    name: "FLORENTINA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: florentina01,
  },
  {
    name: "GIBERT",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: gibert01,
  },
  {
    name: "GOROKA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: goroka01,
  },
  {
    name: "LLAGOSTERA",
    format: "8''x8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: llagostera01,
  },
  F5: [
  {
    name: "COMILLAS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: comillas01,
  },
  {
    name: "CRETA",
    format: "2''X10''",
    brand: "PORTOBELLO",
    locations: ["A5", "F5"],
    thumbnail: creta01,
  },
  {
    name: "FLORENTINA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: florentina01,
  },
  {
    name: "GIBERT",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: gibert01,
  },
  {
    name: "GOROKA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: goroka01,
  },
  {
    name: "LLAGOSTERA",
    format: "8''x8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: llagostera01,
  },
  {
    name: "TUBAN",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5", "F5"],
    thumbnail: tuban01,
  },
  {
    name: "VALVANERA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: valvanera01,
  },
],


  ],
};

const boutiqueCollections = [
  {
    name: "DUST",
    format: '2"x8"',
    brand: "ELIOS",
    locations: ["A1"],
    thumbnail: dust01,
  },
  {
    name: "BECK",
    format: '4"x4"',
    brand: "CIFRE",
    locations: ["A2"],
    thumbnail: beck01,
  },
  {
    name: "BRUTALIST",
    format: "2''X9''",
    brand: "AMADIS",
    locations: ["A2"],
    thumbnail: brutalist01,
  },
  {
    name: "LONG STICK",
    format: "1''X18''",
    brand: "AMADIS",
    locations: ["A2"],
    thumbnail: longStick01,
  },
    {
    name: "ALMA",
    format: "3''X8''",
    brand: "CIFRE",
    locations: ["A3"],
    thumbnail: alma01,
  },
  {
    name: "ALURE",
    format: "3''X8''",
    brand: "CIFRE",
    locations: ["A3"],
    thumbnail: alure01,
  },
  {
    name: "GLINT",
    format: "2''X6''",
    brand: "HARMONY",
    locations: ["A3"],
    thumbnail: glint01,
  },
    {
    name: "ARGILA",
    format: "4''X4''",
    brand: "LIFE CERAMICA",
    locations: ["A4"],
    thumbnail: argila01,
  },
  {
    name: "JOY",
    format: "4''X4''",
    brand: "LIFE CERAMICA",
    locations: ["A4"],
    thumbnail: joy01,
  },
  {
    name: "PROVENZA",
    format: '4"x4"',
    brand: "CEVICA",
    locations: ["A4"],
    thumbnail: provenza01,
  },
  {
    name: "RIAD",
    format: "4''X4''",
    brand: "HARMONY",
    locations: ["A4", "D3"],
    thumbnail: riad01,
  },
  {
    name: "ZELIJ",
    format: '4"x4"',
    brand: "HARMONY",
    locations: ["A4"],
    thumbnail: zelij01,
  },
  {
    name: "ZELIJ MATE",
    format: '4"x4"',
    brand: "CEVICA",
    locations: ["A4"],
    thumbnail: zelijMate01,
  },
  {
    name: "ZELIJ SPECIAL",
    format: '4"x4"',
    brand: "CEVICA",
    locations: ["A4"],
    thumbnail: zelijSpecial01,
  },
    {
    name: "ANDRASSY",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: andrasy01,
  },
  {
    name: "BELTRI",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: beltri01,
  },
  {
    name: "BLOMKNOPP",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: blomknopp01,
  },
  {
    name: "BUCARELI",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: bucareli01,
  },
  {
    name: "BULNES",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: bulnes01,
  },
  {
    name: "CESTIO",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5"],
    thumbnail: cestio01,
  },
  {
    name: "COMILLAS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: comillas01,
  },
  {
    name: "CRETA",
    format: "2''X10''",
    brand: "PORTOBELLO",
    locations: ["A5", "F5"],
    thumbnail: creta01,
  },
  {
    name: "ELISEOS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: eliseos01,
  },
  {
    name: "FLORENTINA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: florentina01,
  },
  {
    name: "GIBERT",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: gibert01,
  },
  {
    name: "GOROKA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "F5"],
    thumbnail: goroka01,
  },
  {
  name: "INTERMIX",
  format: "6''X6''",
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: intermix01,
},
{
  name: "JIMBARAN",
  format: "8''x8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: jimbaran01,
},
{
  name: "JUJOL",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: jujol01,
},
{
  name: "LIGHTHOUSE",
  format: "2''X10''",
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: lighthouse01,
},
{
  name: "LINDEN",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: linden01,
},
{
  name: "LLAGOSTERA",
  format: "8''x8''",
  brand: "VIVES",
  locations: ["A5", "F5"],
  thumbnail: llagostera01,
},
{
  name: "MACAYA",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: macaya01,
},
{
  name: "NORVINS",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: norvins01,
},
{
  name: "NUSA",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: nusa01,
},
{
  name: "ORCHARD",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: orchard01,
},
{
  name: "ORGANIC CLAY",
  format: `2''X10''`,
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: organicClay01,
},
{
  name: "PALAU",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: palau01,
},
{
  name: "SUANZES",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5", "C5"],
  thumbnail: suanzes01,
},
{
  name: "TERRALMA",
  format: `3''X14''`,
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: terralma01,
},
{
  name: "TUBAN",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5", "C5", "F5"],
  thumbnail: tuban01,
},
{
  name: "TULBAN",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: tulban01,
},
{
  name: "UBUD",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5"],
  thumbnail: ubud01,
},
{
  name: "VALVANERA",
  format: `8''X8''`,
  brand: "VIVES",
  locations: ["A5", "F5"],
  thumbnail: valvanera01,
},
{
  name: "VIVANT",
  format: `3''X10''`,
  brand: "PORTOBELLO",
  locations: ["A5"],
  thumbnail: vivant01,
},
];

export function Boutique({ onOpenCollection }) {
  const [selectedCabinet, setSelectedCabinet] = useState(null);
  const [selectedDrawer, setSelectedDrawer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedCabinet = sessionStorage.getItem("boutiqueCabinet");
    const savedDrawer = sessionStorage.getItem("boutiqueDrawer");

    if (savedCabinet) {
      setSelectedCabinet(savedCabinet);
    }

    if (savedDrawer) {
      setSelectedDrawer(savedDrawer);
    }

    sessionStorage.removeItem("boutiqueCabinet");
    sessionStorage.removeItem("boutiqueDrawer");
  }, []);

  function handleSelectCabinet(letter) {
    if (selectedCabinet === letter) {
      setSelectedCabinet(null);
      setSelectedDrawer(null);
      return;
    }

    setSelectedCabinet(letter);
    setSelectedDrawer(null);
  }

  function handleSelectDrawer(drawer) {
    setSelectedDrawer((prev) => (prev === drawer ? null : drawer));
  }

  const visibleDrawers = selectedCabinet
    ? Array.from({ length: 10 }, (_, index) => `${selectedCabinet}${index + 1}`)
    : [];

  const drawerCollections = selectedDrawer
    ? boutiqueDrawers[selectedDrawer] || []
    : [];

  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toUpperCase();

    if (!term) return [];

    return boutiqueCollections.filter((collection) =>
      collection.name.includes(term)
    );
  }, [searchTerm]);

  return (
    <>
      <Header />

      <main>
        <h1 className="titulo-coleccion">BOUTIQUE AREA</h1>

        <section className="boutique-layout">
          <div className="boutique-left">
            <p className="boutique-section-label">BOUTIQUE</p>

            <div className="boutique-cabinets">
              {cabinets.map((cabinet) => (
                <button
                  key={cabinet}
                  type="button"
                  className={`boutique-pill ${
                    selectedCabinet === cabinet ? "is-active" : ""
                  }`}
                  onClick={() => handleSelectCabinet(cabinet)}
                >
                  {cabinet}
                </button>
              ))}
            </div>

            {selectedCabinet && (
              <div className="boutique-drawers-block">
                <div className="boutique-drawers">
                  {visibleDrawers.map((drawer) => (
                    <button
                      key={drawer}
                      type="button"
                      className={`boutique-pill boutique-pill--drawer ${
                        selectedDrawer === drawer ? "is-active" : ""
                      }`}
                      onClick={() => handleSelectDrawer(drawer)}
                    >
                      {drawer}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedDrawer && (
              <div className="boutique-results-block">
                <p className="boutique-subtitle">Drawer {selectedDrawer}</p>

                {drawerCollections.length > 0 ? (
                  <div className="boutique-cards">
                    {drawerCollections.map((collection) => (
                      <button
                        key={`${selectedDrawer}-${collection.name}`}
                        type="button"
                        className="boutique-card"
                        onClick={() => onOpenCollection?.(collection.name)}
                      >
                        <div className="boutique-card__image-wrap">
                          <img
                            src={collection.thumbnail}
                            alt={collection.name}
                            className="boutique-card__image"
                          />
                        </div>

                        <div className="boutique-card__content">
                          <h3 className="boutique-card__title">
                            {collection.name}
                          </h3>

                          <p className="boutique-card__meta">
                            {collection.format} · {collection.brand}
                          </p>

                          <p className="boutique-card__locations">
                            {collection.locations.join(" · ")}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="boutique-empty">
                    No collections assigned to this drawer yet.
                  </p>
                )}
              </div>
            )}
          </div>

          <aside className="boutique-right">
            <label htmlFor="boutique-search" className="boutique-search-label">
              SEARCH COLLECTION
            </label>

            <input
              id="boutique-search"
              type="search"
              className="boutique-search-input"
              placeholder="Search collection..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            {searchTerm.trim() !== "" && (
              <div className="boutique-search-results">
                {searchResults.length > 0 ? (
                  searchResults.map((collection) => (
                    <button
                      key={collection.name}
                      type="button"
                      className="boutique-card boutique-card--search"
                      onClick={() => onOpenCollection?.(collection.name)}
                    >
                      <div className="boutique-card__image-wrap">
                        <img
                          src={collection.thumbnail}
                          alt={collection.name}
                          className="boutique-card__image"
                        />
                      </div>

                      <div className="boutique-card__content">
                        <h3 className="boutique-card__title">
                          {collection.name}
                        </h3>

                        <p className="boutique-card__meta">
                          {collection.format} · {collection.brand}
                        </p>

                        <p className="boutique-card__locations">
                          {collection.locations.join(" · ")}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="boutique-empty">No matching collections found.</p>
                )}
              </div>
            )}
          </aside>
        </section>
      </main>
    </>
  );
}

export default Boutique;