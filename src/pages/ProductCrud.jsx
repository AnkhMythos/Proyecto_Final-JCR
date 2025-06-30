import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

const API_URL = "https://685ffd7dc55df675589fd403.mockapi.io/fakestoreapi/productos";

const ProductCrud = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [currentItem, setCurrentItem] = useState({
    id: null,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener items");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      alert("Error cargando datos");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setCurrentItem((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setCurrentItem((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreate = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al crear item: ${errorData.message || res.statusText}`);
      }

      await fetchItems();
      handleCloseModal();
    } catch (error) {
      alert("Error creando item");
      console.error("Error detallado:", error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/${currentItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al actualizar item: ${errorData.message || res.statusText}`);
      }

      await fetchItems();
      handleCloseModal();
    } catch (error) {
      alert("Error actualizando item");
      console.error("Error detallado:", error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este item?")) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar item");
        await fetchItems();
      } catch (error) {
        alert("Error eliminando item");
        console.error(error);
      }
    }
  };

  const openCreateModal = () => {
    setModalMode("create");
    setCurrentItem({
      id: null,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    });
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setModalMode("edit");
    setCurrentItem({
      id: item.id,
      title: item.title || "",
      price: item.price || 0,
      description: item.description || "",
      category: item.category || "",
      image: item.image || "",
      rating: {
        rate: item.rating?.rate || 0,
        count: item.rating?.count || 0,
      },
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h1>CRUD</h1>

      <Button variant="primary" onClick={openCreateModal} className="mb-3">
        Crear nuevo item
      </Button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No hay items
                </td>
              </tr>
            )}
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => openEditModal(item)}
                    className="me-2"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === "create" ? "Crear nuevo item" : "Editar item"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campos del formulario */}
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese título"
                name="title"
                value={currentItem.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese precio"
                name="price"
                value={currentItem.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese descripción"
                name="description"
                value={currentItem.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese categoría"
                name="category"
                value={currentItem.category}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese URL de la imagen"
                name="image"
                value={currentItem.image}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRatingRate">
              <Form.Label>Calificación (rate)</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                placeholder="Ingrese calificación"
                name="rating.rate"
                value={currentItem.rating.rate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRatingCount">
              <Form.Label>Número de calificaciones (count)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese número de calificaciones"
                name="rating.count"
                value={currentItem.rating.count}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={modalMode === "create" ? handleCreate : handleUpdate}
          >
            {modalMode === "create" ? "Crear" : "Actualizar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductCrud;