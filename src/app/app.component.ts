import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './taskform/taskform.component';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskService } from './services/taskservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public taskService: TaskService) {}
}
