import ItemCount from './ItemCount'

const ItemDetail = ({ id, name, description, price, image }) => {
  const handleAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidad(es) de "${name}" al carrito`)
    // Acá podrías agregar lógica para actualizar el carrito en el futuro
  }

  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <img src={image} alt={name} width="300" />
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  )
}

export default ItemDetail
