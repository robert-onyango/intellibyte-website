// src/app/route-animations.ts

import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [style({ position: 'absolute', width: '100%' })], {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(10%)' }),
          animate(
            '800ms ease',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
          animateChild(),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [animate('800ms ease', style({ opacity: 0, transform: 'translateY(-10%)' })), animateChild()],
        { optional: true }
      ),
    ]),
  ]),
]);
