const products = [
  {
    id: '1',
    name: 'Producto A',
    description: 'Descripción del Producto A',
    price: 1000,
    image: '/f1.jpg',
    category: 'categoria1'
  },
  {
    id: '2',
    name: 'Producto B',
    description: 'Descripción del Producto B',
    price: 1500,
    image: '/f2.jpg',
    category: 'categoria2'
  },
  {
    id: '3',
    name: 'Producto C',
    description: 'Descripción del Producto C',
    price: 2000,
    image: '/f3.jpg',
    category: 'categoria1'
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id)
      product ? resolve(product) : reject('Producto no encontrado')
    }, 500)
  })
}
