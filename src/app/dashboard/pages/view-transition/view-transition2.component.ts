import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "@libs/title/title.component";

@Component({
  selector: 'app-view-transition2',
  standalone: true,
  imports: [
    TitleComponent
  ],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">

      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>


    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTransition2Component {

}
