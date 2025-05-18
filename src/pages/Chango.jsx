import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiShoppingCart } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const [productos, setProductos] = useState([]); // Productos obtenidos de la API
  const [carrito, setCarrito] = useState([]); // Estado del carrito
  const [loading, setLoading] = useState(true);
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para mostrar/ocultar el carrito

  const vaciarCarrito = () => {
  // Implementa la lógica para vaciar el carrito
  setCarrito([]);
};

const realizarCompra = () => {
  // Crear un elemento div para el mensaje personalizado
  const customAlert = document.createElement('div');
  customAlert.style.position = 'fixed';
  customAlert.style.top = '50%';
  customAlert.style.left = '50%';
  customAlert.style.transform = 'translate(-50%, -50%)';
  customAlert.style.backgroundColor = '#4043f7';
  customAlert.style.color = 'white';
  customAlert.style.padding = '20px';
  customAlert.style.borderRadius = '20px';
  customAlert.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  customAlert.style.zIndex = '1000';
  customAlert.style.textAlign = 'center';
  customAlert.style.fontSize = '18px';
  customAlert.style.fontWeight = 'bold';

  // Crear el contenido del mensaje
  customAlert.innerHTML = 'Compra realizada con éxito!';

  // Agregar el elemento al cuerpo del documento
  document.body.appendChild(customAlert);

  // Eliminar el elemento después de 3 segundos
  setTimeout(() => {
    document.body.removeChild(customAlert);
  }, 3000);

  // Implementar la lógica para finalizar la compra
  setCarrito([]);
  setMostrarCarrito(false);
};

// const realizarCompra = () => {
// alert("Compra realizada con éxito!")  
// // Implementar la lógica para finalizar la compra
//   setCarrito([]);
//   setMostrarCarrito(false);
// };

// const getSuccessMessage = () => {
//   if (calcularTotal() > 1000) {
//     return "¡Compra premium realizada! Has ganado envío gratis.";
//   }
//   return "¡Compra realizada con éxito!";
// };


  useEffect(() => {
    // Hacer el pedido de la API
    fetch("https://fakestoreapi.com/products")
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
        // Si el producto ya está en el carrito, incrementa la cantidad
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
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
        <h1>Cargando productos...</h1>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center">Catálogo de Productos</h2>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} md={4}>
            <Card className="m-2 d-flex flex-column" style={{ height: '540px' }}>
              <Card.Img
                variant="top"
                src={producto.image}
                alt={producto.title}
                style={{ maxHeight: "300px", objectFit: "contain" }} // Escala la imagen para que se vea completa
              />
              

              <Card.Body className="d-flex flex-column">
  <Card.Title className="mb-2">{producto.title}</Card.Title>

  {/* Descripción */}
  <Card.Text className="mb-3 flex-grow-1 align-items-lefth" style={{ fontSize: '0.9rem' }}>
    {producto.description.length > 100
      ? producto.description.substring(0, 100) + "..."
      : producto.description}
  </Card.Text>

{/* Precio a la izquierda, Botón a la derecha */}
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

{/* Botón de carrito con aspecto de ícono y contador */}
{/* <Button
  variant="success"
  className="position-fixed top-0 end-0 m-3 position-relative p-2"
  onClick={() => setMostrarCarrito(true)}
  style={{ width: '40px', height: '40px' }}
>
  <FiShoppingCart size={22} />
  {carrito.length > 0 && (
    <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem' }}>
      {carrito.length}
    </span>
  )}
</Button> */}

      <Button
        variant="none"
        // className="position-fixed top-0 end-0 m-3"
        className="position-fixed top-0 end-0 m-3 d-flex align-items-center gap-2"
        style={{ backgroundColor: 'transparent', border: 'none' }}
        onClick={() => setMostrarCarrito(true)}
      >
        <FiShoppingCart size={24} />
        
        {carrito.length > 0 && (
          <span 
            className="badge bg-danger rounded-circle d-flex align-items-center justify-content-center" 
            style={{ width: '18px', height: '18px', fontSize: '0.85rem' }}
          >
            {carrito.length}
          </span>
          // <span className="badge bg-danger rounded-circle" style={{ fontSize: '0.65rem' }}>
          //   {carrito.length}
          // </span>
        )}
      </Button>
      

      

      {/* Botón de Carrito */}
            {/* <Nav.Link as={Link} to="/CartModal" className="position-relative me-3">
            
              <FiShoppingCart size={22} />
              {carrito && carrito.length > 0 && (
                <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem' }}>
                  {carrito.length}
                </span>
              )}                           
            </Nav.Link> */}

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

              {/* Sección de total y botones */}
        <div className="mt-auto">
          <h4 className="text-end mb-3">Total: ${calcularTotal()}</h4>
              {/* <h4 className="mt-4">Total: ${calcularTotal()}</h4> */}
             <div className="d-flex justify-content-end gap-2">
            <Button 
              variant="outline-danger" 
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </Button>
            <Button 
              variant="primary" 
              onClick={realizarCompra}
            >
              Realizar Compra
            </Button>
          </div>
        </div>
      </>
    )}

        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default Cart;