import { AppComponentMobileComponent } from './app-component-mobile/app-component-mobile.component';
import { AppComponent } from './app.component';
import { AppComponentTabletComponent } from './app-component-tablet/app-component-tablet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tablet', component: AppComponentTabletComponent },
  { path: 'mobile', component: AppComponentMobileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
