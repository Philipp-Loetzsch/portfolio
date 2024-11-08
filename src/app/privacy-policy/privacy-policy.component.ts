import { Component } from '@angular/core';
import { TranslateService, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
}
}
