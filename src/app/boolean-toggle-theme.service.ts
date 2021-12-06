import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooleanToggleThemeService {

  constructor() { }

  public toggleTheme: boolean = false

  toggle() {
    this.toggleTheme = !this.toggleTheme
    console.log(this.toggleTheme);
  }
  f(){
    this.toggleTheme = false
  }
  t(){
    this.toggleTheme = true
  }


}
