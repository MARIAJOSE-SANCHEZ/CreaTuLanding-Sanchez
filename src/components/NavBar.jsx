import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
      <Link to="/categoria/ropa" style={{ marginRight: '1rem' }}>Ropa</Link>
      <Link to="/categoria/calzado" style={{ marginRight: '1rem' }}>Calzado</Link>
      <Link to="/categoria/accesorios">Accesorios</Link>
    </nav>
  );
}

export default NavBar;

