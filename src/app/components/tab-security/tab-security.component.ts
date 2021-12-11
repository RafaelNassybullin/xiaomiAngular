import {Component, OnInit} from '@angular/core';
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";

@Component({
  selector: 'app-tab-security',
  template: `
    <section class="security">
      <h1>Заботится о вашей безопасности</h1>
      <app-mobile-without-tabs
        [mobileSecuredata]="dataSecurityMobileTab">
      </app-mobile-without-tabs>
      <div class="tabs-container">
        <div class="tabs-wrap">
          <div (click)="securityValue = 1" [ngClass]="securityValue===1?'tabs-item _active':'tabs-item'">
            <h3 [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===1?{color:'#FF4C0D'}:{}">Яркие ходовые
              огни</h3>
            <p [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===1?{color:'black'}:{}">Продуманный угол
              рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников
              движения.</p>
          </div>
          <div (click)="securityValue = 2" [ngClass]="securityValue===2?'tabs-item _active':'tabs-item'">
            <h3 [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===2?{color:'#FF4C0D'}:{}">Двойная тормозная
              система</h3>
            <p [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===2?{color:'black'}:{}">При нажатии наручку
              тормоза системы переднего и заднего колеса активируются последовательно, сокращая
              тормозной путь и обеспечивая безопасную и плавную остановку.</p>
          </div>
          <div (click)="securityValue = 3" [ngClass]="securityValue===3?'tabs-item _active':'tabs-item'">
            <h3 [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===3?{color:'#FF4C0D'}:{}">Яркая задняя
              фара</h3>
            <p [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===3?{color:'black'}:{}">При включении ходовых
              огней задняя фара включается автоматически. При нажатии на ручку тормоза она
              начинает мигать, предупреждая других участников движения.</p>
          </div>
          <div (click)="securityValue = 4" [ngClass]="securityValue===4?'tabs-item _active':'tabs-item'">
            <h3 [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===4?{color:'#FF4C0D'}:{}">Отражатели спереди,
              сбоку и сзади</h3>
            <p [ngStyle]="tabsTwoThemeChange.toggleTheme&&securityValue===4?{color:'black'}:{}">Улучшенные отражатели,
              размещенные с четырех сторон, делают вашу поездку в темное время суток
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
  constructor(public tabsTwoThemeChange: BooleanToggleThemeService) {}
  ngOnInit(): void {}


  public securityValue: number = 1;
  public dataSecurityMobileTab:any = [
    {
      title:'Яркие ходовые огни',
      paragraph:'Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.',
      image:'security-component-tab_1.jpg'
    },
    {
      title:'Двойная тормозная система',
      paragraph:'При нажатии наручку тормоза системы переднего и заднего колеса активируются последовательно, сокращая тормозной путь и обеспечивая безопасную и плавную остановку.',
      image:'security-component-tab_3.jpg'
    },
    {
      title:'Яркая задняя фара',
      paragraph:'При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку тормоза она начинает мигать, предупреждая других участников движения.',
      image:'security-component-tab_7.jpeg'
    },
    {
      title:'Отражатели спереди, сбоку и сзади',
      paragraph:'Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время суток безопаснее.',
      image:'security-component-tab_5.jpg'
    },
  ]




}
