import { TierDetail, FAQItem, Testimonial } from './types';

export const TIERS: Record<string, TierDetail> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: '₦2,000',
    tagline: 'Simple and affordable beginning.',
    description: 'Learn the basics and start earning small amounts immediately. Perfect for those who want to dip their toes into the art of Henna without a heavy commitment.',
    includes: [
      'Basic Henna Mixing & Consistency',
      'Fundamental Line Work & Patterns',
      'Simple Hand Designs for Beginners',
      'Access to General WhatsApp Support Group'
    ],
    whoFor: 'Complete beginners with zero experience who want to learn a new hobby that pays.',
    benefits: [
      'Master the perfect paste consistency',
      'Gain confidence in holding the cone',
      'Earn your first income from simple designs'
    ]
  },
  standard: {
    id: 'standard',
    name: 'Standard',
    price: '₦5,000',
    tagline: 'The complete henna transformation.',
    description: 'Full course + community + support. Our most popular choice for a reason. This tier bridges the gap between amateur and professional.',
    includes: [
      'Everything in Starter Tier',
      'Advanced Floral & Geometric Patterns',
      'Speed Training for Ramadan Rush',
      'Dedicated Standard Training Group',
      'Certificate of Completion'
    ],
    whoFor: 'Aspiring artists ready to take their skills seriously and serve real clients this season.',
    benefits: [
      'Create complex designs with ease',
      'Increase your speed to handle more clients',
      'Join a thriving community of peers'
    ]
  },
  mastery: {
    id: 'mastery',
    name: 'Mastery',
    price: '₦9,000',
    tagline: 'Skill + business + mentorship.',
    description: 'Bridal, VIP, and income coaching included. This is the ultimate investment for those who want to build a sustainable business.',
    includes: [
      'All Starter & Standard Content',
      'Bridal Henna Intricacies (Feet & Hands)',
      'Business of Henna: Pricing & Marketing',
      '1-on-1 Mentorship Sessions',
      'VIP Inner Circle Access',
      'Priority Support'
    ],
    whoFor: 'Future industry leaders who want to dominate the market and maximize earnings.',
    benefits: [
      'Command premium prices for bridal work',
      'Learn the secrets of a fully booked schedule',
      'Direct access to expert mentors'
    ]
  }
};

export const FAQS: FAQItem[] = [
  {
    question: "When does the training start?",
    answer: "Our training is designed to be flexible yet structured. Once you join a group, you will receive the schedule. We focus on getting you ready before the peak season begins."
  },
  {
    question: "Do I need to know how to draw?",
    answer: "Not at all. Our method breaks down complex patterns into simple shapes. If you can write your name, you can learn henna with HeematLux."
  },
  {
    question: "How do I access the classes?",
    answer: "All training happens in exclusive, structured WhatsApp groups where materials, videos, and feedback are shared directly."
  },
  {
    question: "Can I upgrade my tier later?",
    answer: "Yes, we encourage growth. You can upgrade by paying the difference at any time to unlock advanced modules and mentorship."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amina Y.",
    role: "Standard Student",
    text: "I made back my course fee in just one day of applying henna for my neighbors. HeematLux changed my mindset completely."
  },
  {
    name: "Zainab B.",
    role: "Mastery Graduate",
    text: "The business coaching in the Mastery tier is worth ten times the price. I now have a steady stream of bridal clients."
  },
  {
    name: "Fatima K.",
    role: "Starter Student",
    text: "Simple, elegant, and easy to follow. I never thought I could hold a cone until I watched the training videos."
  }
];