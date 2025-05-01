export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  logo: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}