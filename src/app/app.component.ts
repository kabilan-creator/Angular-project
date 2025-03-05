import { Component } from '@angular/core'

import { DUMMY_USERS } from './dummy-users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selecteduserid?: string

  get selecteduser() {
    return this.users.find((user) => user.id === this.selecteduserid)
  }

  onSelectuser(id: string) {
    this.selecteduserid = id
  }
}
