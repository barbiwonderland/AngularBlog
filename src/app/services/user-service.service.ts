import { ITodosModel } from 'src/app/models/todos.model';
import { IUser } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}
  // USERS MODULE
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.url}/users`);
  }
  getUserPost(x?: number): Observable<any> {
    return this.http.get(`${this.url}/posts?userId=${x}`);
  }
  getUserAlbums(x: any): Observable<any> {
    return this.http.get(`${this.url}/albums?userId=${x}`);
  }
  getUserToDo(x: any): Observable<ITodosModel[]> {
    return this.http.get<ITodosModel[]>(`${this.url}/todos?userId=${x}`);
  }
}
