// src/boutique.jsx
import { useMemo, useState } from "react";
import { Header } from "./components/Header";

const cabinets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const boutiqueDrawers = {
  A1: [
    {
      name: "DUST",
      format: '2"x8"',
      brand: "ELIOS",
      locations: ["A1", "C4", "H2"],
      thumbnail:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "BECK",
      format: '4"x4"',
      brand: "CIFRE",
      locations: ["A1"],
      thumbnail:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    },
  ],
  A2: [
    {
      name: "BRUTALIST",
      format: '2"x9"',
      brand: "AMADIS",
      locations: ["A2", "F6"],
      thumbnail:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    },
  ],
  B3: [
    {
      name: "DUST",
      format: '2"x8"',
      brand: "ELIOS",
      locations: ["A1", "C4", "H2"],
      thumbnail:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "SEVILLA",
      format: '2"x8"',
      brand: "ELIOS",
      locations: ["B3"],
      thumbnail:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
  ],
  C4: [
    {
      name: "DUST",
      format: '2"x8"',
      brand: "ELIOS",
      locations: ["A1", "C4", "H2"],
      thumbnail:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
  ],
  H2: [
    {
      name: "DUST",
      format: '2"x8"',
      brand: "ELIOS",
      locations: ["A1", "C4", "H2"],
      thumbnail:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

const boutiqueCollections = [
  {
    name: "DUST",
    format: '2"x8"',
    brand: "ELIOS",
    locations: ["A1", "C4", "H2"],
    thumbnail:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "BECK",
    format: '4"x4"',
    brand: "CIFRE",
    locations: ["A1"],
    thumbnail:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "BRUTALIST",
    format: '2"x9"',
    brand: "AMADIS",
    locations: ["A2", "F6"],
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "SEVILLA",
    format: '2"x8"',
    brand: "ELIOS",
    locations: ["B3"],
    thumbnail:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
];

export function Boutique({ onGoHome, onOpenCollection }) {
  const [selectedCabinet, setSelectedCabinet] = useState(null);
  const [selectedDrawer, setSelectedDrawer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  function handleOpenBoutique(event) {
    event.preventDefault();
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
      <Header onGoHome={onGoHome} onOpenBoutique={handleOpenBoutique} />

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