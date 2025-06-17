import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProducts = [
  { id: '1', name: 'Remera básica', category: 'ropa', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Campera de invierno', category: 'ropa', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Jeans clásicos', category: 'ropa', image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Zapatillas urbanas', category: 'ropa', image: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Smartphone Galaxy A23', category: 'tecnologia', image: 'https://via.placeholder.com/150' },
  { id: '6', name: 'Notebook Lenovo i5', category: 'tecnologia', image: 'https://via.placeholder.com/150' },
  { id: '7', name: 'Auriculares inalámbricos', category: 'tecnologia', image: 'https://via.placeholder.com/150' },
  { id: '8', name: 'Tablet 10” HD', category: 'tecnologia', image: 'https://via.placeholder.com/150' },
];

const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(mockProducts.filter(p => p.category === categoryId));
      } else {
        resolve(mockProducts);
      }
    }, 500);
  });
};

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then(data => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p style={{ padding: '2rem' }}>Cargando productos...</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', padding: '2rem' }}>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
          <h4>{item.name}</h4>
          <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
