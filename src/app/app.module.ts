import { ToDoComponent } from './to-do/to-do.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { DetailAlbumComponent } from './components/detail-album/detail-album.component';
import { DetailTodosComponent } from './components/detail-todos/detail-todos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComeBackButtonComponent } from './components/come-back-button/come-back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    GaleriaComponent,
    HeaderComponent,
    ToDoComponent,
    DetailPostComponent,
    DetailAlbumComponent,
    DetailTodosComponent,
    FooterComponent,
    ComeBackButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
