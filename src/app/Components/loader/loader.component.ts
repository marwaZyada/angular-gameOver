import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  template: `
  <ng-lottie  height="600px" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
`,

  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  options: AnimationOptions = {
    path: '/assets/98195-loader.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
