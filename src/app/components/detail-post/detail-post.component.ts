import { ActivatedRoute } from '@angular/router';
import {  PostService } from '../../services/post-service.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { IPost } from 'src/app/models/post.model';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent implements OnInit {
  constructor(
    private detailPostService: UserServiceService,
    private route: ActivatedRoute,
  ) {}
  singlePost?: Array<IPost> ;
  userId?: number;

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.detailPostService.getUserPost(this.userId).subscribe((data) => {
      this.singlePost = data;
      console.log(this.singlePost);
    });
  }

}
