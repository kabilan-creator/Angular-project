import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { Task } from './tasks.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',

  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) task!:Task;
    @Output() complete = new EventEmitter<string>();
     private taskServices = inject(TaskService);
    oncompleteTask(){
      this.taskServices.removetask(this.task.id);
    }
}
