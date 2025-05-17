import { useEffect, useState } from 'react';
import './ProductList.css'; // Opcional: estilos

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llamada a la API con fetch
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar los productos: {error}</div>;

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;