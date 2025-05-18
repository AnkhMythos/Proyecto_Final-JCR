import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";

// import CartModal from "./components/CartModal";

function NavBar({ carrito = [] }) {
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle('dark-mode', !darkMode);
  // };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Cambia la clase del body
  };

  return (
    // <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        {/* Menú Hamburguesa */}
        {/* <Navbar.Toggle className="me-2" /> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />

        {/* Logo - visible en móviles y centrado */}
    <Navbar.Brand 
      as={Link} 
      to="/" 
      className="mx-auto"  // Centrado y solo visible en móviles
    >
      <img
        src="/imagenes/jcr.png"
        alt="Logo"
        width="40"
        height="40"
        className="d-block"
      />
    </Navbar.Brand>

    


          {/* <Navbar.Brand as={Link} to="/">
          <img
            src="/imagenes/jcr.png" 
            alt="Logo"
            width="40" 
            height="40"
            className="d-block mx-auto"
            />
        </Navbar.Brand> */}

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

       
        <Navbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/Catalogo">
              Catálogo
            </Nav.Link> */}
            <Nav.Link as={Link} to="/Productos">
              Productos
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/Chango">
              Chango
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to="/Carro">
              Carro
            </Nav.Link> */}
            <Nav.Link as={Link} to="/ingresar">
              Ingresar
            </Nav.Link>
            <Nav.Link as={Link} to="/crearusuario">
              Registrarse
            </Nav.Link>

            {/* Botón de Carrito */}
            {/* <Nav.Link as={Link} to="/CartModal" className="position-relative me-3">
            
              <FiShoppingCart size={22} />
              {carrito && carrito.length > 0 && (
                <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem' }}>
                  {carrito.length}
                </span>
              )}                           
            </Nav.Link> */}

            {/* <NavLink  onClick={toggleDarkMode} className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'} w-100`}>{darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}</NavLink> */}

            <button
              onClick={toggleDarkMode}
              className={`btn btn-sm ${
                darkMode ? "btn-outline-light" : "btn-outline-secondary"
              } w-100`}
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
