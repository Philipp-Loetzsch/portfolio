import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  feedbacks = [
    {
      text: 'Die Zusammenarbeit hat nicht nur sehr gut funktioniert, sondern auch richtig viel Spaß gemacht. Es war eine wertvolle Erfahrung, mit einem so engagierten und talentierten Partner zu coden.',
      name: 'Prathab K. - Team Partner Join',
    },
    {
      text: 'Ja man merkt an deinem ganzen strukturellem Aufbau, coden ist dein Ding.',
      name: 'Kevin K. - Mentor Developer Akademie',
    },
    {
      text: 'Super schnelle Änderungen meiner Webseite. Sehr unkompliziert und zielorientiert ',
      name: 'Valeska S. - Customer',
    },
  ];
  currentComment = 0;
  mainComment = this.feedbacks[this.currentComment];
  previousComment = this.feedbacks[this.getPreviousIndex(this.currentComment)];
  nextComment = this.feedbacks[this.getNextIndex(this.currentComment)];


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
    this.currentComment = this.getPreviousIndex(this.currentComment);
    this.updateComments();
  }

  showNextComment() {
    this.currentComment = this.getNextIndex(this.currentComment);
    this.updateComments();
  }

  

}
