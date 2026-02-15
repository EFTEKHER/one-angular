import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy_user';
import { Userspecific } from './tasks/userspecific/userspecific';
import { Signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [Header,User,Userspecific],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=DUMMY_USERS;
  selectedUserId=''

  get selecteduser(){
    console.log(this.selectedUserId)
    return this.users.find(user=>user.id===this.selectedUserId)!;
  }
  onSelectU(userId:string){

    this.selectedUserId=userId;
    console.log('selected user with id'+userId)
  }

  protected readonly title = signal('one-angular');
}
