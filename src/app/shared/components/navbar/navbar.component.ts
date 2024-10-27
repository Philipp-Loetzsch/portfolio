import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  language: boolean = false;

  chosen = {color: 'red'}

  navLinks: Array<{ link: string; title: string }> = [
    {
      link: 'aboutMe',
      title: 'About Me',
    },
    {
      link: 'skills',
      title: 'Skills',
    },
    {
      link: 'projects',
      title: 'Projects',
    },
  ];

  german() {
    this.language = true;
    console.log(true);
  }

  english() {
    this.language = false;
    console.log(false);
  }
}
