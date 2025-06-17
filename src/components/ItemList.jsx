import { Link } from 'react-router-dom'

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} width="200" />
          <p>Precio: ${product.price}</p>
          <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  )
}

export default ItemList
