import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  template: `
    <section class="section section--dark" id="planes">
      <div class="container">
        <div class="section-header">
          <span class="label">Planes</span>
          <h2 class="heading-lg">Elegí el plan que <span class="gradient-text">escala con vos</span></h2>
          <p>Sin contratos largos. Sin costos ocultos. Empezá gratis y crecé cuando quieras.</p>
        </div>
        <div class="grid-3">
          <div class="pricing-card">
            <h3 class="pricing-card__name">Inicial</h3>
            <p class="text-muted text-sm">Para emprendedores que arrancan</p>
            <div class="pricing-card__price">Gratis <span>/ 30 días</span></div>
            <ul class="pricing-card__features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Hasta 50 facturas/mes
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Control de stock básico
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                1 usuario
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Soporte por email
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Factura preimpresa
              </li>
            </ul>
            <a href="https://wa.me/595985661288?text=Hola%2C%20quiero%20empezar%20con%20el%20plan%20Inicial%20de%20BISONTEC" target="_blank" class="btn btn--secondary" style="width: 100%;">
              Empezar Gratis
            </a>
          </div>
          <div class="pricing-card pricing-card--featured">
            <div class="pricing-card__badge">Más Popular</div>
            <h3 class="pricing-card__name">Profesional</h3>
            <p class="text-muted text-sm">Para comercios y PyMEs en crecimiento</p>
            <div class="pricing-card__price gradient-text">Consultar</div>
            <ul class="pricing-card__features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Facturas ilimitadas
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Facturación electrónica
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Autofactura
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Stock avanzado con alertas
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Hasta 5 usuarios
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Reportes y estadísticas
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Soporte prioritario
              </li>
            </ul>
            <a href="https://wa.me/595985661288?text=Hola%2C%20quiero%20info%20del%20plan%20Profesional%20de%20BISONTEC" target="_blank" class="btn btn--primary" style="width: 100%;">
              Solicitar Demo
            </a>
          </div>
          <div class="pricing-card">
            <h3 class="pricing-card__name">Empresarial</h3>
            <p class="text-muted text-sm">Para empresas con operaciones complejas</p>
            <div class="pricing-card__price gradient-text">A medida</div>
            <ul class="pricing-card__features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Todo lo del plan Profesional
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Usuarios ilimitados
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Multi-sucursal
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                API de integración
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Personalización avanzada
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Soporte dedicado 24/7
              </li>
            </ul>
            <a href="https://wa.me/595985661288?text=Hola%2C%20quiero%20info%20del%20plan%20Empresarial%20de%20BISONTEC" target="_blank" class="btn btn--secondary" style="width: 100%;">
              Contactar Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PricingComponent {}
