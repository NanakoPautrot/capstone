import { Component, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-animate-test',
  template: `<div [@changeState]="currentState" class="myblock mx-auto"></div>`,
  styles: [`
  .myblock {
    background-color: green;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    margin: 5rem;
  }
  `],
  animations: [
    trigger('changeState', [
      state('normal', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('animated', style({
        backgroundColor: 'blue',
        transform: 'scale(1.5)'
      })),
      transition('* => normal', animate('100ms')), 
      transition('* =>animated', animate('100ms'))
    ])
  ]
})



export class AnimateTestComponent {
  @Input() currentState ;
  
}