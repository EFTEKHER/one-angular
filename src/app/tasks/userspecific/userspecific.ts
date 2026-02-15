import { Component, input, Input } from '@angular/core';
import { Task } from '../task/task';
import { NewTask } from '../new-task/new-task';
import {type NewTask as NewTaskModel} from '../../models/new_task.model';
import { TaskServices } from '../tasks.service';
@Component({
  selector: 'app-userspecific',
  imports: [Task, NewTask],
  templateUrl: './userspecific.html',
  styleUrl: './userspecific.css',
})
export class Userspecific {
  @Input() userId!: string ;
  @Input() name!: string ;
  isAddingTask: boolean = false;

 constructor(private taskService: TaskServices) {}
  get SelectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onComplete(taskId: string) {
    this.taskService.completeTask(taskId);
  }
  onStartingAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddtask(newTask: NewTaskModel) {
    this.taskService.addTask(newTask, this.userId);
    this.isAddingTask = false;
  }

}
