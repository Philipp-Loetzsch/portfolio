/* import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input('appScrollAnimate') animationType: 'fade-in' | 'slide-in-right' | 'slide-in-left' = 'fade-in';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationType);
          this.observer.unobserve(entry.target); 
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
 */

import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input('appScrollAnimate') animationType: string = '';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // IntersectionObserver einrichten
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Klasse 'visible' und die angegebene Animationstyp-Klasse hinzufügen
          this.renderer.addClass(this.el.nativeElement, 'visible');
          if (this.animationType) {
            this.renderer.addClass(this.el.nativeElement, this.animationType);
          }
          this.observer.unobserve(entry.target); // Stoppt die Beobachtung nach dem ersten Aufruf
        }
      });
    });

    // Startet die Beobachtung des Elements
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
