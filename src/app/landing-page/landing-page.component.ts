import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../shared/services/animation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private animationService: AnimationService) {};

  lpLinks = [
    {
      jump: '#',
      content: 'Check my work',
    },
    {
      jump: '#',
      content: 'Contact me',
    },
  ];

  socialMedias = [
    {
      img: 'mail',
      link: 'mailto:philipp.loetzsch@outlook.com',
    },
    {
      img: 'github',
      link: 'https://github.com/Philipp-Loetzsch',
    },
    {
      img: 'linkedIn',
      link: 'https://de.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F',
    },
  ];

  texts = ['Available for remote work' , 'Frontend Developer', 'Based in Chemnitz', 'open to work', 'Available for remote work' , 'Frontend Developer', 'Based in Chemnitz', 'open to work']
  screenWidth: number = window.innerWidth;


  ngOnInit() {
    this.texts.forEach((text, index) => {
      this.startAnimation(text, this.screenWidth, -this.screenWidth);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.texts.forEach((text) => this.stopAnimation(text));
    this.texts.forEach((text, index) => {
      this.startAnimation(text, this.screenWidth, -this.screenWidth);
    });
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
