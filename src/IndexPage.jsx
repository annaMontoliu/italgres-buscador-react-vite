// src/IndexPage.jsx
import { useState } from "react";
import { Header } from "./components/Header";

const COLLECTION_GROUPS = [
  {
    letter: "A",
    items: [{ name: "ARENARIA" }],
  },
  {
    letter: "B",
    items: [{ name: "BARCELONA" }, { name: "BELA" }, { name: "BELLEVUE" }],
  },
  {
    letter: "C",
    items: [{ name: "CHICAGO" }],
  },
  {
    letter: "D",
    items: [{ name: "DRIPART" }],
  },
  {
    letter: "E",
    items: [{ name: "ELEGANCE PRO" }, { name: "ELYSIAN" }],
  },
  {
    letter: "G",
    items: [{ name: "GLOCAL" }],
  },
  {
    letter: "I",
    items: [{ name: "ICON" }, { name: "IMPERIAL STONE" }],
  },
  {
    letter: "J",
    items: [{ name: "JATOBA" }], // ✅ NUEVA
  },
  {
    letter: "K",
    items: [{ name: "KORA" }, { name: "KAIZEN" }], // ✅ KAIZEN
  },
  {
    letter: "L",
    items: [{ name: "LUCENA" }],
  },
  {
    letter: "M",
    items: [{ name: "MAPIERRE" }, { name: "MATERIA" }, { name: "MOTLEY" }],
  },
  {
    letter: "O",
    items: [{ name: "OH TAKE MOUNTAIN" }, { name: "OXYD" }],
  },
  {
    letter: "P",
    items: [
      { name: "PALERMO" },
      { name: "PIERRE VIVE" },
      { name: "PORTLAND" },
      { name: "PULPIS" },
    ],
  },
  {
    letter: "R",
    items: [{ name: "RIVERSIDE" }, { name: "RETINA" }], // ✅ RETINA
  },
  {
    letter: "S",
    items: [
      { name: "SHEER" },
      { name: "SINAI COEM" },
      { name: "SINAI KTL" },
      { name: "SUPREME" },
      { name: "SYBIL" },
    ],
  },
  {
    letter: "U",
    items: [{ name: "ULISSE" }],
  },
  {
    letter: "V",
    items: [{ name: "VERBIER" }], // ✅ VERBIER
  },
];

export function IndexPage({ onOpenCollection }) {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.toLowerCase().trim();

  const groupsToShow =
    normalizedSearch === ""
      ? COLLECTION_GROUPS
      : COLLECTION_GROUPS.map((group) => {
          const filteredItems = group.items.filter((item) =>
            item.name.toLowerCase().includes(normalizedSearch)
          );
          return { ...group, items: filteredItems };
        }).filter((group) => group.items.length > 0);

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
