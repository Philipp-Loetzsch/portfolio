import { Injectable } from '@angular/core';
import { TranslateService } from '@codeandweb/ngx-translate';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  initializeTranslation(defaultLang: string = 'de') {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }
}
