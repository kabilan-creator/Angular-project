import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'


import { TaskComponent } from './task.component'
import { TasksComponent } from './tasks/tasks.component'
import { AddtaskComponent } from './addtask/addtask.component'
import { Sharedmodule } from '../shared/shared.module'


@NgModule({
  declarations: [TaskComponent, TasksComponent, AddtaskComponent],
  exports: [TaskComponent],
  imports: [Sharedmodule, CommonModule, FormsModule],
})
export class Taskmodule {}
