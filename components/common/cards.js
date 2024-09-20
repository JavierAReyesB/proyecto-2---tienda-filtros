export function createCard({
  imageSrc,
  title,
  description,
  price,
  buttonText,
  onButtonClick
}) {
  const card = document.createElement('div')
  card.className = 'generic-card'

  card.innerHTML = `
    <img src="${imageSrc}" alt="${title}" class="generic-card__image">
    <div class="generic-card__content">
      <p class="generic-card__brand">${description}</p> 
      <div class="generic-card__details">
        <h3 class="generic-card__title">${title}</h3>
        <p class="generic-card__price">${price} €</p>
      </div>
      ${
        buttonText
          ? `<button class="generic-card__button">${buttonText}</button>`
          : ''
      }
    </div>
  `

  if (buttonText && onButtonClick) {
    const button = card.querySelector('.generic-card__button')
    button.addEventListener('click', onButtonClick)
  }

  return card
}
