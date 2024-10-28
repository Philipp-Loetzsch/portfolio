import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Projects } from '../../interfaces/projects';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() projects!: Projects[];
  @Input() currentIndex!: number;

  nextProject(){
    this.currentIndex= (this.currentIndex + 1)  % this.projects.length ;

  }

 }
