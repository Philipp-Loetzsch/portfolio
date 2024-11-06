import { Component } from '@angular/core';
import { TranslateService, TranslateDirective, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateDirective, TranslateModule, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
}

}
