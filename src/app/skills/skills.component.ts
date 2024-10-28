import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationService } from '../shared/services/animation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(private animationService: AnimationService) {}
  linkContent: string = "Let's Talk";
  enablePopup: boolean = false;
  skills: Array<{ img: string; skill: string }> = [
    { img: 'html', skill: 'HTML' },
    { img: 'css', skill: 'CSS' },
    { img: 'javascript', skill: 'JavaScript' },
    { img: 'materialdesign', skill: 'Material Design' },
    { img: 'typescript', skill: 'TypeScript' },
    { img: 'angular', skill: 'Angular' },
    { img: 'firebase', skill: 'Firebase' },
    { img: 'git', skill: 'Git' },
    { img: 'api', skill: 'Rest-Api' },
    { img: 'scrum', skill: 'Scrum' },
    { img: 'growth', skill: 'Growth mindset' },
  ];
  interests: Array<{ img: string; title: string }> = [
    {
      img: 'webflow',
      title: 'Webflow',
    },
    {
      img: 'python',
      title: 'Python',
    },
  ];

  startAnimation(content: string, maxXLeft: number, xRight: number) {
    this.animationService.startAnimation(content, maxXLeft, xRight);
  }

  stopAnimation(content: string) {
    this.animationService.stopAnimation(content);
  }

  getMarqueePosition(content: string): number {
    return this.animationService.marqueeLinkX[content] || 0;
  }
  showPopup(i: number) {
    if (i === this.skills.length - 1) {
      this.enablePopup = true;
    }
  }
}
