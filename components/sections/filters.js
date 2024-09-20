import { renderFilteredProducts } from './products.js'

function loadFilterStyles() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = './styles/components/filters.css'
  document.head.appendChild(link)
}

export function createFilterSection() {
  loadFilterStyles()

  const filterSection = document.createElement('section')
  filterSection.className = 'jd-filter-section'
  filterSection.innerHTML = `
    <div class="jd-filter-section__container">
      <select id="filter-brand" class="jd-filter-section__select">
        <option value="">Marca</option>
        <option value="Nike">Nike</option>
        <option value="New Balance">New Balance</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
        <option value="Asics">Asics</option>
        <option value="Reebok">Reebok</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Converse">Converse</option>
        <option value="Vans">Vans</option>
        <option value="Saucony">Saucony</option>
        <option value="Fila">Fila</option>
        <option value="Mizuno">Mizuno</option>
        <option value="Brooks">Brooks</option>
        <option value="Hoka One One">Hoka One One</option>
        <option value="On">On</option>
        <option value="Salomon">Salomon</option>
      </select>
      
      <select id="filter-color" class="jd-filter-section__select">
        <option value="">Color</option>
        <option value="Blanco">Blanco</option>
        <option value="Negro">Negro</option>
        <option value="Gris">Gris</option>
        <option value="Azul">Azul</option>
        <option value="Rojo">Rojo</option>
      </select>

      <select id="filter-gender" class="jd-filter-section__select">
        <option value="">Género</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
        <option value="Unisex">Unisex</option>
      </select>
      
      <input type="number" id="filter-price" class="jd-filter-section__input" placeholder="Precio máximo">

      <button id="apply-filters" class="jd-filter-section__button">Filtrar</button>
      <button id="clear-filters" class="jd-filter-section__button">Limpiar</button>
    </div>

    <button class="jd-filter-section__toggle">
      <span class="jd-filter-section__arrow">&#x25BC;</span>
    </button>
  `

  const filterContainer = filterSection.querySelector(
    '.jd-filter-section__container'
  )
  filterContainer.style.display = 'none'

  const toggleButton = filterSection.querySelector('.jd-filter-section__toggle')
  toggleButton.addEventListener('click', () => {
    const isVisible = filterContainer.style.display === 'flex'
    filterContainer.style.display = isVisible ? 'none' : 'flex'
    toggleButton.querySelector('.jd-filter-section__arrow').textContent =
      isVisible ? '▼' : '▲'
  })

  const applyButton = filterSection.querySelector('#apply-filters')
  applyButton.addEventListener('click', () => {
    const brand = document.getElementById('filter-brand').value.trim()
    const color = document.getElementById('filter-color').value.trim()
    const gender = document.getElementById('filter-gender').value.trim()
    const price = parseFloat(document.getElementById('filter-price').value)

    const filters = {
      brand: brand || undefined,
      color: color || undefined,
      gender: gender || undefined,
      price: !isNaN(price) ? price : undefined
    }

    renderFilteredProducts(filters)
  })

  const clearButton = filterSection.querySelector('#clear-filters')
  clearButton.addEventListener('click', () => {
    document.getElementById('filter-brand').value = ''
    document.getElementById('filter-color').value = ''
    document.getElementById('filter-gender').value = ''
    document.getElementById('filter-price').value = ''
    renderFilteredProducts({})
  })

  return filterSection
}
