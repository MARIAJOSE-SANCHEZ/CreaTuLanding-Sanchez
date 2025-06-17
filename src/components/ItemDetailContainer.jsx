import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
  { id: '1', name: 'Producto A', description: 'Descripción del Producto A' },
  { id: '2', name: 'Producto B', description: 'Descripción del Producto B' },
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

  if (!product) return <p style={{ padding: '2rem' }}>Cargando...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Agregar al carrito (futura funcionalidad)</p>
    </div>
  );
};

export default ItemDetailContainer;
