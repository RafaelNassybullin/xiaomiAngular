import {Component, OnInit} from '@angular/core';
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";

@Component({
  selector: 'app-buy',
  template: `
    <section class="app-buy">
      <div [ngStyle]="b.toggleTheme?{background:'white'}:{}" class="block">
        <div class="buy-image">
          <img [ngClass]="b.toggleTheme?'_show':''" src="../../../assets/image/whiteWebp.webp" alt="">
          <img [ngClass]="b.toggleTheme?'_show':''" src="../../../assets/image/blackWebp.webp" alt="">
        </div>
        <div class="buy-titles_wrap">
          <div class="buy-titles">
            <h1>Mi Electric Scooter Pro 2</h1>
            <h2>54 990 ₽</h2>
            <div class="button-component">
              <app-buttons [buy]="true"></app-buttons>
            </div>
          </div>
          <button>Купить</button>
        </div>
        <div class="buy-set">
            <h2>Комплект поставки</h2>
          <ul>
            <li>Адаптер питания</li>
            <li>Шестигранный ключ</li>
            <li>Удлинитель для насоса</li>
            <li>Винты x 5 шт.</li>
            <li>Запасная шина</li>
            <li>Руководство пользователя</li>
            <li>Буклет с информацией</li>
          </ul>
        </div>
        <div class="overlay-white">
          <img  src="../../../assets/image/overlay-white-prefooter.png" alt="">
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  constructor(public b:BooleanToggleThemeService) {
  }

  ngOnInit(): void {
  }

}
