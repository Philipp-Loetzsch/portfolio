import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TranslateService,
  TranslateModule,
  TranslatePipe,
} from '@codeandweb/ngx-translate';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule, TranslatePipe, ScrollAnimateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  descriptions = [
    {
      text: 'main_content.about_me.description_location',
      image: 'my_location',
    },
    {
      text: 'main_content.about_me.description_open_minded',
      image: 'cognition',
    },
    {
      text: 'main_content.about_me.description_programming',
      image: 'new_releases',
    },
  ];
}
