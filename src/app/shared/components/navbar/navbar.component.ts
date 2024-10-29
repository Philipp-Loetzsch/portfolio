import { Component, HostListener } from '@angular/core';
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
  showNavbar:boolean = false;
  chosen = {color: 'red'}
  screenWidth = window.innerWidth

  navLinks: Array<{ link: string; title: string }> = [
    {
      link: 'aboutMe',
      title: 'About me',
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

  toggleNavbar(){
    this.showNavbar = !this.showNavbar
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    if(this.showNavbar) event.preventDefault();
   }
   
   @HostListener('touchmove', ['$event'])
   onTouchMove(event: TouchEvent) {
     if (this.showNavbar) {
       event.preventDefault();
     }
   }
}
