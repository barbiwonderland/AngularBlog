import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserServiceService } from 'src/app/services/user-service.service';
import { IUser } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  // children?
  // @Input() userDetail?: User;
  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  userId?: number;
  userInfo?: IUser;

  // goBack(): void {
  //   this.location.back();
  // }

  ngOnInit(): void {
    // asigno valor
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUsers().subscribe((data) => {
      this.userInfo = data.find((x: any) => x.id === this.userId);
      console.log(this.userInfo);
    });
  }
}
