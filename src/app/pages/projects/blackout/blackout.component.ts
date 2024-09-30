// src/app/pages/projects/blackout/blackout.component.ts

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blackout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blackout.component.html',
  styleUrls: ['./blackout.component.scss'],
})
export class BlackoutComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Blackout Project | Intellibyte Software Solutions');
    this.meta.updateTag({
      name: 'description',
      content:
        'Discover how Intellibyte Software Solutions modernized the application stack for Blackout, enhancing security and efficiency in the lighting industry.',
    });
    // Add more meta tags as needed
  }
}
