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
  editMode = false;
  taskForm: FormGroup;

  constructor(private todoServer: TodoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskId = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }


  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.getRawValue();
      if (this.editMode) {
        this.todoServer.editTask(this.taskId, newTask);
      } else {
        this.todoServer.addTask(newTask);
      }
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  initForm() {
    let taskName = '';
    let taskDescription = '';
    if (this.editMode) {
      const task = this.todoServer.getTask(this.taskId)
      taskName = task.name;
      taskDescription = task.description;
    }

    this.taskForm = new FormGroup({
      name: new FormControl(taskName, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(taskDescription)
    });
  }
}
