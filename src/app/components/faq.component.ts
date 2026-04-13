import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section class="section" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="label">Preguntas Frecuentes</span>
          <h2 class="heading-lg">¿Tenés <span class="gradient-text">dudas</span>?</h2>
          <p>Acá están las respuestas a las preguntas más comunes. Si no encontrás la tuya, escribinos por WhatsApp.</p>
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
          @for (item of faqItems; track item.question) {
            <div class="faq-item" [class.active]="item.isOpen" (click)="toggleFaq(item)">
              <button class="faq-question">{{ item.question }}</button>
              <div class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          }
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
export class FaqComponent {
  faqItems = [
    {
      question: '¿Qué es la facturación electrónica y es obligatoria?',
      answer: 'La facturación electrónica es la emisión de comprobantes fiscales en formato digital, válidos ante la SETAC (Subsecretaría de Estado de Administración Tributaria). En Paraguay, es obligatoria para contribuyentes seleccionados por la DNIT. BISONTEC te permite generar estos comprobantes de forma automática y cumplir con la normativa sin complicaciones.',
      isOpen: false
    },
    {
      question: '¿Necesito conocimientos técnicos para usar BISONTEC?',
      answer: 'No. BISONTEC está diseñado para ser intuitivo y fácil de usar desde el primer día. No necesitás instalar nada complejo ni tener conocimientos técnicos. Si sabés usar un celular, sabés usar BISONTEC. Además, ofrecemos capacitación inicial y soporte continuo.',
      isOpen: false
    },
    {
      question: '¿Puedo migrar datos de mi sistema actual?',
      answer: 'Sí. Nuestro equipo te ayuda a migrar toda tu información: clientes, productos, stock histórico y datos fiscales. El proceso es rápido y seguro. No perdés nada en la transición.',
      isOpen: false
    },
    {
      question: '¿Qué pasa si me quedo sin internet?',
      answer: 'BISONTEC funciona en la nube, lo que garantiza estabilidad y backups automáticos. Si tenés una caída temporal de internet, el sistema se reconecta automáticamente y no perdés datos. Para máxima confiabilidad, recomendamos una conexión estable.',
      isOpen: false
    },
    {
      question: '¿Ofrecen período de prueba gratuito?',
      answer: 'Sí. Podés probar BISONTEC gratis durante 30 días con todas las funcionalidades del plan Inicial. Sin tarjeta de crédito. Sin compromiso. Queremos que lo pruebes a fondo antes de decidir.',
      isOpen: false
    },
    {
      question: '¿Cómo es el soporte técnico?',
      answer: 'Ofrecemos soporte por email en el plan Inicial, soporte prioritario por WhatsApp y email en el plan Profesional, y soporte dedicado 24/7 en el plan Empresarial. Nuestro tiempo de respuesta promedio es de menos de 2 horas en horario laboral.',
      isOpen: false
    },
    {
      question: '¿BISONTEC cumple con las normativas de la SETAC/DNIT?',
      answer: 'Absolutamente. BISONTEC está actualizado con las últimas normativas de la SETAC y la DNIT de Paraguay, y se actualiza automáticamente cuando hay cambios en la legislación fiscal. Incluimos facturación electrónica con validez legal y todos los comprobantes requeridos.',
      isOpen: false
    },
    {
      question: '¿Puedo usar BISONTEC desde el celular?',
      answer: 'Sí. BISONTEC es 100% web y responsive. Podés acceder desde cualquier dispositivo: computadora, tablet o celular. No necesitás descargar ninguna app. Todo funciona desde el navegador.',
      isOpen: false
    },
    {
      question: '¿Hay contrato de permanencia?',
      answer: 'No. Podés cancelar cuando quieras sin penalización. No creemos en atar a nuestros clientes. Si BISONTEC no te conviene, te podés ir. Pero el 96% de nuestros clientes se quedan.',
      isOpen: false
    }
  ];

  toggleFaq(item: any): void {
    // Close all other items
    this.faqItems.forEach(i => {
      if (i !== item) {
        i.isOpen = false;
      }
    });
    // Toggle clicked item
    item.isOpen = !item.isOpen;
  }
}
