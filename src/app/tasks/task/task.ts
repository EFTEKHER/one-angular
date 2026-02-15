import { Component, Input, Output,EventEmitter,inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskServices } from '../tasks.service';
interface Taskss{
  id: string;
  userId: string;
  title: string;
  summary: string;
  time: string;

}

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  // @Input() title: string = '';
  // @Input() description: string = '';
  // @Input() dueDate: string  =''
  @Input() t1!: Taskss;
  @Output() complete=new EventEmitter<string>();
  private taskService=inject(TaskServices);
  onComplete(){
    this.taskService.completeTask(this.t1.id);
  }

}
