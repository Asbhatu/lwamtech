import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';


import {
  MatAutocompleteModule, 
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatMenuModule,
  MatTabsModule,
  MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule, MatNativeDateModule,

  ],
  declarations: [RightComponent, LeftComponent, MainComponent,],
  exports: [RightComponent, LeftComponent, MainComponent,]
})
export class NavModule { }
