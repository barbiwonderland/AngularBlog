import { ActivatedRoute } from '@angular/router';
import { CrazyServiceService } from './../../crazy-service.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css'],
})
export class DetailAlbumComponent implements OnInit {
  userId?: number;
  album?: any;
  constructor(
    private detailAlbum: CrazyServiceService,
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
  goBack(): void {
    this.location.back();
  }
}
