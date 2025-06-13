export interface NavItem {
  label: string;
  href: string;
}

export interface TrainingPackage {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  hours: string;
  price: number;
  discountedPrice: number | null;
  features: string[];
  benefits: {
    title: string;
    value: string;
  }[];
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  industry: string;
  company: string;
  course: string;
  results: string;
  metrics: {
    label: string;
    value: string;
  }[];
  period: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  icon: string;
}