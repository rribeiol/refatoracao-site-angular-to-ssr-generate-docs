/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import { DocViewer } from '../../../dev-infra-docs/components';
import { DocContent } from '../../../dev-infra-docs/interfaces';
@Component({
  selector: 'docs-docs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DocViewer],
  styleUrls: ['./docs.component.scss'],
  templateUrl: './docs.component.html',
})
export default class DocsComponent {



  teste =`<div class="docs-decorative-header-container">
      <div class="docs-decorative-header">
        <div class="docs-header-content">
          <docs-breadcrumb _nghost-ng-c1455283500="" ng-version="18.0.4"><div _ngcontent-ng-c1455283500="" class="docs-breadcrumb ng-star-inserted"><!----><span _ngcontent-ng-c1455283500="" class="ng-star-inserted">Introduction</span><!----></div><!----></docs-breadcrumb>

          
  <!-- Page title -->
  <div class="docs-page-title">
    <h1 tabindex="-1">What is Angular?</h1>
    <a class="docs-github-links" target="_blank" href="https://github.com/angular/angular/edit/main/adev/src/content/introduction/what-is-angular.md" title="Edit this page" aria-label="Edit this page">
      <!-- Pencil -->
      <docs-icon role="presentation" aria-hidden="true" translate="no" _nghost-ng-c1974536348="" ng-version="18.0.4" class="material-symbols-outlined">edit</docs-icon>
    </a>
  </div>

          <p><!-- markdownlint-disable-line --></p>
        </div>

        <!-- illustration -->
        <svg width="297" height="205" viewBox="0 0 297 205" fill="none" xmlns="http://www.w3.org/2000/svg" class="docs-what-is-angular-svg">
  <g style="mix-blend-mode: multiply;">
    <path d="M63.2808 128.703H13.5968C9.45343 128.703 6.08691 132.07 6.08691 136.213V157.362C6.08691 161.505 9.45343 164.872 13.5968 164.872H50.234L60.7158 173.948V164.872H63.2808C67.4242 164.872 70.7907 161.505 70.7907 157.362V136.213C70.7907 132.07 67.4242 128.703 63.2808 128.703Z" fill="var(--senary-contrast)"></path>
  </g>
  <g style="mix-blend-mode: multiply;">
    <path d="M239.289 43.5782H288.973C293.116 43.5782 296.483 46.9448 296.483 51.0882V72.2368C296.483 76.3803 293.116 79.7468 288.973 79.7468H252.336L241.854 88.8228V79.7468H239.289C235.146 79.7468 231.779 76.3803 231.779 72.2368V51.0882C231.779 46.9448 235.146 43.5782 239.289 43.5782Z" fill="var(--senary-contrast)"></path>
  </g>
  <path d="M235.713 39.3488H285.397C289.54 39.3488 292.906 42.7153 292.906 46.8587V68.0074C292.906 72.1508 289.54 75.5173 285.397 75.5173H248.759L238.278 84.5933V75.5173H235.713C231.569 75.5173 228.203 72.1508 228.203 68.0074V46.8587C228.203 42.7153 231.569 39.3488 235.713 39.3488Z" fill="white" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M148.615 185.737C192.556 185.737 228.178 150.115 228.178 106.173C228.178 62.2318 192.556 26.6101 148.615 26.6101C104.673 26.6101 69.0513 62.2318 69.0513 106.173C69.0513 150.115 104.673 185.737 148.615 185.737Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M173.322 181.818C201.095 172.746 212.548 131.53 198.904 89.7605C185.26 47.9909 151.684 21.4845 123.911 30.5567C96.1383 39.629 84.6847 80.8445 98.329 122.614C111.973 164.384 145.549 190.89 173.322 181.818Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M173.321 181.818C184.546 178.151 182.586 141.317 168.941 99.5474C155.297 57.7778 135.136 26.8896 123.91 30.5565C112.684 34.2235 114.645 71.0571 128.289 112.827C141.934 154.596 162.095 185.485 173.321 181.818Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M135.676 66.5675C164.802 57.0532 186.542 43.6094 184.232 36.54C181.923 29.4705 156.44 31.4523 127.314 40.9665C98.1875 50.4808 76.4482 63.9246 78.7575 70.9941C81.0668 78.0636 106.55 76.0817 135.676 66.5675Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M144.433 93.3979C182.597 80.9314 211.081 63.3153 208.055 54.0512C205.029 44.787 171.638 47.383 133.474 59.8494C95.3105 72.3158 66.826 89.9319 69.8522 99.1961C72.8784 108.46 106.269 105.864 144.433 93.3979Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M153.616 121.498C195.386 107.854 226.562 88.5745 223.251 78.4364C219.939 68.2983 183.393 71.1406 141.624 84.785C99.8541 98.4293 68.6778 117.709 71.9895 127.847C75.3012 137.985 111.847 135.143 153.616 121.498Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M162.397 148.23C201.901 135.326 231.301 116.83 228.063 106.919C224.825 97.0072 190.177 99.4333 150.673 112.337C111.169 125.242 81.7697 143.737 85.0073 153.649C88.245 163.56 122.894 161.134 162.397 148.23Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M168.898 168.485C200.446 158.18 223.932 143.434 221.356 135.548C218.78 127.663 191.118 129.625 159.571 139.93C128.023 150.235 104.537 164.981 107.113 172.867C109.689 180.752 137.351 178.79 168.898 168.485Z" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M232.149 7.11401H224.269V14.9939H232.149V7.11401Z" fill="var(--page-background)" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M24.0278 34.2435H16.1479V42.1234H24.0278V34.2435Z" fill="var(--page-background)" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M200.902 22.3925H196.709V26.5852H200.902V22.3925Z" fill="var(--page-background)" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M8.91125 15.9064H4.71851V20.0991H8.91125V15.9064Z" fill="var(--page-background)" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M258.834 110.305H254.642V114.497H258.834V110.305Z" fill="var(--page-background)" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M4.71813 98.2441H0.525391V102.437H4.71813V98.2441Z" fill="var(--page-background)" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M44.1047 96.1231C46.0038 54.1587 74.798 19.211 113.643 8.08789" stroke="#F637E3" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M47.312 95.3584L44.0072 100.55L41.1709 95.0995L47.312 95.3584Z" fill="#F637E3"></path>
  <path d="M113.644 11.3681L117.935 6.96576L111.967 5.44897L113.644 11.3681Z" fill="#F637E3"></path>
  <path d="M240.028 140.714C226.131 177.684 190.443 204 148.614 204C125.419 204 104.11 195.91 87.3633 182.395" stroke="var(--primary-contrast)" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M236.775 140.467L241.498 136.546L242.534 142.601L236.775 140.467Z" fill="var(--primary-contrast)"></path>
  <path d="M90.051 180.496L83.9839 179.547L86.1912 185.281L90.051 180.496Z" fill="var(--primary-contrast)"></path>
  <path d="M260.562 69.5858C260.488 69.5858 260.414 69.5488 260.316 69.4748C257.258 67.1195 254.027 64.5669 251.141 61.558C249.735 60.1028 248.169 58.3641 247.281 56.2431C246.393 54.1097 246.393 51.7297 247.294 49.7196C248.145 47.8206 249.748 46.3778 251.795 45.6749C252.165 45.5516 252.547 45.4776 252.929 45.3913C253.114 45.3543 253.299 45.3173 253.484 45.2679H254.742C254.927 45.3419 255.186 45.4036 255.457 45.4776C256.024 45.6256 256.616 45.7735 257.147 45.9832C258.33 46.4641 259.366 47.3396 260.291 48.6591L260.525 48.9798L261.08 48.3262C261.29 48.0795 261.487 47.8329 261.697 47.6109C262.893 46.3408 264.373 45.6009 266.087 45.3789C266.198 45.3666 266.297 45.3296 266.383 45.2926H267.702C267.863 45.3296 268.109 45.3913 268.356 45.4406C268.886 45.5639 269.392 45.6749 269.848 45.8845C272.573 47.0807 274.115 49.1894 274.423 52.149C274.694 54.6523 273.881 56.909 271.809 59.4739C269.17 62.7171 265.976 65.3684 262.918 67.8101C262.572 68.0937 262.215 68.365 261.857 68.6363C261.512 68.9076 261.167 69.1665 260.821 69.4378C260.71 69.5365 260.612 69.5735 260.525 69.5735L260.562 69.5858Z" fill="#F11653"></path>
  <path d="M267.638 45.5885C267.86 45.6502 268.082 45.6995 268.304 45.7488C268.822 45.8721 269.303 45.9831 269.747 46.1681C272.398 47.3396 273.841 49.3003 274.149 52.1736C274.408 54.5906 273.619 56.7733 271.597 59.2642C268.982 62.4828 265.788 65.1217 262.755 67.5634C262.409 67.847 262.052 68.1183 261.694 68.3896C261.349 68.6486 261.004 68.9199 260.671 69.1912C260.609 69.2405 260.572 69.2528 260.572 69.2651C260.572 69.2651 260.547 69.2528 260.51 69.2282C257.465 66.8728 254.246 64.3325 251.36 61.3359C249.979 59.8931 248.438 58.1914 247.562 56.1074C246.699 54.0603 246.711 51.7666 247.575 49.8306C248.388 48.0055 249.918 46.6244 251.891 45.9461C252.236 45.8228 252.594 45.7612 252.988 45.6748C253.148 45.6378 253.321 45.6132 253.481 45.5762H254.653C254.887 45.6378 255.134 45.6995 255.38 45.7612C255.96 45.9091 256.515 46.0448 257.033 46.2544C258.167 46.7107 259.154 47.5492 260.042 48.8194L260.498 49.473L261.016 48.8687C261.127 48.7454 261.226 48.6221 261.324 48.4988C261.522 48.2521 261.719 48.0178 261.929 47.7959C263.075 46.5874 264.494 45.8721 266.134 45.6625C266.282 45.6502 266.405 45.6008 266.504 45.5638H267.638M267.724 44.9473H266.393C266.282 44.9843 266.171 45.0336 266.06 45.0583C264.259 45.2802 262.73 46.0571 261.485 47.3766C261.164 47.7095 260.88 48.0795 260.547 48.4618C259.672 47.2286 258.636 46.2298 257.267 45.6748C256.466 45.3542 255.59 45.1816 254.739 44.9473H253.407C252.828 45.0829 252.236 45.1569 251.681 45.3542C246.909 47.0066 245.207 52.0749 246.983 56.3293C247.858 58.438 249.35 60.1274 250.904 61.7429C253.728 64.6778 256.897 67.2181 260.116 69.6968C260.264 69.8077 260.412 69.8694 260.547 69.8694C260.708 69.8694 260.868 69.7954 261.041 69.6598C261.731 69.1048 262.446 68.5869 263.125 68.032C266.319 65.467 269.463 62.8404 272.065 59.6465C273.853 57.4515 275.074 55.0468 274.753 52.0996C274.42 49.0167 272.817 46.834 269.993 45.5885C269.278 45.2679 268.477 45.1569 267.712 44.9473H267.724Z" fill="black"></path>
  <path d="M80.2482 77.4411C80.2482 70.9917 74.8223 65.8124 68.2989 66.2193C62.6881 66.5646 58.1254 71.1273 57.7801 76.7382C57.7061 78.0453 57.8417 79.3155 58.187 80.5116C58.4213 81.3625 58.7666 82.1641 59.1859 82.9163L59.2352 83.015C59.2352 83.015 59.2352 83.0273 59.2352 83.0396L67.7933 98.5157C68.3236 99.4653 69.6801 99.4653 70.2103 98.5157L78.8301 82.9286C79.7303 81.3132 80.2482 79.4511 80.2482 77.4657V77.4411ZM69.0018 81.8188C66.8315 81.8188 65.0804 80.0677 65.0804 77.8974C65.0804 75.727 66.8315 73.9759 69.0018 73.9759C71.1722 73.9759 72.9233 75.727 72.9233 77.8974C72.9233 80.0677 71.1722 81.8188 69.0018 81.8188Z" fill="#F11653" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M210.791 133.525C210.791 127.075 205.365 121.896 198.829 122.303C193.218 122.648 188.656 127.211 188.31 132.822C188.236 134.129 188.372 135.399 188.717 136.595C188.952 137.446 189.297 138.248 189.716 139L189.765 139.099C189.765 139.099 189.765 139.111 189.765 139.123L198.324 154.599C198.854 155.549 200.21 155.549 200.741 154.599L209.36 139.012C210.261 137.397 210.778 135.535 210.778 133.549L210.791 133.525ZM199.544 137.902C197.374 137.902 195.623 136.151 195.623 133.981C195.623 131.811 197.374 130.06 199.544 130.06C201.715 130.06 203.466 131.811 203.466 133.981C203.466 136.151 201.715 137.902 199.544 137.902Z" fill="#8514F5" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M144.349 105.064C144.349 98.6142 138.923 93.435 132.387 93.8419C126.776 94.1872 122.214 98.7499 121.868 104.361C121.794 105.668 121.93 106.938 122.275 108.134C122.509 108.985 122.855 109.787 123.274 110.539L123.323 110.638C123.323 110.638 123.323 110.65 123.323 110.662L131.881 126.138C132.412 127.088 133.768 127.088 134.298 126.138L142.918 110.551C143.818 108.936 144.336 107.074 144.336 105.088L144.349 105.064ZM133.102 109.441C130.932 109.441 129.181 107.69 129.181 105.52C129.181 103.35 130.932 101.598 133.102 101.598C135.273 101.598 137.024 103.35 137.024 105.52C137.024 107.69 135.273 109.441 133.102 109.441Z" fill="#F637E3" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M166.102 11.9231C166.102 5.47372 160.676 0.29446 154.14 0.701402C148.529 1.04669 143.967 5.60937 143.621 11.2202C143.547 12.5274 143.683 13.7975 144.028 14.9937C144.263 15.8446 144.608 16.6461 145.027 17.3984L145.077 17.497C145.077 17.497 145.077 17.5093 145.077 17.5217L153.635 32.9978C154.165 33.9473 155.521 33.9473 156.052 32.9978L164.671 17.4107C165.572 15.7952 166.09 13.9332 166.09 11.9478L166.102 11.9231ZM154.855 16.3009C152.685 16.3009 150.934 14.5498 150.934 12.3794C150.934 10.2091 152.685 8.45796 154.855 8.45796C157.026 8.45796 158.777 10.2091 158.777 12.3794C158.777 14.5498 157.026 16.3009 154.855 16.3009Z" fill="#5C44E4" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M57.7813 123.586H8.09733C3.95392 123.586 0.587402 126.952 0.587402 131.096V152.244C0.587402 156.388 3.95392 159.754 8.09733 159.754H44.7344L55.2163 168.83V159.754H57.7813C61.9247 159.754 65.2912 156.388 65.2912 152.244V131.096C65.2912 126.952 61.9247 123.586 57.7813 123.586Z" fill="#8514F5" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M59.2344 133.241H6.65259V136.127H59.2344V133.241Z" fill="white" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M59.2344 140.776H6.65259V143.661H59.2344V140.776Z" fill="white" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
  <path d="M37.8268 148.31H6.65259V151.196H37.8268V148.31Z" fill="white" stroke="black" stroke-width="0.93421" stroke-miterlimit="10"></path>
</svg>

      </div>
    </div>
    <big style="margin-top: 2em">
Angular is a web framework that empowers developers to build fast, reliable applications.
</big>

<p>Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs, and
libraries to simplify and streamline your development workflow. Angular gives you
a solid platform on which to build fast, reliable applications that scale with both the size of
your team and the size of your codebase.</p>
<p><strong>Want to see some code?</strong> Jump over to our <a href="essentials">Essentials</a> for a quick overview of
what it's like to use Angular, or get started in the <a href="tutorials/learn-angular">Tutorial</a> if you
prefer following step-by-step instructions.</p>

  <docs-table-of-contents toc-skip-content="true" _nghost-ng-c140693071="" ng-version="18.0.4"><aside _ngcontent-ng-c140693071=""><nav _ngcontent-ng-c140693071=""><header _ngcontent-ng-c140693071="">
  <h2 _ngcontent-ng-c140693071="" class="docs-title">On this page</h2></header><ul _ngcontent-ng-c140693071="" class="docs-faceted-list"><li _ngcontent-ng-c140693071="" class="docs-faceted-list-item docs-toc-item-h2 ng-star-inserted"><a _ngcontent-ng-c140693071="" routerlink="." href="/overview#features-that-power-your-development"> Features that power your development </a></li><li _ngcontent-ng-c140693071="" class="docs-faceted-list-item docs-toc-item-h2 ng-star-inserted"><a _ngcontent-ng-c140693071="" routerlink="." href="/overview#develop-applications-faster-than-ever"> Develop applications faster than ever </a></li><li _ngcontent-ng-c140693071="" class="docs-faceted-list-item docs-toc-item-h2 ng-star-inserted"><a _ngcontent-ng-c140693071="" routerlink="." href="/overview#ship-with-confidence"> Ship with confidence </a></li><li _ngcontent-ng-c140693071="" class="docs-faceted-list-item docs-toc-item-h2 ng-star-inserted"><a _ngcontent-ng-c140693071="" routerlink="." href="/overview#works-at-any-scale"> Works at any scale </a></li><li _ngcontent-ng-c140693071="" class="docs-faceted-list-item docs-toc-item-h2 ng-star-inserted"><a _ngcontent-ng-c140693071="" routerlink="." href="/overview#open-source-first"> Open-source first </a></li><li _ngcontent-ng-c140693071="" class="docs-faceted-list-item docs-toc-item-h2 ng-star-inserted"><a _ngcontent-ng-c140693071="" routerlink="." href="/overview#a-thriving-community"> A thriving community </a></li><!----></ul></nav><!----></aside></docs-table-of-contents>
  <h2 id="features-that-power-your-development">
    <a href="/overview#features-that-power-your-development" class="docs-anchor" tabindex="-1" aria-label="Link to Features that power your development">Features that power your development</a>
  </h2>
  
    <div class="docs-card-grid">
      
    <a href="guide/components" class="docs-card">
      <div>
        <h3>Keep your codebase organized with an opinionated component model and flexible dependency injection
system</h3>
        <p>Angular components make it easy to split your code into well-encapsulated parts.</p>
<p>  The versatile dependency injection helps you keep your code modular, loosely-coupled, and
  testable.</p>

      </div>
      <span>Get started with Components</span>
    </a>
    
    <a href="guide/signals" class="docs-card">
      <div>
        <h3>Get fast state updates with fine-grained reactivity based on Signals</h3>
        <p>Our fine-grained reactivity model, combined with compile-time optimizations, simplifies development and helps build faster apps by default.</p>
<p>  Granularly track how and where state is used throughout an application, giving the framework the power to render fast updates via highly optimized instructions.</p>

      </div>
      <span>Explore Angular Signals</span>
    </a>
    
    <a href="guide/ssr" class="docs-card">
      <div>
        <h3>Meet your performance targets with SSR, SSG, hydration, and next-generation deferred loading</h3>
        <p>Angular supports both server-side rendering (SSR) and static site generation (SSG) along
    with full DOM hydration. <code>@defer</code> blocks in templates make it simple to declaratively divide
    your templates into lazy-loadable parts.</p>

      </div>
      <span>Read about SSR</span>
    </a>
    
  <div class="docs-card">
    <div>
      <h3>Guarantee everything works together with Angular's first-party modules for forms, routing, and
more</h3>
      <p><a href="guide/routing">Angular's router</a> provides a feature-rich navigation toolkit, including support
  for route guards, data resolution, lazy-loading, and much more.</p>
<p>  <a href="guide/forms">Angular's forms module</a> provides a standardized system for form participation and validation.</p>

    </div>
    
  </div>
  
    </div>
    
  <h2 id="develop-applications-faster-than-ever">
    <a href="/overview#develop-applications-faster-than-ever" class="docs-anchor" tabindex="-1" aria-label="Link to Develop applications faster than ever">Develop applications faster than ever</a>
  </h2>
  
    <div class="docs-card-grid">
      
    <a href="tools/cli" class="docs-card">
      <div>
        <h3>Effortlessly build, serve, test, deploy with Angular CLI</h3>
        <p>Angular CLI gets your project running in under a minute with the commands you need to
  grow into a deployed production application.</p>

      </div>
      <span>Angular CLI</span>
    </a>
    
    <a href="tools/devtools" class="docs-card">
      <div>
        <h3>Visually debug, analyze, and optimize your code with the Angular DevTools browser extension</h3>
        <p>Angular DevTools sits alongside your browser's developer tools. It helps debug and analyze your
  app, including a component tree inspector, dependency injection tree view,
  and custom performance profiling flame chart.</p>

      </div>
      <span>Angular DevTools</span>
    </a>
    
    <a href="cli/update" class="docs-card">
      <div>
        <h3>Never miss a version with ng update</h3>
        <p>Angular CLI's <code>ng update</code> runs automated code transformations that automatically handle routine
  breaking changes, dramatically simplifying major version updates. Keeping up with the latest
  version keeps your app as fast and secure as possible.</p>

      </div>
      <span>ng update</span>
    </a>
    
    <a href="tools/language-service" class="docs-card">
      <div>
        <h3>Stay productive with IDE integration in your favorite editor</h3>
        <p>Angular's IDE language services powers code completion, navigation, refactoring, and real-time
  diagnostics in your favorite editor.</p>

      </div>
      <span>Language service</span>
    </a>
    
    </div>
    
  <h2 id="ship-with-confidence">
    <a href="/overview#ship-with-confidence" class="docs-anchor" tabindex="-1" aria-label="Link to Ship with confidence">Ship with confidence</a>
  </h2>
  
    <div class="docs-card-grid">
      
    <a href="https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext" target="_blank" class="docs-card">
      <div>
        <h3>Verified commit-by-commit against Google's colossal monorepo</h3>
        <p>Every Angular commit is checked against <em>hundreds of thousands</em> of tests in Google's internal code
  repository, representing countless real-world scenarios.</p>
<p>  Angular is committed to stability for some of Google’s largest products, including Google Cloud.
  This commitment ensures changes are well-tested, backwards compatible, and include migration tools
  whenever possible.</p>

      </div>
      <span>Learn about Google's monorepo</span>
    </a>
    
    <a href="reference/releases" class="docs-card">
      <div>
        <h3>Clear support policies and predictable release schedule</h3>
        <p>Angular's predictable, time-based release schedule gives your organization confidence in the
  stability and backwards compatibility of the framework. Long Term Support (LTS) windows make sure
  you get critical security fixes when you need them. First-party update tools, guides and automated
  migration schematics help keep your apps up-to-date with the latest advancements to the framework
  and the web platform.</p>

      </div>
      <span>Versioning &amp; releasing</span>
    </a>
    
    </div>
    
  <h2 id="works-at-any-scale">
    <a href="/overview#works-at-any-scale" class="docs-anchor" tabindex="-1" aria-label="Link to Works at any scale">Works at any scale</a>
  </h2>
  
    <div class="docs-card-grid">
      
    <a href="guide/i18n" class="docs-card">
      <div>
        <h3>Reach users everywhere with internationalization support</h3>
        <p>Angular's internationalization features handle message translations and formatting, including
  support for unicode standard ICU syntax.</p>

      </div>
      <span>Internationalization</span>
    </a>
    
    <a href="best-practices/security" class="docs-card">
      <div>
        <h3>Protect your users with security by default</h3>
        <p>In collaboration with Google's world-class security engineers, Angular aims to make development
  safe by default. Built-in security features, including HTML sanitization and
  trusted type support, help protect your users from common vulnerabilities like
  cross-site scripting and cross-site request forgery.</p>

      </div>
      <span>Security</span>
    </a>
    
    <a href="tools/cli/build-system-migration" class="docs-card">
      <div>
        <h3>Keep large teams productive with Vite and esbuild</h3>
        <p>Angular CLI includes a fast, modern build pipeline using Vite and ESBuild. Developers report
  building projects with hundreds of thousands of lines of code in less than a minute.</p>

      </div>
      <span>ESBuild and Vite</span>
    </a>
    
  <div class="docs-card">
    <div>
      <h3>Proven in some of Google's largest web apps</h3>
      <p>Large Google products build on top of Angular's architecture and help develop new features that
  further improve Angular's scalability, from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> to <a href="https://console.cloud.google.com" target="_blank">Google Cloud</a>.</p>

    </div>
    
  </div>
  
    </div>
    
  <h2 id="open-source-first">
    <a href="/overview#open-source-first" class="docs-anchor" tabindex="-1" aria-label="Link to Open-source first">Open-source first</a>
  </h2>
  
    <div class="docs-card-grid">
      
    <a href="https://github.com/angular/angular" target="_blank" class="docs-card">
      <div>
        <h3>Made in the open on GitHub</h3>
        <p>Curious what we’re working on? Every PR and commit is available on our GitHub. Run into an issue or bug? We triage GitHub issues regularly to ensure we’re responsive and engaged with our community, and solving the real world problems you’re facing.</p>

      </div>
      <span>Star our GitHub</span>
    </a>
    
    <a href="roadmap" class="docs-card">
      <div>
        <h3>Built with transparency</h3>
        <p>Our team publishes a public roadmap of our current and future work and values your feedback. We publish Request for Comments (RFCs) to collect feedback on larger feature changes and ensure the community voice is heard while shaping the future direction of Angular.</p>

      </div>
      <span>Read our public roadmap</span>
    </a>
    
    </div>
    
  <h2 id="a-thriving-community">
    <a href="/overview#a-thriving-community" class="docs-anchor" tabindex="-1" aria-label="Link to A thriving community">A thriving community</a>
  </h2>
  
    <div class="docs-card-grid">
      
    <a href="https://devlibrary.withgoogle.com/products/angular?sort=added" target="_blank" class="docs-card">
      <div>
        <h3>Courses, blogs and resources</h3>
        <p>Our community is composed of talented developers, writers, instructors, podcasters, and more. The Google for Developers library is just a sample of the high quality resources available for new and experienced developers to continue developing.</p>

      </div>
      <span>Check out DevLibrary</span>
    </a>
    
    <a href="https://github.com/angular/angular/blob/main/CONTRIBUTING.md" target="_blank" class="docs-card">
      <div>
        <h3>Open Source</h3>
        <p>We are thankful for the open source contributors who make Angular a better framework for everyone. From fixing a typo in the docs, to adding major features, we encourage anyone interested to get started on our GitHub.</p>

      </div>
      <span>Contribute to Angular</span>
    </a>
    
    <a href="https://developers.google.com/community/experts/directory?specialization=angular" target="_blank" class="docs-card">
      <div>
        <h3>Community partnerships</h3>
        <p>Our team partners with individuals, educators, and enterprises to ensure we consistently are supporting developers. Angular Google Developer Experts (GDEs) represent community leaders around the world educating, organizing, and developing with Angular. Enterprise partnerships help ensure that Angular scales well for technology industry leaders.</p>

      </div>
      <span>Meet the Angular GDEs</span>
    </a>
    
  <div class="docs-card">
    <div>
      <h3>Partnering with other Google technologies</h3>
      <p>Angular partners closely with other Google technologies and teams to improve the web.</p>
<p>  Our ongoing partnership with Chrome’s Aurora actively explores improvements to user experience across the web, developing built-in performance optimizations like NgOptimizedImage and improvements to Angular’s Core Web Vitals.</p>
<p>  We are also working with <a href="https://firebase.google.com/" target="_blank">Firebase</a>, <a href="https://www.tensorflow.org/" target="_blank">Tensorflow</a>, <a href="https://flutter.dev/" target="_blank">Flutter</a>, <a href="https://m3.material.io/" target="_blank">Material Design</a>, and <a href="https://cloud.google.com/" target="_blank">Google Cloud</a> to ensure we provide meaningful integrations across the developer workflow.</p>

    </div>
    
  </div>
  
    </div>
    
    <div class="docs-callout docs-callout-helpful">
      <h3>Join the momentum!</h3>
      
    <nav class="docs-pill-row">
      
    <a class="docs-pill" href="roadmap">
      Read Angular's roadmap
    </a>
    
    <a class="docs-pill" href="playground">
      Try out our playground
    </a>
    
    <a class="docs-pill" href="tutorials">
      Learn with tutorials
    </a>
    
    <a class="docs-pill" href="https://youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF" target="_blank">
      Watch our YouTube course<docs-icon class="docs-icon-small material-symbols-outlined" aria-hidden="true" translate="no" _nghost-ng-c1974536348="" ng-version="18.0.4">open_in_new</docs-icon>
    </a>
    
    <a class="docs-pill" href="api">
      Reference our APIs
    </a>
    
  
    </nav>
    
    </div>`
  private readonly activatedRoute = inject(ActivatedRoute);

  // Based on current route, proper static content for doc page is fetched.
  // In case when exists example-viewer placeholders, then ExampleViewer
  // components are going to be rendered.
  private readonly documentContent$ = this.activatedRoute.data.pipe(
    map((data) => data['docContent'] as DocContent),
  );

  documentContent = toSignal(this.documentContent$);


}

