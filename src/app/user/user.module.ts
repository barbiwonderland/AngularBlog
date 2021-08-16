import { UserDetailComponent } from './../components/user-detail/user-detail.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class UserModule { }
