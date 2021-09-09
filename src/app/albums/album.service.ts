import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiurl } from '../url';
import { IAlbumModel } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private albumService:HttpClient) {
    
   }
   getAlbums():Observable<IAlbumModel[]>{
    return this.albumService.get<IAlbumModel[]>(`${Apiurl}/albums`)
  }
}
