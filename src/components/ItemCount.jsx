import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    onAdd(count)
  }

  return (
    <div className="item-count">
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

