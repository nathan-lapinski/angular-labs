import { Component, Input, OnChanges, OnInit, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'b-comp',
  template: `
    <br>
    Comes from parent: {{textContent}}
    <br>
    is local val:  {{localContent}}
    <br>
    <input (keyup.enter)="updateLocal($event)" placeholder="child local var" type="text">
  `
})
export class BComponent implements OnChanges, OnInit, DoCheck {
  @Input() textContent;

  localContent = 'localVAL'

  updateLocal(event) {
    console.log('updating local', event.target.value);
    this.localContent = event.target.value;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('BComp on changes: ', changes);
  }

  ngOnInit() {
    console.log('BComp onInit ')
  }

  ngDoCheck() {
    console.log('BComp DoCheck')
  }
}