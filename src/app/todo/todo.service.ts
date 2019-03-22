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
    const newTask = new Task(null, task.name, task.description);
    this.http.post<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task.json', newTask)
      .subscribe((taskId: { name: string }) => {
        newTask.id = taskId.name;
        this.tasks.push(newTask);
        this.tasksChange.next(this.tasks.slice());
      });

  }

  editTask(id: string, newTask: Task) {
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });
    const taskupdate = { ...this.tasks[index], ...newTask };
    this.http.put<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task/' + id + '.json', taskupdate)
      .subscribe((taskupdated: Task) => {
        this.tasks[index] = taskupdated;
        this.tasksChange.next(this.tasks.slice());
      });
  }

  doTask(id: string): any {
    const index = this.tasks.findIndex((task: Task) => {
      return task.id === id;
    });
    const taskupdate =
      new Task(
          this.tasks[index].id,
          this.tasks[index].name,
          this.tasks[index].description,
          this.tasks[index].createDate,
          new Date()
        );
    this.http.put<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task/' + id + '.json', taskupdate)
      .subscribe((taskupdated: Task) => {
        this.tasks[index] = taskupdated;
        this.tasksChange.next(this.tasks.slice());
      });
  }

  removeTask(id: string): any {
    this.http.delete<any>('https://ng-test-1e5d1.firebaseio.com/ToDoApp/Task/' + id + '.json')
      .subscribe(() => {
        const index = this.tasks.findIndex((task: Task) => {
          return task.id === id;
        });
        this.tasks.splice(index, 1);
        this.tasksChange.next(this.tasks.slice());
    });
  }
}
