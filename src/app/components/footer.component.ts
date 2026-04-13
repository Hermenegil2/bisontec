import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__brand">
            <div class="navbar__logo" style="font-size: 1.5rem;">
              <img src="assets/icono-bisontec.png" alt="BISONTEC logo" style="width: 36px; height: 36px;">
              <span class="gradient-text">BISONTEC</span>
            </div>
            <p>Facturación inteligente, crecimiento real.<br>El sistema todo-en-uno para pymes, comercios y emprendedores que quieren más.</p>
          </div>
          <div>
            <h4 class="footer__title">Producto</h4>
            <ul class="footer__links">
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#funciones">Funcionalidades</a></li>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer__title">Soporte</h4>
            <ul class="footer__links">
              <li><a href="https://wa.me/595985661288" target="_blank">WhatsApp</a></li>
              <li><a href="mailto:soporte@bisontec.com">Email</a></li>
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Documentación</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer__title">Legal</h4>
            <ul class="footer__links">
              <li><a href="#">Términos de Uso</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <p>&copy; 2026 BISONTEC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {}
