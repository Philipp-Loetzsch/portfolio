import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() projects!: { title: string; codeLanguage: string[]; image: string }[];
  @Input() currentIndex!: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.currentIndex ," ", this.projects[this.currentIndex] );
    
    
  }
 }
