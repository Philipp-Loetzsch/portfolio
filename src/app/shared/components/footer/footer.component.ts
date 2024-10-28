import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
}
