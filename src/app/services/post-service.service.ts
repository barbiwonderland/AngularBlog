import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ICommentModel } from '../models/comments.model';
import { IPhotos } from '../models/photos.model';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient, private location: Location) {}

  // Comments
  /**
   * Devuelve todos los comentarios
   * @param x
   * @returns
   */
  getComments(x: number): Observable<ICommentModel[]> {
    return this.http.get<ICommentModel[]>(`${this.url}/comments?postId=${x}`);
  }
  //Galery
  /**
   * Devuelve todas las fotos
   * @param x
   * @returns
   */
  getPhotos(x: number): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(`${this.url}/photos/${x}`);
  }
  /**
   * Elimina una foto
   * @param x
   * @returns
   */
  deletePhoto(x: number) {
    return this.http.delete(`${this.url}/photos/${x}`);
  }
  //Todo's
  /**
   * Actualiza todo's
   * @param postData
   * @param x
   */
  updateTodo(postData: Object, x: number) {
    this.http.put(`${this.url}/todo/${x}`, postData).subscribe((data) => {
      console.log(data);
    });
  }
}
