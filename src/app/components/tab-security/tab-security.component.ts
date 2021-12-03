import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-security',
  template: `
        <section class="security">
      <h1>Заботится о вашей безопасности</h1>
      <div class="tabs-container">
        <div class="tabs-wrap">
          <div (click)="securityValue = 1" [ngClass]="securityValue===1?'tabs-item _active':'tabs-item'">
            <h3>Яркие ходовые огни</h3>
            <p>Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников
              движения.</p>
          </div>
          <div (click)="securityValue = 2" [ngClass]="securityValue===2?'tabs-item _active':'tabs-item'">
            <h3>Двойная тормозная система</h3>
            <p>При нажатии наручку тормоза системы переднего и заднего колеса активируются последовательно, сокращая
              тормозной путь и обеспечивая безопасную и плавную остановку.</p>
          </div>
          <div (click)="securityValue = 3" [ngClass]="securityValue===3?'tabs-item _active':'tabs-item'">
            <h3>Яркая задняя фара</h3>
            <p>При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку тормоза она
              начинает мигать, предупреждая других участников движения.</p>
          </div>
          <div (click)="securityValue = 4" [ngClass]="securityValue===4?'tabs-item _active':'tabs-item'">
            <h3>Отражатели спереди, сбоку и сзади</h3>
            <p>Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время суток
              безопаснее.</p>
          </div>
          <div class="border">
            <div class="innline-border">
              <div [ngClass]="
                    securityValue===1
                    ?'animating-inner-border _active-border-one'
                    :securityValue===2
                    ?'animating-inner-border _active-border-two'
                    :securityValue===3
                    ?'animating-inner-border _active-border-three'
                    :securityValue===4
                    ?'animating-inner-border _active-border-four'
                    :'animating-inner-border'"></div>
            </div>
          </div>
        </div>
        <div class="tabs-content-container">
          <div [ngClass]="
          securityValue===1
          ?'tabs-content-wrapper _active-content-one'
          :securityValue===2
          ?'tabs-content-wrapper _active-content-two'
          :securityValue===3
          ?'tabs-content-wrapper _active-content-three'
          :securityValue===4
          ?'tabs-content-wrapper _active-content-four'
          :'tabs-content-wrapper'"
          >
            <div class="tabs-content-item">
              <div class="image-large">
                <img src="../../../assets/image/security-component-tab_1.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/security-component-tab_2.jpg" alt="">
              </div>
            </div>
            <div class="tabs-content-item">
              <div class="image-large order">
                <img src="../../../assets/image/security-component-tab_3.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/security-component-tab_10.jpg" alt="">
              </div>
            </div>
            <div class="tabs-content-item">
              <div class="image-large">
                <img src="../../../assets/image/security-component-tab_5.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/security-component-tab_7.jpeg" alt="">
              </div>
            </div>
            <div class="tabs-content-item">
              <div class="image-large">
                <img src="../../../assets/image/security-component-tab_6.jpg" alt="">
              </div>
              <div class="image-small">
                <img src="../../../assets/image/security-component-tab_99.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  `,
  styleUrls: ['./tab-security.component.scss']
})
export class TabSecurityComponent implements OnInit {
  public securityValue: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
