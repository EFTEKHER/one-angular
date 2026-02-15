import { Component, EventEmitter, Input, Output,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { type NewTask as NewTaskModel } from '../../models/new_task.model';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel=new EventEmitter<void>();
  @Input() userId!: string;
  // @Output() add= new EventEmitter<{title: string, summary: string, dueDate: string}>();
  enteredTitle='';
  enteredSummary='';
  enteredDueDate='';
  private taskService=inject(TaskServices);

  onCancel(){
    this.cancel.emit();
  }
  onYes(){
    // Here you would typically emit an event with the new task data or call a service to save it
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);

     this.cancel.emit(); // Close the form after creating the task
  }

}
