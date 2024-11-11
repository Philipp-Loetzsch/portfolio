import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  screenWidth = window.innerWidth
  title = 'portfolio';
    mouseX: number = 0;
    mouseY: number = 0;
  
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
      this.screenWidth = window.innerWidth;
    }
}
