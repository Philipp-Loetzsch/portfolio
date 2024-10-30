import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  screenWidth=window.innerWidth
  links=[
    {
      link:'#',
      name:'Github'
    },
    {
      link:'#',
      name:'LinkedIn'
    },
    {
      link:'mailto:philipp.loetzsch@outlook.com',
      name:'Email'
    },
    {
      link:'#',
      name:'Legal Notice'
    },
  ]

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}
