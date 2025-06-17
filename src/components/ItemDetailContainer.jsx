import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const mockProducts = [
  { id: '1', name: 'Remera básica', description: '100% algodón', image: 'https://via.placeholder.com/300' },
  { id: '2', name: 'Campera de invierno', description: 'Con capucha', image: 'https://via.placeholder.com/300' },
  { id: '3', name: 'Jeans clásicos', description: 'Tiro alto', image: 'https://via.placeholder.com/300' },
  { id: '4', name: 'Zapatillas urbanas', description: 'Confort y estilo', image: 'https://via.placeholder.com/300' },
  { id: '5', name: 'Smartphone Galaxy A23', description: 'Pantalla AMOLED', image: 'https://via.placeholder.com/300' },
  { id: '6', name: 'Notebook Lenovo i5', description: '8GB RAM', image: 'https://via.placeholder.com/300' },
  { id: '7', name: 'Auriculares inalámbricos', description: 'Bluetooth 5.0', image: 'https://via.placeholder.com/300' },
  { id: '8', name: 'Tablet 10” HD', description: 'Ideal para streaming', image: 'https://via.placeholder.com/300' },
];

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.find(prod => prod.id === id));
    }, 500);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProduct);
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    alert(`Agregaste ${quantity} unidad(es) de "${product.name}" al carrito.`);
  };

  if (!product) return <p style={{ padding: '2rem' }}>Cargando detalle...</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
