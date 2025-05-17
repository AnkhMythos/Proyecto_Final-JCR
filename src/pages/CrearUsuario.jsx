import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const CrearUsuario = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 border rounded shadow-sm">
            <h2 className="text-center mb-4">Crear Usuario</h2>
            <Form>
              <Form.Group controlId="formNombre" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  autoComplete="name"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su dirección de correo"
                  autoComplete="email"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Cree una contraseña"
                  autoComplete="new-password"
                />
              </Form.Group>

              <Form.Group controlId="formCheckbox" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Mostrar contraseña"
                  onChange={togglePasswordVisibility}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Crear Cuenta
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CrearUsuario;