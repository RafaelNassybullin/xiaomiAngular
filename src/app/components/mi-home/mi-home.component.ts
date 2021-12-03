import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-home',
  template: `
    <section class="mi-home">

      <div class="titles">
        <h1>Мобильное приложение Mi Home</h1>
        <p>Подключите самокат к мобильному приложению Mi Home и
          используйте его для блокировки и разблокировки самоката,
          а так же просмотра основных данных: пробег, скорость,
          уровень заряда аккумулятора.</p>
        <div class="app-buttons">
          <button>
                        <img src="../../../assets/image/google-play.svg" alt="">

          </button>
          <button>
            <img src="../../../assets/image/app%20store.svg" alt="">
          </button>
        </div>
      </div>
      <div class="image-clip-wrap">
        <div class="image">
         <img src="../../../assets/image/mi-home.webp" alt="">
       </div>
      </div>
    </section>
  `,
  styleUrls: ['./mi-home.component.scss']
})
export class MiHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
