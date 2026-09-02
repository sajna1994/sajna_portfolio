import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          SAJNA<span>.</span>
        </a>


        {/* =========================
            NAVIGATION
        ========================= */}

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>


        {/* =========================
            LET'S TALK
        ========================= */}

        <a
          href="#contact"
          className="nav-button"
          onClick={closeMenu}
        >
          Let's Talk
        </a>


        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          className={`menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>

      </div>

    </header>
  );
};

export default Navbar;