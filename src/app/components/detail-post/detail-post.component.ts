import { ActivatedRoute } from '@angular/router';
import { CrazyServiceService } from './../../crazy-service.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent implements OnInit {
  constructor(
    private detailPostService: CrazyServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  singlePost?: any;
  userId?: number;

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.detailPostService.getUserPost(this.userId).subscribe((data) => {
      this.singlePost = data;
      console.log(this.singlePost);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
