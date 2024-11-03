import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';
import {
  TranslateService,
  TranslateDirective,
  TranslateModule,
  TranslatePipe,
} from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, TranslateDirective, TranslatePipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor( 
    private animationService: AnimationService,
    private translate: TranslateService,
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  hoverIndexLp:number | null = null
  lpLinks = [
    {
      jump: 'projects',
      content: 'main_content.landing_page.lpLinks_work',
    },
    {
      jump: 'contact',
      content: 'main_content.landing_page.lpLinks_contact',
    },
  ];

  socialMedias = [
    {
      img: 'github',
      link: 'https://github.com/Philipp-Loetzsch',
    },
    {
      img: 'linkedIn',
      link: 'https://www.linkedin.com/in/philipp-l%C3%B6tzsch-7835a9336/',
    },
  ];
  texts = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Chemnitz',
    'open to work',
    'Available for remote work',
    'Frontend Developer',
    'Based in Chemnitz',
    'open to work',
  ];
  hover:boolean = false;
 
  screenWidth: number = window.innerWidth;
 

  


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    /* this.initializePositions(); */
  }

  hoverLinkLp(i:number){  
    this.hoverIndexLp = i
  }

  hoverOutLp(){
    this.hoverIndexLp = null
  }

  startAnimation(content: string, maxXLeft: number, xRight: number) {
    this.animationService.startAnimation(content, maxXLeft, xRight);
  }

  stopAnimation(content: string) {
    this.animationService.stopAnimation(content);
  }

  getMarqueePosition(content: string): number {
    return this.animationService.marqueeLinkX[content] || 0;
  }
}
