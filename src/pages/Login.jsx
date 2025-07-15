import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "admin@tienda.com" && password === "admin") {
      login(usuario);
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="p-4 border rounded shadow-sm">
            <h2 className="text-center mb-4">Iniciar sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsuario" className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="admin@tienda.com"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  autoComplete="email"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="Mostrar contraseña"
                onChange={() => setMostrarPassword(!mostrarPassword)}
                className="mb-3"
              />

              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="/paginas/reset-password/reset-password" className="text-decoration-none">
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

export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

// function Login() {
//   const [usuario, setUsuario] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuthContext();
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulación de autenticación
//     if (usuario === "admin@tienda.com" && password === "admin") {
//       login(usuario);
//       navigate("/dashboard");
//     } else {
//       alert("Credenciales incorrectas");
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar sesión</h2>
//       <div>
//         <label>Usuario:</label>
//         <input
//           type="text"
//           value={usuario}
//           onChange={(e) => setUsuario(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Contraseña:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Iniciar sesión</button>
//     </form>
//   );
// }
// export default Login;
