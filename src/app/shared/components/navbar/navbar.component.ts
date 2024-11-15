import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';

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
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
}
  showNavbar:boolean = false;
  chosen = {color: 'red'}
  screenWidth = window.innerWidth

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
    this.translate.use(language)
    if(language === 'en') this.language = false
    else this.language = true    
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
