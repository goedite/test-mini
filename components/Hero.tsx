
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end bg-clanea-dark overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/101/1920/1080?grayscale" 
          alt="Modern bathroom architecture" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-clanea-dark/80 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 pb-24 relative z-10 fade-in">
        <div className="max-w-4xl">
          <p className="text-clanea-gold uppercase tracking-[0.4em] text-sm mb-6 font-medium">
            Swiss made. Perfection.
          </p>
          <h2 className="font-serif text-6xl md:text-8xl text-white leading-tight mb-8">
            Designed for a modern <br />
            <span className="italic opacity-90">Bathroom</span>
          </h2>
          <button className="group flex items-center space-x-4 bg-white hover:bg-clanea-gold hover:text-white transition-all duration-500 px-8 py-4 uppercase tracking-widest text-xs font-semibold">
            <span>Explore PurePlate</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 hidden md:flex flex-col items-center space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-white/50 rotate-90 origin-right translate-x-2">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-clanea-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
