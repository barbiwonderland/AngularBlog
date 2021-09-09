import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost} from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPhotos(userId: number) {
    throw new Error('Method not implemented.');
  }
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private postService:HttpClient) {}
  getPosts(): Observable<IPost[]> {
    return this.postService.get<IPost[]>(`${this.url}/posts`);
  }

}
