import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { Projects } from '../interfaces/projects';
import { TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { TranslationService } from '../services/translate.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectDialogComponent,
    TranslateModule,
    TranslatePipe,
    ScrollAnimateDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(translationService: TranslationService) {
    translationService.initializeTranslation();
  }

  showDialog = false;
  hoverIndex: number | null = null;
  currentIndex: number = 0;
  screenWidth = window.innerWidth;
  projects: Projects[] = [
    {
      title: 'Join',
      codeLanguage: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: 'join',
      format: '.png',
      description: 'main_content.projects.project_dialog.description_join',
      links: [
        'https://github.com/Philipp-Loetzsch/join',
        'https://philipp-loetzsch.webdevelopment-loetzsch.de/projects/join/',
      ],
    },
    {
      title: 'Join Angular',
      codeLanguage: ['Angular', 'Firebase'],
      image: 'join',
      format: '.png',
      description: 'main_content.projects.project_dialog.description_join',
      links: [
        'https://github.com/Philipp-Loetzsch/join_angular',
        'https://philipp-loetzsch.webdevelopment-loetzsch.de/projects/join_angular/',
      ],
    },

    {
      title: 'El Pollo Loco',
      codeLanguage: ['HTML', 'CSS', 'JavaScript'],
      image: 'elpolloloco',
      format: '.svg',
      description:
        'main_content.projects.project_dialog.description_el_pollo_loco',
      links: [
        'https://github.com/Philipp-Loetzsch/el_pollo-loco',
        'https://philipp-loetzsch.webdevelopment-loetzsch.de/projects/el_pollo_loco/',
      ],
    },
    {
      title: 'DA Bubble',
      codeLanguage: ['Angular', 'Firebase', 'TypeScript'],
      image: 'dabubble',
      format: '.svg',
      description: 'main_content.projects.project_dialog.description_da_bubble',
      links: [],
    },
  ];

  hoverButton(index: number) {
    this.hoverIndex = index;
  }

  noHover() {
    this.hoverIndex = null;
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    if (this.showDialog) event.preventDefault();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.showDialog) {
      event.preventDefault();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  openDialog(index: number) {
    this.showDialog = true;
    this.currentIndex = index;
  }
}
