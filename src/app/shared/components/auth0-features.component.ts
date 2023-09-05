import { Component } from '@angular/core';

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title">Explore Auth0 Features</h2>
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="Medical Services and Care"
          description="Learn about our medical services provided by our team of experts."
          resourceUrl="/"
          icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/809e05311863c0116ef702fbc3bacc85831c14bf/medservices.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Patients and Visitors"
          description="Learn how we strive to keep you comfortable during your stay with us."
          resourceUrl="/"
          icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/809e05311863c0116ef702fbc3bacc85831c14bf/patients.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="My Chart"
          description="Schedule appointments, view test results and more."
          resourceUrl="/"
          icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/809e05311863c0116ef702fbc3bacc85831c14bf/mychart.svg"
        ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {}
