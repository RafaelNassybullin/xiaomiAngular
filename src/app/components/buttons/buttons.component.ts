import {Component, Inject, Input, OnInit} from '@angular/core';
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-buttons',
  template: `
    <div [ngStyle]="changeTheme.toggleNav?{zIndex:-2}:{}" [ngClass]="changeTheme.toggleTheme?'buttonss _activeWhite':'buttonss'">
          <button [ngClass]="changeTheme.toggleTheme?'change-white-color':''"
                  (click)="toFalse()">Белый</button>
          <button (click)="toTrue()">Черный</button>
    </div>
  `,
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public changeTheme:BooleanToggleThemeService
  ) { }
  @Input() buy:any
  ngOnInit(): void {
    console.log(this.buy);
  }

  toFalse(){
    this.changeTheme.f()
    this.document.body.classList.remove('whiteTheme')
  }
  toTrue(){
    this.changeTheme.t()
    this.document.body.classList.add('whiteTheme')
  }


}
