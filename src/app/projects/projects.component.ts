import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ProjectDialogComponent } from "./project-dialog/project-dialog.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDialogComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showDialog = false
  hoverIndex: number | null = null;
  projects = [
    {
      title: 'Join',
      codeLanguage: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: 'join',
    },
    {
      title: 'El Pollo Loco',
      codeLanguage: ['HTML', 'CSS', 'JavaScript'],
      image: 'pollo',
    },
    {
      title: 'DA Bubble',
      codeLanguage: ['Angular', 'Firebase', 'TypeScript'],
      image: 'dabubble',
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
    if(this.showDialog) event.preventDefault();
   }
}
