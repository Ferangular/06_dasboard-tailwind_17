import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideClientHydration} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes,
      withViewTransitions({
        skipInitialTransition: false,
        onViewTransitionCreated( transitionInfo ) {
          console.log(transitionInfo)
        },
      }),
      withComponentInputBinding(),
      ),
    provideClientHydration(),
  ]
};
