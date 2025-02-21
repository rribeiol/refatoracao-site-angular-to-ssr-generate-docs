# Frequently-used modules

An Angular application needs at least one module that serves as the root module.
As you add features to your app, you can add them in modules.
The following are frequently used Angular modules with examples of some of the things they contain:

| NgModule              | Import it from              | Why you use it |
|:---                   |:---                         |:---            |
| `BrowserModule`       | `@angular/platform-browser` | To run your application in a browser.                  |
| `CommonModule`        | `@angular/common`           | To use `NgIf` and `NgFor`.                             |
| `FormsModule`         | `@angular/forms`            | To build template driven forms \(includes `NgModel`\). |
| `ReactiveFormsModule` | `@angular/forms`            | To build reactive forms.                               |
| `RouterModule`        | `@angular/router`           | To use `RouterLink`, `.forRoot()`, and `.forChild()`.  |
| `HttpClientModule`    | `@angular/common/http`      | To communicate with a server using the HTTP protocol.  |

## Importing modules

When you use these Angular modules, import them in `AppModule`, or your feature module as appropriate, and list them in the `@NgModule` `imports` array.

For example, in a new application generated by the [Angular CLI](/tools/cli), `BrowserModule` is imported into the `AppModule`.

<docs-code language="typescript" highlight="[1,11,12]">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* add modules here so Angular knows to use them */
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

</docs-code>

The imports at the top of the array are JavaScript import statements while the `imports` array within `@NgModule` is Angular specific.
For more information on the difference, see [JavaScript Modules vs. NgModules](guide/ngmodules/vs-jsmodule).

## `BrowserModule` and `CommonModule`

`BrowserModule` re-exports `CommonModule`, which exposes many common directives such as `ngIf` and `ngFor`.
These directives are available to any module that imports the browser module, given the re-export.

For applications that run in the browser, import `BrowserModule` in the root `AppModule` because it provides services that are essential to launch and render your application in browsers.

Note: `BrowserModule`'s providers are for the whole application so it should only be in the root module, not in feature modules. Feature modules only need the common directives in `CommonModule`; they don't need to re-install app-wide providers.
