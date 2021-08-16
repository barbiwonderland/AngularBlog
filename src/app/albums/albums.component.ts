import { AlbumService } from './album.service';
import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  // album?:AlbumModel;
  album?: any;
  constructor(private _AlbumService: AlbumService) {}

  ngOnInit(): void {
    this._AlbumService.getAlbums().subscribe((data) => {
      console.log(data);
      this.album = data;
    });
  }
 
}
