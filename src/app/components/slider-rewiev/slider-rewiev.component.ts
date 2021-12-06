import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperComponent} from "swiper/angular";
import Swiper from 'swiper';
import SwiperCore, {Navigation, SwiperOptions} from 'swiper';
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-slider-rewiev',
  template: `
    <section class="slider-rewiew-container">
      <h1>Отзывы о Mi Scooter Pro 2</h1>
      <div class="wrapper-rewiev">
        <swiper class="swiper-rewiev"
                [config]="config"
        >
          <ng-template swiperSlide *ngFor="let slide of slideData">
            <div class="slide-item-rewiev">
              <div [ngStyle]="sliderChangeTheme.toggleTheme?{background:'white'}:{}" [ngClass]="'slide-block' + slide.lastClass">
                <h4>{{slide.name}}</h4>
                <p>{{slide.p1}}</p>
                <p>{{slide.p2}}</p>
              </div>
            </div>
          </ng-template>
        </swiper>
      </div>
      <div class="button-and-slider-navigation">
        <button [ngStyle]="sliderChangeTheme.toggleTheme?{background:'black', color:'white'}:{}">Оставить отзыв</button>
        <div class="slider-custom-navigation">
          <div [ngClass]="sliderChangeTheme.toggleTheme?'slider-prev whiteSliderNavThemeClass':'slider-prev'">
            <svg  class="prev" height="1.319vw" fill="black" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 32.76 66.15">
              <path
                d="M10.57,33.18c6.52,8.1,12.74,15.88,19,23.61,2.15,2.65,4,5.46.55,8.16s-5.72.52-7.9-2.23C15.53,54.25,8.8,45.8,1.92,37.47-.66,34.35-.63,31.7,2,28.65q10.8-12.72,21.37-25.6c2.15-2.6,4.58-4.34,7.6-1.84s2,5.15-.27,7.79C23.93,17,17.31,25.05,10.57,33.18Z"/>
            </svg>
          </div>
          <div [ngClass]="sliderChangeTheme.toggleTheme?'slider-next whiteSliderNavThemeClass':'slider-next'">
            <svg  class="next" height="1.319vw" fill="black" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 32.76 66.15">
              <path
                d="M22.19,33.18c-6.51,8.1-12.73,15.88-19,23.61C1,59.44-.79,62.25,2.63,65s5.73.52,7.9-2.23C17.24,54.25,24,45.8,30.84,37.47c2.59-3.12,2.55-5.77,0-8.82Q20,15.93,9.43,3.05C7.29.45,4.85-1.29,1.83,1.21S-.12,6.36,2.1,9C8.83,17,15.45,25.05,22.19,33.18Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./slider-rewiev.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderRewievComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3,
    navigation: {nextEl: '.slider-next', prevEl: '.slider-prev'}
  };

  constructor(public sliderChangeTheme:BooleanToggleThemeService) {
  }

  ngOnInit(): void {
  }

  public slideData = [
    {
      id: 1,
      name: 'Михаил Сафонов',
      p1: 'Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса - десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски (вес аппарата, развесовка).',
      p2: 'В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе самоката.',
      lastClass: ''
    },
    {
      id: 2,
      name: 'Имя скрыто',
      p1: 'Владею также первой версией самоката (m365). В версии pro 2 исправлено множество недостатков m365:',
      p2: '- усилен узел складывания и язычок - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку из-за тряски - установлена поддержка заднего крыла и защита провода заднего габарита.',
      lastClass: ''
    },
    {
      id: 3,
      name: 'Алексей З.',
      p1: 'Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км и еще оставалось 16% заряда.',
      p2: 'ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными.',
      lastClass: ''
    },
    {
      id: 4,
      name: 'Михаил Сафонов',
      p1: 'Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса - десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски (вес аппарата, развесовка).',
      p2: 'В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе самоката.',
      lastClass: ''
    },
    {
      id: 5,
      name: 'Имя скрыто',
      p1: 'Владею также первой версией самоката (m365). В версии pro 2 исправлено множество недостатков m365:',
      p2: '- усилен узел складывания и язычок - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку из-за тряски - установлена поддержка заднего крыла и защита провода заднего габарита.',
      lastClass: ''
    },
    {
      id: 6,
      name: 'Алексей З.',
      p1: 'Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км и еще оставалось 16% заряда.',
      p2: 'ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными.',
      lastClass: ''
    },
    {
      id: 7,
      name: '',
      p1: '',
      p2: '',
      lastClass: 'last'
    },
  ]
}
