import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../types/user';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent {
  @Input() users: UserInterface[]
  @Output() removeUser = new EventEmitter()
  @Output() addUserEvent = new EventEmitter()

  // declare new user variable
  newUserName: string = "";
  // declare var to fill if user already exists
  newUserErr: string = "";


  setNewUserName(userName: string): void {
    // store new user
    this.newUserName = userName
  }


  addUser(): void {
    // send new username to addUserEvent (function inside app.component.ts)
    this.addUserEvent.emit(this.newUserName)

    // set newUserName to empty (clear after use)
    this.newUserName = ""
  }

  ngOnInit(): void {
  }

}
