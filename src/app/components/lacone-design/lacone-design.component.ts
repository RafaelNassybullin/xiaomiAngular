import { Component, OnInit } from '@angular/core';

interface cardDataModel{
  imgCard:string
  titleCard:string
  titleParagraph:string
}

@Component({
  selector: 'app-lacone-design',
  template: `
    <section>
      <h2>Лаконичный современный дизайн, <br> в котором нет ничего лишнего</h2>
      <div class="block-wrapper">
        <div class="block" *ngFor="let i of cardData">
            <div class="image">
              <img [src]="i.imgCard" alt="">
            </div>
            <h3>{{i.titleCard}}</h3>
            <p>{{i.titleParagraph}}</p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./lacone-design.component.scss']
})
export class LaconeDesignComponent implements OnInit {
  constructor() { }

cardData:any = [
    {
      imgCard:'../../../assets/image/111.png',
      titleCard:'Минималистичный дизайн',
      titleParagraph:'Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место.  Одного прикосновения достаточно, чтобы запустить самокат.'
    },
    {
      imgCard:'../../../assets/image/222.png',
      titleCard:'Удобная панель управления',
      titleParagraph:'Удобно расположенные элементы управления. Отображение 8 типов данных в реальном времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая информация.'
    }
  ]
  ngOnInit(): void {}
}
