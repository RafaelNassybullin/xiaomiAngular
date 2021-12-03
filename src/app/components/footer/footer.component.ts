import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>

    <div class="rights">
        <p>© 2010 - 2021 Xiaomi.</p>
        <p>Все права защищены.</p>
    </div>

    <div class="schedule">
        <p>8 800 775 66 15</p>
        <p>Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.</p>
    </div>

  </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
