import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  template: `
    <section>
      <div class="title-wrapper">
        <h1>Часто задаваемые вопросы</h1>
        <p>Все ваши часто задаваемые вопросы о электросамокате Mi Scooter Pro 2. Если у вас есть собственный вопрос - задайте его через форму обратной связи.</p>
        <button>Задать вопрос</button>
      </div>
      <div class="questions-wrapper">
        <div class="question-items">
          <h3>На него нужны права категории M?</h3>
          <p>Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.</p>
        </div>
        <div class="question-items">
          <h3>У меня вес 135 кг, выдержит ли этот самокат?</h3>
          <p>Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.</p>
        </div>
        <div class="question-items">
          <h3>Есть ли влагозащита?</h3>
          <p>Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг, падающих в любом направлении. Погружение в воду может привести к поломке. </p>
        </div>
        <div class="question-items">
          <h3>Это версия для Китая или Европы?</h3>
          <p>Это Европейская версия, со всеми обновлениями и евро-вилкой.</p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
