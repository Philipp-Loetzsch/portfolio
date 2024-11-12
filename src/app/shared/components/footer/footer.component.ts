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
  hoverLogo=false
  hoverIndex:number | null =null
  screenWidth=window.innerWidth
  links=[
    {
      link:'https://github.com/Philipp-Loetzsch',
      name:'Github',
      target: '_blank'
    },
    {
      link:'https://www.linkedin.com/in/philipp-l%C3%B6tzsch-7835a9336/',
      name:'LinkedIn',
      target: '_blank'
    },
    {
      link:'mailto:philipp.loetzsch@outlook.com',
      name:'Email',
      target: '_blank'
    },
    {
      link:'legal-notice',
      name:'Legal Notice',
      target: '_self'
    },
  ]

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  hoverIn(i:number){
    this.hoverIndex = i
  }

  hoverOut(){
    this.hoverIndex=null
  }
}
