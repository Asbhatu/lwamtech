import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ServicesModule}  from './services/services.module'
import {MilitaryComponent} from './services/military/military.component'
import {MainComponent} from './nav/main/main.component'


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch : 'full'},
  {path: 'main', component: MainComponent},
  {path: 'military', component: MilitaryComponent},
  {path: '**', redirectTo: 'home'}
];



@NgModule({
  imports: [
    CommonModule,
   
    RouterModule.forRoot(routes),
    ServicesModule
    
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {



 }
