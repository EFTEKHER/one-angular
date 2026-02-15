import {NewTask} from'../models/new_task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServices{
 private tasks = [
    { id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn all about Angular framework', time: '2024-06-01T10:00:00Z' },
    { id: 't2', userId: 'u2', title: 'Build an App', summary: 'Use Angular to build a web application', time: '2024-06-05T14:30:00Z' },
    { id: 't3', userId: 'u3', title: 'Deploy the App', summary: 'Deploy the Angular app to a hosting service', time: '2024-06-10T09:15:00Z' },
    { id: 't4', userId: 'u4', title: 'Test the App', summary: 'Perform testing to ensure app quality', time: '2024-06-15T11:45:00Z' },
    { id: 't5', userId: 'u5', title: 'Optimize Performance', summary: 'Improve the performance of the Angular app', time: '2024-06-20T16:20:00Z' },
    { id: 't6', userId: 'u6', title: 'Update Dependencies', summary: 'Keep Angular and related libraries up to date', time: '2024-06-25T13:10:00Z' },
    { id: 't7', userId: 'u1', title: 'Implement New Features', summary: 'Add new features to the Angular application', time: '2024-06-30T15:00:00Z' },
    { id: 't8', userId: 'u1', title: 'Fix Bugs', summary: 'Identify and fix bugs in the Angular app', time: '2024-07-05T10:30:00Z' },
    { id: 't9', userId: 'u2', title: 'Write Documentation', summary: 'Create documentation for the Angular project', time: '2024-07-10T12:00:00Z' },
    { id: 't10', userId: 'u3', title: 'Conduct Code Reviews', summary: 'Review code to ensure quality and standards', time: '2024-07-15T14:45:00Z' },
  ]
  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

  }
  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }
  addTask(taskData: NewTask, userId: string) {

    this.tasks.unshift({
      id: 't' + (this.tasks.length + 1), // Simple ID generation
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      time: taskData.dueDate
    });
    console.log('complete')

    this.saveTasksToLocalStorage();
}
private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
