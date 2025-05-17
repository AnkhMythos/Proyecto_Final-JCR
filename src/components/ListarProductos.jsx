// components/ProductList.js
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProductList = ({ productos, agregarAlCarrito }) => {
  return (
    <Row>
      {productos.map((producto) => (
        <Col key={producto.id} md={4}>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src={producto.image}
              alt={producto.title}
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="mb-0">
                  <strong>Precio:</strong> ${producto.price}
                </Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;