import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {OverflowOrangeBlurComponent} from './components/overflow-orange-blur/overflow-orange-blur.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { BannerComponent } from './components/banner/banner.component';
import { LaconeDesignComponent } from './components/lacone-design/lacone-design.component';
import { AboutComponent } from './components/about/about.component';
import { SwiperModule } from 'swiper/angular';
import { QuestionsComponent } from './components/questions/questions.component';
import { MiHomeComponent } from './components/mi-home/mi-home.component';
import { BuyComponent } from './components/buy/buy.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpecificationsTabsComponent } from './components/specifications-tabs/specifications-tabs.component';
import { TabSecurityComponent } from './components/tab-security/tab-security.component';
import { SliderRewievComponent } from './components/slider-rewiev/slider-rewiev.component';
import { MobileWithoutTabsComponent } from './components/mobile-without-tabs/mobile-without-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    OverflowOrangeBlurComponent,
    BannerComponent,
    LaconeDesignComponent,
    AboutComponent,
    QuestionsComponent,
    MiHomeComponent,
    BuyComponent,
    ButtonsComponent,
    FooterComponent,
    SpecificationsTabsComponent,
    TabSecurityComponent,
    SliderRewievComponent,
    MobileWithoutTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
