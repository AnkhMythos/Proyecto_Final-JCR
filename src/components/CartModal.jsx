import React from 'react';
import { Offcanvas, Button, Image } from 'react-bootstrap'; 
import styled from 'styled-components';


const CartSummaryContainer = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
  margin-top: 20px; /* Espacio entre la lista de productos y el resumen */
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 15px;
  }
`;

const TotalItem = styled(SummaryItem)`
  font-size: 20px;
  font-weight: bold;
  color: #007bff; /* Un azul similar al del total */
`;

const DiscountItem = styled(SummaryItem)`
  color: #dc3545; /* Rojo para indicar descuento */
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  font-size: 18px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #6c757d;
  margin-top: 5px;
`;

function Carrito({ carrito, mostrarCarrito, setMostrarCarrito, calcularTotal, agregarAlCarrito, restarDelCarrito }) {
  const subtotal = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  const descuentos = 0; // Aquí podrías calcular los descuentos si los tienes
  const total = subtotal - descuentos;

  const handleFinalizarCompra = () => {
    // Aquí iría la lógica para procesar la compra
    alert('¡Compra finalizada!');
    setMostrarCarrito(false); // O la lógica que necesites al finalizar
  };

  return (
    <Offcanvas show={mostrarCarrito} onHide={() => setMostrarCarrito(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {carrito.map((producto) => (
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
                    <p className="mb-0">
                      <strong>Precio:</strong> ${producto.price}
                    </p>
                    <p className="mb-0">
                      <strong>Cantidad:</strong> {producto.cantidad}
                    </p>
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => agregarAlCarrito(producto)}
                      className="me-2"
                    >
                      +
                    </Button>
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
            ))}
            <h4 className="mt-4">Total: ${calcularTotal()}</h4>

            <CartSummaryContainer>
              <SummaryItem>
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </SummaryItem>
              {descuentos > 0 && (
                <DiscountItem>
                  <span>Descuentos</span>
                  <span>-${descuentos.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </DiscountItem>
              )}
              <TotalItem>
                <span>Total</span>
                <span>$ {total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </TotalItem>
              <SmallText>Tasas y fletes calculados en el carrito</SmallText>
              <CheckoutButton variant="primary" onClick={handleFinalizarCompra}>
                FINALIZAR COMPRA
              </CheckoutButton>
            </CartSummaryContainer>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Carrito;

// import React from "react";
// import { Modal, Button, Image } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// function CartModal({
//   show,
//   onHide,
//   carrito,
//   agregarAlCarrito,
//   restarDelCarrito,
//   calcularTotal,
// }) {
//   return (
//     <Modal 
//       show={show} 
//       onHide={onHide} 
//       centered
//       scrollable
//       size="lg"
//     >
//       <Modal.Header closeButton className="bg-light">
//         <Modal.Title>🛒 Carrito de Compras</Modal.Title>
//       </Modal.Header>
      
//       <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
//         {carrito.length === 0 ? (
//           <div className="text-center py-4">
//             <p className="text-muted">Tu carrito está vacío</p>
//           </div>
//         ) : (
//           <>
//             {carrito.map((producto) => (
//               <div key={producto.id} className="mb-3 d-flex align-items-center border-bottom pb-3">
//                 <Image
//                   src={producto.image}
//                   alt={producto.title}
//                   style={{ 
//                     width: "80px", 
//                     height: "80px", 
//                     objectFit: "contain",
//                     borderRadius: "8px"
//                   }}
//                   className="me-3 shadow-sm"
//                 />
                
//                 <div className="flex-grow-1">
//                   <h6 className="mb-1 fw-bold">{producto.title}</h6>
                  
//                   <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0 text-success">
//                       ${producto.price.toFixed(2)}
//                     </p>
//                     <p className="mb-0 badge bg-secondary">
//                       Cantidad: {producto.cantidad}
//                     </p>
//                   </div>
                  
//                   <div className="d-flex justify-content-end mt-2 gap-2">
//                     <Button
//                       variant="outline-success"
//                       size="sm"
//                       onClick={() => agregarAlCarrito(producto)}
//                       style={{ minWidth: "35px" }}
//                     >
//                       +
//                     </Button>
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       onClick={() => restarDelCarrito(producto)}
//                       style={{ minWidth: "35px" }}
//                     >
//                       -
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             <div className="mt-4 pt-3 border-top">
//               <h4 className="text-end fw-bold">
//                 Total: ${calcularTotal().toFixed(2)}
//               </h4>
//             </div>
//           </>
//         )}
//       </Modal.Body>
      
//       <Modal.Footer className="d-flex justify-content-between">
//         <Button 
//           variant="secondary" 
//           onClick={onHide}
//           className="px-4"
//         >
//           Seguir comprando
//         </Button>
//         <Button 
//           variant="primary" 
//           disabled={carrito.length === 0}
//           className="px-4"
//         >
//           Finalizar compra
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CartModal;


// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button, Offcanvas, Image, Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";


// function CartModal({ show, onHide, carrito, agregarAlCarrito, restarDelCarrito, calcularTotal }) {
//   return (
//     <Modal show={show} onHide={onHide} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Carrito de Compras</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {carrito.length === 0 ? (
//           <p>No hay productos en el carrito.</p>
//         ) : (
//           <>
//             {carrito.map((producto) => (
//               <div key={producto.id} className="mb-3 d-flex align-items-center">
//                 <Image
//                   src={producto.image}
//                   alt={producto.title}
//                   style={{ width: "50px", height: "50px", objectFit: "contain" }}
//                   className="me-3"
//                 />
//                 <div className="flex-grow-1">
//                   <h6 className="mb-1">{producto.title}</h6>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0">
//                       <strong>Precio:</strong> ${producto.price}
//                     </p>
//                     <p className="mb-0">
//                       <strong>Cantidad:</strong> {producto.cantidad}
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-end mt-2">
//                     <Button
//                       variant="success"
//                       size="sm"
//                       onClick={() => agregarAlCarrito(producto)}
//                       className="me-2"
//                     >
//                       +
//                     </Button>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => restarDelCarrito(producto)}
//                     >
//                       -
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <h4 className="mt-4">Total: ${calcularTotal()}</h4>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Cerrar
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CartModal;