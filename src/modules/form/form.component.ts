import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  text!: string;
  filter!: string;

  constructor(
    public todoService: TodoService
  ) {}

  filterStatus(e: any) {
    this.todoService.filterStatus(e.target.value);
  }
}
