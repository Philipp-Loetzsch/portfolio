import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
    feedbacks = [
    {
    text:'Die Zusammenarbeit hat nicht nur sehr gut funktioniert, sondern auch richtig viel Spaß gemacht. Es war eine wertvolle Erfahrung, mit einem so engagierten und talentierten Partner zu coden.',
    name: 'Prathab K. - Team Partner Join'
    },
    {
    text:'Ja man merkt an deinem ganzen strukturellem Aufbau, coden ist dein Ding.',
    name: 'Kevin K. - Mentor Developer Akademie'
    },
    {
    text:'Super schnelle Änderungen meiner Webseite. Sehr unkompliziert und zielorientiert ',
    name: 'Valeska S. - Customer'
    },
  ]
  currentComment = 0
  mainComment = this.feedbacks[this.currentComment]
  previousComment = this.feedbacks[this.currentComment + 1]
  nextComment = this.feedbacks[this.currentComment + 1]
    
  showMainComment(){
    this.mainComment= this.feedbacks[this.currentComment]
    console.log(this.mainComment.name); 
  }


  showPreviousComment() {
    this.currentComment = (this.currentComment - 1 + this.feedbacks.length) % this.feedbacks.length;
    this.showMainComment();
  }
  
  showNextComment() {
    this.currentComment = (this.currentComment + 1) % this.feedbacks.length;
    this.showMainComment();
  }
  
}
