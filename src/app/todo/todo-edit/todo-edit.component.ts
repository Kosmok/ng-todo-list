import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ICanDeactivateComponent } from 'src/app/shared/guard/can-deactivate-component.guard';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { ConfitmDialogComponent } from 'src/app/shared/components/confitm-dialog/confitm-dialog.component';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit, ICanDeactivateComponent {

  taskId: string;
  editMode = false;
  taskForm: FormGroup;

  constructor(private todoServer: TodoService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskId = params['id'];
      this.editMode = params['id'] != null && params['id'] != '';
      this.initForm();
    });
  }

  getTitle() {
    return this.editMode ? 'Edit' : 'Add';
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.getRawValue();
      if (this.editMode) {
        this.todoServer.editTask(this.taskId, newTask);
      } else {
        this.todoServer.addTask(newTask);
      }
      this.editMode = false;
      this.taskForm.reset();
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  onCancel() {
    this.editMode = false;
    this.taskForm.reset();
    this.router.navigate(['../'], { relativeTo: this.route });
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

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.taskForm.touched) {
      return true;
    }
    const dialogRef = this.dialog.open(ConfitmDialogComponent, {
      height: '200px',
      width: '400px',
      data: { question: 'Do you want to abandon the changes?'}
    });

    return dialogRef.afterClosed()
      .pipe(
        map((confirmResult: string) => {
          return confirmResult === 'Yes' ? true : false;
        })
      );
  }
}
