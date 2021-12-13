import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {fromEvent} from "rxjs";
import {distinctUntilChanged, map, pairwise, throttleTime} from "rxjs/operators";
import {BooleanToggleThemeService} from "../../boolean-toggle-theme.service";

@Component({
  selector: 'app-navbar',
  template: `
<nav
  [ngStyle]="navbarChangeTheme.toggleNav&&!navbarChangeTheme.toggleTheme?{background: '#000'}:navbarChangeTheme.toggleNav&&navbarChangeTheme.toggleTheme?{background: '#FFFFFF'}:{}"
  [ngClass]="
    offset>600&&value==='[UP!]'
    ?'sticky yes'
    :offset===0||offset<1
    ?''
    :navbarChangeTheme.toggleTheme
    ?'sticky white-nav'
    :'sticky '
">
      <div class="wrap-nav">
        <div class="logo-nav-wrapper">
          <div class="logo">
            <svg [ngStyle]="navbarChangeTheme.toggleTheme?{fill:'#FF4C0D'}:{fill:'white'}" height="2.708vw" viewBox="0 0 60 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M59.3689 0C59.7139 0 60 0.281934 60 0.629353V38.3743C60 38.7162 59.7139 39 59.3689 39H51.2391C50.8904 39 50.6079 38.7162 50.6079 38.3743V0.629353C50.6079 0.281934 50.8904 0 51.2391 0H59.3689ZM24.0926 0C30.2253 0 36.6369 0.285574 39.798 3.50511C42.909 6.6736 43.2446 12.9812 43.2573 19.1066L43.2576 38.3743C43.2576 38.7162 42.9752 39 42.6265 39H34.5003C34.1516 39 33.8673 38.7162 33.8673 38.3743V18.7751C33.8584 15.3537 33.6653 11.8377 31.931 10.0679C30.4381 8.5454 27.6524 8.19617 24.7559 8.12341H10.0232C9.67639 8.12341 9.39388 8.40716 9.39388 8.74912V38.3743C9.39388 38.7162 9.10782 39 8.76095 39H0.627567C0.280704 39 0 38.7162 0 38.3743V0.629353C0 0.281934 0.280704 0 0.627567 0H24.0926ZM25.9128 15.0318C26.2578 15.0318 26.5385 15.3137 26.5385 15.6575V38.3743C26.5385 38.7162 26.2578 39 25.9128 39H17.3735C17.0231 39 16.7406 38.7162 16.7406 38.3743V15.6575C16.7406 15.3137 17.0231 15.0318 17.3735 15.0318H25.9128Z"
                    />
            </svg>
          </div>
          <ul [ngStyle]="innerWidthh>740?{background:'transparent'}:navbarChangeTheme.toggleTheme?{background:'white' }:{}"
              [ngClass]="navbarChangeTheme.toggleNav?'_toggle':''">
            <li>О продукте</li>
            <li>Внешний вид</li>
            <li>Безопасность</li>
            <li>Отзывы</li>
            <li>FAQ</li>
          </ul>
        </div>
        <button [ngStyle]="navbarChangeTheme.toggleTheme?{background:'black', color:'white'}:{}">Купить</button>
        <div
          class="burger"
          [ngStyle]="navbarChangeTheme.toggleTheme?{background:'black', color:'white'}:{}"
             (click)="navbarChangeTheme.toggleNavMethod()"
        >
          <svg [ngStyle]="navbarChangeTheme.toggleTheme?{fill:'#FF4C0D'}:{}"  *ngIf="!navbarChangeTheme.toggleNav" height="3vw"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.11 95.32"><path d="M71.53,0C92.36,0,113.19,0,134,0c6,0,9.23,3,9.08,8.13-.12,4-2.2,6.54-6,7.5a17.49,17.49,0,0,1-4,.26q-61.5,0-123,0c-6.26,0-9.44-2.2-10-6.74C-.61,3.5,2.69,0,9,0Q40.29,0,71.53,0Z"/><path d="M71.54,39.92q31,0,62,0c6.65,0,9.68,2.58,9.58,8-.08,5.07-3.2,7.7-9.55,7.7-41.32,0-82.64.09-124-.13-2.79,0-6.5-1.46-8.07-3.53-1.4-1.86-1.46-6.09-.24-8.19S6,40.11,8.57,40.07C29.56,39.78,50.55,39.91,71.54,39.92Z"/><path d="M71.59,95.28c-21,0-42,0-62.95,0-3.73,0-7.23-1.07-7.9-4.61-.54-2.83.59-6.37,2-9,.73-1.34,3.79-2,5.79-2q63-.17,125.91-.06c5.66,0,8.75,3.08,8.64,8s-3.18,7.57-9.07,7.57Q102.83,95.32,71.59,95.28Z"/>
          </svg>
          <svg [ngStyle]="navbarChangeTheme.toggleTheme?{fill:'#FF4C0D'}:{}" *ngIf="navbarChangeTheme.toggleNav" height="3vw"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.33 105.89"><path d="M64.23,52.68q19.42-19.44,38.88-38.82c2.65-2.62,4.36-5.87,2.33-8.84C103.81,2.63,100.51.93,97.62.07c-1.46-.43-4.07,1.29-5.49,2.7q-19.5,19.41-39,38.85Q33.7,22.18,14.2,2.77c-1.42-1.41-4-3.13-5.48-2.7C5.82.93,2.52,2.63.89,5c-2,3-.32,6.22,2.33,8.84Q22.72,33.21,42.1,52.68q-19.53,19.53-39,39.08c-4,4-4,8.36-.42,11.8s7.6,3.1,11.76-1.06Q33.81,83.15,53.17,63.75,72.54,83.13,91.93,102.5c4.17,4.16,8.2,4.47,11.76,1.06s3.58-7.79-.42-11.8Q83.77,72.2,64.23,52.68Z"/>
          </svg>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  public value!:string
  public offset: number = 0;

  public innerWidthh:number = window.innerWidth
  constructor(public navbarChangeTheme:BooleanToggleThemeService) {}
  ngOnInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(15),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): string => (y2 < y1 ? '' : '[UP!]')),
      distinctUntilChanged()
    ).subscribe(val=> {this.value = val});
  }
  @HostListener('document:scroll', ['$event'])
  onScrol(event:any) {
    this.offset = window.pageYOffset;
    this.value!=='[UP!]'?this.navbarChangeTheme.toggleNav = false:''
    this.offset<600&&this.value==='[UP!]'?this.navbarChangeTheme.toggleNav = false:''
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidthh = window.innerWidth
  }

}
