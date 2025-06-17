import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(p => p.id === parseInt(itemId)));
      }, 1000);
    });

    fetchItem.then(setProducto);
  }, [itemId]);

  return (
    <section style={{ padding: '2rem' }}>
      {producto ? (
        <div>
          <h2>{producto.nombre}</h2>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px' }} />
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <button>Agregar al carrito</button>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;

