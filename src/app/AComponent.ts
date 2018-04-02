import { Component } from '@angular/core';

@Component({
  selector: 'a-comp',
  template: `
    <input (keyup.enter)="keypress($event)" placeholder="parent input bound val" type="text">
    <b-comp [textContent]="AText"></b-comp>
    <span [textContent]="AText"></span>
  `
})
export class AComponent {
  AText = 'parentVal';
  keypress(event) {
    console.log('Got ', event.target.value);
    debugger;
    this.AText = event.target.value;
  }
}