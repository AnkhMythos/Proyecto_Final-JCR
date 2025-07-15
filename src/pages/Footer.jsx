import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  };

  return (
    <footer className="bg-dark text-white text-center py-4" style={footerStyle}>
      {/* <footer className="bg-dark text-white text-center py-3 mt-auto"> */}
      <Container>
        <Row>
          <Col md={6}>
          <p className="mb-0">© 2025 JCR Talento Tech. Todos los derechos reservados.</p>
            
          </Col>
          <Col md={6}>
            <div>
              <a href="#" className="text-white me-3">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

