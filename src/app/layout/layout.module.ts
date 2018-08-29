import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent, 
    HeaderComponent, 
    FooterComponent],
    exports: [
      ContentComponent 
    ]
})
export class LayoutModule { }
