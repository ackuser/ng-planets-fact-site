import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentTabletComponent } from './app-component-tablet/app-component-tablet.component';
import { AppComponentDesktopComponent } from './app-component-desktop/app-component-desktop.component';
import { AppComponentMobileComponent } from './app-component-mobile/app-component-mobile.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentTabletComponent,
    AppComponentDesktopComponent,
    AppComponentMobileComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
