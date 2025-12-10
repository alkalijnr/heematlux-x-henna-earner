import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Button from '../components/Button';
import { TIERS } from '../constants';

const TierPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tier = id ? TIERS[id] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tier) {
    return <Navigate to="/pricing" replace />;
  }

  const whatsappMessage = encodeURIComponent(`Hello HeematLux, I have paid for the ${tier.name} Tier (${tier.price}). Please add me to the group.`);
  const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`;

  return (
    <div className="animate-fade-in pt-20">
      {/* Hero */}
      <div className="bg-luxury-black text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Overlay for Texture */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-luxury-black via-gray-900 to-luxury-black"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             <span className="text-gold-400 tracking-widest uppercase text-sm font-bold mb-2 block">The {tier.name} Program</span>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">{tier.tagline}</h1>
             <p className="text-gray-300 text-lg max-w-xl">{tier.description}</p>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="bg-white/10 p-2 rounded-full border border-gold-500/30 backdrop-blur-sm">
                <span className="block bg-gold-500 text-luxury-black font-bold text-3xl px-8 py-8 rounded-full shadow-lg">
                  {tier.price}
                </span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Who is it for */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Is this for you?</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{tier.whoFor}</p>
            </section>

            {/* What's Included */}
            <section className="bg-gold-50 p-8 rounded-sm border border-gold-100">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tier.includes.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-gold-500 mr-3 mt-1">✦</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Your Transformation</h3>
              <ul className="space-y-4">
                {tier.benefits.map((benefit, i) => (
                   <li key={i} className="flex items-center text-lg text-gray-700">
                     <span className="w-2 h-2 bg-gold-400 rounded-full mr-4"></span>
                     {benefit}
                   </li>
                ))}
              </ul>
            </section>

            {/* Mockup Placeholder */}
            <section className="relative mt-8 group">
              <div className="w-full h-80 bg-gold-100 rounded-sm shadow-xl flex items-center justify-center border border-gold-200">
                 <div className="text-center">
                    <span className="block text-4xl mb-2">📦</span>
                    <span className="text-gold-600 uppercase tracking-widest text-sm font-bold">Premium Course Material</span>
                 </div>
              </div>
            </section>

             {/* FAQ for Tier */}
             <section className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="list-none flex justify-between items-center cursor-pointer p-4 bg-gray-50 hover:bg-gold-50 transition">
                      <span className="font-medium text-gray-800">Do I get a certificate?</span>
                      <span className="text-gold-500 group-open:rotate-180 transition">+</span>
                    </summary>
                    <div className="p-4 text-gray-600 text-sm">
                      {id === 'starter' ? 'Certificates are available for Standard and Mastery tiers.' : 'Yes, a digital certificate is included upon completion.'}
                    </div>
                  </details>
                  <details className="group">
                    <summary className="list-none flex justify-between items-center cursor-pointer p-4 bg-gray-50 hover:bg-gold-50 transition">
                      <span className="font-medium text-gray-800">Is the mentorship live?</span>
                      <span className="text-gold-500 group-open:rotate-180 transition">+</span>
                    </summary>
                    <div className="p-4 text-gray-600 text-sm">
                      {id === 'mastery' ? 'Yes, Mastery includes 1-on-1 scheduled live mentorship sessions.' : 'Support is provided via group chat responses.'}
                    </div>
                  </details>
                </div>
             </section>
          </div>

          {/* Right Sidebar - Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white shadow-2xl p-8 border-t-4 border-gold-500">
              <div className="text-center mb-6">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Total Investment</span>
                <p className="text-4xl font-bold text-luxury-black mt-2">{tier.price}</p>
              </div>

              <div className="bg-gray-50 p-4 mb-6 rounded border border-dashed border-gray-300">
                <p className="text-xs text-center text-gray-500 uppercase mb-2">Bank Transfer Details</p>
                <p className="font-mono text-center font-bold text-lg text-gray-800">0123456789</p>
                <p className="text-center text-sm text-gray-600">GTBank • HeematLux Ventures</p>
              </div>

              <p className="text-xs text-gray-400 text-center mb-6">
                Please make the transfer before clicking the button below. You will be asked to send a screenshot.
              </p>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button fullWidth className="py-4 shadow-xl mb-4">
                  I've Paid — Add Me To Group
                </Button>
              </a>

              <Link to="/payment-instructions" className="block text-center text-xs text-gold-600 hover:underline">
                Need help paying?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierPage;