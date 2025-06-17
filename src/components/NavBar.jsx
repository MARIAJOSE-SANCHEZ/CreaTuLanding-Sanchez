import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Mi Tienda</h2>
      <ul className="nav-links">
        <li><Link to="/">Todos</Link></li>
        <li><Link to="/category/categoria1">Categoría 1</Link></li>
        <li><Link to="/category/categoria2">Categoría 2</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar


