import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PostsModule { }
