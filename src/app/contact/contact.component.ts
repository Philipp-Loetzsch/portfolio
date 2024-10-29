import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };


  terms: boolean = false;
  get img(): string {

    return this.terms ? 'assets/img/contact/checkbox_checked.png' : 'assets/img/contact/checkbox_default.png';
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.terms) {
      console.log('erfolgreich');
      ngForm.resetForm();
    }
  }

  changeImage() {}
}
