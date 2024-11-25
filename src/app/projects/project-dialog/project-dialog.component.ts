import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Projects } from '../../interfaces/projects';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
import { TranslationService } from '../../services/translate.service';


@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule, TranslatePipe],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {

  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() projects!: Projects[];
  @Input() currentIndex!: number;

    constructor(translationService: TranslationService) {
      translationService.initializeTranslation();
    }

  
  nextProject(){
    this.currentIndex= (this.currentIndex + 1)  % this.projects.length ;
  }

  formatTitle(title: string): string {
    return title.replace(/\s+/g, '').toLowerCase();
  }

 }
