import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact=()=>
    {
        return(
<Container className="mt-5">
    <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 border rounded shadow-sm justify-content-center">
 
          <Form>
            <h2>Página de Contacto</h2>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="tu@email.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
            </div>
        </Col>
    </Row>

    
</Container>
  );
}




export default Contact;