import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";    

function CargaGaleria() {
  const usuario = "JCR";
  const tipo = "Administrador";

  const navItems = ["Inicio", "Galería", "Contacto"];
  const imagenes = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
  ];

  const [seccion, setSeccion] = useState("Inicio");

  const renderContenido = () => {
    switch (seccion) {
      case "Inicio":
        return <Home />;
      case "Galería":
        return <Gallery imagenes={imagenes} />;
      case "Contacto":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tipo={tipo} usuario={usuario} />
      <Nav items={navItems} onSeleccion={setSeccion} />
      <main className="flex-grow-1 p-3">
        {renderContenido()}
      </main>
      <Footer />
    </div>
  );
}
export default CargaGaleria;

function Gallery({ imagenes }) {
    return (
      <div className="row">
        {imagenes.map((url, index) => (
          <div className="col-4 mb-3" key={index}>
            <img src={url} alt={`Imagen ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
    );
  }
  
  export default Gallery;


