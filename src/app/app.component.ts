import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { TranslateService, TranslateDirective, TranslatePipe, TranslateModule } from '@codeandweb/ngx-translate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, MainContentComponent, FooterComponent, TranslatePipe, TranslateDirective, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    }

    mouseX: number = 0;
    mouseY: number = 0;
  
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
}
