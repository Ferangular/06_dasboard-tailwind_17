import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TitleComponent} from "@libs/title/title.component";
import {HeavyLoadersFastComponent} from "@libs/heavy-loaders/heavy-loaders-fast.component";

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    TitleComponent,
    HeavyLoadersFastComponent
  ],
  templateUrl: './defer-options.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferOptionsComponent {

}
