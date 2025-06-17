import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then(response => setProduct(response))
      .catch(error => console.error('Error al obtener el producto:', error))
  }, [itemId])

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
  )
}

export default ItemDetailContainer
