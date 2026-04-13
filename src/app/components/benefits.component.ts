import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  template: `
    <section class="section section--dark" id="beneficios">
      <div class="container">
        <div class="section-header">
          <span class="label">¿Por qué BISONTEC?</span>
          <h2 class="heading-lg">Todo lo que necesitás para <span class="gradient-text">crecer sin límites</span></h2>
          <p>Dejá de perder tiempo con procesos manuales. Automatizá, controlá y escalá tu negocio con herramientas profesionales.</p>
        </div>
        <div class="grid-2">
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div>
              <h3 class="benefit-card__title">Automatización Total de Facturación</h3>
              <p class="benefit-card__desc">Generá facturas preimpresas, autofacturas y facturas electrónicas en segundos. Sin errores manuales. Sin duplicados. El sistema hace el trabajo pesado por vos.</p>
            </div>
          </div>
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div>
              <h3 class="benefit-card__title">Control de Inventario en Tiempo Real</h3>
              <p class="benefit-card__desc">Sabé exactamente qué tenés en stock, qué se vende más y cuándo reponer. Alertas automáticas para que nunca te quedes sin productos clave.</p>
            </div>
          </div>
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="benefit-card__title">Cumplimiento Fiscal Garantizado</h3>
              <p class="benefit-card__desc">Olvodate de multas y problemas con la SETAC. BISONTEC está actualizado con las últimas normativas fiscales de Paraguay. Facturación electrónica 100% conforme.</p>
            </div>
          </div>
          <div class="benefit-card">
            <div class="benefit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h3 class="benefit-card__title">Ahorro de Tiempo y Reducción de Errores</h3>
              <p class="benefit-card__desc">Lo que antes te llevaba horas, ahora lleva minutos. Eliminá los errores de carga manual y enfocate en lo que importa: hacer crecer tu negocio.</p>
            </div>
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
export class BenefitsComponent {}
