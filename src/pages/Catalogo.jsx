import React, { useEffect, useState } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Offcanvas, 
  Image,
  Form,
  InputGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "https://685ffd7dc55df675589fd403.mockapi.io/fakestoreapi/productos ";
const ITEMS_PER_PAGE = 6;


function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error de carga de API", err);
        setLoading(false);
        toast.error("Error al cargar productos. Intente más tarde.");
      });
  }, []);

  const filteredProducts = productos.filter(producto => 
    producto.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    producto.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => 
      prev.some(item => item.id === producto.id)
        ? prev.map(item => 
            item.id === producto.id 
              ? { ...item, cantidad: item.cantidad + 1 } 
              : item
          )
        : [...prev, { ...producto, cantidad: 1 }]
    );
    toast.success(`"${producto.title}" agregado al carrito`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const restarDelCarrito = (producto) => {
    setCarrito(prev => 
      prev.map(item => 
        item.id === producto.id && item.cantidad > 0
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ).filter(item => item.id !== producto.id || item.cantidad > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const realizarCompra = () => {
    toast.success('¡Compra realizada con éxito!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    setCarrito([]);
    setMostrarCarrito(false);
  };

  const calcularTotal = () => 
    carrito.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);

  if (loading) return (
    <Container className="mt-4">
      <h1>Cargando productos...</h1>
    </Container>
  );

  return (
    <>
      <Container className="mt-4">
        
        {/* Buscador */}
        <InputGroup className="mb-4">
          <InputGroup.Text>
            <FiSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </InputGroup>

        {/* Lista de productos */}
        <Row>
          {currentProducts.map(producto => (
            <Col key={producto.id} md={4}>
              <Card className="m-2 h-100">
                <Card.Img
                  variant="top"
                  src={producto.image}
                  alt={producto.title}
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-2">{producto.title}</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {producto.description.length > 100 
                      ? producto.description.substring(0, 100) + "..." 
                      : producto.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <strong>${producto.price}</strong>
                    {/* <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={() => toast.success("Prueba de toast!")}>Probar Toast</onClick=>
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar
                    </Button> */}

    <Button
  variant="primary"
  size="sm"
  onClick={() => {
    agregarAlCarrito(producto); // Función que añade el producto
    toast.success(
      <div>
        Producto agregado al carrito! <FaSmile className="ms-2" />
      </div>, 
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
  }}
>
  Agregar
</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Paginador */}
        <div className="d-flex justify-content-center mt-4">
          <button 
            className="btn btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path 
                d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button 
              key={page}
              className={`btn ${page === currentPage ? 'btn-primary' : 'btn-outline-secondary'} me-2`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button 
            className="btn btn-outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path 
                d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </Container>

      {/* Botón del carrito */}
      <Button
        variant="none"
        className="position-fixed top-0 end-0 m-3 d-flex align-items-center gap-2"
        style={{ backgroundColor: 'transparent', border: 'none' }}
        onClick={() => setMostrarCarrito(true)}
      >
        <FiShoppingCart size={24} />
        {carrito.length > 0 && (
          <span className="badge bg-danger rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '18px', height: '18px', fontSize: '0.85rem' }}>
            {carrito.length}
          </span>
        )}
      </Button>

      {/* Offcanvas Carrito */}
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
              {carrito.map(producto => (
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
                      <p className="mb-0">${producto.price}</p>
                      <div className="d-flex align-items-center gap-2">
                        <Button 
                          variant="success" 
                          size="sm" 
                          onClick={() => agregarAlCarrito(producto)}
                        >
                          +
                        </Button>
                        <span>{producto.cantidad}</span>
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
                </div>
              ))}
              <div className="mt-4 d-flex justify-content-between">
                <strong>Total: ${calcularTotal()}</strong>
                <div className="d-flex gap-2">
                  <Button variant="outline-danger" onClick={vaciarCarrito}>
                    Vaciar
                  </Button>
                  <Button variant="primary" onClick={realizarCompra}>
                    Comprar
                  </Button>
                </div>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer />
    </>
  );
}

export default Catalogo;