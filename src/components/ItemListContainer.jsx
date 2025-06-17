import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productos';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productos.filter(prod => prod.categoria === categoryId));
        } else {
          resolve(productos);
        }
      }, 1000);
    });

    fetchData.then(setItems);
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '1rem', width: '200px' }}>
            <img src={item.imagen} alt={item.nombre} style={{ width: '100%' }} />
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>
            <Link to={`/item/${item.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;

