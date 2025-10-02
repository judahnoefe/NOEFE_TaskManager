import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/taskservice.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent{
  taskTitle: string = '';
  constructor(private taskService: TaskService) {}

  addTask(){
    const title = this.taskTitle.trim();
    if (title) {
      this.taskService.addTask(title);
      this.taskTitle = '';
    }
  }
}
