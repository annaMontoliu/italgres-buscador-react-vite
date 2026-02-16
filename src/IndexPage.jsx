// src/IndexPage.jsx
import { useState } from "react";
import { Header } from "./components/Header";

const COLLECTION_GROUPS = [
  {
    letter: "A",
    items: [
      { name: "ARENARIA" },
      { name: "ARTE" }, // ✅ NUEVA
    ],
  },
  {
    letter: "B",
    items: [
      { name: "BARCELONA" },
      { name: "BELA" },
      { name: "BELLEVUE" },
      { name: "BLOOM" },
      { name: "BLUE ROMA" },
      { name: "BOREALIS" },
      { name: "BORNEO" },
    ],
  },
  {
    letter: "C",
    items: [
      { name: "CAEMENTUM" },
      { name: "CANELA ROMA" },
      { name: "CHICAGO" },
      { name: "CORALINA" },
      { name: "CRUISE" }, // ✅ NUEVA
    ],
  },
  {
    letter: "D",
    items: [
      { name: "DRIPART" },
      { name: "DUAL" }, // ✅ NUEVA
      { name: "DUAL TRAVERTINE" }, // ✅ NUEVA
    ],
  },
  {
    letter: "E",
    items: [
      { name: "ELEGANCE PRO" },
      { name: "ELYSIAN" },
      { name: "ENGLISH STONE" },
      { name: "ERAWAN" },
    ],
  },
  {
    letter: "F",
    items: [{ name: "FORM CEMENT" }],
  },
  {
    letter: "G",
    items: [
      { name: "GLIM GEMME" },
      { name: "GLOCAL" },
      { name: "GREEN TREES" },
    ],
  },
  {
    letter: "H",
    items: [{ name: "HOPE" }], // ✅ NUEVA
  },
  {
    letter: "I",
    items: [{ name: "ICON" }, { name: "IMPERIAL STONE" }],
  },
  {
    letter: "J",
    items: [
      { name: "JATOBA" },
      { name: "JEWELS" },
      { name: "JURUPA" },
    ],
  },
  {
    letter: "K",
    items: [{ name: "KAIZEN" }, { name: "KORA" }],
  },
  {
    letter: "L",
    items: [{ name: "LUCENA" }],
  },
  {
    letter: "M",
    items: [
      { name: "MAJESTIC" },
      { name: "MAINSTONE" }, // ✅ NUEVA
      { name: "MAPIERRE" },
      { name: "MATERIA" },
      { name: "MATERIA CLASSICA" },
      { name: "MEMORY" },
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
    ],
  },
  {
    letter: "O",
    items: [{ name: "OH TAKE MOUNTAIN" }, { name: "OXIDE" }, { name: "OXYD" }],
  },
  {
    letter: "P",
    items: [
      { name: "PALERMO" },
      { name: "PAPIER" },
      { name: "PIERRE VIVE" },
      { name: "PIETRA ESSENZA" }, // ✅ NUEVA
      { name: "PORTLAND" },
      { name: "PRALINE" }, // ✅ NUEVA
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
      { name: "SEINE" },
      { name: "SHEER" },
      { name: "SINAI COEM" },
      { name: "SINAI KTL" },
      { name: "SUBLIME" }, // ✅ NUEVA
      { name: "SUPREME" },
      { name: "SYBIL" },
    ],
  },
  {
    letter: "T",
    items: [
      { name: "TAJ MAHAL" },
      { name: "THE ROOM" },
      { name: "TIVOLI" },
      { name: "TROPICAL BLUE" },
      { name: "TWEED STONE" },
    ],
  },
  {
    letter: "U",
    items: [
      { name: "ULISSE" },
      { name: "UNIQUE" },
    ],
  },
  {
    letter: "V",
    items: [{ name: "VERBIER" }],
  },
  {
    letter: "W",
    items: [{ name: "WOOD FOG" }],
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

  return (
    <>
      <Header />

      <main className="index-page">
        <h1>COLLECTIONS</h1>

        <input
          type="search"
          id="collectionSearch"
          placeholder="Search a collection..."
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div id="collectionsContainer">
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
