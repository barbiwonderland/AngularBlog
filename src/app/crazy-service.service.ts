import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CrazyServiceService {
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient, private location: Location) {}
  // USERS MODULE
  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`);
  }
  getUserPost(x?: number): Observable<any> {
    return this.http.get(`${this.url}/posts?userId=${x}`);
  }
  getUserAlbums(x: any): Observable<any> {
    return this.http.get(`${this.url}/albums?userId=${x}`);
  }
  getUserToDo(x: any): Observable<any> {
    return this.http.get(`${this.url}/todos?userId=${x}`);
  }
  // Comments
  getComments(x: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments?postId=${x}`);
  }
  //Galery
  getPhotos(x: number): Observable<any> {
    return this.http.get(`${this.url}/photos/${x}`);
  }

  deletePhoto(x: number) {
    return this.http.delete(`${this.url}/photos/${x}`);
  }
  //Todo's
  updateTodo(postData: Object, x: number) {
    this.http.put(`${this.url}/todo/${x}`, postData).subscribe((data) => {
      console.log(data);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
