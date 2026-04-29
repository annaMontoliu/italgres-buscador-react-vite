// src/IndexPage.jsx
import { useState } from "react";
import { Header } from "./components/Header";

const COLLECTION_GROUPS = [
  {
    letter: "A",
    items: [
      { name: "AETERNA" },
      { name: "ARENARIA" },
      { name: "ARTE" },
      { name: "ARTIC" },
      { name: "ARKEN" },
      { name: "AVALLON" },
    ],
  },
  {
    letter: "B",
    items: [
      { name: "BARCELONA" },
      { name: "BAIKAL" },
      { name: "BELA" },
      { name: "BELLEVUE" },
      { name: "BLANCO" },
      { name: "BLOOM" },
      { name: "BLUE ROMA" },
      { name: "BOREALIS" },
      { name: "BORNEO" },
      { name: "BRECCIA" },
      
    ],
  },
  {
    letter: "C",
    items: [
      { name: "CAEMENTUM" },
      { name: "CALIZIA" },
      { name: "CANELA ROMA" },
      { name: "CASSERO" },
      { name: "CEMENT" },
      { name: "CHICAGO" },
      { name: "CIVIC" },
      { name: "CORALINA" },
      { name: "COSMOPOLITAN" },
      { name: "COTTAGE" },
      { name: "CRISP" },
      { name: "CRUISE" },
      { name: "CUARZO RENO" },
    ],
  },
  {
    letter: "D",
    items: [
      { name: "DECO ART" },
      { name: "DHARA" },
      { name: "DONCELLA" },
      { name: "DOT" },
      { name: "DISTRITO" },
      { name: "DRIPART" },
      { name: "DUAL" },
      { name: "DUAL TRAVERTINE" },
      { name: "DUOMO" },
    ],
  },
  {
    letter: "E",
    items: [
      { name: "ELEGANCE PRO" },
      { name: "ELYSIAN" },
      { name: "EMOTION" },
      { name: "ENGLISH STONE" },
      { name: "ERAWAN" },
    ],
  },
  {
    letter: "F",
    items: [
      { name: "FLAX" },
      { name: "FLUID MULTICOLOR" }, 
      { name: "FORM CEMENT" }
    ],
  },
  {
    letter: "G",
    items: [
      { name: "GLIM GEMME" },
      { name: "GLOCAL" },
      { name: "GREEN TREES" },
      { name: "GULHI" },
    ],
  },
  {
    letter: "H",
    items: [{ name: "HALTON" }, { name: "HAUTEVILLE" }, { name: "HOPE" }],
  },
  {
    letter: "I",
    items: [
      { name: "ICON" },
      { name: "IMPERIAL STONE" },
      { name: "INCISA" },
    ],
  },
  {
    letter: "J",
    items: [{ name: "JATOBA" }, { name: "JEWELS" }, { name: "JURUPA" }],
  },
 {
  letter: "K",
  items: [
    { name: "KA 03" },
    { name: "KAIZEN" },
    { name: "KORA" }
  ],
},
  { letter: "L", items: [
    { name: "LUCENA" }, 
    { name: "LUMIX NATURAL" },
    { name: "LUMINA STONE" }] 
  },
  {
    letter: "M",
    items: [
      { name: "MAJESTIC" },
      { name: "MAINSTONE" },
      { name: "MAPIERRE" },
      { name: "MATERA STONE" },
      { name: "MATERIA" },
      { name: "MATERIA CLASSICA" },
      { name: "MEMORY" },
      { name: "MICRA" },
      { name: "MITICA" },
      { name: "MOON CREAM" },
      { name: "MOTLEY" },
      { name: "MYCRO" },
    ],
  },
  {
    letter: "N",
    items: [
      { name: "NATURE MOOD" },
      { name: "NORDIC" },
      { name: "NORTHON" },
    ],
  },
  {
    letter: "O",
    items: [
      { name: "OH TAKE MOUNTAIN" },
      { name: "ONIX" },
      { name: "OREGON" },
      { name: "OXIDE" },
      { name: "OXO" },
      { name: "OXYD" },
    ],
  },
  {
    letter: "P",
    items: [
      { name: "PALERMO" },
      { name: "PAPIER" },
      { name: "PIERRE VIVE" },
      { name: "PIETRA ESSENZA" },
      { name: "PORTLAND" },
      { name: "PRALINE" },
      { name: "PULPIS" },
    ],
  },
  {
    letter: "R",
    items: [{ name: "RIBERA" }, { name: "RETINA" }, { name: "RIVERSIDE" }],
  },
  {
    letter: "S",
    items: [
      { name: "SANDSTONE" },
      { name: "SAVOY" },
      { name: "SEINE" },
      { name: "SHEER" },
      { name: "SILVERLINE" },
      { name: "SINAI COEM" },
      { name: "SINAI KTL" },
      { name: "SUBLIME" },
      { name: "SUPREME" },
      { name: "SURFACE" },
      { name: "SYBIL" },
    ],
  },
  {
    letter: "T",
    items: [
      { name: "TAJ MAHAL" },
      { name: "TATTOO" },
      { name: "THE ROOM" },
      { name: "TIVOLI" },
      { name: "TROPICAL BLUE" },
      { name: "TWEED STONE" },
    ],
  },
  { letter: "U", items: [
    { name: "ULISSE" }, 
    { name: "UNIQUE" }] },
  {
    letter: "V",
    items: [
      { name: "VERBIER" },
      { name: "VINCI" }],
  },
  {
  letter: "W",
  items: [
    { name: "WHITE BALANCE" },
    { name: "WOOD FOG" },
  ],
},
];

export function IndexPage({ onOpenCollection }) {
  const [search, setSearch] = useState("");
  const normalizedSearch = search.toLowerCase().trim();

  const groupsToShow =
    normalizedSearch === ""
      ? COLLECTION_GROUPS
      : COLLECTION_GROUPS
          .map((group) => {
            const filteredItems = group.items.filter((item) =>
              item.name.toLowerCase().includes(normalizedSearch)
            );
            return { ...group, items: filteredItems };
          })
          .filter((group) => group.items.length > 0);

  function handleClickCollection(e, item) {
    if (onOpenCollection) {
      e.preventDefault();
      onOpenCollection(item.name.trim());
    }
  }

  function handleOpenBoutique() {
    if (onOpenCollection) {
      onOpenCollection("BOUTIQUE");
    }
  }

  return (
    <>
      <Header onOpenBoutique={handleOpenBoutique} />

      <main className="index-page">
        <div className="index-sticky">
          <h1>COLLECTIONS</h1>

          <input
            type="search"
            id="collectionSearch"
            placeholder="Search a collection..."
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div id="collectionsContainer" className="collections-scroll">
          {groupsToShow.map((group) => (
            <div
              key={group.letter}
              className="collection-group"
              data-letter={group.letter}
            >
              <div className="letter-heading">{group.letter}</div>
              <ul className="collection-list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <a href="#" onClick={(e) => handleClickCollection(e, item)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default IndexPage;