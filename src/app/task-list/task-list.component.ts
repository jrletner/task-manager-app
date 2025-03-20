// task-list.component.ts (using signals)
import { Component, signal } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [],
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  tasks = signal<Task[]>([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  // get tasks() {
  //   return this.taskService.tasks();
  // }

  // method to delete a task
  deleteTask(id: number) {
    this.tasks.update((currentTasks) =>
      currentTasks.filter((task) => task.id != id)
    );
  }

  // deleteTask(id: number) {
  //   this.taskService.deleteTask(id)
  // }

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

  // completeTask(id: number) {
  //   this.taskService.completeTask(id)
  // }
}
