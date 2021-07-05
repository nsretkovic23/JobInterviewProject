import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports:[
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule {}
