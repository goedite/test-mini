
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "How does PurePlate work?",
    answer: "PurePlate replaces the traditional flush button with a flush-mounted cover that blends in with your wall's tiles. Behind the cover lies the precise technology that ensures smooth flushing."
  },
  {
    question: "Can PurePlate be installed in any bathroom?",
    answer: "Yes, PurePlate is compatible with most common toilet flush systems like Geberit and TECE. Our experts will be happy to advise you on integration options into your existing architecture."
  },
  {
    question: "Is PurePlate hygienic?",
    answer: "Absolutely. The flush-mounted integration prevents dirt and dust buildup. Furthermore, the surface is easy to clean, significantly improving hygiene in the bathroom."
  },
  {
    question: "Can I use PurePlate with any tile?",
    answer: "Yes, PurePlate is compatible with almost all types of tiles. Whether matte, glossy, or textured surfaces – the system adapts perfectly to your design."
  }
];

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-clanea-beige">
      <div className="container mx-auto px-6 max-w-3xl">
        <span className="text-clanea-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-2 text-center">Support</span>
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-clanea-border overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-8 text-left hover:text-clanea-gold transition-colors group"
              >
                <span className="font-serif text-xl md:text-2xl">{faq.question}</span>
                {openIdx === idx ? <Minus className="w-5 h-5 text-clanea-gold" /> : <Plus className="w-5 h-5 group-hover:text-clanea-gold transition-colors" />}
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIdx === idx ? 'max-h-96 pb-8' : 'max-h-0'
                }`}
              >
                <p className="text-clanea-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
