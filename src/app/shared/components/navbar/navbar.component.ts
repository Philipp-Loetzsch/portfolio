import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe, TranslateService } from '@codeandweb/ngx-translate';
import { TranslationService } from '../../../services/translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  hoverLogo=false
  language:boolean =true
  hoverIndex:number | null =null
  showNavbar:boolean = false;
  chosen = {color: 'red'}
  screenWidth = window.innerWidth

  constructor(translationService: TranslationService, private translate: TranslateService) {
    translationService.initializeTranslation();
  }  

  navLinks: Array<{ link: string; title: string }> = [
    {
      link: 'aboutMe',
      title: 'navbar.about_me',
    },
    {
      link: 'skills',
      title: 'navbar.skills',
    },
    {
      link: 'projects',
      title: 'navbar.projects',
    },
  ];

  useLanguage(language:string):void {
    this.translate.use(language);
    this.language = language === 'en' ? false : true;
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar
  }

  hoverIn(i:number){
    this.hoverIndex = i
  }

  hoverOut(){
    this.hoverIndex=null
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
