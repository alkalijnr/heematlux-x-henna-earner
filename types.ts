export interface TierDetail {
  id: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
  whoFor: string;
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}