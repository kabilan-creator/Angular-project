import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
@Input({required:true}) userId!:string;
@Output() close = new EventEmitter<void>()

enteredtitle ='';
enteredsummary='';
enteredDate='';

private taskService = inject(TaskService)

oncancel(){
  this.close.emit();
}
onsubmit(){
  this.taskService.addTask({
    title:this.enteredtitle,
    summary: this.enteredsummary,
    date:this.enteredDate,

  },
  this.userId
);
this.close.emit();
}

}
