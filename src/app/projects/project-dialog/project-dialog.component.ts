import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
}
