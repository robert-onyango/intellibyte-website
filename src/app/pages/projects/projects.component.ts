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
        'Collaborated on a cloud-native application, reducing release cycles and enhancing code quality.',
      // image: 'assets/images/DHCSlogo.svg',
      link: '/projects/dhcs',
    },
    {
      title: 'U.S. Space Force Support',
      description:
        'Developed warfighter support applications and migrated IT infrastructure to Azure Kubernetes Service.',
      // image: 'assets/images/ussf.svg',
      link: '/projects/ussf',
    },
    {
      title: 'New York City Department of Education',
      description:
        'Modernized applications; implemented cloud-native architecture and TDD practices.',
      // image: 'assets/images/ussf.jpg',
      link: '/projects/nycdoe',
    },
    {
      title: 'Blackout Startup Modernization',
      description:
        'Overhauled backend systems for a disruptive lighting industry startup, enhancing security and efficiency.',
      // image: 'assets/images/blackout.jpg',
      link: '/projects/blackout',
    },
  ];
}
