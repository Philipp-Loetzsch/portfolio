import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
import { TranslationService } from '../services/translate.service';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(translationService: TranslationService) {
    translationService.initializeTranslation();
  }
}
