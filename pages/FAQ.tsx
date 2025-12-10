import React from 'react';
import { FAQS } from '../constants';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const FAQ: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Everything you need to know about joining HeematLux.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition duration-300">
              <h3 className="text-lg font-bold text-luxury-black mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gold-50 p-12 rounded-sm">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">We are happy to answer them personally.</p>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;