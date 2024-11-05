import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateDirective, TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, TranslateDirective, TranslatePipe],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss', './feedback.carousel.component.scss']
})
export class FeedbackComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
}

  feedbacks = [
    {
      text: 'main_content.feedback.prathab',
      name: 'Prathab K. - Team Partner Join',
    },
    {
      text: 'main_content.feedback.kevin',
      name: 'Kevin K. - Mentor Developer Akademie',
    },
    {
      text: 'main_content.feedback.valeska',
      name: 'Dr.med. Valeska Sandvoss  - Customer',
    },
  ];
  currentComment = 0;
  mainComment = this.feedbacks[this.currentComment];
  previousComment = this.feedbacks[this.getPreviousIndex(this.currentComment)];
  nextComment = this.feedbacks[this.getNextIndex(this.currentComment)];
  showPrev=false
  showNext=false

  getPreviousIndex(index: number): number {
    return (index - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  getNextIndex(index: number): number {
    return (index + 1) % this.feedbacks.length;
  }

  updateComments() {
    this.mainComment = this.feedbacks[this.currentComment];
    this.previousComment= this.feedbacks[this.getPreviousIndex(this.currentComment)];
    this.nextComment = this.feedbacks[this.getNextIndex(this.currentComment)];
  }

  showPreviousComment() {
    this.currentComment = this.getPreviousIndex(this.currentComment);
    this.showPrev=true
    setTimeout(() => {
      this.updateComments();
      this.showPrev= false
    }, 1300);
    
  }

  showNextComment() {
    this.currentComment = this.getNextIndex(this.currentComment);
    this.showNext=true
    setTimeout(() => {
      this.updateComments();
      this.showNext= false
    }, 1300);
  }
}
