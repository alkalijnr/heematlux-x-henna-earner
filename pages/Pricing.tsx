import React from 'react';
import PricingCard from '../components/PricingCard';
import { TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="text-center px-4 mb-16">
        <h1 className="text-5xl font-bold mb-6">Invest In Your Future</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the tier that fits your goals. Whether you want a side hustle or a full-time empire, we have a path for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Starter */}
          <PricingCard tierId="starter" data={TIERS.starter} />
          
          {/* Standard (Featured) */}
          <PricingCard tierId="standard" data={TIERS.standard} featured />
          
          {/* Mastery */}
          <PricingCard tierId="mastery" data={TIERS.mastery} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;