import { ScrollAnimateDirective } from './scroll-animate.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ScrollAnimateDirective', () => {
  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elementRefMock = { nativeElement: document.createElement('div') };
    rendererMock = jasmine.createSpyObj('Renderer2', ['addClass']);
  });

  it('should create an instance', () => {
    const directive = new ScrollAnimateDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
