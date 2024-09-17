import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  capabilities = [
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
    // Add more capabilities as needed
  ];

  differentiators = [
    {
      title: 'Bespoke Solutions',
      description:
        'Custom crafting solutions with a focus on lean and agile methodologies for efficiency and adaptability.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Elite Balanced Teams',
      description:
        'Small, multidisciplinary teams of experts for rapid and effective solution delivery.',
      icon: 'fas fa-users-cog',
    },
    {
      title: 'Transparency',
      description:
        'Clear, accountable processes with continuous improvement.',
      icon: 'fas fa-eye',
    },
    {
      title: 'Synergos Philosophy',
      description:
        'Collaborative solutions for a competitive edge.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Empathetic Relationship Engineering',
      description:
        'Fostering relationships based on understanding and adaptability.',
      icon: 'fas fa-heart',
    },
    {
      title: 'Small Business Advocacy',
      description:
        'Empowering local businesses with advanced technology and community support.',
      icon: 'fas fa-business-time',
    },
    // Add more differentiators as needed
  ];

  featuredProjects = [
    {
      title: 'California Department of Health Services',
      description:
        'Reduced release cycle from 11 months to 4 months with a cloud-native application.',
      image: 'assets/ai-generated/dhcs.jpg',
      link: '/projects/dhcs',
    },
    {
      title: 'U.S. Space Force',
      description:
        'Developed warfighter support applications and migrated IT infrastructure.',
      image: 'assets/ai-generated/ussf.jpg',
      link: '/projects/ussf',
    },
    {
      title: 'Blackout Startup Modernization',
      description:
        'Overhauled backend systems, enhancing security and development efficiency.',
      image: 'assets/ai-generated/blackout.jpg',
      link: '/projects/blackout',
    },
    // Add more featured projects as needed
  ];
}
