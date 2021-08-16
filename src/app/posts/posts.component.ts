import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from './post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}
  posts?: Array<Post>;
  seleccionado?: Post;
  mostrar:boolean=false;
  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
  opcionHandle(x: any) {
    if(x.currentTarget.value=== "todos"){
      this.seleccionado=undefined;
      return;
    }
    this.seleccionado = this.posts?.find(
      (p) => p.title === x.currentTarget.value
    );
   

  }
}
