import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-without-tabs',
  template: `
    <div class="mobile-row-tab-container">
      <div class="block-mobile-tab" *ngFor="let i of mobileSecuredata">
        <h3>{{i.title}}</h3>
        <p>{{i.paragraph}}</p>
        <div class="block-mobile-image">
          <img [src]="'assets/image/'+i.image" alt="">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./mobile-without-tabs.component.scss']
})
export class MobileWithoutTabsComponent implements OnInit {
  @Input() mobileSecuredata:any
  constructor() {}
  ngOnInit(): void {}






}
