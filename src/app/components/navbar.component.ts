import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="container navbar__inner">
        <a href="#" class="navbar__logo">
          <img src="assets/icono-bisontec.png" alt="BISONTEC logo" style="width: 36px; height: 36px;">
          <span class="gradient-text">BISONTEC</span>
        </a>
        <div class="navbar__nav">
          <a href="#beneficios" class="navbar__link">Beneficios</a>
          <a href="#funciones" class="navbar__link">Funciones</a>
          <a href="#faq" class="navbar__link">FAQ</a>
          <a href="https://wa.me/595985661288?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20BISONTEC" target="_blank" class="btn btn--primary navbar__cta">
            Solicitar Demo
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {}
