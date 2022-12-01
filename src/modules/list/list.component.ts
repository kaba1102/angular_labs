import { Component, Input, OnInit } from '@angular/core';
import { IToDo, TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  ngOnInit(): void { }

  constructor(
    public todoService: TodoService
  ) {}
}
