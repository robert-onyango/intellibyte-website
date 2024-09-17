import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Custom Software Development',
      description:
        'Tailored web, mobile, and cloud-native applications; legacy software modernization.',
      icon: 'fas fa-laptop-code',
    },
    {
      title: 'Cloud Solutions & Migration',
      description:
        'Leveraging cloud technologies for scalability, efficiency, and cost-effectiveness.',
      icon: 'fas fa-cloud',
    },
    {
      title: 'Agile Project Management',
      description:
        'Delivering projects effectively using Agile methodologies and lean practices.',
      icon: 'fas fa-project-diagram',
    },
    {
      title: 'Strategic IT Consulting',
      description:
        'Providing expert guidance to align technology initiatives with business goals.',
      icon: 'fas fa-lightbulb',
    },
    {
      title: 'Legacy Software Modernization',
      description:
        'Updating and enhancing legacy systems to meet modern standards and requirements.',
      icon: 'fas fa-sync-alt',
    },
    {
      title: 'Empathetic Relationship Engineering',
      description:
        'Fostering relationships based on understanding and adaptability to client needs.',
      icon: 'fas fa-heart',
    },
  ];
}
