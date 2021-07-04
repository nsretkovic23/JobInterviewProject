import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule,
    MatSliderModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatSliderModule,
    MatIconModule
  ]
})
export class MaterialModule {}
