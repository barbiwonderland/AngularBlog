import { ActivatedRoute } from '@angular/router';
import { CrazyServiceService } from './../../crazy-service.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-todos',
  templateUrl: './detail-todos.component.html',
  styleUrls: ['./detail-todos.component.css'],
})
export class DetailTodosComponent implements OnInit {
  userTodos?: any;
  userId?: number;
  constructor(
    private SingleTodo: CrazyServiceService,
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
