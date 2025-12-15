import React from 'react';
import Button from '../components/Button';

const Payment: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 pb-20 max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Payment Instructions</h1>
        <p className="text-gray-600">Secure your spot in the HeematLux training program.</p>
      </div>

      <div className="bg-white shadow-lg p-8 md:p-12 border border-gray-100">
        <ol className="relative border-l border-gold-200 ml-4 space-y-12">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gold-400 rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Make a Transfer</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Send the exact amount for your chosen tier to the account below.</p>
            <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
               <p className="text-sm text-gray-500 uppercase tracking-wide">Bank Name</p>
               <p className="font-bold text-lg mb-2">GT Bank</p>
               <p className="text-sm text-gray-500 uppercase tracking-wide">Account Number</p>
               <p className="font-mono font-bold text-2xl tracking-wider text-luxury-black mb-2">0515583770</p>
               <p className="text-sm text-gray-500 uppercase tracking-wide">Account Name</p>
               <p className="font-bold text-lg">Rahimatu Ahmed</p>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gold-400 rounded-full -left-4 ring-4 ring-white text-white font-bold">2</span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">Save Your Receipt</h3>
            <p className="text-base font-normal text-gray-500">Take a screenshot of the successful transaction or save the PDF receipt.</p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gold-400 rounded-full -left-4 ring-4 ring-white text-white font-bold">3</span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">Confirm on WhatsApp</h3>
            <p className="text-base font-normal text-gray-500 mb-6">Send your payment proof to our admin to be added to the exclusive training group.</p>
            <a href="https://wa.me/2349052872335" target="_blank" rel="noopener noreferrer">
              <Button>Send Proof on WhatsApp</Button>
            </a>
          </li>
        </ol>
      </div>
      
      <div className="mt-12 p-6 bg-gold-50 border border-gold-200 rounded text-center">
        <p className="text-luxury-black font-medium">Important Note:</p>
        <p className="text-sm text-gray-600 mt-2">
          Group links are sent manually after payment confirmation. Please allow up to 2 hours for a response during business hours.
        </p>
      </div>
    </div>
  );
};

export default Payment;