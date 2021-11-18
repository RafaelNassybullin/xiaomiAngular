import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-main-page></app-main-page>

    <app-overflow-orange-blur></app-overflow-orange-blur>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
