import React, { useState } from 'react';

// Simulación de la base de datos de productos
const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Este es el primer producto de nuestra tienda.",
    precio: "$100",
    imagen: "/img/1.jpeg"
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Este es el segundo producto de nuestra tienda.",
    precio: "$200",
    imagen: "/img/2.jpeg"
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Este es el tercer producto de nuestra tienda.",
    precio: "$300",
    imagen: "/img/3.jpeg"
  }
];

// Componente FichaProducto
function FichaProducto({ producto }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '300px', margin: 'auto' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> {producto.precio}</p>
    </div>
  );
}

// Componente BotonNavegacion
function BotonNavegacion({ texto, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: '5px' }}>
      {texto}
    </button>
  );
}

// Componente principal Ejercicio1
function Ejercicio2() {
  const [indiceProducto, setIndiceProducto] = useState(0);

  // Función para avanzar al siguiente producto
  const siguienteProducto = () => {
    setIndiceProducto((indiceProducto + 1) % productos.length);
  };

  // Función para retroceder al producto anterior
  const productoAnterior = () => {
    setIndiceProducto((indiceProducto - 1 + productos.length) % productos.length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Ficha de Producto</h1>
      <FichaProducto producto={productos[indiceProducto]} />
      <div>
        <BotonNavegacion texto="<" onClick={productoAnterior} />
        <BotonNavegacion texto=">" onClick={siguienteProducto} />
      </div>
    </div>
  );
}

export default Ejercicio2;