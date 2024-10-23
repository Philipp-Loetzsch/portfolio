import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  socialMedias = [
    {
      img:'mail',
      link:'mailto:philipp.loetzsch@outlook.com'
    },
    { 
      img: 'github', 
      link: 'https://github.com/Philipp-Loetzsch' 
    },
    {
      img: 'linkedIn',
      link: 'https://de.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F',
    },
  ];

  startAnimation(){
    
  }
}
