export type ServiceFeature = {
  name: string;
};

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
};

export type ProjectTag = {
  name: string;
};

export type Project = {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tags: ProjectTag[];
};

export type SocialLink = {
  platform: 'linkedin' | 'twitter' | 'github';
  url: string;
};

export type TeamMember = {
  id: string;
  image: string;
  name: string;
  position: string;
  bio: string;
  education: string;
  socialLinks: SocialLink[];
};

export type Testimonial = {
  id: string;
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
};

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
};
