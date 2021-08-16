import { CrazyServiceService } from './../../crazy-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments?: any;
  userId?: number;
  constructor(
    private commentService: CrazyServiceService,
    private activatedRoute: ActivatedRoute,
    private Location:Location
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.commentService.getComments(this.userId).subscribe((data) => {
      console.log(data);
      this.comments = [...data];
    });
  }
  goBack(): void {
    this.Location.back();
  }
}
