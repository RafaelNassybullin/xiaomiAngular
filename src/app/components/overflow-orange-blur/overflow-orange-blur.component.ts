import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overflow-orange-blur',
  template: `
    <div class="overflow-blurs">
      <div class="blur-ellipse">
        <img src="../../../assets/image/blur.png" alt="">
      </div>
      <div class="overflow-blur"></div>
    </div>
  `,
  styleUrls: ['./overflow-orange-blur.component.scss']
})
export class OverflowOrangeBlurComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
