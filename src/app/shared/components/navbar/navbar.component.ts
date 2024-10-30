import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateDirective, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  language:boolean =false
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
}
  showNavbar:boolean = false;
  chosen = {color: 'red'}
  screenWidth = window.innerWidth

  navLinks: Array<{ link: string; title: string }> = [
    {
      link: 'aboutMe',
      title: 'About me',
    },
    {
      link: 'skills',
      title: 'Skills',
    },
    {
      link: 'projects',
      title: 'Projects',
    },
  ];

  useLanguage(language:string):void {
    this.translate.use(language)
    if(language === 'en') this.language = false
    else this.language = true
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    if(this.showNavbar) event.preventDefault();
   }
   
   @HostListener('touchmove', ['$event'])
   onTouchMove(event: TouchEvent) {
     if (this.showNavbar) {
       event.preventDefault();
     }
   }
}
