import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TitleComponent} from "@libs/title/title.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    TitleComponent,
    JsonPipe
  ],
  template: `
    <app-title [title]="currentFramework()" />
    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {


  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );


  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };


  constructor() {

    setTimeout(() => {


      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => {
        value.name = 'React';
        return {...value};
      })

      console.log('Hecho');
    }, 3000);


  }


}
