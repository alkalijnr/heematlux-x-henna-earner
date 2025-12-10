import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24">
      {/* Header */}
      <div className="bg-luxury-gray py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Essence</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Where tradition meets modern luxury, and art meets enterprise.</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Story of HeematLux</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              HeematLux was born from a desire to elevate the standard of Henna artistry in Nigeria. We recognized that Henna is more than just temporary body art—it is a cultural staple, a celebration essential, and a lucrative skill.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by a team of industry experts and master artists, HeematLux bridges the gap between traditional designs and the high-end, luxury bridal market.
            </p>
            <div className="p-6 bg-gold-50 border-l-4 border-gold-400">
              <p className="italic text-gray-700 text-lg">
                "Our mission is to create a generation of financially independent women who create beauty with their hands."
              </p>
            </div>
          </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-64 bg-luxury-black rounded-sm mt-8 shadow-lg flex items-center justify-center">
                <span className="text-gold-400 text-sm uppercase tracking-widest">Artistry</span>
            </div>
            <div className="w-full h-64 bg-gold-400 rounded-sm shadow-lg flex items-center justify-center">
                <span className="text-white text-sm uppercase tracking-widest">Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-gold-400 uppercase tracking-widest text-sm mb-4">A Powerful Alliance</h2>
           <h3 className="text-4xl mb-8">HeematLux x HennaEarner</h3>
           <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12">
             We have partnered with HennaEarner to bring you a curriculum that is not only artistically superior but commercially viable. HennaEarner brings the viral marketing strategies and community growth hacks that modern artists need to survive in the digital age.
           </p>
           <div className="flex justify-center gap-8 flex-wrap">
             <div className="text-center p-4">
               <span className="block text-4xl text-gold-400 mb-2">500+</span>
               <span className="text-sm uppercase tracking-wider text-gray-400">Students Trained</span>
             </div>
             <div className="text-center p-4">
               <span className="block text-4xl text-gold-400 mb-2">₦5M+</span>
               <span className="text-sm uppercase tracking-wider text-gray-400">Student Earnings</span>
             </div>
             <div className="text-center p-4">
               <span className="block text-4xl text-gold-400 mb-2">100%</span>
               <span className="text-sm uppercase tracking-wider text-gray-400">Completion Rate</span>
             </div>
           </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Henna is Profitable</h2>
          <p className="text-gray-600">Especially in Nigeria, and especially now.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Low Startup Cost', desc: 'You only need powder, oils, and cones. The ROI is incredibly high compared to other beauty skills.' },
            { title: 'High Seasonal Demand', desc: 'Ramadan, Eid, and Wedding Season create massive spikes in demand where artists are fully booked.' },
            { title: 'Mobile Business', desc: 'No shop needed. You can work from home or offer home services to premium clients.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 shadow-lg border-t-2 border-gold-400">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/pricing">
            <Button>View Our Programs</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;