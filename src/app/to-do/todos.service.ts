import { Observable } from 'rxjs';
import { Apiurl } from './../url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodosModel } from '../models/todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private toDo: HttpClient) {}
  getFullTodos():Observable<ITodosModel[]> {
    return this.toDo.get<ITodosModel[]>(`${Apiurl}/todos`);
  }
}
