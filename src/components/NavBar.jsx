import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importa la imagen desde src/assets/
import logo from "/jcr.png";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Cambia la clase del body
  };

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg">
      <Container>
        {/* Menú Hamburguesa */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />

        {/* Logo - visible en móviles y centrado */}
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          <img
            src={logo} // Usa la variable importada
            alt="Logo"
            width="40"
            height="40"
          />
        </Navbar.Brand>

        {/* Contenido del Navbar */}
        <Navbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Catalogo">Catálogo</Nav.Link>            
            <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>             
            <Nav.Link as={Link} to="/ProductCrud">CRUD</Nav.Link>
            <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
            <Nav.Link as={Link} to="/crearusuario">Registrarse</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>

            {/* Botón de Modo Oscuro/Claro */}
            <button
              onClick={toggleDarkMode}
              className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-outline-secondary"}`}
              style={{ border: "none" }}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;