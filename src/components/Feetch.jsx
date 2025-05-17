import { useState, useEffect } from 'react';

function Feetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.ejemplo.com/datos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.nombre}</p>
      ))}
    </div>
  );
}


export default Feetch;