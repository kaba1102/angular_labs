import { Component, Input, OnInit } from '@angular/core';
import { IToDo, TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  ngOnInit(): void { }

  @Input() item!: IToDo;
  @Input() rowIndex!: number;

  constructor(
    public todoService: TodoService
  ) {};

  changeStatus(e: any) {
    this.todoService.statusHandler(this.rowIndex, e.target.value);
  }

}
