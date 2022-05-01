import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCafeComponent } from './lista-cafe/lista-cafe.component';



@NgModule({
  declarations: [
    ListaCafeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListaCafeComponent
  ]
})
export class CafeModule { }
