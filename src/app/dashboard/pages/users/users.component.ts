import {ChangeDetectionStrategy, Component, computed, effect, inject, input} from '@angular/core';
import {TitleComponent} from "@libs/title/title.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {UsersService} from "@core/services/users.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TitleComponent,
    NgOptimizedImage,
    RouterLink
  ],
  template: `
    <app-title title="Listado de usuarios" />

    <ul>
      @for (user of usersService.users(); track user.id) {
        <li class="flex items-center my-2 cursor-pointer">

          <img
            [srcset]="user.avatar"
            [alt]="user.first_name"
            class="rounded w-14"
          />

          <a
            [routerLink]="['/dashboard/user', user.id ]"
            class="mx-5 hover:underline">
            {{ user.first_name}} {{ user.last_name }}
          </a>


        </li>
      } @empty {
        <h3>Espere por favor</h3>
      }
    </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  public usersService = inject( UsersService )
}
