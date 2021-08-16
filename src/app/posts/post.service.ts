import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private postService:HttpClient) {}
  getPosts(): Observable<any> {
    return this.postService.get(`${this.url}/posts`);
  }

}
