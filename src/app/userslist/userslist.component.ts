import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  // declare new user variable
  newUserName: string = "";
  // declare var to fill if user already exists
  newUserErr: string = "";

  // dummy data
  users = [
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
    },
    {
      id: 4,
      name: "user4",
    }
  ]

  constructor() { }

  removeUser(id: number): void {
    this.users = this.users.filter(users => users.id !== id)
  }

  setNewUserName(userName: string): void {
    // store new user
    this.newUserName = userName
  }


  addUser(): void {
    console.log('addUser: ', this.newUserName)

    // create random id
    // const uniqueId = this.users.length
    const uniqueId = Math.random()

    // create object for new user
    const newUser = {
      id: uniqueId,
      name: this.newUserName
    }
    // add new user to users array (alert if already exists)
    if(this.users.map(a => a.name).includes(newUser.name)){
      alert("A user with that name already exists!")
    } else{
      this.users.push(newUser)
    }
  }

  ngOnInit(): void {
  }

}
