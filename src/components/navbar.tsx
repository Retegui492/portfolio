import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">Jhonatan</div>

      {/* MENU DESKTOP */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      {/* BOTÃO HAMBÚRGUER (MOBILE) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
        <a onClick={() => setMenuOpen(false)} href="#about">Sobre</a>
        <a onClick={() => setMenuOpen(false)} href="#projects">Projetos</a>
        <a onClick={() => setMenuOpen(false)} href="#contact">Contato</a>
      </div>
    </nav>
  );
}
