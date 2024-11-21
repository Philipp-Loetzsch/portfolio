import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';
import {
  TranslateService,
  TranslateModule,
  TranslatePipe,
} from '@codeandweb/ngx-translate';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, TranslatePipe, NgxFastMarqueeModule],
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
    'main_content.landing_page.marquee_text_1',
    'main_content.landing_page.marquee_text_2',
    'main_content.landing_page.marquee_text_3',
    'main_content.landing_page.marquee_text_4',
  ];
  hover:boolean = false;
 
  screenWidth: number = window.innerWidth;
 
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
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
