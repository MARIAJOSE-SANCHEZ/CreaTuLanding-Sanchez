import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
  { id: '1', name: 'Remera', description: 'Remera de algodón con diseño moderno.' },
  { id: '2', name: 'Celular', description: 'Smartphone de última generación.' },
];

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.find(prod => prod.id === id));
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProduct);
  }, [itemId]);

  if (!product) return <p style={{ padding: '2rem' }}>Cargando detalle...</p>;

  return (
    <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        background: '#6200ea',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;

