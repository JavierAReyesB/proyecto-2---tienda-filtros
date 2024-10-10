import { createCard } from '../common/cards.js'
import { getAllProducts } from '../../utils/productsData.js'

function loadProductStyles() {
  const existingLink = document.querySelector(
    'link[href="./styles/components/products.css"]'
  )
  if (!existingLink) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = './styles/components/products.css'
    document.head.appendChild(link)
  }
}

export function renderProducts(products) {
  loadProductStyles()

  const productsContainer = document.createElement('div')
  productsContainer.className = 'products-section-container'

  products.forEach((product) => {
    const productCard = createCard({
      imageSrc: product.image,
      title: product.name,
      description: `${product.brand} - ${product.color}`,
      price: product.price,
      buttonText: 'Comprar',
      onButtonClick: () => alert(`Compraste: ${product.name}`)
    })

    productsContainer.appendChild(productCard)
  })

  return productsContainer
}

export function renderFilteredProducts(filters) {
  loadProductStyles()

  const allProducts = getAllProducts()

  const filteredProducts = allProducts.filter((product) => {
    let matches = true

    if (filters.brand) {
      matches =
        matches && product.brand.toLowerCase() === filters.brand.toLowerCase()
    }

    if (filters.color) {
      matches =
        matches &&
        product.color.toLowerCase().includes(filters.color.toLowerCase())
    }

    if (filters.gender) {
      matches =
        matches && product.gender.toLowerCase() === filters.gender.toLowerCase()
    }

    if (filters.price !== undefined) {
      matches = matches && product.price <= filters.price
    }

    return matches
  })

  const existingProductsSection = document.querySelector(
    '.products-section-container'
  )
  if (existingProductsSection) {
    existingProductsSection.remove()
  }

  const newProductsSection = document.createElement('div')
  newProductsSection.className = 'products-section-container'
  if (filters && Object.keys(filters).length > 0) {
    newProductsSection.classList.add('filtered-container')
  }

  const app = document.getElementById('app')
  const footer = document.querySelector('footer')

  // Eliminar mensaje anterior si existe
  const existingMessage = document.querySelector('.suggestion-message')
  if (existingMessage) {
    existingMessage.remove()
  }

  if (filteredProducts.length === 0) {
    const suggestionMessage = document.createElement('p')
    suggestionMessage.textContent =
      'No se encontraron productos con los filtros seleccionados. Aquí tienes algunos productos sugeridos:'
    suggestionMessage.className = 'suggestion-message' // Añadir clase para identificar
    suggestionMessage.style.textAlign = 'center'
    suggestionMessage.style.margin = '20px 0'

    app.insertBefore(suggestionMessage, footer)

    const randomProducts = allProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    randomProducts.forEach((product) => {
      const productCard = createCard({
        imageSrc: product.image,
        title: product.name,
        description: `${product.brand} - ${product.color}`,
        price: product.price,
        buttonText: 'Comprar',
        onButtonClick: () => alert(`Compraste: ${product.name}`)
      })

      newProductsSection.appendChild(productCard)
    })
  } else {
    filteredProducts.forEach((product) => {
      const productCard = createCard({
        imageSrc: product.image,
        title: product.name,
        description: `${product.brand} - ${product.color}`,
        price: product.price,
        buttonText: 'Comprar',
        onButtonClick: () => alert(`Compraste: ${product.name}`)
      })

      newProductsSection.appendChild(productCard)
    })
  }

  app.insertBefore(newProductsSection, footer)
}

