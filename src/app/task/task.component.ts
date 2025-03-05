import { Component, Input } from '@angular/core'

import { TaskService } from './task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isaddingtask = false

  constructor(private taskService: TaskService) {}

  get selectedusertasks() {
    return this.taskService.getusertasks(this.userId)
  }

  onaddtask() {
    this.isaddingtask = true
  }
  onclosetask() {
    this.isaddingtask = false
  }
}
