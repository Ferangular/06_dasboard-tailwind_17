import {ChangeDetectionStrategy, Component, computed,  inject } from '@angular/core';
import {TitleComponent} from "@libs/title/title.component";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "@core/services/users.service";
import {switchMap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleComponent
  ],
  template: `
    <app-title [title]="titleLabel()" />

    @if( user() ) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>
      </section>

    } @else {
      <p>Cargando información</p>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // id= input.required<string>(); // 2º forma
  //
  //  public user= computed(() => {
  //   return this.usersService.getUserById(this.id());
  // });

  // public user = signal<User| undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }

    return 'Información del usuario';
  });

  constructor() {
    // effect(() => {
    //   console.log(this.id())
    // });
  //   this.route.params.subscribe(params => {
  //     console.log({params});
  //   })
  }
}
