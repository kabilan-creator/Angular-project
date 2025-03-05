import { Injectable } from "@angular/core";
import { addtaskdata } from "./tasks/tasks.model";

@Injectable({providedIn:'root'})
export class TaskService {
  private tasks=[
    {
      id:'t1',
      userId:'u1',
      title:'master Angular',
      summary: 'leran all the basic and advance angular',
      duedate:'2025-12-31',

    },
    {
      id:'t2',
      userId:'u3',
      title:'build in Angular',
      summary: 'leran all the basic and advance angular',
      duedate:'2025-12-31',

    },
    {
      id:'t3',
      userId:'u3',
      title:'prepare issue template',
      summary: 'leran all the basic and advance angular',
      duedate:'2025-12-31',

    },
    
  ];
  constructor(){
    const tasks = localStorage.getItem('tasks');
  
  if(tasks){
    this.tasks = JSON.parse(tasks);
  }
}

  getusertasks(userId:string){
    return this.tasks.filter((tasks)=>tasks.userId===userId)
  }
  addTask(taskdata:addtaskdata ,userId:string){
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId:userId,
        title: taskdata.title,
        summary: taskdata.summary,
        duedate:taskdata.date
    });
    this.savetasks();
  }
  removetask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.savetasks();
  }

  private savetasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  
  
  }
}

