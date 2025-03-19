import { Service, Project, TeamMember, Testimonial } from './types';

export const services: Service[] = [
  {
    id: '1',
    icon: 'code',
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed to address your specific business challenges and opportunities.',
    features: [
      { name: 'Requirements Analysis' },
      { name: 'Agile Development' },
      { name: 'Continuous Integration' },
    ],
  },
  {
    id: '2',
    icon: 'heart',
    title: 'Healthcare Solutions',
    description: 'Specialized software for healthcare providers that improve patient care and operational efficiency.',
    features: [
      { name: 'Electronic Health Records' },
      { name: 'Telemedicine Platforms' },
      { name: 'Patient Engagement' },
    ],
  },
  {
    id: '3',
    icon: 'graduation-cap',
    title: 'Educational Technology',
    description: 'Digital learning solutions that enhance educational experiences and outcomes for students and educators.',
    features: [
      { name: 'Learning Management Systems' },
      { name: 'Virtual Classrooms' },
      { name: 'Analytics & Assessment' },
    ],
  },
  {
    id: '4',
    icon: 'seedling',
    title: 'Agricultural Innovation',
    description: 'Digital tools for modern farming that optimize yield, reduce waste, and promote sustainable practices.',
    features: [
      { name: 'Precision Farming' },
      { name: 'Supply Chain Management' },
      { name: 'IoT Integration' },
    ],
  },
  {
    id: '5',
    icon: 'building',
    title: 'Enterprise Resource Planning',
    description: 'Comprehensive ERP solutions that streamline business processes and improve operational efficiency.',
    features: [
      { name: 'Financial Management' },
      { name: 'Supply Chain Optimization' },
      { name: 'Human Resources' },
    ],
  },
  {
    id: '6',
    icon: 'shield',
    title: 'Managed IT Services',
    description: 'End-to-end IT management solutions that ensure your technology infrastructure is secure and reliable.',
    features: [
      { name: 'Cybersecurity' },
      { name: 'Cloud Services' },
      { name: '24/7 Support' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Healthcare',
    title: 'Electronic Health Records System',
    description: 'A comprehensive EHR solution for a network of hospitals that improved patient data management and streamlined clinical workflows.',
    tags: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
    ],
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Education',
    title: 'Online Learning Management System',
    description: 'A scalable LMS that enabled a major university to transition to digital learning during the pandemic, supporting over 20,000 students.',
    tags: [
      { name: 'Angular' },
      { name: 'Java' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1569149321789-cce652e9dd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1624&q=80',
    category: 'Agriculture',
    title: 'Precision Farming Platform',
    description: 'An IoT-integrated solution that helped farmers optimize crop yields and reduce resource usage through data-driven insights.',
    tags: [
      { name: 'IoT' },
      { name: 'Python' },
      { name: 'TensorFlow' },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    name: 'Robert Onyango',
    position: 'Founder & President',
    bio: 'Robert brings over 20 years of experience in software development and project management. His leadership and vision have been instrumental in shaping Intellibyte\'s commitment to innovation and excellence.',
    education: 'B.S. in Computer Engineering, University of Maryland, College Park',
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/robertonyango/' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    name: 'Evans Ochieng',
    position: 'VP, Operations, Africa',
    bio: 'Evans is a technology visionary with over 12 years of extensive experience in technical project management, data analysis, software quality assurance and technical client support. He leads our operations in Africa and ensures we stay at the cutting edge of technology.',
    education: 'Bachelor of Business & Information Technology, Africa Nazarene University',
    socialLinks: [
      { platform: 'linkedin', url: 'https://www.linkedin.com' },
      { platform: 'github', url: 'https://github.com' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    name: 'Sarah Johnson',
    position: 'CIO',
    company: 'Memorial Healthcare',
    quote: 'Intellibyte\'s EHR solution transformed our clinical operations. Their team\'s expertise and commitment to understanding our unique needs resulted in a system that has improved patient care and provider efficiency.',
    rating: 5,
  },
  {
    id: '2',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
    name: 'James Wilson',
    position: 'Director of Technology',
    company: 'Westlake University',
    quote: 'The learning management system developed by Intellibyte enabled us to pivot to online education seamlessly. Their agile approach meant we could adapt quickly to changing requirements during a critical transition period.',
    rating: 5,
  },
  {
    id: '3',
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
    name: 'David Nguyen',
    position: 'CEO',
    company: 'GreenHarvest Farms',
    quote: 'The precision farming platform developed by Intellibyte has revolutionized our agricultural operations. We\'ve seen a 30% increase in yield and significant reduction in water usage since implementation.',
    rating: 4.5,
  },
];
