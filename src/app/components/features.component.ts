import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="section" id="funciones">
      <div class="container">
        <div class="section-header">
          <span class="label">Funcionalidades</span>
          <h2 class="heading-lg">Herramientas <span class="gradient-text">poderosas y simples</span></h2>
          <p>Todo lo que necesitás en un solo lugar. Sin funciones inútiles. Sin curvas de aprendizaje eternas.</p>
        </div>
        <div class="grid-3">
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Factura Preimpresa</h3>
            <p class="feature-card__desc">Generá facturas listas para imprimir con el formato que cumple todas las normativas. Personalizá con tu logo y datos de contacto.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Autofactura</h3>
            <p class="feature-card__desc">Tus clientes pueden generar sus propias facturas desde un portal simple. Reducí tu carga administrativa y acelerá el proceso de cobro.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Facturación Electrónica</h3>
            <p class="feature-card__desc">Emití comprobantes electrónicos válidos ante AFIP. Conexión directa, sin intermediarios. Cumplí con la normativa sin complicaciones.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Reportes y Estadísticas</h3>
            <p class="feature-card__desc">Visualizá ventas, stock, facturación y tendencias en dashboards intuitivos. Tomá decisiones informadas con datos reales, no suposiciones.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Multiusuario</h3>
            <p class="feature-card__desc">Creá usuarios con permisos diferenciados. Cada miembro de tu equipo accede a lo que necesita, sin riesgos innecesarios.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Control de Stock</h3>
            <p class="feature-card__desc">Monitoreo en tiempo real de tu inventario. Alertas de stock bajo, movimientos automáticos y reportes de rotación de productos.</p>
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
export class FeaturesComponent {}
