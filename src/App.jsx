import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Productos from './pages/Productos';
import Ingresar from './pages/Ingresar';
import Catalogo from './pages/Catalogo';
import Crearusuario from './pages/CrearUsuario';
import Chango from './pages/Chango';
import Carro from './pages/Carro';
import CartModal from './components/CartModal';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/global.css';

function App() {  
    const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
   });

  const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle("dark-mode", !darkMode);
};

  useEffect(() => {
    // Aplicar clase al body y guardar en localStorage
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // const toggleDarkMode = () => setDarkMode(!darkMode);
  

  return (
    
    <div>
      <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Ingresar" element={<Ingresar />} />
          <Route path="/CrearUsuario" element={<Crearusuario/>} />
          {/* <Route path='/Catalogo' element={<Catalogo />} /> */}
          {/* <Route path="/Chango" element={<Chango />} /> */}
          {/* <Route path="/Carro" element={<Carro />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;