import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ListModule } from '../list/list.module';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    FormModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
