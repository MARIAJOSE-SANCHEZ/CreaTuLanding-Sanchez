import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProducts = [
  { id: '1', name: 'Remera', category: 'ropa' },
  { id: '2', name: 'Celular', category: 'tecnologia' },
  { id: '3', name: 'Campera', category: 'ropa' },
];

const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(mockProducts.filter(prod => prod.category === categoryId));
      } else {
        resolve(mockProducts);
      }
    }, 1000);
  });
};

const ItemListContainer = ({ greeting }) => {
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

  return (
    <section style={{ padding: '2rem' }}>
      {greeting && <h2>{greeting}</h2>}
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
        }}>
          {items.map((item) => (
            <li key={item.id} style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              background: '#f0f0f0'
            }}>
              <Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ItemListContainer;


