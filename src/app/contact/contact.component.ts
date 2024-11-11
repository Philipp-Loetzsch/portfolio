import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  Injector,
  ViewChild,
  afterNextRender,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  TranslateService,
  TranslateModule,
  TranslatePipe,
} from '@codeandweb/ngx-translate';
import { AnimationService } from '../services/animation.service';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TranslatePipe,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private _injector = inject(Injector);
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  triggerResize() {
    // Wait for content to render, then trigger textarea resize.
    afterNextRender(
      () => {
        this.autosize.resizeToFitContent(true);
      },
      {
        injector: this._injector,
      },
    );
  }
  constructor(
    private translate: TranslateService,
    private animationService: AnimationService
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  submitContent: string = 'main_content.contact.submit';
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  terms: boolean = false;
  get img(): string {
    return this.terms
      ? 'assets/img/contact/checkbox_checked.png'
      : 'assets/img/contact/checkbox_default.png';
  }

  toggleTerms() {
    this.terms = !this.terms;
  }

  http = inject(HttpClient);

  mailTest = false;

  post = {
    endPoint:
      'https://philipp-loetzsch.webdevelopment-loetzsch.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.terms) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.terms = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest &&
      this.terms
    ) {
      console.log('erfolgreich');
      ngForm.resetForm();
    }
  }

  startAnimation(content: string, maxXLeft: number, xRight: number) {
    this.animationService.startAnimation(content, maxXLeft, xRight);
  }

  stopAnimation(content: string) {
    this.animationService.stopAnimation(content);
  }

  getMarqueePosition(content: string): number {
    return this.animationService.marqueeLinkX[content] || 0;
  }
}
