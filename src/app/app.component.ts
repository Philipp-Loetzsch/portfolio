import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { TranslateService, TranslateDirective, TranslatePipe, TranslateModule } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, MainContentComponent, FooterComponent, TranslatePipe, TranslateDirective, TranslateModule],
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
}
