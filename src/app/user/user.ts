import { Component,signal,computed, Input ,input, output, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from './dummy_user';
// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // selectedUser =signal(DUMMY_USERS[randomIndex]);
  // get imagePath(){
  //   return `../../../public/users/${this.selectedUser().avatar}`
  // }
  // imagePath =computed(()=>{
  //   return `../../../public/users/${this.selectedUser().avatar}`
  // })

  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // avatar=input.required<string>();
  // name=input.required<string>();
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // @Input({required:true}) id!:string;
  avatar=input.required<string>();
  name=input.required<string>()
  id=input.required<string>();
  // @Output() select= new EventEmitter()
  select=output<string>();
  getName=output<string>();
  // get imagePath(){
  //   return `../../../public/users/${this.avatar}`
  // }
  imagePath=computed(()=>{
    return `../../../public/users/${this.avatar()}`
  });
 onSelectUser(){
  // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
  //  this.selectedUser=DUMMY_USERS[randomIndex];
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  this.select.emit(this.id());
  this.onSelectName();
  // console.log(this.id);

 }
 onSelectName(){
  this.getName.emit(this.name());
  console.log(this.name())
 }
}
