import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  marqueeLinkX: { [key: string]: number } = {};
  animations: { [key: string]: any } = {};

  startAnimation(content: string, maxXLeft: number, xRight: number) {
    this.stopAnimation(content);
    this.marqueeLinkX[content] = this.marqueeLinkX[content] || 0;
    this.animations[content] = setInterval(() => {
      if (this.marqueeLinkX[content] > maxXLeft) {
        this.marqueeLinkX[content] = xRight;
      }
      this.marqueeLinkX[content]++;
    }, 1000 / 40);
  }

  stopAnimation(content: string) {
    if (this.animations[content]) {
      clearInterval(this.animations[content]);
      delete this.animations[content];
      this.marqueeLinkX[content] = 0;
    }
  }
}
