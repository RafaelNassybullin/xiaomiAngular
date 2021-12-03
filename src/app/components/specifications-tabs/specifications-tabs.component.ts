import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-specifications-tabs',
  template: `
        <section class="specifications-tabs">
      <h1>Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км</h1>
      <div class="tabs-container">
        <div class="tabs-wrap">
          <div (click)="value = 1" [ngClass]="value===1?'tabs-item _active':'tabs-item'" >
            <h3>Три режима скорости</h3>
            <p>Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S» увеличитвает скорость,
              если опаздываете на работу. Во время прогулки по парку активируйте режим «D». Включите режим «Пешеход»,
              когда двигаетесь по оживлённой улице.</p>
          </div>
          <div (click)="value = 2" [ngClass]="value===2?'tabs-item _active':'tabs-item'">
            <h3>Система восстановления энергии</h3>
            <p>Во время торможения и движения по инерции система преобразовывает кинетическую энергию в электрическую,
              позволяя увеличить общий запас хода самоката.</p>
          </div>
          <div (click)="value = 3" [ngClass]="value===3?'tabs-item _active':'tabs-item'">
            <h3>Мощная батарея</h3>
            <p>Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния до 45 км без
              подзарядки.</p>
          </div>
          <div class="border">
            <div class="innline-border">
              <div [ngClass]="
                    value===1
                    ?'animating-inner-border _active-border-one'
                    :value===2
                    ?'animating-inner-border _active-border-two'
                    :value===3
                    ?'animating-inner-border _active-border-three'
                    :'animating-inner-border'"></div>
            </div>
          </div>
        </div>

        <div  class="tabs-content-container" >
          <div [ngClass]="
          value===1
          ?'tabs-content-wrapper _active-content-one'
          :value===2
          ?'tabs-content-wrapper _active-content-two'
          :value===3
          ?'tabs-content-wrapper _active-content-three'
          :'tabs-content-wrapper'"
          >
            <div class="tabs-content-item">
              <div class="image-large">
                <img src="../../../assets/image/tabs-image-one.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/small-tabs-image.jpg" alt="">
              </div>
            </div>

            <div class="tabs-content-item">
              <div class="image-large order">
                <img src="../../../assets/image/tab-image_1.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/tab-image_4.jpg" alt="">
              </div>
            </div>
            <div class="tabs-content-item">
              <div class="image-large">
                <img src="../../../assets/image/tab-image_2.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/tab-image_55.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  `,
  styleUrls: ['./specifications-tabs.component.scss']
})
export class SpecificationsTabsComponent implements OnInit {
  public value: number = 1
  constructor() {
  }

  ngOnInit(): void {
  }

}
