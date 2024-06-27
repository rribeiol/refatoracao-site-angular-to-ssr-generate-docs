import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';


import { routes } from './routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ENVIRONMENT_INITIALIZER,
  ErrorHandler,
  VERSION,
  inject,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  RouteReuseStrategy,
  Router,
  TitleStrategy,
  createUrlTreeFromSnapshot,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import environment from './environment';
import { PREVIEWS_COMPONENTS_MAP } from './../assets/previews/previews';
import { ADevTitleStrategy } from './core/services/a-dev-title-strategy';
import { AnalyticsService } from './core/services/analytics/analytics.service';
import { ContentLoader } from './core/services/content-loader.service';
import { CustomErrorHandler } from './core/services/errors-handling/error-handler';
import { ExampleContentLoader } from './core/services/example-content-loader.service';
// import {ReuseTutorialsRouteStrategy} from './features/tutorial/tutorials-route-reuse-strategy';

import { ReferenceScrollHandler } from './features/references/services/reference-scroll-handler.service';
import { CURRENT_MAJOR_VERSION } from './core/providers/current-version';
import { AppScroller } from './app-scroller';
import { ENVIRONMENT, PREVIEWS_COMPONENTS, DOCS_CONTENT_LOADER, EXAMPLE_VIEWER_CONTENT_LOADER, WINDOW, windowProvider } from '../dev-infra-docs/providers';


// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
// };


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling(),
      withViewTransitions({
        onViewTransitionCreated: ({ transition, to }) => {
          const router = inject(Router);
          const toTree = createUrlTreeFromSnapshot(to, []);
          // Skip the transition if the only thing changing is the fragment and queryParams
          if (
            router.isActive(toTree, {
              paths: 'exact',
              matrixParams: 'exact',
              fragment: 'ignored',
              queryParams: 'ignored',
            })
          ) {
            transition.skipTransition();
          }
        },
      }),
    ),
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    {
      provide: CURRENT_MAJOR_VERSION,
      useValue: Number(VERSION.major),
    },
    { provide: ENVIRONMENT, useValue: environment },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(AppScroller),
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(AnalyticsService),
    },
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: PREVIEWS_COMPONENTS, useValue: PREVIEWS_COMPONENTS_MAP },
    { provide: DOCS_CONTENT_LOADER, useClass: ContentLoader },
    { provide: EXAMPLE_VIEWER_CONTENT_LOADER, useClass: ExampleContentLoader },
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: ReuseTutorialsRouteStrategy,
    // },
    {
      provide: WINDOW,
      useFactory: (document: Document) => windowProvider(document),
      deps: [DOCUMENT],
    },
    { provide: TitleStrategy, useClass: ADevTitleStrategy },
    ReferenceScrollHandler
  ],
};
