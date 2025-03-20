import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // properties
  tasks = signal<Task[]>([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  // CRUD METHODS

  // method to get tasks
  getTasks() {
    return this.tasks();
  }

  // method to add a task
  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks().length + 1,
      title: title,
      completed: false,
    };
    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
    console.log('this.tasks():', this.tasks());
  }

  // method to delete a task
  deleteTask(id: number) {
    this.tasks.update((currentTasks) =>
      currentTasks.filter((task) => task.id != id)
    );
  }

  // method to complete a task
  completeTask(id: number) {
    this.tasks.update((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          task.completed = true;
        }
        return task;
      });
    });
  }
}
