function loadHeaderStyles() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = './styles/components/Header.css'
  document.head.appendChild(link)
}

export function createHeader() {
  loadHeaderStyles()

  const header = document.createElement('header')
  header.className = 'jd-header'

  header.innerHTML = `
    <div class="jd-header__container">
      <img src="./assets/images/JD_Sports-Logo.wine.png" alt="JD Logo" class="jd-header__logo">
      <div class="jd-header__hamburger">
        <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png" alt="Hamburger Menu" width="30">
      </div>
      <nav class="jd-header__nav">
        <ul class="jd-header__nav-list">
          <li><a href="#" class="jd-header__link">Hombre</a></li>
          <li><a href="#" class="jd-header__link">Mujer</a></li>
          <li><a href="#" class="jd-header__link">Niños</a></li>
          <li><a href="#" class="jd-header__link">Ofertas</a></li>
        </ul>
      </nav>
      <div class="jd-header__icons">
        <i class="jd-header__icon jd-header__icon--filter"></i>
        <i class="jd-header__icon jd-header__icon--profile"></i>
        <i class="jd-header__icon jd-header__icon--cart"></i>
      </div>
    </div>
  `

  const hamburger = header.querySelector('.jd-header__hamburger')
  const nav = header.querySelector('.jd-header__nav')

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('is-open')
  })

  return header
}
