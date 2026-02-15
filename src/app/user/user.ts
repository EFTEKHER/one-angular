import { Component,signal,computed, Input ,input, output, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from './dummy_user';
import { Card } from '../shared/card/card';
// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
interface Users{
  id:string;
  name:string;
  avatar:string;
}
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 @Input({required:true}) users !:Users;
 @Input({required:true})selected!:boolean;


@Output() select=new EventEmitter();

  imagePath=computed(()=>{
    return `../../../public/users/${this.users.avatar}`
  });
 onSelectUser(){

  this.select.emit(this.users.id);


 }

}
