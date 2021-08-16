import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ToDoModule { }
