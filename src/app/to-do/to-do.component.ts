import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ITodosModel } from '../models/todos.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  // Se ve en pantalla
  todo: ITodosModel[]=[];
  selectedId?: number;
  // Información generica
  data?: any;
  constructor(private _todoService: TodosService) {}

  ngOnInit(): void {
    this._todoService.getFullTodos().subscribe((data) => {
      console.log(data);
      this.todo = data;
      this.data = data;
    });
  }
  getValue(event: any) {
    this.selectedId = event.target.value;
    console.log(this.selectedId);
    if (this.selectedId != 0) {
      this.todo = this.data.filter((y: any) => y.id == this.selectedId);
    } else {
      this.todo = this.data;
    }
    console.log(this.todo);
  }

  updateStatus(x: number) {
    this.todo.map((y: any) => {
      (() => (y.id === x ? (y.completed = !y.completed) : null))();
    });
   
  }
}
