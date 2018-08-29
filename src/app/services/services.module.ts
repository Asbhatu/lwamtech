import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilitaryComponent } from './military/military.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MilitaryComponent],
  exports: [MilitaryComponent]
})
export class ServicesModule { }
