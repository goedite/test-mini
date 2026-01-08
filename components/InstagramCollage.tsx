
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramCollage: React.FC = () => {
  const images = [
    'https://picsum.photos/id/10/600/600',
    'https://picsum.photos/id/11/600/600',
    'https://picsum.photos/id/12/600/600',
    'https://picsum.photos/id/13/600/600',
    'https://picsum.photos/id/14/600/600',
    'https://picsum.photos/id/15/600/600'
  ];

  return (
    <section className="py-24 bg-clanea-beige">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <span className="text-clanea-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">Community</span>
            <h2 className="font-serif text-4xl">@clanea_official</h2>
          </div>
          <button className="mt-6 md:mt-0 flex items-center space-x-3 px-6 py-3 bg-clanea-dark text-white text-xs uppercase tracking-widest font-bold hover:bg-clanea-gold transition-colors">
            <Instagram className="w-4 h-4" />
            <span>Follow Us</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square group overflow-hidden cursor-pointer">
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-clanea-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramCollage;
