import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateDirective, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule, TranslateDirective, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
}

descriptions = [
  {text: 'main_content.about_me.description_location', image: 'my_location'},
  {text: 'main_content.about_me.description_open_minded', image: 'cognition'},
  {text: 'main_content.about_me.description_programming', image: 'new_releases'}
];

} 
