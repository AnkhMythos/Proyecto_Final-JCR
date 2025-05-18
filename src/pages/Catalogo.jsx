
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Catalogo() {
  const [productos, setProductos] = useState([]); // Productos obtenidos de la API
  const [carrito, setCarrito] = useState([]); // Estado del carrito
  const [loading, setLoading] = useState(true);
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para mostrar/ocultar el carrito

  useEffect(() => {
    // Hacer el pedido de la API
    fetch("https://fakestoreapi.com/products")
    // fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error de carga de API", err);
        setLoading(false);
      });
  }, []);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
  setCarrito((prevCarrito) => {
    const productoExistente = prevCarrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      return prevCarrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
    } else {
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    }
  });
};

  // Función para restar unidades de un producto en el carrito
  const restarDelCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      if (productoExistente.cantidad === 1) {
        // Si la cantidad es 1, elimina el producto del carrito
        return prevCarrito.filter((item) => item.id !== producto.id);
      } else {
        // Si la cantidad es mayor a 1, decrementa la cantidad
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      }
    });
  };

  // Calcular el total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0).toFixed(2);
  };

  if (loading) {
    return (
      <Container className="mt-4">
        <h2>Cargando productos...</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center">Catálogo de Productos</h2>

      <Row>
  {productos.map((producto) => (
    <Col key={producto.id} md={4} className="mb-4 d-flex">
      <Card className="d-flex flex-column" style={{ height: '500px' }}>
        {/* Imagen */}
        <Card.Img
          variant="top"
          src={producto.image}
          alt={producto.title}
          style={{ maxHeight: "250px", objectFit: "contain"
          }}
        />

        {/* Cuerpo de la tarjeta */}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-2">{producto.title}</Card.Title>

          {/* Descripción */}
          <Card.Text className="mb-3 flex-grow-1 align-items-lefth" style={{ fontSize: '0.9rem' }}>
            {producto.description.length > 100
              ? producto.description.substring(0, 100) + "..."
              : producto.description}
          </Card.Text>

          {/* Precio y botón - abajo y separados */}
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <Card.Text className="mb-0">
              <strong>Precio:</strong> ${producto.price}              
            </Card.Text>
            <Card.Text>
            <Button
              variant="primary"
              size="sm"
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar
            </Button>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      {/* Botón para abrir el carrito */}
      <Button
        variant="success"
        className="position-fixed top-0 end-0 m-3"
        onClick={() => setMostrarCarrito(true)}
      >
        Ver Carrito ({carrito.length})
      </Button>

      {/* Modal flotante del carrito */}
      <Offcanvas
        show={mostrarCarrito}
        onHide={() => setMostrarCarrito(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {carrito.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <>
              {carrito.map((producto) => (
                <div
                  key={producto.id}
                  className="mb-3 d-flex align-items-center"
                >
                  {/* Miniatura del producto */}
                  <Image
                    src={producto.image}
                    alt={producto.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
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
    </Container>
  );
}

export default Catalogo;