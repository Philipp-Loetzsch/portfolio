import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private animationService: AnimationService) {}

  lpLinks = [
    {
      jump: 'projects',
      content: 'Check my work',
    },
    {
      jump: 'contact',
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

  positions: number[] = [];
  screenWidth: number = window.innerWidth;
  speed: number = 1; // Geschwindigkeit der Bewegung (Pixel pro Frame)
  itemSpacing: number = 300; // fester Abstand zwischen den Elementen

  ngOnInit() {
    this.initializePositions();
    this.startMarqueeAnimation();
  }

  // Initialisiert die Startpositionen der Texte
  initializePositions() {
    // Das erste Element startet am linken Rand (Position 0)
    this.positions = this.texts.map((_, index) => index * this.itemSpacing);
  }

  // Animation starten
  startMarqueeAnimation() {
    setInterval(() => {
      this.moveMarquee();
    }, 16); // ca. 60fps
  }

  // Bewegt die Texte
  moveMarquee() {
    this.positions = this.positions.map((position) => {
      // Bewege das Element nach links
      let newPosition = position - this.speed;

      // Wenn das Element den linken Bildschirmrand verlässt, springt es hinter das letzte sichtbare Element
      if (newPosition < -this.itemSpacing) {
        newPosition = Math.max(...this.positions) + this.itemSpacing;
      }

      return newPosition;
    });
  }

  // Bildschirmbreite bei Änderung aktualisieren
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.initializePositions();
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
