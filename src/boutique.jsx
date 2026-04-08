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
import zelij01 from "./assets/imagenes/zelij/zelij-glossy/zelij-glossy-4x4/zelij-glossy-4x4-01.jpg";
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
import tears01 from "./assets/imagenes/tears/tears-01.jpg";
import terre01 from "./assets/imagenes/terre/terre-01.jpg";
import trame01 from "./assets/imagenes/trame-di-pietra/trame-di-pietra-01.jpg";
import blaze01 from "./assets/imagenes/blaze/blaze-01.jpg";
import sahn01 from "./assets/imagenes/sahn/sahn-4x4/sahn-4x4-01.jpg";
import zellige01 from "./assets/imagenes/zellige/zellige-01.jpg";
import bethel01 from "./assets/imagenes/bethel/bethel-01.jpg";
import bonnie01 from "./assets/imagenes/bonnie/bonnie-01.jpg";
import carnegie01 from "./assets/imagenes/carnegie/carnegie-01.jpg";
import cavern01 from "./assets/imagenes/cavern/cavern-01.jpg";
import ferus01 from "./assets/imagenes/ferus/ferus-01.jpg";
import fluxus01 from "./assets/imagenes/fluxus/fluxus-01.jpg";
import hisbalit01 from "./assets/imagenes/hisbalit/hisbalit-01.jpg";
import marquee01 from "./assets/imagenes/marquee/marquee-01.jpg";
import popart01 from "./assets/imagenes/popart/popart-01.jpg";
import saville01 from "./assets/imagenes/saville/saville-01.jpg";
import sixties01 from "./assets/imagenes/sixties/sixties-01.jpg";
import quecto01 from "./assets/imagenes/quecto/quecto-01.jpg";
import zepto01 from "./assets/imagenes/zepto/zepto-01.jpg";
import zelijGlossy2x801 from "./assets/imagenes/zelij/zelij-glossy/zelij-glossy-2x8/zelij-glossy-2x8-01.jpg";
import zelijMate2x801 from "./assets/imagenes/zelij/zelij-mate/zelij-mate-2x8/zelij-mate-2x8-01.jpg";
import zelijSpecial2x801 from "./assets/imagenes/zelij/zelij-special/zelij-special-2x8/zelij-special-2x8-01.jpg";
import lagoon01 from "./assets/imagenes/lagoon/lagoon-01.jpg";
import land01 from "./assets/imagenes/land/land-01.jpg";
import legacy3x1001 from "./assets/imagenes/legacy/legacy-3x10/legacy-3x10-01.jpg";
import rabat01 from "./assets/imagenes/rabat/rabat-01.jpg";
import rustic01 from "./assets/imagenes/rustic/rustic-01.jpg";
import jazba01 from "./assets/imagenes/jazba/jazba-01.jpg";
import glow01 from "./assets/imagenes/glow/glow-01.jpg";
import alaskaCevica01 from "./assets/imagenes/alaska-cevica/alaska-cevica-01.png";
import bali01 from "./assets/imagenes/bali-cerlat/bali-cerlat-01.jpg";
import gouache01 from "./assets/imagenes/gouache/gouache-01.jpg";
import habana01 from "./assets/imagenes/habana/habana-01.jpg";
import legacy6x601 from "./assets/imagenes/legacy/legacy-6x6/legacy-6x6-01.jpg";
import nexus01 from "./assets/imagenes/nexus/nexus-01.jpg";
import dyroy4x401 from "./assets/imagenes/dyroy/dyroy-4x4/dyroy-4x4-01.jpg";
import sahn3x801 from "./assets/imagenes/sahn/sahn-3x8/sahn-3x8-01.jpg";
import industrial01 from "./assets/imagenes/industrial/industrial-01.jpg";
import bari01 from "./assets/imagenes/bari/bari-01.jpg";
import scale01 from "./assets/imagenes/scale/scale-01.jpg";

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
      name: "ZELIJ GLOSSY",
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
      format: "2''X10''",
      brand: "PORTOBELLO",
      locations: ["A5"],
      thumbnail: organicClay01,
    },
    {
      name: "PALAU",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: palau01,
    },
    {
      name: "SUANZES",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5"],
      thumbnail: suanzes01,
    },
    {
      name: "TERRALMA",
      format: "3''X14''",
      brand: "PORTOBELLO",
      locations: ["A5"],
      thumbnail: terralma01,
    },
    {
      name: "TUBAN",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "C5", "F5"],
      thumbnail: tuban01,
    },
    {
      name: "TULBAN",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: tulban01,
    },
    {
      name: "UBUD",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5"],
      thumbnail: ubud01,
    },
    {
      name: "VALVANERA",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["A5", "F5"],
      thumbnail: valvanera01,
    },
    {
      name: "VIVANT",
      format: "3''X10''",
      brand: "PORTOBELLO",
      locations: ["A5"],
      thumbnail: vivant01,
    },
  ],
  A6: [
  {
    name: "TEARS",
    format: "5''X5''",
    brand: "LIFE",
    locations: ["A6"],
    thumbnail: tears01,
  },
],
A7: [
  {
    name: "TERRE",
    format: "2''X6''",
    brand: "CEVICA",
    locations: ["A7"],
    thumbnail: terre01,
  },
],
A8: [
  {
    name: "TRAME DI PIETRA",
    format: "3''X6''",
    brand: "TRAME DI PIETRA",
    locations: ["A8"],
    thumbnail: trame01,
  },
],
A9: [
  {
    name: "BLAZE",
    format: "4''X4''",
    brand: "CIFRE",
    locations: ["A9"],
    thumbnail: blaze01,
  },
  {
    name: "SAHN",
    format: "4''X4''",
    brand: "HARMONY",
    locations: ["A9", "B7"],
    thumbnail: sahn01,
  },
  {
    name: "ZELLIGE",
    format: "4''X4''",
    brand: "CIFRE",
    locations: ["A9"],
    thumbnail: zellige01,
  },
  ],
  A10: [
  {
    name: "BETHEL",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: bethel01,
  },
  {
    name: "BONNIE",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: bonnie01,
  },
  {
    name: "CARNEGIE",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: carnegie01,
  },
  {
    name: "CAVERN",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: cavern01,
  },
  {
    name: "FERUS",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: ferus01,
  },
  {
    name: "FLUXUS",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: fluxus01,
  },
  {
    name: "HISBALIT MOSAICO",
    format: "1''X1''",
    brand: "HISBALIT",
    locations: ["A10"],
    thumbnail: hisbalit01,
  },
  {
    name: "MARQUEE",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: marquee01,
  },
  {
    name: "POPART",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: popart01,
  },
  {
    name: "SAVILLE",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: saville01,
  },
  {
    name: "SIXTIES",
    format: "6''X6''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: sixties01,
  },
  {
    name: "QUECTO",
    format: "5''X5''",
    brand: "VIVES",
    locations: ["A10", "C4"],
    thumbnail: quecto01,
  },
  {
    name: "ZEPTO",
    format: "2''X5''",
    brand: "VIVES",
    locations: ["A10"],
    thumbnail: zepto01,
  },
],

B1: [
  {
    name: "ZELIJ GLOSSY 2x8",
    format: '2"x8"',
    brand: "CEVICA",
    locations: ["B1"],
    thumbnail: zelijGlossy2x801,
  },
  {
    name: "ZELIJ MATE 2x8",
    format: '2"x8"',
    brand: "CEVICA",
    locations: ["B1"],
    thumbnail: zelijMate2x801,
  },
  {
    name: "ZELIJ SPECIAL 2x8",
    format: '2"x8"',
    brand: "CEVICA",
    locations: ["B1"],
    thumbnail: zelijSpecial2x801,
  },
],
B2: [
  {
    name: "LAGOON",
    format: "3''x10''",
    brand: "HARMONY",
    locations: ["B2"],
    thumbnail: lagoon01,
  },
  {
    name: "LAND",
    format: "2x7",
    brand: "HARMONY",
    locations: ["B2"],
    thumbnail: land01,
  },
  {
    name: "LEGACY 3X10",
    format: "3x10",
    brand: "HARMONY",
    locations: ["B2"],
    thumbnail: legacy3x1001,
  },
  {
    name: "RABAT",
    format: "2x10",
    brand: "HARMONY",
    locations: ["B2"],
    thumbnail: rabat01,
  },
  {
    name: "RUSTIC",
    format: "2x20",
    brand: "CEVICA",
    locations: ["B2"],
    thumbnail: rustic01,
  },
],
B3: [
  {
    name: "JAZBA",
    format: "2x10",
    brand: "CIFRE",
    locations: ["B3"],
    thumbnail: jazba01,
  },
],

B4: [
  {
    name: "GLOW",
    format: "2x20",
    brand: "LIFE CERAMICA",
    locations: ["B4"],
    thumbnail: glow01,
  },
  {
    name: "ALASKA CEVICA",
    format: "3x12",
    brand: "CEVICA",
    locations: ["B4", "C8"],
    thumbnail: alaskaCevica01,
  },
],

B5: [
  {
    name: "BALI CERLAT",
    format: "6x6",
    brand: "CERLAT",
    locations: ["B5", "G5"],
    thumbnail: bali01,
  },
  {
    name: "GOUACHE",
    format: "6x6",
    brand: "PORTOBELLO",
    locations: ["B5"],
    thumbnail: gouache01,
  },
  {
    name: "HABANA",
    format: "8x8",
    brand: "CEVICA",
    locations: ["B5"],
    thumbnail: habana01,
  },
  {
    name: "LEGACY 6X6",
    format: "6x6",
    brand: "HARMONY",
    locations: ["B5"],
    thumbnail: legacy6x601,
  },
  {
    name: "NEXUS",
    format: "7x7",
    brand: "CERLAT",
    locations: ["B5"],
    thumbnail: nexus01,
  },
],
B6: [

  {
    name: "DYROY 4X4",
    format: "4X4",
    brand: "HARMONY",
    locations: ["B6"],
    thumbnail: dyroy4x401,
  },
],
B7: [
  {
    name: "SAHN",
    format: "4''X4''",
    brand: "HARMONY",
    locations: ["A9", "B7"],
    thumbnail: sahn01,
  },
  {
    name: "SAHN 3X8",
    format: "3X8",
    brand: "HARMONY",
    locations: ["B7"],
    thumbnail: sahn3x801,
  },
],
B8: [
  {
    name: "INDUSTRIAL",
    format: "3X12",
    brand: "CIFRE",
    locations: ["B8"],
    thumbnail: industrial01,
  },
],
B9: [
  {
    name: "BARI",
    format: "2X10",
    brand: "HARMONY",
    locations: ["B9"],
    thumbnail: bari01,
  },
],
B10: [
  {
    name: "SCALE",
    format: "4X5",
    brand: "LIFE CERAMICA",
    locations: ["B10"],
    thumbnail: scale01,
  },
],
C4: [
  {
    name: "QUECTO",
    format: "5''X5''",
    brand: "VIVES",
    locations: ["A10", "C4"],
    thumbnail: quecto01,
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

  C8: [
  {
    name: "ALASKA CEVICA",
    format: "3x12",
    brand: "CEVICA",
    locations: ["B4", "C8"],
    thumbnail: alaskaCevica01,
  },
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
  G5: [
  {
    name: "BALI CERLAT",
    format: "6x6",
    brand: "CERLAT",
    locations: ["B5", "G5"],
    thumbnail: bali01,
  },
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
{
  name: "TEARS",
  format: "5''X5''",
  brand: "LIFE",
  locations: ["A6"],
  thumbnail: tears01,
},
{
  name: "TERRE",
  format: "2''X6''",
  brand: "CEVICA",
  locations: ["A7"],
  thumbnail: terre01,
},
{
  name: "TRAME DI PIETRA",
  format: "3''X6''",
  brand: "TRAME DI PIETRA",
  locations: ["A8"],
  thumbnail: trame01,
},
{
  name: "BLAZE",
  format: "4''X4''",
  brand: "CIFRE",
  locations: ["A9"],
  thumbnail: blaze01,
},
{
  name: "SAHN",
  format: "4''X4''",
  brand: "HARMONY",
  locations: ["A9", "B7"],
  thumbnail: sahn01,
},
{
  name: "ZELLIGE",
  format: "4''X4''",
  brand: "CIFRE",
  locations: ["A9"],
  thumbnail: zellige01,
},
{
  name: "BETHEL",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: bethel01,
},
{
  name: "BONNIE",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: bonnie01,
},
{
  name: "CARNEGIE",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: carnegie01,
},
{
  name: "CAVERN",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: cavern01,
},
{
  name: "FERUS",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: ferus01,
},
{
  name: "FLUXUS",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: fluxus01,
},
{
  name: "HISBALIT MOSAICO",
  format: "1''X1''",
  brand: "HISBALIT",
  locations: ["A10"],
  thumbnail: hisbalit01,
},
{
  name: "MARQUEE",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: marquee01,
},
{
  name: "POPART",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: popart01,
},
{
  name: "SAVILLE",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: saville01,
},
{
  name: "SIXTIES",
  format: "6''X6''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: sixties01,
},
{
  name: "QUECTO",
  format: "5''X5''",
  brand: "VIVES",
  locations: ["A10", "C4"],
  thumbnail: quecto01,
},
{
  name: "ZEPTO",
  format: "2''X5''",
  brand: "VIVES",
  locations: ["A10"],
  thumbnail: zepto01,
  },
{
  name: "ZELIJ GLOSSY 2x8",
  format: '2"x8"',
  brand: "CEVICA",
  locations: ["B1"],
  thumbnail: zelijGlossy2x801,
},
{
  name: "ZELIJ MATE 2x8",
  format: '2"x8"',
  brand: "CEVICA",
  locations: ["B1"],
  thumbnail: zelijMate2x801,
},
{
  name: "ZELIJ SPECIAL 2x8",
  format: '2"x8"',
  brand: "CEVICA",
  locations: ["B1"],
  thumbnail: zelijSpecial2x801,
},
{
  name: "LAGOON",
  format: "3''x10''",
  brand: "HARMONY",
  locations: ["B2"],
  thumbnail: lagoon01,
},
{
  name: "LAND",
  format: "2x7",
  brand: "HARMONY",
  locations: ["B2"],
  thumbnail: land01,
},
{
  name: "LEGACY 3X10",
  format: "3x10",
  brand: "HARMONY",
  locations: ["B2"],
  thumbnail: legacy3x1001,
},
{
  name: "RABAT",
  format: "2x10",
  brand: "HARMONY",
  locations: ["B2"],
  thumbnail: rabat01,
},
{
  name: "RUSTIC",
  format: "2x20",
  brand: "CEVICA",
  locations: ["B2"],
  thumbnail: rustic01,
},
{
  name: "JAZBA",
  format: "2x10",
  brand: "CIFRE",
  locations: ["B3"],
  thumbnail: jazba01,
},
{
  name: "GLOW",
  format: "2x20",
  brand: "LIFE CERAMICA",
  locations: ["B4"],
  thumbnail: glow01,
},
{
  name: "ALASKA CEVICA",
  format: "3x12",
  brand: "CEVICA",
  locations: ["B4", "C8"],
  thumbnail: alaskaCevica01,
},
{
  name: "BALI CERLAT",
  format: "6x6",
  brand: "CERLAT",
  locations: ["B5", "G5"],
  thumbnail: bali01,
},
{
  name: "GOUACHE",
  format: "6x6",
  brand: "PORTOBELLO",
  locations: ["B5"],
  thumbnail: gouache01,
},
{
  name: "HABANA",
  format: "8x8",
  brand: "CEVICA",
  locations: ["B5"],
  thumbnail: habana01,
},
{
  name: "LEGACY 6X6",
  format: "6x6",
  brand: "HARMONY",
  locations: ["B5"],
  thumbnail: legacy6x601,
},
{
  name: "NEXUS",
  format: "7x7",
  brand: "CERLAT",
  locations: ["B5"],
  thumbnail: nexus01,
},

{
  name: "DYROY 4X4",
  format: "4X4",
  brand: "HARMONY",
  locations: ["B6"],
  thumbnail: dyroy4x401,
},
{
  name: "INDUSTRIAL",
  format: "3X12",
  brand: "CIFRE",
  locations: ["B8"],
  thumbnail: industrial01,
},
{
  name: "BARI",
  format: "2X10",
  brand: "HARMONY",
  locations: ["B9"],
  thumbnail: bari01,
},
{
  name: "SCALE",
  format: "4X5",
  brand: "LIFE CERAMICA",
  locations: ["B10"],
  thumbnail: scale01,
},
{
  name: "SAHN",
  format: "3X8",
  brand: "HARMONY",
  locations: ["B7"],
  thumbnail: sahn3x801,
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