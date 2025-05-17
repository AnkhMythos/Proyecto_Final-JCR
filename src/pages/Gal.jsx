import React from "react";
import { Container } from "react-bootstrap";

const Galeria=()=>
    {
        const imagenes = [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
        ];

        return(
          <Container className="mt-4">
      <h1>Galería de Productos</h1>
      <Row>
        {imagenes.map((url, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Img variant="top" src={url} />
              <Card.Body>
                <Card.Text>Imagenes {idx + 1}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>


        );
    };

export default Galeria;
