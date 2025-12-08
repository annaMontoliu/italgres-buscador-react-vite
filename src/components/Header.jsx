// src/components/Header.jsx

import logo from "../assets/imagenes/logo/logo-blanco-italgres.png";

export function Header({ onGoHome }) {
  function handleHomeClick(event) {
    if (onGoHome) {
      event.preventDefault(); // que no recargue la página
      onGoHome();             // vuelve a "home" en App
    }
    // Si no viene onGoHome, se comportaría como un enlace normal
  }

  return (
    <header className="site-header">
      <a href="https://italgres.com/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Italgres Logo" />
      </a>

      <nav>
        <a href="/index.html" onClick={handleHomeClick}>
          HOME
        </a>
      </nav>
    </header>
  );
}
