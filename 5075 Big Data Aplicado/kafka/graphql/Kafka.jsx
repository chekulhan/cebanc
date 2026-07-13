import React, { useState } from 'react';

export default function Kafka() {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = `
      mutation AddProducto($input: ProductoInput!) {
        addProducto(input: $input)
      }
    `;

    const variables = {
      input: {
        nombreProducto,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad),
      },
    };

    try {
      const response = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();

      if (result.data?.addProducto) {
        setMessage('✅ Producto enviado a Kafka con éxito.');
        setNombreProducto('');
        setPrecio('');
        setCantidad('');
      } else {
        setMessage('❌ Error al enviar producto.');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Error en la conexión con el servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Agregar Producto</h2>

      <label>Nombre del Producto:</label>
      <input
        type="text"
        value={nombreProducto}
        onChange={(e) => setNombreProducto(e.target.value)}
        required
      />

      <label>Precio:</label>
      <input
        type="number"
        step="0.01"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />

      <label>Cantidad:</label>
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        required
      />

      <button type="submit" style={{ marginTop: '10px' }}>Enviar</button>

      {message && <p>{message}</p>}
    </form>
  );
}
