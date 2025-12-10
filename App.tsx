import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import TierPage from './pages/TierPage';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="tier/:id" element={<TierPage />} />
          <Route path="payment-instructions" element={<Payment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
