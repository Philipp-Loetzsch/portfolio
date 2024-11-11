import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateLoader,} from '@codeandweb/ngx-translate';
import { TranslateHttpLoader } from '@codeandweb/http-loader';
import { routes } from './app.routes';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }), provideAnimationsAsync()
  ],
};
