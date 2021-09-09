import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  photo?: any;
  deletedPhoto?: number;
  imgStatus: boolean = false;
  userId?: number;
  constructor(
    private GaleriaService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.GaleriaService.getPhotos(this.userId).subscribe((data) => {
      console.log(data);
      this.photo = data;
    });
  }

  deletePhoto(x: any) {
    // Mejorar *********
     this.photo=null;
    // this.photo = this.photo.filter((y: any) => y.id !== x);
    this.GaleriaService.deletePhoto(x).subscribe(() => {
      console.log(`foto con ${x}ID eliminada`);
    });
  }
  clickEvent() {
    this.imgStatus = !this.imgStatus;
  }
}
