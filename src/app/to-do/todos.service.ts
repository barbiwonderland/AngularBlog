import { Observable } from 'rxjs';
import { Apiurl } from './../url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private toDo: HttpClient) {}
  getFullTodos():Observable<any> {
    return this.toDo.get(`${Apiurl}/todos`);
  }
}
