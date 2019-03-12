import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/Model/task.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
  @Input() task: Task;
  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onDetails() {
    this.router.navigate([this.task.id], { relativeTo: this.route });
  }

}
