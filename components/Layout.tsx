import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import Button from './Button';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-luxury-black bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="z-50">
              <span className={`text-2xl tracking-widest font-bold ${isScrolled ? 'text-luxury-black' : 'text-luxury-black'}`}>
                HEEMAT<span className="text-gold-500">LUX</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink to="/" label="Home" />
              <NavLink to="/about" label="About" />
              <NavLink to="/pricing" label="Programs" />
              <NavLink to="/contact" label="Contact" />
              <Link to="/pricing">
                <Button variant="primary" className="px-6 py-2 text-xs">Start Now</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-luxury-black focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-down">
             <NavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
             <NavLink to="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
             <NavLink to="/pricing" label="Programs" onClick={() => setMobileMenuOpen(false)} />
             <NavLink to="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
             <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary">Start Learning</Button>
             </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-luxury-dark text-white py-16 border-t border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-2xl tracking-widest font-bold">
              HEEMAT<span className="text-gold-400">LUX</span>
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Empowering women through the art of Henna. <br/>
              Turn your creativity into income this Ramadan.
            </p>
          </div>
          <div>
            <h4 className="text-gold-400 text-lg mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-gold-400 transition">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-gold-400 transition">Courses</Link></li>
              <li><Link to="/payment-instructions" className="hover:text-gold-400 transition">How to Pay</Link></li>
              <li><Link to="/faq" className="hover:text-gold-400 transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-400 text-lg mb-4 font-bold">Connect</h4>
            <div className="flex space-x-4">
              <SocialLink href="#" label="Instagram" />
              <SocialLink href="#" label="TikTok" />
              <SocialLink href="https://wa.me/1234567890" label="WhatsApp" />
            </div>
            <p className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} HeematLux. All rights reserved. <br/>
              Powered by HennaEarner.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink: React.FC<{ to: string, label: string, onClick?: () => void }> = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-luxury-black hover:text-gold-600 transition-colors uppercase text-xs tracking-widest font-medium"
  >
    {label}
  </Link>
);

const SocialLink: React.FC<{ href: string, label: string }> = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition">
    {label}
  </a>
);

export default Layout;