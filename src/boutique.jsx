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
import dyroy3x801 from "./assets/imagenes/dyroy/dyroy-3x8/dyroy-3x8-1.jpg";
import antic01 from "./assets/imagenes/antic/antic/antic-2x6/antic-2x6-01.jpg";
import anticPastels01 from "./assets/imagenes/antic/antic-pastels/antic-pastels-2x6/antic-pastels-2x6-01.jpg";
import dreams01 from "./assets/imagenes/dreams/dreams-01.jpg";
import boom01 from "./assets/imagenes/boom/boom-01.jpg";
import goodVibes01 from "./assets/imagenes/good-vibes/good-vibes-01.jpg";
import manhattanHex01 from "./assets/imagenes/manhattan/manhattan-hex/manhattan-hex-01.jpg";
import panalBrocat01 from "./assets/imagenes/panal-brocat/panal-brocat-01.jpg";
import poitiers01 from "./assets/imagenes/poitiers/poitiers-01.jpg";
import guido01 from "./assets/imagenes/guido/guido-01.jpg";
import javea01 from "./assets/imagenes/javea/javea-01.jpg";
import lia01 from "./assets/imagenes/lia/lia-01.jpg";
import luca01 from "./assets/imagenes/luca/luca-01.jpg";
import pasadena01 from "./assets/imagenes/pasadena/pasadena-01.jpg";
import salou01 from "./assets/imagenes/salou/salou-01.jpg";
import tera01 from "./assets/imagenes/tera/tera-01.jpg";
import alameda01 from "./assets/imagenes/alameda/alameda-01.jpg";
import halvmane01 from "./assets/imagenes/halvmane/halvmane-01.jpg";
import juvel01 from "./assets/imagenes/juvel/juvel-01.jpg";
import tre01 from "./assets/imagenes/tre/tre-01.jpg";
import manhattanBrick01 from "./assets/imagenes/manhattan/manhattan-brick/manhattan-brick-01.jpg";
import amazon01 from "./assets/imagenes/amazon/amazon-01.jpg";
import brunei01 from "./assets/imagenes/brunei/brunei-01.jpg";
import boheme01 from "./assets/imagenes/boheme/boheme-01.jpg";
import capri01 from "./assets/imagenes/capri/capri-01.jpg";
import manila01 from "./assets/imagenes/manila/manila-01.jpg";
import onaHidra01 from "./assets/imagenes/ona-hidra/ona-hidra-01.jpg";
import popHidra01 from "./assets/imagenes/pop-hidra/pop-hidra-01.jpg";
import prisma01 from "./assets/imagenes/prisma/prisma-01.jpg";
import urban01 from "./assets/imagenes/urban/urban-01.jpg";
import intermatexSmall01 from "./assets/imagenes/intermatex/intermatex-small-mosaicos/intermatex-small-mosaicos-01.jpg";
import ona01 from "./assets/imagenes/ona/ona-01.jpg";
import bow01 from "./assets/imagenes/bow/bow-01.jpg";
import intermatexBig01 from "./assets/imagenes/intermatex/intermatex-big-mosaicos/intermatex-big-mosaicos-01.jpg";
import riad3x801 from "./assets/imagenes/riad/riad-3x8/riad-3x8-01.jpg";
import fold01 from "./assets/imagenes/fold/fold-01.jpg";
import antic5x501 from "./assets/imagenes/antic/antic/antic-5x5/antic-5x5-01.jpg";
import lins01 from "./assets/imagenes/lins/lins-01.jpg";
import moos01 from "./assets/imagenes/moos/moos-01.jpg";
import timeless01 from "./assets/imagenes/timeless/timeless-01.jpg";
import baliCifre01 from "./assets/imagenes/bali-cifre/bali-cifre-01.jpg";
import beach01 from "./assets/imagenes/beach/beach-01.jpg";
import keystone01 from "./assets/imagenes/keystone/keystone-01.jpg";
import myDesign01 from "./assets/imagenes/my-design/my-design-01.jpg";
import domus01 from "./assets/imagenes/domus/domus-01.jpg";
import glowElios01 from "./assets/imagenes/glow-elios/glow-elios-01.jpg";
import levels01 from "./assets/imagenes/levels/levels-01.jpg";
import moves01 from "./assets/imagenes/moves/moves-01.jpg";
import harmony01 from "./assets/imagenes/harmony/harmony-01.jpg";
import onixMosaics01 from "./assets/imagenes/onix-mosaics/onix-mosaics-01.jpg";
import brooklyn01 from "./assets/imagenes/brooklyn/brooklyn-01.jpg";
import brick01 from "./assets/imagenes/brick/brick-01.jpg";
import papierBoutique01 from "./assets/imagenes/papier-mirage/papier-01.jpg";
import pennyOnixMosaics01 from "./assets/imagenes/penny-onix-mosaics/penny-onix-mosaics-01.jpg";
import abacus01 from "./assets/imagenes/abacus/abacus-01.jpg";
import circle01 from "./assets/imagenes/circle/circle-01.jpg";
import chintz01 from "./assets/imagenes/chintz/chintz-01.jpg";
import becolors01 from "./assets/imagenes/becolors/becolors-01.jpg";
import newYork01 from "./assets/imagenes/new-york/new-york-01.jpg";
import calvet01 from "./assets/imagenes/calvet/calvet-01.jpg";
import playwood01 from "./assets/imagenes/playwood/playwood-01.jpg";
import alaskaLife01 from "./assets/imagenes/alaska-life/alaska-life-01.jpg";
import waves01 from "./assets/imagenes/waves/waves-01.jpg";
import complementtoBrilloLiso01 from "./assets/imagenes/complementto/complementto-brillo-liso/complementto-brillo-liso-01.jpg";
import complementtoMatteLiso01 from "./assets/imagenes/complementto/complementto-matte-liso/complementto-matte-liso-01.jpg";
import complementtoThroughbody01 from "./assets/imagenes/complementto/complementto-throughbody/complementto-throughbody-01.jpg";import boqueria01 from "./assets/imagenes/boqueria/boqueria-01.jpg";
import pedralbes01 from "./assets/imagenes/pedralbes/pedralbes-01.jpg";
import pigmento01 from "./assets/imagenes/pigmento/pigmento-01.jpg";
import afra01 from "./assets/imagenes/afra/afra-01.jpg";
import baliHexCerlat01 from "./assets/imagenes/bali-cerlat/bali-hex-cerlat/bali-hex-cerlat-01.jpg";
import baliVives01 from "./assets/imagenes/bali-vives/bali-vives-01.jpg";
import samira01 from "./assets/imagenes/samira/samira-01.jpg";
import samoa01 from "./assets/imagenes/samoa/samoa-01.jpg";
import retinaBoutique01 from "./assets/imagenes/retina/retina-boutique/retina-boutique-01.jpg";
import gracia01 from "./assets/imagenes/gracia/gracia-01.jpg";
import merce01 from "./assets/imagenes/merce/merce-01.jpg";
import hydraulicPatchwork01 from "./assets/imagenes/hydraulic-patchwork/hydraulic-patchwork-01.jpg";
import mentonBlue01 from "./assets/imagenes/menton-blue/menton-blue-01.jpg";
import moving01 from "./assets/imagenes/moving/moving-01.jpg";
import vanguard01 from "./assets/imagenes/vanguard/vanguard-01.jpg";
import venezia01 from "./assets/imagenes/venezia/venezia-01.jpg";
import brickedHandmade01 from "./assets/imagenes/bricked-handmade/bricked-handmade-01.jpg";
import chevronHandmade01 from "./assets/imagenes/chevron-handmade/chevron-handmade-01.jpg";
import cisele01 from "./assets/imagenes/cisele/cisele-01.jpg";
import subwayHandmade01 from "./assets/imagenes/subway-handmade/subway-handmade-01.jpg";
import zelligeHandmade01 from "./assets/imagenes/zellige-handmade/zellige-handmade-01.jpg";
import arabesqueHandmade01 from "./assets/imagenes/arabesque-handmade/arabesque-handmade-01.jpg";
import baseHandmade01 from "./assets/imagenes/base-handmade/base-handmade-01.jpg";
import essenzaHandmade01 from "./assets/imagenes/essenza-handmade/essenza-handmade-01.jpg";
import etnaHexagonal01 from "./assets/imagenes/etna-hexagonal/etna-hexagonal-01.jpg";
import maui01 from "./assets/imagenes/maui/maui-01.jpg";
import tempo01 from "./assets/imagenes/tempo/tempo-01.jpg";
import diamondHandmade01 from "./assets/imagenes/diamond-handmade/diamond-handmade-01.jpg";
import kiteHandmade01 from "./assets/imagenes/kite-handmade/kite-handmade-01.jpg";
import plage01 from "./assets/imagenes/plage/plage-01.jpg";
import glenbrook01 from "./assets/imagenes/glenbrook/glenbrook-01.jpg";
import santelmo01 from "./assets/imagenes/santelmo/santelmo-01.jpg";
import antique01 from "./assets/imagenes/antique/antique-01.jpg";
import barcelonaBoutique01 from "./assets/imagenes/barcelona-boutique/barcelona-boutique-01.jpg";
import jaipur01 from "./assets/imagenes/jaipur/jaipur-01.jpg";
import kanji01 from "./assets/imagenes/kanji/kanji-01.jpg";
import roku01 from "./assets/imagenes/roku/roku-01.jpg";
import sunrise01 from "./assets/imagenes/sunrise/sunrise-01.jpg";
import dAutoreEnzo01 from "./assets/imagenes/d_autore-enzo/d_autore-enzo-01.jpg";
import salsa01 from "./assets/imagenes/salsa/salsa-01.jpg";
import groovy01 from "./assets/imagenes/groovy/groovy-01.jpg";
import angle01 from "./assets/imagenes/angle/angle-01.jpg";
import arch01 from "./assets/imagenes/arch/arch-01.jpg";
import shallowRectan01 from "./assets/imagenes/shallow-rectan/shallow-rectan-01.jpg";
import shallowCuadrado01 from "./assets/imagenes/shallow-cuadrado/shallow-cuadrado-01.jpg";
import highbury01 from "./assets/imagenes/highbury/highbury-01.jpg";
import crayonFino01 from "./assets/imagenes/crayon-fino/crayon-fino-01.jpg";
import renaissanceFinoPino01 from "./assets/imagenes/renaissance-fino-pino/renaissance-fino-pino-01.jpg";
import tiraMattone01 from "./assets/imagenes/tira-mattone/tira-mattone-01.jpg";
import renaissanceFino01 from "./assets/imagenes/renaissance-fino/renaissance-fino-01.jpg";
import crispBoutique01 from "./assets/imagenes/crisp-boutique/crisp-boutique-01.jpg";
import osaka01 from "./assets/imagenes/osaka/osaka-01.jpg";
import kyoto01 from "./assets/imagenes/kyoto/kyoto-01.jpg";
import picos01 from "./assets/imagenes/picos/picos-01.jpg";
import surfBoutique01 from "./assets/imagenes/surf-boutique/surf-boutique-01.jpg";

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
      brand: "CEVICA",
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
    locations: ["A6", "D6"],
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
    name: "GLOW LIFE",
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
   {
    name: "DYROY 3X8",
    format: "3''X8''",
    brand: "HARMONY",
    locations: ["B6"],
    thumbnail: dyroy3x801,
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
C1: [
  {
    name: "ANTIC 2X6",
    format: "2''X6''",
    brand: "CEVICA",
    locations: ["C1"],
    thumbnail: antic01,
  },
  {
    name: "ANTIC PASTELS 2X6",
    format: "2''x6''",
    brand: "CEVICA",
    locations: ["C1"],
    thumbnail: anticPastels01,
  },
  {
    name: "DREAMS",
    format: "2''X6''",
    brand: "LIFE CERAMICA",
    locations: ["C1"],
    thumbnail: dreams01,
  },
],
C2: [
  {
    name: "BOOM",
    format: "5''X6''",
    brand: "CEVICA",
    locations: ["C2"],
    thumbnail: boom01,
  },
  {
    name: "GOOD VIBES",
    format: "5''x6''",
    brand: "CEVICA",
    locations: ["C2"],
    thumbnail: goodVibes01,
  },
  {
    name: "MANHATTAN HEX",
    format: "5''x6''",
    brand: "CEVICA",
    locations: ["C2", "C6"],
    thumbnail: manhattanHex01,
  },
  {
    name: "PANAL BROCAT",
    format: "6''x7''",
    brand: "NATUCER",
    locations: ["C2"],
    thumbnail: panalBrocat01,
  },
],
C3: [
  {
    name: "POITIERS",
    format: "2''X10'' y 3''X6''",
    brand: "HARMONY",
    locations: ["C3"],
    thumbnail: poitiers01,
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
  {
    name: "GUIDO",
    format: "3''X12''",
    brand: "VIVES",
    locations: ["C4"],
    thumbnail: guido01,
  },
  {
    name: "JAVEA",
    format: "3''X12''",
    brand: "VIVES",
    locations: ["C4"],
    thumbnail: javea01,
  },
  {
    name: "LIA",
    format: "3''X12''",
    brand: "VIVES",
    locations: ["C4"],
    thumbnail: lia01,
  },
  {
    name: "LUCA",
    format: "3''X12''",
    brand: "VIVES",
    locations: ["C4"],
    thumbnail: luca01,
  },
  {
    name: "PASADENA",
    format: "3''X10''",
    brand: "HARMONY",
    locations: ["C4"],
    thumbnail: pasadena01,
  },
  {
    name: "SALOU",
    format: "3''X12''",
    brand: "VIVES",
    locations: ["C4"],
    thumbnail: salou01,
  },
  {
    name: "TERA",
    format: "5''X5''",
    brand: "VIVES",
    locations: ["C4"],
    thumbnail: tera01,
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

  // NUEVAS
  {
    name: "ALAMEDA",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["C5"],
    thumbnail: alameda01,
  },
  {
    name: "BLOMKNOPP",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: blomknopp01,
  },
  {
    name: "BULNES",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["A5", "C5"],
    thumbnail: bulnes01,
  },
  {
    name: "HALVMANE",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["C5"],
    thumbnail: halvmane01,
  },
  {
    name: "JUVEL",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["C5"],
    thumbnail: juvel01,
  },
  {
    name: "TRE",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["C5"],
    thumbnail: tre01,
  },
],

C6: [
  {
    name: "MANHATTAN HEX",
    format: "5''x6''",
    brand: "CEVICA",
    locations: ["C2", "C6"],
    thumbnail: manhattanHex01,
  },
  {
    name: "MANHATTAN BRICK",
    format: "2''x20''",
    brand: "CEVICA",
    locations: ["C6"],
    thumbnail: manhattanBrick01,
  },
],

C7: [
  {
    name: "AMAZON",
    format: "2''X8''",
    brand: "CEVICA",
    locations: ["C7"],
    thumbnail: amazon01,
  },
  {
    name: "BRUNEI",
    format: "2''X10''",
    brand: "CERLAT",
    locations: ["C7", "H4"],
    thumbnail: brunei01,
  },
],
C9: [
  {
    name: "BOHEME",
    format: "2''X8''",
    brand: "CEVICA",
    locations: ["C9"],
    thumbnail: boheme01,
  },
],
C10: [
  {
    name: "CAPRI",
    format: "5''X5''",
    brand: "CIFRE",
    locations: ["C10"],
    thumbnail: capri01,
  },
  {
    name: "MANILA",
    format: "5''X5''",
    brand: "CIFRE",
    locations: ["C10"],
    thumbnail: manila01,
  },
  {
    name: "ONA HIDRA",
    format: "5''X5''",
    brand: "CIFRE",
    locations: ["C10"],
    thumbnail: onaHidra01,
  },
  {
    name: "POP HIDRA",
    format: "5''X5''",
    brand: "CIFRE",
    locations: ["C10"],
    thumbnail: popHidra01,
  },
  {
    name: "PRISMA",
    format: "5''X5''",
    brand: "CIFRE",
    locations: ["C10"],
    thumbnail: prisma01,
  },
  {
    name: "URBAN",
    format: "5''X5''",
    brand: "CIFRE",
    locations: ["C10"],
    thumbnail: urban01,
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

D1: [
   {
    name: "SURF MATT",
    format: "10''X14''",
    brand: "VIVES",
    locations: ["D1"],
    thumbnail: surfBoutique01,
  },

],

D2: [
  {
    name: "BOW",
    format: "6''X18''",
    brand: "HARMONY",
    locations: ["D2"],
    thumbnail: bow01,
  },
  {
    name: "INTERMATEX BIG MOSAICOS",
    format: "",
    brand: "INTERMATEX",
    locations: ["D2"],
    thumbnail: intermatexBig01,
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
  {
    name: "RIAD 3X8",
    format: "3''X8''",
    brand: "HARMONY",
    locations: ["D3"],
    thumbnail: riad3x801,
  },
],

D4: [
  {
    name: "FOLD",
    format: "6''X15''",
    brand: "HARMONY",
    locations: ["D4"],
    thumbnail: fold01,
  },
],

D5: [
  {
    name: "ANTIC 5''X5''",
    format: "5''x5''",
    brand: "CEVICA",
    locations: ["D5"],
    thumbnail: antic5x501,
  },
  {
    name: "LINS",
    format: "8''x8''",
    brand: "HARMONY",
    locations: ["D5"],
    thumbnail: lins01,
  },
],

D6: [
  {
    name: "TEARS",
    format: "5''X5''",
    brand: "LIFE",
    locations: ["A6", "D6"],
    thumbnail: tears01,
  },
],

D7: [
  {
    name: "MOOS",
    format: "5''x5''",
    brand: "CIFRE",
    locations: ["D7","H4"],
    thumbnail: moos01,
  },
],

D8: [
  {
    name: "TIMELESS",
    format: "3''X12''",
    brand: "CIFRE",
    locations: ["D8", "H3"],
    thumbnail: timeless01,
  },
],

D9: [
  {
    name: "BALI CIFRE",
    format: "6''x6''",
    brand: "CIFRE",
    locations: ["D9"],
    thumbnail: baliCifre01,
  },
  {
    name: "BEACH",
    format: "6''X6''",
    brand: "CIFRE",
    locations: ["D9"],
    thumbnail: beach01,
  },
  {
    name: "KEYSTONE",
    format: "6''X6''",
    brand: "CIFRE",
    locations: ["D9"],
    thumbnail: keystone01,
  },
],

D10: [
  {
    name: "MY DESIGN",
    format: "9''x9''",
    brand: "CERLAT",
    locations: ["D10"],
    thumbnail: myDesign01,
  },
],
E1: [
  {
    name: "DOMUS",
    format: "2''X18''",
    brand: "ELIOS",
    locations: ["E1"],
    thumbnail: domus01,
  },
  {
    name: "GLOW ELIOS",
    format: "2''X18''",
    brand: "ELIOS",
    locations: ["E1"],
    thumbnail: glowElios01,
  },
    {
    name: "CRAYON FINO",
    format: "2''X20''",
    brand: "NATUCER",
    locations: ["E1"],
    thumbnail: crayonFino01,
  },
],

E2: [
  {
    name: "LEVELS",
    format: "8''X16''",
    brand: "HARMONY",
    locations: ["E2"],
    thumbnail: levels01,
  },
  {
    name: "MOVES",
    format: "8''X16''",
    brand: "HARMONY",
    locations: ["E2"],
    thumbnail: moves01,
  },
],

E3: [
  {
    name: "GLENBROOK",
    format: "2''X8''",
    brand: "ESTUDIO CERAMICO",
    locations: ["E3"],
    thumbnail: glenbrook01,
  },
],

E4: [
  {
    name: "HARMONY",
    format: "8''X8''",
    brand: "CEVICA",
    locations: ["E4"],
    thumbnail: harmony01,
  },
],

E5: [
  {
    name: "ONIX MOSAICS",
    format: "1''X1'' & 2''X2''",
    brand: "ONIX MOSAICS",
    locations: ["E5", "E10"],
    thumbnail: onixMosaics01,
  },
],

E6: [
  {
    name: "BROOKLYN",
    format: "2''X10''",
    brand: "LIFE CERAMICA",
    locations: ["E6"],
    thumbnail: brooklyn01,
  },
],

E7: [
  {
    name: "BRICK",
    format: "1''X9''",
    brand: "LIFE CERAMICA",
    locations: ["E7"],
    thumbnail: brick01,
  },
],

E8: [
  {
    name: "PAPIER",
    format: "24''X48''",
    brand: "MIRAGE",
    locations: ["E8"],
    thumbnail: papierBoutique01,
  },
],

E9: [
  {
    name: "PENNY ONIX MOSAICS",
    format: "1''X1'' & 2''X2''",
    brand: "ONIX MOSAICS",
    locations: ["E9", "F10"],
    thumbnail: pennyOnixMosaics01,
  },
   {
    name: "INTERMATEX SMALL MOSAICOS",
    format: "",
    brand: "INTERMATEX",
    locations: ["E9"],
    thumbnail: intermatexSmall01,
  },
  {
    name: "ONA",
    format: "5''X18''",
    brand: "HARMONY",
    locations: ["E9"],
    thumbnail: ona01,
  },
],

E10: [
  {
    name: "ONIX MOSAICS",
    format: "1''X1'' & 2''X2''",
    brand: "ONIX MOSAICS",
    locations: ["E5", "E10"],
    thumbnail: onixMosaics01,
  },

],
F1: [
  {
    name: "ABACUS",
    format: "3''X8''",
    brand: "ERGON",
    locations: ["F1"],
    thumbnail: abacus01,
  },
 
],

F2: [
  {
    name: "CIRCLE",
    format: "12''X12''",
    brand: "REALONDA",
    locations: ["F2"],
    thumbnail: circle01,
  },
],

F3: [
  {
    name: "CHINTZ",
    format: "7''X8''",
    brand: "CEVICA",
    locations: ["F3"],
    thumbnail: chintz01,
  },
],

F4: [
  {
    name: "BECOLORS",
    format: "6''X6''",
    brand: "CEVICA",
    locations: ["F4", "F8", "F9"],
    thumbnail: becolors01,
  },
  {
    name: "NEW YORK",
    format: "6''x6''",
    brand: "CEVICA",
    locations: ["F4", "F8", "F9"],
    thumbnail: newYork01,
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
    {
      name: "CALVET",
      format: "8''X8''",
      brand: "VIVES",
      locations: ["F5"],
      thumbnail: calvet01,
    },
  ],
  F6: [
  {
    name: "PLAYWOOD",
    format: "2''X12''",
    brand: "EMIL",
    locations: ["F6"],
    thumbnail: playwood01,
  },
],

F7: [
  {
    name: "ALASKA LIFE",
    format: "2''X10''",
    brand: "LIFE CERAMICA",
    locations: ["F7"],
    thumbnail: alaskaLife01,
  },
],

F8: [
  {
    name: "BECOLORS",
    format: "6''X6''",
    brand: "CEVICA",
    locations: ["F4", "F8", "F9"],
    thumbnail: becolors01,
  },
  {
    name: "NEW YORK",
    format: "6''x6''",
    brand: "CEVICA",
    locations: ["F4", "F8", "F9"],
    thumbnail: newYork01,
  },
],

F9: [
  {
    name: "BECOLORS",
    format: "6''X6''",
    brand: "CEVICA",
    locations: ["F4", "F8", "F9"],
    thumbnail: becolors01,
  },
  {
    name: "NEW YORK",
    format: "6''x6''",
    brand: "CEVICA",
    locations: ["F4", "F8", "F9"],
    thumbnail: newYork01,
  },
],
  F10: [
  {
    name: "PENNY ONIX MOSAICS",
    format: "1''X1'' & 2''X2''",
    brand: "ONIX MOSAICS",
    locations: ["E9", "F10"],
    thumbnail: pennyOnixMosaics01,
  },
],
 G1: [
  {
    name: "WAVES",
    format: "5’’X18’’",
    brand: "CEVICA",
    locations: ["G1"],
    thumbnail: waves01,
  },
],

G2: [
  {
    name: "COMPLEMENTTO BRILLO LISO",
    format: "2''x6''",
    brand: "COMPLEMENTTO",
    locations: ["G2"],
    thumbnail: complementtoBrilloLiso01,
  },
],

G3: [
  {
    name: "COMPLEMENTTO MATTE LISO",
    format: "2''x6''",
    brand: "COMPLEMENTTO",
    locations: ["G3"],
    thumbnail: complementtoMatteLiso01,
  },
 {
  name: "COMPLEMENTTO THROUGHBODY",
  format: "4''x4''",
  brand: "COMPLEMENTTO",
  locations: ["G3"],
  thumbnail: complementtoThroughbody01,
},
],

G4: [
  {
    name: "BOQUERIA",
    format: "3''X12''",
    brand: "GRESPANIA",
    locations: ["G4"],
    thumbnail: boqueria01,
  },
  {
    name: "PEDRALBES",
    format: "3''X12''",
    brand: "GRESPANIA",
    locations: ["G4"],
    thumbnail: pedralbes01,
  },
  {
    name: "PIGMENTO",
    format: "3''X12''",
    brand: "GRESPANIA",
    locations: ["G4"],
    thumbnail: pigmento01,
  },
],

G5: [

   {
    name: "AFRA",
    format: "4''X4''",
    brand: "HARMONY",
    locations: ["G5"],
    thumbnail: afra01,
  },
  {
    name: "BALI CERLAT",
    format: "6x6",
    brand: "CERLAT",
    locations: ["B5", "G5"],
    thumbnail: bali01,
  },
 
  {
    name: "BALI HEX",
    format: "9''X9''",
    brand: "CERLAT",
    locations: ["G5"],
    thumbnail: baliHexCerlat01,
  },
  {
    name: "BALI VIVES",
    format: "6''x6''",
    brand: "CERLAT",
    locations: ["G5"],
    thumbnail: baliVives01,
  },
  {
    name: "SAMIRA",
    format: "4''X4''",
    brand: "HARMONY",
    locations: ["G5"],
    thumbnail: samira01,
  },
  {
    name: "SAMOA",
    format: "6''X6'' & 9''x9''",
    brand: "CERLAT",
    locations: ["G5"],
    thumbnail: samoa01,
  },
],

G6: [
  {
    name: "RETINA",
    format: "24''X24'', 24''X48'', 48''X48''...",
    brand: "IMOLA",
    locations: ["G6", "G7"],
    thumbnail: retinaBoutique01,
  },
],

G7: [
  {
    name: "RETINA",
    format: "24''X24'', 24''X48'', 48''X48''...",
    brand: "IMOLA",
    locations: ["G6", "G7"],
    thumbnail: retinaBoutique01,
  },
],

G8: [
  {
    name: "GRACIA",
    format: "3''x12''",
    brand: "GRESPANIA",
    locations: ["G8"],
    thumbnail: gracia01,
  },
],

G9: [
  {
    name: "MERCE",
    format: "3''X12''",
    brand: "GRESPANIA",
    locations: ["G9"],
    thumbnail: merce01,
  },
],

G10: [
  {
    name: "HYDRAULIC PATCHWORK",
    format: "12''x12''",
    brand: "APAVISA",
    locations: ["G10"],
    thumbnail: hydraulicPatchwork01,
  },
  {
    name: "MENTON BLUE",
    format: "10''x10''",
    brand: "CODICER",
    locations: ["G10"],
    thumbnail: mentonBlue01,
  },
  {
    name: "MOVING",
    format: "12''X12''",
    brand: "APARICI",
    locations: ["G10"],
    thumbnail: moving01,
  },
  {
    name: "VANGUARD",
    format: "12''X12''",
    brand: "APARICI",
    locations: ["G10"],
    thumbnail: vanguard01,
  },
  {
    name: "VENEZIA",
    format: "12''X12''",
    brand: "APARICI",
    locations: ["G10"],
    thumbnail: venezia01,
  },
],
H1: [
  {
    name: "BRICKED HANDMADE",
    format: "2''x11''",
    brand: "ALTERET",
    locations: ["H1"],
    thumbnail: brickedHandmade01,
  },
  {
    name: "CHEVRON HANDMADE",
    format: "2''X11''",
    brand: "ALTERET",
    locations: ["H1"],
    thumbnail: chevronHandmade01,
  },
  {
    name: "CISELÉ",
    format: "2''X6''",
    brand: "ALTERET",
    locations: ["H1"],
    thumbnail: cisele01,
  },
  {
    name: "SUBWAY HANDMADE",
    format: "3''X8''",
    brand: "ALTERET",
    locations: ["H1", "H6"],
    thumbnail: subwayHandmade01,
  },
  {
    name: "ZELLIGE HANDMADE",
    format: "4''X4''",
    brand: "ALTERET",
    locations: ["H1"],
    thumbnail: zelligeHandmade01,
  },
],
H2: [
  {
    name: "ARABESQUE HANDAMDE",
    format: "5''X6''",
    brand: "ALTERET",
    locations: ["H2"],
    thumbnail: arabesqueHandmade01,
  },
  {
    name: "BASE HANDMADE",
    format: "5''x5'' & 4''x8''",
    brand: "ALTERET",
    locations: ["H2"],
    thumbnail: baseHandmade01,
  },
  {
    name: "ESSENZA HANDMADE",
    format: "4''x9''",
    brand: "ALTERET",
    locations: ["H2"],
    thumbnail: essenzaHandmade01,
  },
  {
    name: "ETNA HEXAGONAL",
    format: "4''X5''",
    brand: "ALTERET",
    locations: ["H2"],
    thumbnail: etnaHexagonal01,
  },
],
H3: [
  {
    name: "TIMELESS",
    format: "3''X12''",
    brand: "CIFRE",
    locations: ["D8", "H3"],
    thumbnail: timeless01,
  },
],

H4: [
  {
    name: "BRUNEI",
    format: "2''X10''",
    brand: "CERLAT",
    locations: ["C7", "H4"],
    thumbnail: brunei01,
  },
  {
    name: "MAUI",
    format: "3''X10''",
    brand: "CERLAT",
    locations: ["H4", "H5"],
    thumbnail: maui01,
  },
  {
    name: "TEMPO",
    format: "3''X10''",
    brand: "CERLAT",
    locations: ["H4"],
    thumbnail: tempo01,
  },
  {
    name: "MOOS",
    format: "5''x5''",
    brand: "CIFRE",
    locations: ["D7", "H4"],
    thumbnail: moos01,
  },
],

H5: [
  {
    name: "MAUI",
    format: "3''X10''",
    brand: "CERLAT",
    locations: ["H4", "H5"],
    thumbnail: maui01,
  },

],

H6: [
  {
    name: "SUBWAY HANDMADE",
    format: "3''X8''",
    brand: "ALTERET",
    locations: ["H1", "H6"],
    thumbnail: subwayHandmade01,
  },
],

H7: [
  {
    name: "DIAMOND HANDMADE",
    format: "3''X5''",
    brand: "ALTERET",
    locations: ["H7"],
    thumbnail: diamondHandmade01,
  },
  {
    name: "KITE HANDMADE",
    format: "5''X9''",
    brand: "ALTERET",
    locations: ["H7"],
    thumbnail: kiteHandmade01,
  },
  {
    name: "PLAGE HANDMADE",
    format: "2''X8''",
    brand: "ALTERET",
    locations: ["H7"],
    thumbnail: plage01,
  },
],

H9: [
  {
    name: "SANTELMO",
    format: "3''X8''",
    brand: "GRESPANIA",
    locations: ["H9"],
    thumbnail: santelmo01,
  },
],

H10: [
  {
    name: "ANTIQUE",
    format: "6''X6''",
    brand: "ESTUDIO CERAMICO",
    locations: ["H10"],
    thumbnail: antique01,
  },
  {
    name: "BARCELONA BOUTIQUE",
    format: "6''X6''",
    brand: "ESTUDIO CERAMICO",
    locations: ["H10"],
    thumbnail: barcelonaBoutique01,
  },
],

I1: [
  {
    name: "JAIPUR",
    format: `5''X9''`,
    brand: "ESTUDIO CERAMICO",
    locations: ["I1"],
    thumbnail: jaipur01,
  },
  {
    name: "KANJI",
    format: `5''X8''`,
    brand: "ESTUDIO CERAMICO",
    locations: ["I1"],
    thumbnail: kanji01,
  },
  {
    name: "ROKU",
    format: `5''X9''`,
    brand: "ESTUDIO CERAMICO",
    locations: ["I1"],
    thumbnail: roku01,
  },
],

I2: [
  {
    name: "SUNRISE",
    format: `3''X10''`,
    brand: "NATUCER",
    locations: ["I2"],
    thumbnail: sunrise01,
  },
],

I3: [
  {
    name: "D'AUTORE ENZO",
    format: `5''X5''`,
    brand: "NATUCER",
    locations: ["I3"],
    thumbnail: dAutoreEnzo01,
  },
],

I4: [
  {
    name: "SALSA",
    format: `4''X18''`,
    brand: "NATUCER",
    locations: ["I4"],
    thumbnail: salsa01,
  },
],

I5: [
  {
    name: "GROOVY",
    format: `8''X8''`,
    brand: "CEVICA",
    locations: ["I5"],
    thumbnail: groovy01,
  },
],

I6: [
  {
    name: "ANGLE",
    format: `5''X12''`,
    brand: "NATUCER",
    locations: ["I6"],
    thumbnail: angle01,
  },
],

I7: [
  {
    name: "ARCH",
    format: `5''X12''`,
    brand: "NATUCER",
    locations: ["I7"],
    thumbnail: arch01,
  },
],

I8: [
  {
    name: "SHALLOW RECTAN",
    format: `2''X9''`,
    brand: "ESTUDIO CERAMICO",
    locations: ["I8"],
    thumbnail: shallowRectan01,
  },
],

I9: [
  {
    name: "SHALLOW CUADRADO",
    format: `6''X6''`,
    brand: "ESTUDIO CERAMICO",
    locations: ["I9"],
    thumbnail: shallowCuadrado01,
  },
],

I10: [
  {
    name: "HIGHBURY",
    format: `6''X6''`,
    brand: "ESTUDIO CERAMICO",
    locations: ["I10"],
    thumbnail: highbury01,
  },
],
J1: [
    {
    name: "SURF GLOSSY",
    format: "10''X14''",
    brand: "VIVES",
    locations: ["J1"],
    thumbnail: surfBoutique01,
  },
  
],

J2: [
  {
    name: "RENAISSANCE PILLOW FINO",
    format: "2''X10''",
    brand: "NATUCER",
    locations: ["J2"],
    thumbnail: renaissanceFinoPino01,
  },
  {
    name: "TIRA MATTONE",
    format: "2''X10''",
    brand: "NATUCER",
    locations: ["J2", "J6"],
    thumbnail: tiraMattone01,
  },
],

J3: [
  {
    name: "RENAISSANCE FINO",
    format: "2''X20''",
    brand: "NATUCER",
    locations: ["J3"],
    thumbnail: renaissanceFino01,
  },
  {
    name: "CRISP BOUTIQUE",
    format: "8''X8''",
    brand: "HARMONY",
    locations: ["J3"],
    thumbnail: crispBoutique01,
  },
],

J4: [
  {
    name: "OSAKA",
    format: "5''X5''",
    brand: "NATUCER",
    locations: ["J4"],
    thumbnail: osaka01,
  },
],

J6: [
  {
    name: "TIRA MATTONE",
    format: "2''X10''",
    brand: "NATUCER",
    locations: ["J2", "J6"],
    thumbnail: tiraMattone01,
  },
],
J5: [
  {
    name: "KYOTO",
    format: "5''X5''",
    brand: "NATUCER",
    locations: ["J5"],
    thumbnail: kyoto01,
  },
],

J7: [
  {
    name: "ARCH",
    format: "5''X12''",
    brand: "NATUCER",
    locations: ["I7", "J7"],
    thumbnail: arch01,
  },
],

J8: [
  {
    name: "CASABLANCA",
    format: "2''X6''",
    brand: "LUNGARNO CERAMICS",
    locations: ["J8"],
    thumbnail: null,
  },
  {
    name: "MIDMOD MOSAICS",
    format: "1''X1''",
    brand: "LUNGARNO CERAMICS",
    locations: ["J8"],
    thumbnail: null,
  },
],
J9: [
  {
    name: "ZELLIGE-LUNGARNO",
    format: "",
    brand: "LUNGARNO CERAMICS",
    locations: ["J9"],
    thumbnail: null,
  },
],

J10: [
  {
    name: "PICOS",
    format: "8''X8''",
    brand: "VIVES",
    locations: ["J10"],
    thumbnail: picos01,
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
    brand: "CEVICA",
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
  name: "GLOW LIFE",
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
  name: "DYROY 3X8",
  format: "3''X8''",
  brand: "HARMONY",
  locations: ["B6"],
  thumbnail: dyroy3x801,
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
{
  name: "ANTIC 2X6",
  format: "2''X6''",
  brand: "CEVICA",
  locations: ["C1"],
  thumbnail: antic01,
},
{
  name: "ANTIC PASTELS 2X6",
  format: "2''x6''",
  brand: "CEVICA",
  locations: ["C1"],
  thumbnail: anticPastels01,
},
{
  name: "DREAMS",
  format: "2''X6''",
  brand: "LIFE CERAMICA",
  locations: ["C1"],
  thumbnail: dreams01,
},
{
  name: "BOOM",
  format: "5''X6''",
  brand: "CEVICA",
  locations: ["C2"],
  thumbnail: boom01,
},
{
  name: "GOOD VIBES",
  format: "5''x6''",
  brand: "CEVICA",
  locations: ["C2"],
  thumbnail: goodVibes01,
},
{
  name: "MANHATTAN HEX",
  format: "5''x6''",
  brand: "CEVICA",
  locations: ["C2", "C6"],
  thumbnail: manhattanHex01,
},
{
  name: "PANAL BROCAT",
  format: "6''x7''",
  brand: "NATUCER",
  locations: ["C2"],
  thumbnail: panalBrocat01,
},
{
  name: "POITIERS",
  format: "2''X10'' & 3''X6''",
  brand: "HARMONY",
  locations: ["C3"],
  thumbnail: poitiers01,
},
{
  name: "GUIDO",
  format: "3''X12''",
  brand: "VIVES",
  locations: ["C4"],
  thumbnail: guido01,
},
{
  name: "JAVEA",
  format: "3''X12''",
  brand: "VIVES",
  locations: ["C4"],
  thumbnail: javea01,
},
{
  name: "LIA",
  format: "3''X12''",
  brand: "VIVES",
  locations: ["C4"],
  thumbnail: lia01,
},
{
  name: "LUCA",
  format: "3''X12''",
  brand: "VIVES",
  locations: ["C4"],
  thumbnail: luca01,
},
{
  name: "PASADENA",
  format: "3''X10''",
  brand: "HARMONY",
  locations: ["C4"],
  thumbnail: pasadena01,
},
{
  name: "SALOU",
  format: "3''X12''",
  brand: "VIVES",
  locations: ["C4"],
  thumbnail: salou01,
},
{
  name: "TERA",
  format: "5''X5''",
  brand: "VIVES",
  locations: ["C4"],
  thumbnail: tera01,
},
{
  name: "ALAMEDA",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["C5"],
  thumbnail: alameda01,
},
{
  name: "BLOMKNOPP",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5", "C5"],
  thumbnail: blomknopp01,
},
{
  name: "BULNES",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["A5", "C5"],
  thumbnail: bulnes01,
},
{
  name: "HALVMANE",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["C5"],
  thumbnail: halvmane01,
},
{
  name: "JUVEL",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["C5"],
  thumbnail: juvel01,
},
{
  name: "TRE",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["C5"],
  thumbnail: tre01,
},
{
  name: "MANHATTAN BRICK",
  format: "2''x20''",
  brand: "CEVICA",
  locations: ["C6"],
  thumbnail: manhattanBrick01,
},
{
  name: "AMAZON",
  format: "2''X8''",
  brand: "CEVICA",
  locations: ["C7"],
  thumbnail: amazon01,
},
{
  name: "BRUNEI",
  format: "2''X10''",
  brand: "CERLAT",
  locations: ["C7", "H4"],
  thumbnail: brunei01,
},
{
  name: "BOHEME",
  format: "2''X8''",
  brand: "CEVICA",
  locations: ["C9"],
  thumbnail: boheme01,
},
{
  name: "CAPRI",
  format: "5''X5''",
  brand: "CIFRE",
  locations: ["C10"],
  thumbnail: capri01,
},
{
  name: "MANILA",
  format: "5''X5''",
  brand: "CIFRE",
  locations: ["C10"],
  thumbnail: manila01,
},
{
  name: "ONA HIDRA",
  format: "5''X5''",
  brand: "CIFRE",
  locations: ["C10"],
  thumbnail: onaHidra01,
},
{
  name: "POP HIDRA",
  format: "5''X5''",
  brand: "CIFRE",
  locations: ["C10"],
  thumbnail: popHidra01,
},
{
  name: "PRISMA",
  format: "5''X5''",
  brand: "CIFRE",
  locations: ["C10"],
  thumbnail: prisma01,
},
{
  name: "URBAN",
  format: "5''X5''",
  brand: "CIFRE",
  locations: ["C10"],
  thumbnail: urban01,
},
{
  name: "TEARS",
  format: "5''X5''",
  brand: "LIFE",
  locations: ["A6", "D6"],
  thumbnail: tears01,
},
{
  name: "INTERMATEX SMALL MOSAICOS",
  format: "",
  brand: "INTERMATEX",
  locations: ["E9"],
  thumbnail: intermatexSmall01,
},
{
  name: "ONA",
  format: "5''X18''",
  brand: "HARMONY",
  locations: ["E9"],
  thumbnail: ona01,
},
{
  name: "BOW",
  format: "6''X18''",
  brand: "HARMONY",
  locations: ["D2"],
  thumbnail: bow01,
},
{
  name: "INTERMATEX BIG MOSAICOS",
  format: "",
  brand: "INTERMATEX",
  locations: ["D2"],
  thumbnail: intermatexBig01,
},
{
  name: "FOLD",
  format: "6''X15''",
  brand: "HARMONY",
  locations: ["D4"],
  thumbnail: fold01,
},
{
  name: "ANTIC 5''X5''",
  format: "5''x5''",
  brand: "CEVICA",
  locations: ["D5"],
  thumbnail: antic5x501,
},
{
  name: "LINS",
  format: "8''x8''",
  brand: "HARMONY",
  locations: ["D5"],
  thumbnail: lins01,
},
{
  name: "MOOS",
  format: "5''x5''",
  brand: "CIFRE",
  locations: ["D7", "H4"],
  thumbnail: moos01,
},
{
  name: "TIMELESS",
  format: "3''X12''",
  brand: "CIFRE",
  locations: ["D8", "H3"],
  thumbnail: timeless01,
},
{
  name: "BALI CIFRE",
  format: "6''x6''",
  brand: "CIFRE",
  locations: ["D9"],
  thumbnail: baliCifre01,
},
{
  name: "BEACH",
  format: "6''X6''",
  brand: "CIFRE",
  locations: ["D9"],
  thumbnail: beach01,
},
{
  name: "KEYSTONE",
  format: "6''X6''",
  brand: "CIFRE",
  locations: ["D9"],
  thumbnail: keystone01,
},
{
  name: "MY DESIGN",
  format: "9''x9''",
  brand: "CERLAT",
  locations: ["D10"],
  thumbnail: myDesign01,
},
{
  name: "RIAD 3X8",
  format: "3''X8''",
  brand: "HARMONY",
  locations: ["D3"],
  thumbnail: riad3x801,
},
{
  name: "DOMUS",
  format: "2''X18''",
  brand: "ELIOS",
  locations: ["E1"],
  thumbnail: domus01,
},
{
  name: "GLOW ELIOS",
  format: "2''X18''",
  brand: "ELIOS",
  locations: ["E1"],
  thumbnail: glowElios01,
},
{
  name: "LEVELS",
  format: "8''X16''",
  brand: "HARMONY",
  locations: ["E2"],
  thumbnail: levels01,
},
{
  name: "MOVES",
  format: "8''X16''",
  brand: "HARMONY",
  locations: ["E2"],
  thumbnail: moves01,
},
{
  name: "HARMONY",
  format: "8''X8''",
  brand: "CEVICA",
  locations: ["E4"],
  thumbnail: harmony01,
},
{
  name: "ONIX MOSAICS",
  format: "1''X1'' & 2''X2''",
  brand: "ONIX MOSAICS",
  locations: ["E5", "E10"],
  thumbnail: onixMosaics01,
},
{
  name: "BROOKLYN",
  format: "2''X10''",
  brand: "LIFE CERAMICA",
  locations: ["E6"],
  thumbnail: brooklyn01,
},
{
  name: "BRICK",
  format: "1''X9''",
  brand: "LIFE CERAMICA",
  locations: ["E7"],
  thumbnail: brick01,
},
{
  name: "PAPIER",
  format: "24''X48''",
  brand: "MIRAGE",
  locations: ["E8"],
  thumbnail: papierBoutique01,
},
{
  name: "PENNY ONIX MOSAICS",
  format: "1''X1'' & 2''X2''",
  brand: "ONIX MOSAICS",
  locations: ["E9", "F10"],
  thumbnail: pennyOnixMosaics01,
},
{
  name: "ABACUS",
  format: "3''X8''",
  brand: "ERGON",
  locations: ["F1"],
  thumbnail: abacus01,
},

{
  name: "CIRCLE",
  format: "12''X12''",
  brand: "REALONDA",
  locations: ["F2"],
  thumbnail: circle01,
},
{
  name: "CHINTZ",
  format: "7''X8''",
  brand: "CEVICA",
  locations: ["F3"],
  thumbnail: chintz01,
},
{
  name: "BECOLORS",
  format: "6''X6''",
  brand: "CEVICA",
  locations: ["F4", "F8", "F9"],
  thumbnail: becolors01,
},
{
  name: "NEW YORK",
  format: "6''x6''",
  brand: "CEVICA",
  locations: ["F4", "F8", "F9"],
  thumbnail: newYork01,
},
{
  name: "CALVET",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["F5"],
  thumbnail: calvet01,
},
{
  name: "PLAYWOOD",
  format: "2''X12''",
  brand: "EMIL",
  locations: ["F6"],
  thumbnail: playwood01,
},
{
  name: "ALASKA LIFE",
  format: "2''X10''",
  brand: "LIFE CERAMICA",
  locations: ["F7"],
  thumbnail: alaskaLife01,
},
{
  name: "WAVES",
  format: "5’’X18’’",
  brand: "CEVICA",
  locations: ["G1"],
  thumbnail: waves01,
},
{
  name: "COMPLEMENTTO BRILLO LISO",
  format: "2''x6''",
  brand: "COMPLEMENTTO",
  locations: ["G2"],
  thumbnail: complementtoBrilloLiso01,
},
{
  name: "COMPLEMENTTO MATTE LISO",
  format: "2''x6''",
  brand: "COMPLEMENTTO",
  locations: ["G3"],
  thumbnail: complementtoMatteLiso01,
},
{
  name: "COMPLEMENTTO THROUGHBODY",
  format: "4''x4''",
  brand: "COMPLEMENTTO",
  locations: ["G3"],
  thumbnail: complementtoThroughbody01,
},
{
  name: "BOQUERIA",
  format: "3''X12''",
  brand: "GRESPANIA",
  locations: ["G4"],
  thumbnail: boqueria01,
},
{
  name: "PEDRALBES",
  format: "3''X12''",
  brand: "GRESPANIA",
  locations: ["G4"],
  thumbnail: pedralbes01,
},
{
  name: "PIGMENTO",
  format: "3''X12''",
  brand: "GRESPANIA",
  locations: ["G4"],
  thumbnail: pigmento01,
},
{
  name: "AFRA",
  format: "4''X4''",
  brand: "HARMONY",
  locations: ["G5"],
  thumbnail: afra01,
},
{
  name: "BALI HEX",
  format: "9''X9''",
  brand: "CERLAT",
  locations: ["G5"],
  thumbnail: baliHexCerlat01,
},
{
  name: "BALI VIVES",
  format: "6''x6''",
  brand: "CERLAT",
  locations: ["G5"],
  thumbnail: baliVives01,
},
{
  name: "SAMIRA",
  format: "4''X4''",
  brand: "HARMONY",
  locations: ["G5"],
  thumbnail: samira01,
},
{
  name: "SAMOA",
  format: "6''X6'' & 9''x9''",
  brand: "CERLAT",
  locations: ["G5"],
  thumbnail: samoa01,
},
{
  name: "RETINA",
  format: "24''X24'', 24''X48'', 48''X48''...",
  brand: "IMOLA",
  locations: ["G6", "G7"],
  thumbnail: retinaBoutique01,
},
{
  name: "GRACIA",
  format: "3''x12''",
  brand: "GRESPANIA",
  locations: ["G8"],
  thumbnail: gracia01,
},
{
  name: "MERCE",
  format: "3''X12''",
  brand: "GRESPANIA",
  locations: ["G9"],
  thumbnail: merce01,
},
{
  name: "HYDRAULIC PATCHWORK",
  format: "12''x12''",
  brand: "APAVISA",
  locations: ["G10"],
  thumbnail: hydraulicPatchwork01,
},
{
  name: "MENTON BLUE",
  format: "10''x10''",
  brand: "CODICER",
  locations: ["G10"],
  thumbnail: mentonBlue01,
},
{
  name: "MOVING",
  format: "12''X12''",
  brand: "APARICI",
  locations: ["G10"],
  thumbnail: moving01,
},
{
  name: "VANGUARD",
  format: "12''X12''",
  brand: "APARICI",
  locations: ["G10"],
  thumbnail: vanguard01,
},
{
  name: "VENEZIA",
  format: "12''X12''",
  brand: "APARICI",
  locations: ["G10"],
  thumbnail: venezia01,
},
{
  name: "BRICKED HANDMADE",
  format: "2''x11''",
  brand: "ALTERET",
  locations: ["H1"],
  thumbnail: brickedHandmade01,
},

{
  name: "CHEVRON HANDMADE",
  format: "2''X11''",
  brand: "ALTERET",
  locations: ["H1"],
  thumbnail: chevronHandmade01,
},

{
  name: "CISELÉ",
  format: "2''X6''",
  brand: "ALTERET",
  locations: ["H1"],
  thumbnail: cisele01,
},

{
  name: "SUBWAY HANDMADE",
  format: "3''X8''",
  brand: "ALTERET",
  locations: ["H1", "H6"],
  thumbnail: subwayHandmade01,
},

{
  name: "ZELLIGE HANDMADE",
  format: "4''X4''",
  brand: "ALTERET",
  locations: ["H1"],
  thumbnail: zelligeHandmade01,
},

{
  name: "ARABESQUE HANDAMDE",
  format: "5''X6''",
  brand: "ALTERET",
  locations: ["H2"],
  thumbnail: arabesqueHandmade01,
},

{
  name: "BASE HANDMADE",
  format: "5''x5'' & 4''x8''",
  brand: "ALTERET",
  locations: ["H2"],
  thumbnail: baseHandmade01,
},

{
  name: "ESSENZA HANDMADE",
  format: "4''x9''",
  brand: "ALTERET",
  locations: ["H2"],
  thumbnail: essenzaHandmade01,
},

{
  name: "ETNA HEXAGONAL",
  format: "4''X5''",
  brand: "ALTERET",
  locations: ["H2"],
  thumbnail: etnaHexagonal01,
},
{
  name: "MAUI",
  format: "3''X10''",
  brand: "CERLAT",
  locations: ["H4", "H5"],
  thumbnail: maui01,
},
{
  name: "TEMPO",
  format: "3''X10''",
  brand: "CERLAT",
  locations: ["H4"],
  thumbnail: tempo01,
},

{
  name: "DIAMOND HANDMADE",
  format: "3''X5''",
  brand: "ALTERET",
  locations: ["H7"],
  thumbnail: diamondHandmade01,
},
{
  name: "KITE HANDMADE",
  format: "5''X9''",
  brand: "ALTERET",
  locations: ["H7"],
  thumbnail: kiteHandmade01,
},
{
  name: "PLAGE HANDMADE",
  format: "2''X8''",
  brand: "ALTERET",
  locations: ["H7"],
  thumbnail: plage01,
},
{
  name: "GLENBROOK",
  format: "2''X8''",
  brand: "ESTUDIO CERAMICO",
  locations: ["E3"],
  thumbnail: glenbrook01,
},
{
  name: "SANTELMO",
  format: "3''X8''",
  brand: "GRESPANIA",
  locations: ["H9"],
  thumbnail: santelmo01,
},
{
  name: "ANTIQUE",
  format: "6''X6''",
  brand: "ESTUDIO CERAMICO",
  locations: ["H10"],
  thumbnail: antique01,
},
{
  name: "BARCELONA BOUTIQUE",
  format: "6''X6''",
  brand: "ESTUDIO CERAMICO",
  locations: ["H10"],
  thumbnail: barcelonaBoutique01,
},

{
  name: "JAIPUR",
  format: `5''X9''`,
  brand: "ESTUDIO CERAMICO",
  locations: ["I1"],
  thumbnail: jaipur01,
},
{
  name: "KANJI",
  format: `5''X8''`,
  brand: "ESTUDIO CERAMICO",
  locations: ["I1"],
  thumbnail: kanji01,
},
{
  name: "ROKU",
  format: `5''X9''`,
  brand: "ESTUDIO CERAMICO",
  locations: ["I1"],
  thumbnail: roku01,
},
{
  name: "SUNRISE",
  format: `3''X10''`,
  brand: "NATUCER",
  locations: ["I2"],
  thumbnail: sunrise01,
},
{
  name: "D'AUTORE ENZO",
  format: `5''X5''`,
  brand: "NATUCER",
  locations: ["I3"],
  thumbnail: dAutoreEnzo01,
},
{
  name: "SALSA",
  format: `4''X18''`,
  brand: "NATUCER",
  locations: ["I4"],
  thumbnail: salsa01,
},
{
  name: "GROOVY",
  format: `8''X8''`,
  brand: "CEVICA",
  locations: ["I5"],
  thumbnail: groovy01,
},
{
  name: "ANGLE",
  format: `5''X12''`,
  brand: "NATUCER",
  locations: ["I6"],
  thumbnail: angle01,
},
{
  name: "ARCH",
  format: `5''X12''`,
  brand: "NATUCER",
  locations: ["I7"],
  thumbnail: arch01,
},
{
  name: "SHALLOW RECTAN",
  format: `2''X9''`,
  brand: "ESTUDIO CERAMICO",
  locations: ["I8"],
  thumbnail: shallowRectan01,
},
{
  name: "SHALLOW CUADRADO",
  format: `6''X6''`,
  brand: "ESTUDIO CERAMICO",
  locations: ["I9"],
  thumbnail: shallowCuadrado01,
},
{
  name: "HIGHBURY",
  format: `6''X6''`,
  brand: "ESTUDIO CERAMICO",
  locations: ["I10"],
  thumbnail: highbury01,
},
{
  name: "CRAYON FINO",
  format: "2''X20''",
  brand: "NATUCER",
  locations: ["E1"],
  thumbnail: crayonFino01,
},
{
  name: "RENAISSANCE PILLOW FINO",
  format: "2''X10''",
  brand: "NATUCER",
  locations: ["J2"],
  thumbnail: renaissanceFinoPino01,
},
{
  name: "TIRA MATTONE",
  format: "2''X10''",
  brand: "NATUCER",
  locations: ["J2", "J6"],
  thumbnail: tiraMattone01,
},
{
  name: "RENAISSANCE FINO",
  format: "2''X20''",
  brand: "NATUCER",
  locations: ["J3"],
  thumbnail: renaissanceFino01,
},
{
  name: "CRISP BOUTIQUE",
  format: "8''X8''",
  brand: "HARMONY",
  locations: ["J3"],
  thumbnail: crispBoutique01,
},
{
  name: "OSAKA",
  format: "5''X5''",
  brand: "NATUCER",
  locations: ["J4"],
  thumbnail: osaka01,
},
{
  name: "KYOTO",
  format: "5''X5''",
  brand: "NATUCER",
  locations: ["J5"],
  thumbnail: kyoto01,
},
{
  name: "CASABLANCA",
  format: "2''X6''",
  brand: "LUNGARNO CERAMICS",
  locations: ["J8"],
  thumbnail: null,
},
{
  name: "MIDMOD MOSAICS",
  format: "1''X1''",
  brand: "LUNGARNO CERAMICS",
  locations: ["J8"],
  thumbnail: null,
},
{
  name: "ZELLIGE-LUNGARNO",
  format: "",
  brand: "LUNGARNO CERAMICS",
  locations: ["J9"],
  thumbnail: null,
},
{
  name: "PICOS",
  format: "8''X8''",
  brand: "VIVES",
  locations: ["J10"],
  thumbnail: picos01,
},
{
  name: "SURF GLOSSY",
  format: "10''X14''",
  brand: "VIVES",
  locations: ["J1"],
  thumbnail: surfBoutique01,
},
{
  name: "SURF MATT",
  format: "10''X14''",
  brand: "VIVES",
  locations: ["D1"],
  thumbnail: surfBoutique01,
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