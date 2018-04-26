/**
 * Create events for when HubSpot forms/ctas are loaded onto the page.
 *
 * @example
 *   document.addEventListener('HubSpotFormLoaded', ...);
 * @example
 *   document.addEventListener('HubSpotCTALoaded', ...);
 */
class HubSpotEventListeners {

  /**
   * @constructor
   */
  constructor() {
    this.elapsed = 0;

    this.interval = setInterval(() => {
      this.elapsed += 500;

      if (this.elapsed >= 8000) {
        clearInterval(this.interval);
        return;
      }

      this.trackForms();
      this.trackCTAs();
    }, 500);
  }

  /**
   * Track forms.
   */
  trackForms() {
    let forms = document.querySelectorAll('form.hs-form');

    for (let index = 0; index < forms.length; index++) {
      if (forms[index].getAttribute('data-has-form-loaded') === null) {
        let event = new CustomEvent('HubSpotFormLoaded', {
          detail: {
            form: forms[index],
            formID: forms[index].getAttribute('data-form-id')
          }
        });
        document.dispatchEvent(event);
        forms[index].setAttribute('data-has-form-loaded', true);
      }
    }
  }

  /**
   * Track CTA's.
   */
  trackCTAs() {
    let ctas = document.querySelectorAll('.hs-cta-wrapper');

    for (let index = 0; index < ctas.length; index++) {
      if (ctas[index].getAttribute('data-has-cta-loaded') === null) {
        let event = new CustomEvent('HubSpotCTALoaded', {
          detail: {
            cta: ctas[index],
            ctaID: ctas[index].getAttribute('id').replace('hs-cta-wrapper-', '')
          }
        });
        document.dispatchEvent(event);
        ctas[index].setAttribute('data-has-cta-loaded', true);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => new HubSpotEventListeners());
