import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidemenuComponent } from "../libs/sidemenu/sidemenu.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    template: `
<div class="flex bg-slate-100 text-black overflow-y-scroll w-screen h-screen antialiased  selection:bg-blue-600 selection:text-white" >
  <div class="flex relative w-screen">

    <app-sidemenu />

    <div class="text-black px-2 mt-2 w-full">
      <router-outlet/>
    </div>
  </div>
</div>

  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SidemenuComponent, RouterOutlet]
})
export class DashboardComponent {

}
