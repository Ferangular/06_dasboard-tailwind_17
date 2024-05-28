import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "@libs/title/title.component";
import {HeavyLoadersSlowComponent} from "@libs/heavy-loaders/heavy-loaders-slow.component";

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    TitleComponent,
    HeavyLoadersSlowComponent
  ],
  templateUrl: './defer-views.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferViewsComponent {

}
