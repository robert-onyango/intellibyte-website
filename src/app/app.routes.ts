// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlackoutComponent } from './pages/projects/blackout/blackout.component';
import { DeloitteComponent } from './pages/projects/deloitte/deloitte.component';
import { DhcsComponent } from './pages/projects/dhcs/dhcs.component';
import { NycdoeComponent } from './pages/projects/nycdoe/nycdoe.component';
import { UssfComponent } from './pages/projects/ussf/ussf.component';
import { VmwareComponent } from './pages/projects/vmware/vmware.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage', title: 'Home - Intellibyte Software Solutions', description: 'Intellibyte Software Solutions empowers businesses through innovative software solutions.', keywords: 'Software Development, IT Consulting, Custom Software, Cloud Solutions' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage', title: 'About Us - Intellibyte Software Solutions', description: 'Learn more about Intellibyte Software Solutions, our mission, and our team.', keywords: 'About, Company, Mission, Team' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage', title: 'Services - Intellibyte Software Solutions', description: 'Discover the comprehensive suite of services offered by Intellibyte Software Solutions.', keywords: 'Services, Software Development, Cloud Solutions, Agile Methodologies' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage', title: 'Projects - Intellibyte Software Solutions', description: 'Explore the successful projects delivered by Intellibyte Software Solutions.', keywords: 'Projects, Case Studies, Software Solutions, Innovation' } },
  { path: 'projects/dhcs', component: DhcsComponent, data: { animation: 'DhcsPage' } },
  { path: 'projects/ussf', component: UssfComponent, data: { animation: 'UssfPage' } },
  { path: 'projects/nycdoe', component: NycdoeComponent, data: { animation: 'NycdoePage' } },
  { path: 'projects/blackout', component: BlackoutComponent, data: { animation: 'BlackoutPage' } },
  { path: 'projects/vmware', component: VmwareComponent, data: { animation: 'VmwarePage' } },
  { path: 'projects/deloitte', component: DeloitteComponent, data: { animation: 'DeloittePage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage', title: 'Contact Us - Intellibyte Software Solutions', description: 'Get in touch with Intellibyte Software Solutions for your software needs.', keywords: 'Contact, Get in Touch, Inquiry, Support' } },
  { path: '**', redirectTo: '' }, // Redirect unknown paths to Home
];
