import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
  { id: '1', name: 'Producto A', category: 'ropa' },
  { id: '2', name: 'Producto B', category: 'tecnologia' },
  { id: '3', name: 'Producto C', category: 'ropa' },
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

  useEffect(() => {
    getProducts(categoryId).then(setItems);
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem' }}>
      {greeting && <h2>{greeting}</h2>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`/item/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemListContainer;

