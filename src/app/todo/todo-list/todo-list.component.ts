import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from '../todo.service';
import { Task } from 'src/app/shared/Model/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[];
  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
    this.todoService.tasksChange.subscribe(() => {
      this.tasks = this.todoService.getTasks();
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

