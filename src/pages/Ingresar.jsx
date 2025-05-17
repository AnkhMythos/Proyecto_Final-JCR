import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";


const Ingresar = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 border rounded shadow-sm">
            <h2 className="text-center mb-4">Iniciar sesión</h2>
            <Form>
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
                  placeholder="Ingrese su contraseña"
                  autoComplete="current-password"
                />
              </Form.Group>

              <Form.Group controlId="formCheckbox" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Mostrar contraseña"
                  onChange={togglePasswordVisibility}
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <a
                  href="/paginas/reset-password/reset-password"
                  className="text-decoration-none"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                Confirmar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ingresar;