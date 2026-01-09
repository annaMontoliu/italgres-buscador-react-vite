// src/IndexPage.jsx
import { useState } from "react";
import { Header } from "./components/Header";

const COLLECTION_GROUPS = [
  {
    letter: "A",
    items: [{ name: "ARENARIA", href: "/colecciones/arenaria.html" }],
  },
  {
    letter: "B",
    items: [
      { name: "BARCELONA", href: "/colecciones/barcelona.html" },
      { name: "BELLEVUE", href: "/colecciones/bellevue.html" },
    ],
  },
  {
    letter: "C",
    items: [{ name: "CHICAGO", href: "/colecciones/chicago.html" }],
  },
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
    letter: "I",
    items: [
      { name: "ICON", href: "/colecciones/icon.html" },
      { name: "IMPERIAL STONE", href: "/colecciones/imperial-stone.html" },
    ],
  },
  {
    letter: "K",
    items: [{ name: "KORA", href: "/colecciones/kora.html" }],
  },
  {
    letter: "L",
    items: [{ name: "LUCENA", href: "/colecciones/lucena.html" }],
  },
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
    items: [
      { name: "OH TAKE MOUNTAIN", href: "/colecciones/oh-take-mountain.html" },
    ],
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
  {
    letter: "R",
    items: [{ name: "RIVERSIDE", href: "/colecciones/riverside.html" }],
  },
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
  {
    letter: "U",
    items: [{ name: "ULISSE", href: "/colecciones/ulisse.html" }],
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

      if (item.name === "SINAI COEM") {
        e.preventDefault();
        onOpenCollection("SINAI COEM");
        return;
      }

      if (item.name === "SINAI KTL") {
        e.preventDefault();
        onOpenCollection("SINAI KTL");
        return;
      }

      if (item.name === "ARENARIA") {
        e.preventDefault();
        onOpenCollection("ARENARIA");
        return;
      }

      if (item.name === "BARCELONA") {
        e.preventDefault();
        onOpenCollection("BARCELONA");
        return;
      }

      if (item.name === "BELLEVUE") {
        e.preventDefault();
        onOpenCollection("BELLEVUE");
        return;
      }

      if (item.name === "CHICAGO") {
        e.preventDefault();
        onOpenCollection("CHICAGO");
        return;
      }

      if (item.name === "ICON") {
        e.preventDefault();
        onOpenCollection("ICON");
        return;
      }

      if (item.name === "PORTLAND") {
        e.preventDefault();
        onOpenCollection("PORTLAND");
        return;
      }

      if (item.name === "OH TAKE MOUNTAIN") {
        e.preventDefault();
        onOpenCollection("OH TAKE MOUNTAIN");
        return;
      }

      if (item.name === "ULISSE") {
        e.preventDefault();
        onOpenCollection("ULISSE");
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

      if (item.name === "MOTLEY") {
        e.preventDefault();
        onOpenCollection("MOTLEY");
        return;
      }

      if (item.name === "MAPIERRE") {
        e.preventDefault();
        onOpenCollection("MAPIERRE");
        return;
      }

      if (item.name === "KORA") {
        e.preventDefault();
        onOpenCollection("KORA");
        return;
      }

      if (item.name === "SHEER") {
        e.preventDefault();
        onOpenCollection("SHEER");
        return;
      }

      if (item.name === "IMPERIAL STONE") {
        e.preventDefault();
        onOpenCollection("IMPERIAL STONE");
        return;
      }

      if (item.name === "SUPREME") {
        e.preventDefault();
        onOpenCollection("SUPREME");
        return;
      }

      if (item.name === "SYBIL") {
        e.preventDefault();
        onOpenCollection("SYBIL");
        return;
      }

      if (item.name === "PULPIS") {
        e.preventDefault();
        onOpenCollection("PULPIS");
        return;
      }

      if (item.name === "PALERMO") {
        e.preventDefault();
        onOpenCollection("PALERMO");
        return;
      }

      if (item.name === "PIERRE VIVE") {
        e.preventDefault();
        onOpenCollection("PIERRE VIVE");
        return;
      }

      if (item.name === "RIVERSIDE") {
        e.preventDefault();
        onOpenCollection("RIVERSIDE");
        return;
      }
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
