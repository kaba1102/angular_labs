import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RowModule } from '../row/row.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RowModule
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }
