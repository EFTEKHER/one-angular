import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy_user';
import { Userspecific } from './userspecific/userspecific';
import { Signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [Header,User,Userspecific],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=DUMMY_USERS;
  selectedUser=signal<string|null>(null);
  onSelectU(userId:string){

    console.log('selected user with id'+userId)
  }
  onselectName(userName:string){
    this.selectedUser.set(userName);
    console.log('selected user with name'+userName)
  }
  protected readonly title = signal('one-angular');
}
