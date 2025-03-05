import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { Sharedmodule } from './shared/shared.module'
import { Taskmodule } from './task/task.module'

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, Sharedmodule, Taskmodule],
})
export class Appmodule {}
