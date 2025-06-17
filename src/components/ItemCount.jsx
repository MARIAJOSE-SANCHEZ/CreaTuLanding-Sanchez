import React, { useState } from 'react';

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => count < stock && setCount(count + 1)}>+</button>
      </div>
      <button
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#6200ea',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
