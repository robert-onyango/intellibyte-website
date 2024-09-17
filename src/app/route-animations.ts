// src/app/route-animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }), // Start with the page invisible
    animate('500ms ease', style({ opacity: 1 })) // Fade in
  ])
]);

