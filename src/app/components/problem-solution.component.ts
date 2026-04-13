import { Component } from '@angular/core';

@Component({
  selector: 'app-problem-solution',
  standalone: true,
  template: `
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">El Problema y Nuestra Solución</span>
          <h2 class="heading-lg">¿Te suena <span class="gradient-text">familiar</span>?</h2>
          <p>Si algún problema te resulta conocido, BISONTEC ya tiene la solución.</p>
        </div>
        <div class="problem-solution">
          <div class="ps-column">
            <h3 class="ps-column__title ps-column__title--problem">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              Problemas Comunes
            </h3>
            <div class="ps-item ps-item--problem">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p class="ps-item__text"><strong>Errores manuales</strong> en facturación que generan reclamos y pérdida de credibilidad.</p>
            </div>
            <div class="ps-item ps-item--problem">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p class="ps-item__text"><strong>Pérdida de stock</strong> sin controlar: productos que desaparecen, vencimientos que no detectás.</p>
            </div>
            <div class="ps-item ps-item--problem">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p class="ps-item__text"><strong>Multas por incumplimiento</strong> de normativas fiscales que no sabías que cambiaron.</p>
            </div>
            <div class="ps-item ps-item--problem">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p class="ps-item__text"><strong>Horas perdidas</strong> haciendo facturas a mano, revisando planillas y corrigendo errores.</p>
            </div>
            <div class="ps-item ps-item--problem">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p class="ps-item__text"><strong>Sin información clara</strong>: no sabés qué vendés más, qué margen tenés, ni cómo va el mes.</p>
            </div>
          </div>
          <div class="ps-column">
            <h3 class="ps-column__title ps-column__title--solution">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Cómo BISONTEC lo Soluciona
            </h3>
            <div class="ps-item ps-item--solution">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <p class="ps-item__text"><strong>Facturación automatizada</strong> que elimina errores humanos. Validaciones automáticas y datos pre-cargados.</p>
            </div>
            <div class="ps-item ps-item--solution">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <p class="ps-item__text"><strong>Control de stock en tiempo real</strong> con alertas automáticas cuando un producto está por agotarse.</p>
            </div>
            <div class="ps-item ps-item--solution">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <p class="ps-item__text"><strong>Actualización fiscal automática</strong>. BISONTEC se actualiza solo con las nuevas normativas de AFIP.</p>
            </div>
            <div class="ps-item ps-item--solution">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <p class="ps-item__text"><strong>Ahorro de +80% del tiempo</strong> en tareas administrativas. Lo que antes llevaba horas, ahora lleva minutos.</p>
            </div>
            <div class="ps-item ps-item--solution">
              <svg class="ps-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <p class="ps-item__text"><strong>Dashboards claros y accionables</strong>. Ventas, stock, tendencias y reportes para decisiones inteligentes.</p>
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
export class ProblemSolutionComponent {}
