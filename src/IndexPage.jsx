// src/IndexPage.jsx
import { useState } from "react";
import { Header } from "./components/Header";

const COLLECTION_GROUPS = [
  { letter: "A", items: [{ name: "ARENARIA", href: "/colecciones/arenaria.html" }] },
  {
    letter: "B",
    items: [
      { name: "BARCELONA", href: "/colecciones/barcelona.html" },
      { name: "BELLEVUE", href: "/colecciones/bellevue.html" },
    ],
  },
  { letter: "C", items: [{ name: "CHICAGO", href: "/colecciones/chicago.html" }] },
  { letter: "D", items: [{ name: "DRIPART", href: "/colecciones/dripart.html" }] },
  {
    letter: "E",
    items: [
      { name: "ELEGANCE PRO", href: "/colecciones/elegance-pro.html" },
      { name: "ELYSIAN", href: "/colecciones/elysian.html" },
    ],
  },
  { letter: "G", items: [{ name: "GLOCAL", href: "/colecciones/glocal.html" }] },
  {
    letter: "I",
    items: [
      { name: "ICON", href: "/colecciones/icon.html" },
      { name: "IMPERIAL STONE", href: "/colecciones/imperial-stone.html" },
    ],
  },
  { letter: "K", items: [{ name: "KORA", href: "/colecciones/kora.html" }] },
  { letter: "L", items: [{ name: "LUCENA", href: "/colecciones/lucena.html" }] },
  {
    letter: "M",
    items: [
      { name: "MAPIERRE", href: "/colecciones/mapierre.html" },
      { name: "MATERIA", href: "/colecciones/materia.html" },
      { name: "MOTLEY", href: "/colecciones/motley.html" },
    ],
  },
  {
    letter: "O",
    items: [{ name: "OH TAKE MOUNTAIN", href: "/colecciones/oh-take-mountain.html" }],
  },
  {
    letter: "P",
    items: [
      { name: "PALERMO", href: "/colecciones/palermo.html" },
      { name: "PIERRE VIVE", href: "/colecciones/pierre-vive.html" },
      { name: "PORTLAND", href: "/colecciones/portland.html" },
      { name: "PULPIS", href: "/colecciones/pulpis.html" },
    ],
  },
  { letter: "R", items: [{ name: "RIVERSIDE", href: "/colecciones/riverside.html" }] },
  {
    letter: "S",
    items: [
      { name: "SHEER", href: "/colecciones/sheer.html" },
      { name: "SINAI COEM", href: "/colecciones/sinai-coem.html" },
      { name: "SINAI KTL", href: "/colecciones/sinai-ktl.html" },
      { name: "SUPREME", href: "/colecciones/supreme.html" },
      { name: "SYBIL", href: "/colecciones/sybil.html" },
    ],
  },
  { letter: "U", items: [{ name: "ULISSE", href: "/colecciones/ulisse.html" }] },
];

export function IndexPage({ onOpenCollection }) {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.toLowerCase().trim();

  const groupsToShow =
    normalizedSearch === ""
      ? COLLECTION_GROUPS
      : COLLECTION_GROUPS
          .map((group) => ({
            ...group,
            items: group.items.filter((item) =>
              item.name.toLowerCase().includes(normalizedSearch)
            ),
          }))
          .filter((group) => group.items.length > 0);

  function handleClickCollection(e, item) {
    e.preventDefault();
    onOpenCollection(item.name);
  }

  return (
    <>
      <Header />
      <main className="index-page">
        <h1>COLLECTIONS</h1>

        <input
          type="search"
          placeholder="Search a collection..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div id="collectionsContainer">
          {groupsToShow.map((group) => (
            <div key={group.letter} className="collection-group">
              <div className="letter-heading">{group.letter}</div>
              <ul className="collection-list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} onClick={(e) => handleClickCollection(e, item)}>
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
