// src/components/ProductoModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductoModal = ({ show, onHide, producto, onSave }) => {
  const [productoEdit, setProductoEdit] = useState(producto);

  useEffect(() => {
    setProductoEdit(producto);
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoEdit({ ...productoEdit, [name]: value });
  };

  const handleSubmit = () => {
    onSave(productoEdit);
  };

  if (!productoEdit) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{productoEdit.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={productoEdit.image} alt={productoEdit.title} style={{ width: '100%', marginBottom: '1rem' }} />
        <p><strong>Precio:</strong> ${parseFloat(productoEdit.price).toFixed(2)}</p>
        <p><strong>Categoría:</strong> {productoEdit.category}</p>
        <p><strong>Descripción:</strong> {productoEdit.description}</p>
        <p><strong>Rating:</strong> ⭐ {productoEdit.rating?.rate} ({productoEdit.rating?.count} reviews)</p>

        <hr />

        <h6>Editar información (opcional):</h6>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control name="title" value={productoEdit.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" step="0.01" name="price" value={productoEdit.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={productoEdit.description} onChange={handleChange} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
        <Button variant="primary" onClick={handleSubmit}>Guardar en mi catálogo</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductoModal;