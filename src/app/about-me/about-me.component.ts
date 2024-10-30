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
    {text:'Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.', image:'my_location'},
    {text:'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.', image:'cognition'},
    {text:"In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.", image:'new_releases'}
  ]
} 
