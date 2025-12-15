import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';
import { TESTIMONIALS, TIERS } from '../constants';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Direct DOM property manipulation to ensure mobile compatibility
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      
      const attemptPlay = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Autoplay blocked, waiting for interaction", error);
        }
      };

      attemptPlay();

      // Fallback: Try to play on the first user interaction
      const onInteraction = () => {
        if (video.paused) {
          video.play().catch(e => console.log("Play failed on interaction", e));
        }
      };

      window.addEventListener('touchstart', onInteraction, { once: true });
      window.addEventListener('click', onInteraction, { once: true });

      return () => {
        window.removeEventListener('touchstart', onInteraction);
        window.removeEventListener('click', onInteraction);
      };
    }
  }, []);

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-luxury-dark">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            webkit-playsinline="true"
            preload="auto"
            className="w-full h-full object-cover opacity-60 scale-105"
            poster="https://images.unsplash.com/photo-1598394625234-712808c148e6?q=80&w=1200&auto=format&fit=crop"
          >
            <source src="https://drive.google.com/uc?export=download&id=1bqz-AAyHyODl-C-wNgnK1VgSJIqeM5o3" type="video/mp4" />
          </video>
          {/* Gradient Overlays for Text Contrast */}
          <div className="absolute inset-0 bg-luxury-dark/50 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-black/60"></div>
          <div className="absolute inset-0 bg-pattern-luxury opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Abstract Glow Orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gold-300/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
          <div className="mb-6 inline-flex items-center space-x-2 px-6 py-2 border border-gold-400/50 rounded-full bg-black/40 backdrop-blur-md animate-fade-in-down shadow-lg shadow-gold-900/20">
             <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
             <span className="text-gold-200 text-xs tracking-[0.2em] uppercase font-bold">January Cohort: Start Immediately</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Turn Your Art <br/> Into <span className="gold-text-gradient italic">Wealth</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Classes start immediately in January. Master the craft and finish your training before the Ramadan rush.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/pricing">
              <Button className="w-full md:w-auto min-w-[220px] py-4 text-base shadow-gold-500/20 shadow-2xl">Start Classes Now</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="w-full md:w-auto min-w-[220px] py-4 text-base border-white text-white hover:bg-white hover:text-luxury-black">How It Works</Button>
            </Link>
          </div>
          <p className="mt-8 text-white/60 text-sm">Join 500+ students • Finish Before Ramadan • Instant Access</p>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="bg-gold-50 py-16 relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
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
      <section className="py-24 bg-white relative">
        {/* Soft side glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold-100/40 blur-3xl rounded-full -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Path to Profit</h2>
             <p className="text-gray-600">Start in January, Finish Before Ramadan.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
             
             {[
               { icon: "01", title: "Join immediately", desc: "Select your tier and start your classes this January." },
               { icon: "02", title: "Intensive Learning", desc: "Master the curriculum before the holy month begins." },
               { icon: "03", title: "Earn During Ramadan", desc: "Be fully certified and ready to book clients for the peak season." }
             ].map((step, idx) => (
               <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 text-center rounded-lg border border-transparent hover:border-gold-100 transition-all duration-300">
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
      <section className="py-20 bg-luxury-gray relative">
        <div className="absolute inset-0 bg-pattern-luxury opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
           <div className="h-96 rounded-sm shadow-2xl shadow-gold-900/10 overflow-hidden relative group border border-white">
             <img 
               src="https://images.unsplash.com/photo-1598394625234-712808c148e6?q=80&w=800&auto=format&fit=crop" 
               alt="Premium Henna Quality" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:bg-transparent transition-colors duration-300"></div>
           </div>
           <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Why HeematLux?</h2>
             <div className="space-y-8">
               <div className="flex">
                 <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center text-xl shadow-inner">💎</div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Premium Curriculum</h4>
                   <p className="text-gray-600">We skip the fluff. Learn the exact patterns used by top-tier bridal artists in Northern Nigeria.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center text-xl shadow-inner">💰</div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold mb-2">Income Focused</h4>
                   <p className="text-gray-600">Our goal isn't just art; it's revenue. We teach you pricing, client management, and marketing.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 mr-4">
                   <div className="w-12 h-12 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center text-xl shadow-inner">🤝</div>
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-pattern-grid opacity-30 pointer-events-none"></div>
        {/* Soft Background Blur Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-50/80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Classes Starting Immediately</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Choose Your Level</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you are a complete beginner or looking to scale your business, we have a tailored program starting this January.
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
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-[200px] text-gray-50 opacity-[0.03] font-serif leading-none select-none">“</div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl text-luxury-black font-bold">Success Stories</h2>
             <p className="text-gray-600 mt-2">Real women, real earnings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 border border-gray-100 shadow-sm hover:shadow-lg transition duration-500 relative bg-opacity-60 backdrop-blur-sm">
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
      <section className="py-24 bg-luxury-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-luxury opacity-10 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-luxury-black">Start January. Finish Before Ramadan.</h2>
          <p className="text-luxury-black/80 mb-10 text-xl font-medium">The biggest earning season of the year is approaching. Make sure you are ready.</p>
          <Link to="/pricing">
             <Button className="px-12 py-4 text-lg bg-luxury-black text-white hover:bg-gray-800 shadow-xl border border-luxury-black/20">Enroll Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;