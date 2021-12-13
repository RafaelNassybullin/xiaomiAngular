import {Component, OnInit} from '@angular/core';
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";

interface cardDataModel {
  imgCard: string
  titleCard: string
  titleParagraph: string
}

@Component({
  selector: 'app-lacone-design',
  template: `
    <section>
      <h2 [ngStyle]="laconeChangeTheme.toggleTheme?{color:'#FF4C0D'}:{}">Лаконичный современный дизайн, <br> в котором нет ничего лишнего</h2>
      <div class="block-wrapper">
        <div class="mobile-wrapper" *ngFor="let i of cardData">
          <div class="block">
            <div class="image">
              <img [src]="i.imgCard" alt="">
            </div>
            <h3>{{i.titleCard}}</h3>
            <p>{{i.titleParagraph}}</p>
          </div>
          <div class="mobile-text">
            <h3 [ngStyle]="laconeChangeTheme.toggleTheme?{color:'#000'}:{}" class="mobile-h3">{{i.titleCard}}</h3>
            <p [ngStyle]="laconeChangeTheme.toggleTheme?{color:'#000'}:{}" class="mobile-p">{{i.titleParagraph}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./lacone-design.component.scss']
})
export class LaconeDesignComponent implements OnInit {

  constructor(public laconeChangeTheme: BooleanToggleThemeService) {
  }

  cardData: Array<cardDataModel> = [
    {
      imgCard: '../../../assets/image/111.webp',
      titleCard: 'Минималистичный дизайн',
      titleParagraph: 'Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место.  Одного прикосновения достаточно, чтобы запустить самокат.'
    },
    {
      imgCard: '../../../assets/image/222.webp',
      titleCard: 'Удобная панель управления',
      titleParagraph: 'Удобно расположенные элементы управления. Отображение 8 типов данных в реальном времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая информация.'
    }
  ]

  ngOnInit(): void {
  }
}
