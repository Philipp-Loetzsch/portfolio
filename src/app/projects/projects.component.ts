import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ProjectDialogComponent } from "./project-dialog/project-dialog.component";
import { Projects } from '../interfaces/projects';

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
  currentIndex: number = 0;
  projects:Projects[] = [
    {
      title: 'Join',
      codeLanguage: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: 'join',
      description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      links:[]
    },
    {
      title: 'El Pollo Loco',
      codeLanguage: ['HTML', 'CSS', 'JavaScript'],
      image: 'pollo',
      description:'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      links:[]
    },
    {
      title: 'DA Bubble',
      codeLanguage: ['Angular', 'Firebase', 'TypeScript'],
      image: 'dabubble',
      description:'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      links:[]
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


  openDialog(index:number){
    this.showDialog = true
    this.currentIndex = index
    console.log(this.currentIndex);
  }
}
