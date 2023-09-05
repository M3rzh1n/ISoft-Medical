import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--medical"> 
      <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="ISoft Med logo" />
      </div>
      <h1 class="hero-banner__headline"></h1>
      
      <a
        id="code-sample-link"
        class="button button--secondary"
        href="https://integrity-software.co.il"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out our new Subscription Packages →
      </a>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/isoft-med.png';
}
