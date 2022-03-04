import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(50px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('list1', [
      state('inList', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *',  [
        style({
          opacity: 0,
          transform: 'translate(-100px)'
        }),
        animate(300)
      ])
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

  onAdd(item: string): void {
    this.list.push(item);
  }

  onDelete(item: string): void {
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
  }
}
