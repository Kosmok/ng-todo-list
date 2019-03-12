import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/Model/task.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  task: Task;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.task = this.todoService.getTask(+id);
    });
  }

}
