import {Component,  Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[50px]', cssClass]">
      Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlowComponent {
  // cssClass= input.required<string>();
  @Input({ required: true }) cssClass!: string;
  constructor() {
    const start = Date.now();
    while( Date.now() - start < 1000 ) {}

  }


}
