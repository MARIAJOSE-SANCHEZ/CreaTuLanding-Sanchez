import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts().then((response) => {
      if (categoryId) {
        const filtered = response.filter(prod => prod.category === categoryId)
        setProducts(filtered)
      } else {
        setProducts(response)
      }
    }).catch((error) => {
      console.error('Error al obtener productos:', error)
    })
  }, [categoryId])

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo de productos'}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
