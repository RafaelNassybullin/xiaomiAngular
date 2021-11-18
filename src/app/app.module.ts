import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {OverflowOrangeBlurComponent} from './components/overflow-orange-blur/overflow-orange-blur.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {StickyNavModule} from "ng2-sticky-nav";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    OverflowOrangeBlurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
