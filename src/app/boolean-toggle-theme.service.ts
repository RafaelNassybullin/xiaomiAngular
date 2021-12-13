import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooleanToggleThemeService {
  constructor() { }
  public toggleTheme: boolean = false

  public toggleNav:any = false

  toggleNavMethod(){
    this.toggleNav = !this.toggleNav
  }


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
