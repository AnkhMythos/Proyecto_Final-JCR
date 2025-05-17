// src/components/Chango.js
import React from "react";
import { Offcanvas, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carrito({ carrito, mostrarCarrito, setMostrarCarrito, calcularTotal, agregarAlCarrito, restarDelCarrito }) {
  return (
    <Offcanvas show={mostrarCarrito} onHide={() => setMostrarCarrito(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {carrito.map((producto) => (
              <div key={producto.id} className="mb-3 d-flex align-items-center">
                <Image
                  src={producto.image}
                  alt={producto.title}
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                  className="me-3"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">{producto.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">
                      <strong>Precio:</strong> ${producto.price}
                    </p>
                    <p className="mb-0">
                      <strong>Cantidad:</strong> {producto.cantidad}
                    </p>
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => agregarAlCarrito(producto)}
                      className="me-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => restarDelCarrito(producto)}
                    >
                      -
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <h4 className="mt-4">Total: ${calcularTotal()}</h4>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Carrito;