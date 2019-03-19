import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoNoActionComponent } from './todo-no-action/todo-no-action.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoEditComponent,
    TodoDetailsComponent,
    TodoNoActionComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
