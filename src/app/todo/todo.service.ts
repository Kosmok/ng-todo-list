import { Injectable } from '@angular/core';
import { Task } from '../shared/Model/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasksChange: Subject<void> = new  Subject<void>();
  lastId: number = 5;
  private tasks: Task[] = [
    { id: 1, name: 'test1', description: 'opis testu1 ', createData: new Date() },
    { id: 2, name: 'test2', description: 'opis testu2 ', createData: new Date() },
    { id: 3, name: 'test3', description: 'opis testu3 ', createData: new Date() },
    { id: 4, name: 'test4', description: 'opis testu4 ', createData: new Date() },
    { id: 5, name: 'test5', description: 'opis testu5 ', createData: new Date() },
  ];

  constructor() { }


  getTasks() {
    return this.tasks.slice();
  }

  getTask(id: number) {
    return {...this.tasks.find((task: Task) => {
      return task.id === id;
    })};
  }

  addTask(task: Task) {
    this.lastId++;
    task.id = this.lastId;
    this.tasks.push(task);
    this.tasksChange.next();
  }

  editTask(id: number, newTask: Task) {
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });
    this.tasks[index] = {...this.tasks[index], ...newTask };

    this.tasksChange.next();
  }

  doTask(id: number): any {
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });
    this.tasksChange.next();

  }

  removeTask(id: number): any {
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });

    this.tasks.splice(index, 1);
    this.tasksChange.next();
  }
}
