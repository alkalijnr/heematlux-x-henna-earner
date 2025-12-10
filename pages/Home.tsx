import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';
import { TESTIMONIALS, TIERS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-luxury-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-[#2a2a2a] to-black"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
          <div className="mb-6 inline-flex items-center space-x-2 px-6 py-2 border border-gold-400/50 rounded-full bg-black/40 backdrop-blur-md animate-fade-in-down">
             <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
             <span className="text-gold-200 text-xs tracking-[0.2em] uppercase font-bold">Ramadan Cohort Enrolling Now</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Turn Your Art <br/> Into <span className="gold-text-gradient italic">Wealth</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            The premium henna training academy for women who want to master the craft and build a profitable business in Nigeria.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/pricing">
              <Button className="w-full md:w-auto min-w-[220px] py-4 text-base shadow-gold-500/20 shadow-2xl">Start Earning Today</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="w-full md:w-auto min-w-[220px] py-4 text-base border-white text-white hover:bg-white hover:text-luxury-black">How It Works</Button>
            </Link>
          </div>
          <p className="mt-8 text-white/60 text-sm">Join 500+ students • Certified Training • Instant Access</p>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="bg-gold-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-luxury-dark uppercase tracking-widest text-xs mb-4 text-gray-500">In Exclusive Partnership With</p>
          <div className="flex justify-center items-center space-x-4 mb-4">
             <span className="font-bold text-2xl md:text-3xl text-luxury-black">HeematLux</span>
             <span className="text-gold-500 text-2xl">×</span>
             <span className="font-bold text-2xl md:text-3xl text-luxury-black">HennaEarner</span>
          </div>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Combining <span className="font-bold text-luxury-black">luxury bridal techniques</span> with <span className="font-bold text-luxury-black">viral marketing strategies</span>. We don't just teach you how to draw; we teach you how to get booked.
          </p>
        </div>
      </section>

      {/* How It Works (Trust Building) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Path to Profit</h2>
             <p className="text-gray-600">Three simple steps to financial independence this season.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
             
             {[
               { icon: "01", title: "Choose Your Tier", desc: "Select the level that fits your budget. Pay securely via bank transfer." },
               { icon: "02", title: "Join The Circle", desc: "Get instant access to our exclusive WhatsApp training groups and mentors." },
               { icon: "03", title: "Learn & Earn", desc: "Master the designs that are in high demand and start booking clients immediately." }
             ].map((step, idx) => (
               <div key={idx} className="bg-white p-6 text-center">
                  <div className="w-24 h-24 mx-auto bg-luxury-black text-gold-400 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-xl border-4 border-gold-100">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="h-96 rounded-sm shadow-xl overflow-hidden relative group">
             <img 
               src="https://images.unsplash.com/photo-1550614000-4b9519e0034a?q=80&w=800&auto=format&fit=crop" 
               alt="Premium Henna Quality" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
           </div>
           <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Why HeematLux?</h2>
             <div className="space-y-8">
               <div className="flex">
                 <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center text-xl">💎</div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Premium Curriculum</h4>
                   <p className="text-gray-600">We skip the fluff. Learn the exact patterns used by top-tier bridal artists in Northern Nigeria.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center text-xl">💰</div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Income Focused</h4>
                   <p className="text-gray-600">Our goal isn't just art; it's revenue. We teach you pricing, client management, and marketing.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center text-xl">🤝</div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Lifetime Community</h4>
                   <p className="text-gray-600">Join a sisterhood of artists who support, refer, and grow together.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* PRICING SECTION ON HOME PAGE */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-50/50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Registration Closing Soon</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Choose Your Level</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you are a complete beginner or looking to scale your business, we have a tailored program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <PricingCard tierId="starter" data={TIERS.starter} />
            <PricingCard tierId="standard" data={TIERS.standard} featured />
            <PricingCard tierId="mastery" data={TIERS.mastery} />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Secure Bank Transfer Payment • 100% Satisfaction Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl text-luxury-black font-bold">Success Stories</h2>
             <p className="text-gray-600 mt-2">Real women, real earnings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 border border-gray-100 shadow-sm hover:shadow-lg transition duration-500 relative">
                <div className="absolute top-6 right-8 text-6xl text-gold-200 leading-none opacity-50">"</div>
                <div className="flex text-gold-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic relative z-10">{t.text}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg font-bold text-luxury-black">{t.name}</p>
                  <p className="text-xs text-gold-600 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-luxury-gradient text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-luxury-black">Don't Miss The Ramadan Rush</h2>
          <p className="text-luxury-black/80 mb-10 text-xl font-medium">The biggest earning season of the year is approaching. Will you be ready?</p>
          <Link to="/pricing">
             <Button className="px-12 py-4 text-lg bg-luxury-black text-white hover:bg-gray-800 shadow-xl">Get Started Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;