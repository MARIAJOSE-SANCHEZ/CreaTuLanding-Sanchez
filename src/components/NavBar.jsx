import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>Mi Tienda</Link>
      <ul style={styles.menu}>
        <li><Link to="/category/ropa" style={styles.link}>Ropa</Link></li>
        <li><Link to="/category/tecnologia" style={styles.link}>Tecnología</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#6200ea',
    color: 'white',
  },
  logo: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
  },
};

export default NavBar;


