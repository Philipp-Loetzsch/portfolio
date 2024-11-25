import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
import { TranslationService } from '../services/translate.service';
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(translationService: TranslationService) {
    translationService.initializeTranslation();
  }

}
