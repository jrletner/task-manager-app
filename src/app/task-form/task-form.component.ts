// task-form.component.ts
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  constructor(private taskService: TaskService) {}

  newTaskTitle = '';

  // Create addTask method
  addTask() {
    if (this.newTaskTitle) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
