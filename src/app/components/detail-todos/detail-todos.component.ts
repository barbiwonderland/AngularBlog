import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ITodosModel } from 'src/app/models/todos.model';

@Component({
  selector: 'app-detail-todos',
  templateUrl: './detail-todos.component.html',
  styleUrls: ['./detail-todos.component.css'],
})
export class DetailTodosComponent implements OnInit {
  userTodos?: Array<ITodosModel>;
  userId?: number;
  constructor(
    private SingleTodo: UserServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.SingleTodo.getUserToDo(this.userId).subscribe((data) => {
      this.userTodos = data;
      console.log(this.userTodos);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
