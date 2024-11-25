import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@codeandweb/ngx-translate';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { TranslationService } from '../services/translate.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TranslatePipe,
    ScrollAnimateDirective,
  ],
  templateUrl: './feedback.component.html',
  styleUrls: [
    './feedback.component.scss',
    './feedback.carousel.component.scss',
  ],
})
export class FeedbackComponent {
  constructor(translationService: TranslationService) {
    translationService.initializeTranslation();
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
  showPrev = false;
  showNext = false;
  currentScreenWidth = window.innerWidth;

  getPreviousIndex(index: number): number {
    return (index - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  getNextIndex(index: number): number {
    return (index + 1) % this.feedbacks.length;
  }

  updateComments() {
    this.mainComment = this.feedbacks[this.currentComment];
    this.previousComment =
      this.feedbacks[this.getPreviousIndex(this.currentComment)];
    this.nextComment = this.feedbacks[this.getNextIndex(this.currentComment)];
  }

  showPreviousComment() {
    if (this.showPrev || this.showNext) return;
    this.currentComment = this.getPreviousIndex(this.currentComment);
    if (this.currentScreenWidth < 540) return this.updateComments();
    this.showPrev = true;
    setTimeout(() => {
      this.updateComments();
      this.showPrev = false;
    }, 1300);
  }

  showNextComment() {
    if (this.showNext || this.showPrev) return;
    this.currentComment = this.getNextIndex(this.currentComment);
    if (this.currentScreenWidth < 540) return this.updateComments();
    this.showNext = true;
    setTimeout(() => {
      this.updateComments();
      this.showNext = false;
    }, 1300);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.currentScreenWidth = window.innerWidth;
  }
}
