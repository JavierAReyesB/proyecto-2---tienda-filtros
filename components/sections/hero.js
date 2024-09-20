function loadHeroStyles() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = './styles/components/hero.css'
  document.head.appendChild(link)
}

export function createHero() {
  loadHeroStyles()

  const hero = document.createElement('section')
  hero.className = 'jd-hero'
  hero.innerHTML = `
    <div class="jd-hero__image-container">
      <img src="./assets/images/jd-tiendas-head.jpg" alt="Hero Image" class="jd-hero__image">
    </div>
  `
  return hero
}
