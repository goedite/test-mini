
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-clanea-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://picsum.photos/id/26/1000/1250?grayscale" 
                alt="Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-clanea-cream z-10 overflow-hidden hidden md:block">
              <img 
                src="https://picsum.photos/id/27/500/500" 
                alt="Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-clanea-gold uppercase tracking-[0.4em] text-[10px] font-bold">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              The story behind the innovation
            </h2>
            <p className="text-clanea-gray text-lg leading-relaxed">
              At Clanea, we're setting new standards in modern bathroom design. With PurePlate, we've developed a system that perfectly combines function and aesthetics.
            </p>
            <p className="text-clanea-gray leading-relaxed">
              Our philosophy is rooted in architectural minimalism. We believe that true luxury lies in the details that remain unseen, providing a seamless visual experience without compromising on the robust Swiss engineering that powers our products.
            </p>
            <div className="pt-4">
              <button className="px-10 py-4 bg-clanea-dark text-white uppercase tracking-widest text-xs font-semibold hover:bg-clanea-gold transition-colors">
                Learn our vision
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
