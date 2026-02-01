import { Component, input } from '@angular/core';

@Component({
  selector: 'app-userspecific',
  imports: [],
  templateUrl: './userspecific.html',
  styleUrl: './userspecific.css',
})
export class Userspecific {
name=input.required<string>();

}
