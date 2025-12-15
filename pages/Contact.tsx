import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">We are here to help you start your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Direct Contact */}
           <div className="bg-white p-8 shadow-md">
             <h3 className="text-xl font-bold mb-6">Customer Support</h3>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Have questions about the tiers? Need help with payment? Our team is available on WhatsApp to assist you.
             </p>
             <a href="https://wa.me/2349052872335" target="_blank" rel="noopener noreferrer">
                <Button fullWidth>Chat on WhatsApp</Button>
             </a>
           </div>

           {/* Socials */}
           <div className="bg-white p-8 shadow-md">
             <h3 className="text-xl font-bold mb-6">Follow Us</h3>
             <div className="space-y-6">
                <a href="https://www.instagram.com/raheematahmed?igsh=MTQzcWRqaHhmbzZyNg==" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center justify-between p-4 border border-gray-100 group-hover:border-gold-300 transition cursor-pointer">
                    <span className="font-medium">Instagram</span>
                    <span className="text-gold-500">@raheematahmed</span>
                  </div>
                </a>
                <div className="flex items-center justify-between p-4 border border-gray-100 hover:border-gold-300 transition cursor-pointer">
                  <span className="font-medium">TikTok</span>
                  <span className="text-gold-500">@HennaEarner</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-100 hover:border-gold-300 transition cursor-pointer">
                  <span className="font-medium">Email</span>
                  <span className="text-gold-500">hello@heematlux.com</span>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;