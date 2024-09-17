// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  animations: [fader],
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
