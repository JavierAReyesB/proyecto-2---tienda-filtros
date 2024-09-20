function loadFooterStyles() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = './styles/components/Footer.css'
  document.head.appendChild(link)
}

export function createFooter() {
  loadFooterStyles()

  const footer = document.createElement('footer')
  footer.className = 'jd-footer'
  footer.innerHTML = `
    <div class="jd-footer__container">
      <div class="jd-footer__section">
        <h4 class="jd-footer__title">Compra con JD</h4>
        <ul class="jd-footer__list">
          <li><a href="#" class="jd-footer__link">Guía de tallas</a></li>
          <li><a href="#" class="jd-footer__link">Buscador de tallas</a></li>
          <li><a href="#" class="jd-footer__link">Descuento estudiantes</a></li>
          <li><a href="#" class="jd-footer__link">Calendario lanzamientos</a></li>
          <li><a href="#" class="jd-footer__link">Incríbete a JDX</a></li>
          <li><a href="#" class="jd-footer__link">JD Blog</a></li>
        </ul>
      </div>
      <div class="jd-footer__section">
        <h4 class="jd-footer__title">Atención al cliente</h4>
        <ul class="jd-footer__list">
          <li><a href="#" class="jd-footer__link">Preguntas frecuentes</a></li>
          <li><a href="#" class="jd-footer__link">Envíos y devoluciones</a></li>
          <li><a href="#" class="jd-footer__link">Seguimiento de envío</a></li>
          <li><a href="#" class="jd-footer__link">Contacto</a></li>
        </ul>
      </div>
      <div class="jd-footer__section">
        <h4 class="jd-footer__title">Aviso legal</h4>
        <ul class="jd-footer__list">
          <li><a href="#" class="jd-footer__link">Términos y condiciones</a></li>
          <li><a href="#" class="jd-footer__link">Promociones y condiciones</a></li>
          <li><a href="#" class="jd-footer__link">Política de privacidad</a></li>
          <li><a href="#" class="jd-footer__link">Política de Cookies</a></li>
          <li><a href="#" class="jd-footer__link">Ajustes de Cookies</a></li>
          <li><a href="#" class="jd-footer__link">Accesibilidad</a></li>
        </ul>
      </div>
    </div>
  `
  return footer
}
