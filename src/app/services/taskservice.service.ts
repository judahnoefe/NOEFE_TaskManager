import { Injectable } from '@angular/core';

export interface Task{
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService{
  private tasks: Task[] = [];

  getTasks(): Task[]{
    return this.tasks;
  }

  addTask(title: string){
    this.tasks.push({ title, completed: false });
  }

  toggleTask(index: number){
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  getTotalTasks(): number{
    return this.tasks.length;
  }

  getCompletedTasks(): number{
    return this.tasks.filter(t => t.completed).length;
  }
}
