import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentTabletComponent } from './app-component-tablet/app-component-tablet.component';
import { AppComponentDesktopComponent } from './app-component-desktop/app-component-desktop.component';
import { AppComponentMobileComponent } from './app-component-mobile/app-component-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentTabletComponent,
    AppComponentDesktopComponent,
    AppComponentMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
