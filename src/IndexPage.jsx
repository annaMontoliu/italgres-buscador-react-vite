// src/IndexPage.jsx
import { useState } from "react";
import { Header } from "./components/Header";

const COLLECTION_GROUPS = [
  {
    letter: "E",
    items: [
      { name: "ELEGANCE PRO", href: "/colecciones/elegance-pro.html" },
      { name: "ELYSIAN", href: "/colecciones/elysian.html" },
    ],
  },
  {
    letter: "G",
    items: [{ name: "GLOCAL", href: "/colecciones/glocal.html" }],
  },
  {
    letter: "L",
    items: [{ name: "LUCENA", href: "/colecciones/lucena.html" }],
  },
  {
    letter: "M",
    items: [
      { name: "MATERIA", href: "/colecciones/materia.html" },
      { name: "MOTLEY", href: "/colecciones/motley.html" },
    ],
  },
  {
    letter: "S",
    items: [
      { name: "SHEER", href: "/colecciones/sheer.html" },
      { name: "SINAI", href: "/colecciones/sinai.html" },
    ],
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
    // Si App nos pasa onOpenCollection, usamos React para abrir colecciones internas
    if (onOpenCollection) {
      if (item.name === "LUCENA") {
        e.preventDefault();
        onOpenCollection("LUCENA");
        return;
      }

      if (item.name === "ELEGANCE PRO") {
        e.preventDefault();
        onOpenCollection("ELEGANCE PRO");
        return;
      }

      if (item.name === "ELYSIAN") {
        e.preventDefault();
        onOpenCollection("ELYSIAN");
        return;
      }

      if (item.name === "SINAI") {
        e.preventDefault();
        onOpenCollection("SINAI");
        return;
      }

      if (item.name === "GLOCAL") {
        e.preventDefault();
        onOpenCollection("GLOCAL");
        return;
      }

      if (item.name === "MATERIA") {
        e.preventDefault();
        onOpenCollection("MATERIA");
        return;
      }

      if (item.name === "SHEER") {
        e.preventDefault();
        onOpenCollection("SHEER");
        return;
      }

      if (item.name === "MOTLEY") {
        e.preventDefault();
        onOpenCollection("MOTLEY");
        return;
      }
    }

    // El resto de colecciones que sigan en HTML
    // usarán su href normal
  }

  return (
    <>
      {/* HEADER GLOBAL */}
      <Header />

      {/* CONTENIDO DEL ÍNDICE */}
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
                    <a
                      href={item.href}
                      onClick={(e) => handleClickCollection(e, item)}
                    >
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
