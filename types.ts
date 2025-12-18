
export interface CaseStudy {
  industry: string;
  goal: string;
  focus: string;
  result: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  brand: string;
  text: string;
}

export interface Plan {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
