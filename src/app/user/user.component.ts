import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users?: Array<IUser>;
  userInfo?: IUser;

  constructor(private userService: UserServiceService) {}

  selectedUser(x: IUser) {
    this.userInfo = { ...x };
    console.log(this.userInfo);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
