// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage', title: 'Home - Intellibyte Software Solutions', description: 'Intellibyte Software Solutions empowers businesses through innovative software solutions.', keywords: 'Software Development, IT Consulting, Custom Software, Cloud Solutions' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage', title: 'About Us - Intellibyte Software Solutions', description: 'Learn more about Intellibyte Software Solutions, our mission, and our team.', keywords: 'About, Company, Mission, Team' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage', title: 'Services - Intellibyte Software Solutions', description: 'Discover the comprehensive suite of services offered by Intellibyte Software Solutions.', keywords: 'Services, Software Development, Cloud Solutions, Agile Methodologies' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage', title: 'Projects - Intellibyte Software Solutions', description: 'Explore the successful projects delivered by Intellibyte Software Solutions.', keywords: 'Projects, Case Studies, Software Solutions, Innovation' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage', title: 'Contact Us - Intellibyte Software Solutions', description: 'Get in touch with Intellibyte Software Solutions for your software needs.', keywords: 'Contact, Get in Touch, Inquiry, Support' } },
  { path: '**', redirectTo: '' }, // Redirect unknown paths to Home
];
