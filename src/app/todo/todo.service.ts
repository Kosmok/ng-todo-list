import { Injectable } from '@angular/core';
import { Task } from '../shared/Model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

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

  addTasks(task: Task) {
    return this.tasks.push(task);
  }
}
