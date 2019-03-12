import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  taskId: number;
  taskForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  constructor(private todoServer: TodoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskId = +params['id'];
      if (this.taskId) {
        const task = this.todoServer.getTask(this.taskId);
        this.taskForm.setValue(task);
      }
    });
  }


  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.getRawValue();
      if(this.taskId) {
        this.todoServer.editTask(this.taskId, newTask);
      } else{
        this.todoServer.addTask(newTask);
      }
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
