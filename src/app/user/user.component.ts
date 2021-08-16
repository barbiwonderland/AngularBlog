import { User } from '../models/user.model';
import { CrazyServiceService } from './../crazy-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Array<User> = [];
  userInfo?:User;

  constructor(private userService: CrazyServiceService) {}

  selectedUser(x:User){
    this.userInfo={...x}
    console.log(this.userInfo)
  }


  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
