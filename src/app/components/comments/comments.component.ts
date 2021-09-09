import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ICommentModel } from 'src/app/models/comments.model';
import { PostService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments?:Array<ICommentModel>;
  userId?: number;
  constructor(
    private commentService: PostService,
    private activatedRoute: ActivatedRoute,
    private Location:Location
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.commentService.getComments(this.userId).subscribe((data) => {
      console.log(data);
      this.comments = data;
      console.log(this.comments)
    });
  }

}
