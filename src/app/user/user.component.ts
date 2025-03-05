import { Component,Input,EventEmitter, Output} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input ({required:true}) selected!:boolean;
  @Output() select=new EventEmitter();
  // avatar = input.required <string>();
  // name = input.required <string>();

  get imagepath(){
    return 'assets/users/'+ this.user.avatar;
  }
  // imagepath=computed(()=>{
  //   return 'assets/users/'+ this.avatar(); 
  // })
  onSelectuser() {
    this.select.emit(this.user.id);
  }
}
