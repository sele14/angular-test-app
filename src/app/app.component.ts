import { Component } from '@angular/core';
import { UserInterface } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';
  users: UserInterface[] = [
      {
        id: 1,
        name: "user1",
      },
      {
        id: 2,
        name: "user2",
      },
      {
        id: 3,
        name: "user3",
      }
    ]

    removeUser(id: number): void {
      this.users = this.users.filter(users => users.id !== id)
    }

    addUser(name: string): void {

      // create random id
      // const uniqueId = this.users.length
      const uniqueId = Math.random()

      // create object for new user
      const newUser: UserInterface = {
        id: uniqueId,
        name
      }
      // add new user to users array (alert if already exists)
      if(this.users.map(a => a.name).includes(newUser.name)){
        alert("A user with that name already exists!")
      } else{
        this.users.push(newUser)
      }
    }




}
