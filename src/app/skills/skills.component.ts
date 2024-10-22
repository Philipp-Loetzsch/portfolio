import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {img:'html', skill:'HTML'},
    {img:'css', skill:'CSS'},
    {img:'javascript', skill:'JavaScript'},
    {img:'materialdesign', skill:'Material Design'},
    {img:'typescript', skill:'TypeScript'},
    {img:'angular', skill:'Angular'},
    {img:'firebase', skill:'Firebase'},
    {img:'git', skill:'Git'},
    {img:'api', skill:'Rest-Api'},
    {img:'scrum', skill:'Scrum'},
    {img:'growth', skill:'Growth mindset'},
  ]
}
