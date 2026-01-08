
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import DesignAssistant from './components/DesignAssistant';
import FAQSection from './components/FAQSection';
import InstagramCollage from './components/InstagramCollage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-clanea-gold selection:text-white">
        <Navbar isScrolled={isScrolled} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturesSection />
                <div id="products" className="py-20 bg-clanea-cream">
                  <ProductGrid />
                </div>
                <AboutSection />
                <DesignAssistant />
                <InstagramCollage />
                <FAQSection />
              </>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
