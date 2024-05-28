import { booleanAttribute, ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
  <h1 class="text-3xl mb-5">{{ title() }}</h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {
  title = input.required<string>();
  // withShadow = input.required<boolean>();
  @Input({ transform: booleanAttribute }) withShadow:boolean = false;
}
