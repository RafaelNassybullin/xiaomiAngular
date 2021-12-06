import {Component, OnInit} from '@angular/core';
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";

@Component({
  selector: 'app-overflow-orange-blur',
  template: `
    <div class="overflow-blurs">
      <div [ngClass]="'blur-ellipse ' + l" *ngFor="let l of duplicatedOrangeBlurImgClassName">
        <img src="../../../assets/image/blur.png" alt="">
      </div>
      <div [ngClass]="changeTheme.toggleTheme?'overflow-blur overflow-blur-white':'overflow-blur'"></div>
      <div [ngClass]="'reusable-decor-line ' + i" *ngFor="let i of orangeDecorationLinesClassName" >
        <img src="../../../assets/image/decor-line.svg" alt="">
      </div>
       <div class="line-decoration">
        <img src="../../../assets/image/decor-line-mobile.svg" alt="">
      </div>
    </div>
  `,
  styleUrls: ['./overflow-orange-blur.component.scss']
})
export class OverflowOrangeBlurComponent implements OnInit {

  public duplicatedOrangeBlurImgClassName = [
    'blur-elipse-one',
    'blur-elipse-two',
    'blur-elipse-three',
    'blur-elipse-four',
    'blur-elipse-five',
    'blur-elipse-six',
    'blur-elipse-seven',
    'blur-elipse-eight',
    'blur-elipse-nine',
    'blur-elipse-ten',
    'blur-elipse-eleven',
    'blur-elipse-twelve',
  ]
public orangeDecorationLinesClassName = [
  'reusable-decor-line-1',
  'reusable-decor-line-2',
  'reusable-decor-line-3',
  'reusable-decor-line-4',
]



  constructor(public changeTheme:BooleanToggleThemeService) {
  }

  ngOnInit(): void {
  }




}
