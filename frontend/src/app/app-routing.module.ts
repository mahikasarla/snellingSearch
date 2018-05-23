import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {CurrentTimeComponent} from "./current-time/current-time.component";
import {LoginComponent} from "./twitter/login/login.component";


export const routes: Routes = [
  {path: 'now', component: CurrentTimeComponent},
  {path: 'twitter', component: LoginComponent},
  {path: '', redirectTo: 'twitter', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class AppRoutingModule {
}
