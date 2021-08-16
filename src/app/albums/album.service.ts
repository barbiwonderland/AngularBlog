import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiurl } from '../url';
import { AlbumModel } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private albumService:HttpClient) {
    
   }
   getAlbums():Observable<AlbumModel>{
    return this.albumService.get<AlbumModel>(`${Apiurl}/albums`)
  }
}
