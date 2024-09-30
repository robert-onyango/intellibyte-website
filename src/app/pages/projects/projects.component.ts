import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'California Department of Health Services',
      description:
        'Led the design and implementation of a cloud-native application for the California Department of Health Services, reducing release cycles from 11 to 4 months while improving code quality and maintainability.',
      image: 'assets/images/DHCSlogo.svg',
      link: '/projects/dhcs',
    },
    {
      description:
        'Provided solution architecture and technical leadership, enhancing system scalability and maintainability.',
      image: 'assets/images/deloitte.svg',
      link: '/projects/deloitte',
      isDarkBackground: true,
    },
    {
      title: 'U.S. Space Force Support',
      description:
        'Developed warfighter support applications and migrated IT infrastructure to Azure Kubernetes Service.',
      image: 'assets/images/ussf.svg',
      link: '/projects/ussf',
    },
    {
      title: 'New York City Department of Education',
      description:
        'Modernized applications; implemented cloud-native architecture and TDD practices.',
      image: 'assets/images/nycdoe.svg',
      link: '/projects/nycdoe',
    },
    {
      title: 'Blackout Startup Modernization',
      description:
        'Overhauled backend systems for a disruptive lighting industry startup, enhancing security and efficiency.',
      image: 'assets/images/blackout.svg',
      link: '/projects/blackout',
      isDarkBackground: true,
    },
    {
      title: 'VMware by Broadcom',
      description:
        'Overhauled backend systems for a disruptive lighting industry startup, enhancing security and efficiency.',
      image: 'assets/images/vmware.svg',
      link: '/projects/vmware',
    },
  ];
}
