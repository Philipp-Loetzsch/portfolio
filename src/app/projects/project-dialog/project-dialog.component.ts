import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Projects } from '../../interfaces/projects';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';


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

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use(translate.currentLang);    
}
  
  nextProject(){
    this.currentIndex= (this.currentIndex + 1)  % this.projects.length ;
  }

  formatTitle(title: string): string {
    return title.replace(/\s+/g, '').toLowerCase();
  }

 }
