import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = React.useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/ingresar");
  };

  return <Button onClick={handleLogout}>Cerrar sesión</Button>;
};

export default LogoutButton;