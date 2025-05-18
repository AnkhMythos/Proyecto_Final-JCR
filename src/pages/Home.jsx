import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home=()=>
    {
        return(
<Container className="mt-4">
      <h1 className="mb-4">Bienvenidos a Mi Tienda Online</h1>
      
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Indumentaria</Card.Title>
              <Card.Text>Ropa de moda para hombres y mujeres.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Joyas</Card.Title>
              <Card.Text>Collares, pulseras y anillos de calidad.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Electrónica</Card.Title>
              <Card.Text>Smartphones, auriculares y gadgets.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        );
    };

export default Home;