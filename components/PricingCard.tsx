import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface PricingCardProps {
  tierId: string;
  data: any;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tierId, data, featured }) => (
  <div className={`relative bg-white flex flex-col p-8 transition-transform duration-300 hover:-translate-y-2 ${featured ? 'border-2 border-gold-400 shadow-xl scale-105 z-10' : 'border border-gray-200 shadow-md'}`}>
    {featured && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-white px-4 py-1 text-xs uppercase tracking-widest font-bold">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-bold text-luxury-black mb-2">{data.name}</h3>
      <p className="text-gold-600 text-3xl font-bold mb-4">{data.price}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{data.tagline}</p>
    </div>

    <ul className="mb-8 space-y-4 flex-grow">
      {data.includes.slice(0, 4).map((item: string, i: number) => (
        <li key={i} className="flex items-start text-sm text-gray-600">
          <span className="text-gold-500 mr-2">✓</span>
          {item}
        </li>
      ))}
      {data.includes.length > 4 && (
        <li className="text-xs text-gray-400 italic pl-5">+ more details inside</li>
      )}
    </ul>

    <Link to={`/tier/${tierId}`} className="mt-auto">
      <Button variant={featured ? 'primary' : 'outline'} fullWidth>
        Learn More
      </Button>
    </Link>
  </div>
);

export default PricingCard;