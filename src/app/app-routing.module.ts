import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { TodoNoActionComponent } from './todo/todo-no-action/todo-no-action.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {path: 'todo-list', component: TodoComponent, children: [
    {path: '' , component: TodoNoActionComponent},
    {path: 'new' , component: TodoEditComponent},
    {path: ':id' , component: TodoDetailsComponent},
    {path: ':id/edit' , component: TodoEditComponent},
  ]},
  {path: 'history', component: HistoryComponent},
  {path: '**', redirectTo: 'todo-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
