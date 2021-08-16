import { DetailTodosComponent } from './components/detail-todos/detail-todos.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ToDoComponent } from './to-do/to-do.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailAlbumComponent } from './components/detail-album/detail-album.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path:'users',component:UserComponent},
  {path:'userDetails/:id',component:UserDetailComponent},
  {path:"posts",component:PostsComponent},
  {path:"posts/:id",component:DetailPostComponent},
  {path:"comments/:id",component:CommentsComponent},
  {path:"albums",component:AlbumsComponent},
  {path:"albums/:id",component:DetailAlbumComponent},
  {path:"photos/:id",component:GaleriaComponent},
  {path:"todos",component:ToDoComponent},
  {path:"todos/:id",component:DetailTodosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
