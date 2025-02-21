/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import {NavigationEnd, NavigationSkipped, Router, RouterLink, RouterOutlet} from '@angular/router';
import {filter, map, skip} from 'rxjs/operators';

import {Footer} from './core/layout/footer/footer.component';
import {Navigation} from './core/layout/navigation/navigation.component';
import {SecondaryNavigation} from './core/layout/secondary-navigation/secondary-navigation.component';
import {ProgressBarComponent} from './core/layout/progress-bar/progress-bar.component';
import {ESCAPE, SEARCH_TRIGGER_KEY} from './core/constants/keys';
import {HeaderService} from './core/services/header.service';
import { CookiePopup, SearchDialog } from '../dev-infra-docs/components';
import { IS_SEARCH_DIALOG_OPEN } from '../dev-infra-docs/providers';
import { getActivatedRouteSnapshotFromRouter } from '../dev-infra-docs/utils';

@Component({
  selector: 'adev-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CookiePopup,
    Navigation,
    Footer,
    SecondaryNavigation,
    RouterOutlet,
    RouterLink,
    SearchDialog,
    ProgressBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:keydown)': 'setSearchDialogVisibilityOnKeyPress($event)',
  },
})
export class AppComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly headerService = inject(HeaderService);

  currentUrl = signal('');
  displayFooter = signal(false);
  displaySecondaryNav = signal(false);
  displaySearchDialog: WritableSignal<boolean> = inject(IS_SEARCH_DIALOG_OPEN);

  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit(): void {
    this.closeSearchDialogOnNavigationSkipped();
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map((event) => event.urlAfterRedirects),
      )
      .subscribe((url) => {
        this.currentUrl.set(url);
        this.setComponentsVisibility();
        this.displaySearchDialog.set(false);

        this.updateCanonicalLink(url);
      });

    this.focusFirstHeadingOnRouteChange();
  }

  focusFirstHeading(): void {
    if (!this.isBrowser) {
      return;
    }

    const h1 = this.document.querySelector<HTMLHeadingElement>('h1');
    h1?.focus();
  }

  private updateCanonicalLink(absoluteUrl: string) {
    this.headerService.setCanonical(absoluteUrl);
  }

  private setComponentsVisibility(): void {
    const activatedRoute = getActivatedRouteSnapshotFromRouter(this.router as any);

    this.displaySecondaryNav.set(activatedRoute.data['displaySecondaryNav']);
    this.displayFooter.set(!activatedRoute.data['hideFooter']);
  }

  private focusFirstHeadingOnRouteChange(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        // Skip first emission, cause on the initial load we would like to `Skip to main content` popup when it's focused
        skip(1),
      )
      .subscribe(() => {
        this.focusFirstHeading();
      });
  }

  private setSearchDialogVisibilityOnKeyPress(event: KeyboardEvent): void {
    if (event.key === SEARCH_TRIGGER_KEY && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      this.displaySearchDialog.update((display) => !display);
    }

    if (event.key === ESCAPE && this.displaySearchDialog()) {
      event.preventDefault();
      this.displaySearchDialog.set(false);
    }
  }

  private closeSearchDialogOnNavigationSkipped(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationSkipped)).subscribe(() => {
      this.displaySearchDialog.set(false);
    });
  }
}
