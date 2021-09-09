import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IAlbumModel } from 'src/app/models/album.model';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css'],
})
export class DetailAlbumComponent implements OnInit {
  userId?: number;
  album?: Array<IAlbumModel>=[];
  constructor(
    private detailAlbum: UserServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.detailAlbum.getUserAlbums(this.userId).subscribe((data) => {
      this.album = data;
      console.log(this.album);
    });
  }

}
