import { createHeader } from './Header.js'
import { createFooter } from './Footer.js'
import { createHero } from './hero.js'
import { renderProducts } from './products.js'
import { createFilterSection } from './filters.js'
import { getAllProducts } from '../../utils/productsData.js'

export function init() {
  const app = document.getElementById('app')

  if (app) {
    app.appendChild(createHeader())
    app.appendChild(createHero())
    app.appendChild(createFilterSection())

    const products = getAllProducts()
    app.appendChild(renderProducts(products))

    app.appendChild(createFooter())
  } else {
    console.error(
      'El contenedor principal (#app) no se encontró en el documento.'
    )
  }
}
