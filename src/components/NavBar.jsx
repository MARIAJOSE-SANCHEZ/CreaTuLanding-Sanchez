import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['ropa', 'tecnologia'];

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <h1>Tienda Online</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/category/${cat}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;



