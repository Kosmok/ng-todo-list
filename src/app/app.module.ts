import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { HistoryComponent } from './history/history.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoTaskComponent } from './todo/todo-list/todo-task/todo-task.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoNoActionComponent } from './todo/todo-no-action/todo-no-action.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    TodoComponent,
    TodoListComponent,
    TodoTaskComponent,
    TodoEditComponent,
    TodoDetailsComponent,
    TodoNoActionComponent,
    HistoryListComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
