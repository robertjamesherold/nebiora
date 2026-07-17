type ProjectResult = {
  label: string;
  value: string;
};

type ProjectGalleryImage = {
  src: string;
  alt: string;
};

type ProjectTestimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

type Project = {
  slug: string;
  name: string;
  category: string;
  gradient: string;
  image: string;
  client: string;
  industry: string;
  timeframe: string;
  services: string[];
  challenge: string;
  solution: string;
  designProcess: string;
  development: string;
  results: ProjectResult[];
  gallery: ProjectGalleryImage[];
  technologies: string[];
  testimonial: ProjectTestimonial;
};

export type { Project, ProjectGalleryImage, ProjectResult, ProjectTestimonial };
