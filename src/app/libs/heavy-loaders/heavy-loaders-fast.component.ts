import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section [ngClass]="['w-full', cssClass ]">
    <!--  Reciebe el contenido desde el padre  -->
    <ng-content />
     <!-- ./ Reciebe el contenido desde el padre  -->
  </section> `,
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast creado');
  }
}
