import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TodoNoActionComponent } from './todo-no-action/todo-no-action.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoComponent } from './todo.component';

const TodoRoutes: Routes = [
  {path: 'todo-list', component: TodoComponent, children: [
    {path: '' , component: TodoNoActionComponent},
    {path: 'new' , component: TodoEditComponent},
    {path: ':id' , component: TodoDetailsComponent},
    {path: ':id/edit' , component: TodoEditComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(TodoRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
