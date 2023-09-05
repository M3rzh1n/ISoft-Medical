import { Component } from '@angular/core';
import { Auth0ResourceModel } from '@app/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer">
      <div class="page-footer-grid">
        <div class="page-footer-grid__info">
          <div class="page-footer-info__message">
            <p class="page-footer-message__headline">
              <span>This is a demo application brought to you by&nbsp;</span>
              <app-page-footer-hyperlink path="https://www.integrity-software.co.il"
                >Integrity-Software</app-page-footer-hyperlink
              >
              <span> and </span>
              <app-page-footer-hyperlink path="https://auth0.com/"
                >Auth0</app-page-footer-hyperlink
              >
            </p>
            
          </div>
          
          <div class="page-footer-info__resource-list">
            <div
              *ngFor="let resource of resourceList"
              class="page-footer-info__resource-list-item"
            >
              <app-page-footer-hyperlink [path]="resource.path">
                {{ resource.label }}
              </app-page-footer-hyperlink>
            </div>
          </div>
        </div>
        <div class="page-footer-grid__brand">
          <div class="page-footer-brand">
            <img
              class="page-footer-brand__logo"
              src="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/main/IsoftLogo.png"
              alt="ISoft"
            />
            <app-page-footer-hyperlink path="https://www.integrity-software.co.il"
              >Integrity-Software</app-page-footer-hyperlink
            >
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class PageFooterComponent {
  resourceList: Auth0ResourceModel[] = [
    {
      path: 'https://auth0.com/why-auth0/',
      label: 'Why Auth0',
    },
    {
      path: 'https://www.integrity-software.co.il/about-us-en/',
      label: 'About Us',
    },
  ];
}
