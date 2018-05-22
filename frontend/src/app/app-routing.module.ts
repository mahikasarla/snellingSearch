import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {CurrentTimeComponent} from "./current-time/current-time.component";


export const routes: Routes = [
  {path: 'now', component: CurrentTimeComponent},
  {path: '', redirectTo: 'now', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class AppRoutingModule {
}
