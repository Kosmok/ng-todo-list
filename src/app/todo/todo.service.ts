import { Injectable } from '@angular/core';
import { Task } from '../shared/Model/task.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasksChange: Subject<Task[]> = new Subject<Task[]>();

  private tasks: Task[] = [
  ];

  constructor(private http: HttpClient) { }


  getTasks() {
    this.http.get<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task.json')
      .pipe(
        map((tasks) =>
          Object.keys(tasks)
            .map(k => new Task(k, tasks[k].name, tasks[k].description, tasks[k].createData)))
      )
      .subscribe((tasks: Task[]) => {
        if (tasks) {
          this.tasks = tasks;
        } else {
          this.tasks = [];
        }
        this.tasksChange.next(this.tasks.slice());
      });
  }

  getTask(id: string) {
    return {
      ...this.tasks.find((task: Task) => {
        return task.id === id;
      })
    };
  }

  addTask(task: Task) {
    task.createData = new Date();
    this.http.post<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task.json', task)
      .subscribe((taskId: { name: string }) => {
        task.id = taskId.name;
        this.tasks.push(task);
        this.tasksChange.next(this.tasks.slice());
      });

  }

  editTask(id: string, newTask: Task) {
    this.http.put<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task/' + id + '.json', newTask)
      .subscribe((taskId: { name: string }) => {
        const index = this.tasks.findIndex((task: Task) => {
          return task.id === id;
        });
        this.tasks[index] = { ...this.tasks[index], ...newTask };

        this.tasksChange.next(this.tasks.slice());
      });
  }

  doTask(id: string): any {
    // TODO
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });
    this.tasksChange.next(this.tasks.slice());

  }

  removeTask(id: string): any {
    // TODO
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });

    this.tasks.splice(index, 1);
    this.tasksChange.next(this.tasks.slice());
  }
}
