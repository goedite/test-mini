
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "Flush-mounted",
    description: "Clanea blends into the wall, creating a seamless, elegant surface – without visible edges or an annoying cistern appearance.",
    link: "View details"
  },
  {
    title: "Individually customizable",
    description: "Whether natural stone, porcelain stoneware or large format tiles – Clanea adapts to any material and becomes an invisible part of the design.",
    link: "References"
  },
  {
    title: "Easy installation",
    description: "Compatible with Geberit and TECE cisterns. Sophisticated design for quick, effortless installation – perfect for new construction and renovation.",
    link: "Instructions"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-clanea-beige">
      <div className="container mx-auto px-6">
        <h3 className="font-serif text-3xl md:text-4xl mb-16 max-w-xl">
          What sets Clanea apart
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {features.map((feature, idx) => (
            <div key={idx} className="group cursor-default border-t border-clanea-border pt-8 hover:border-clanea-gold transition-colors duration-500">
              <h4 className="font-serif text-2xl mb-4 group-hover:text-clanea-gold transition-colors">{feature.title}</h4>
              <p className="text-clanea-gray leading-relaxed mb-6">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-clanea-dark hover:text-clanea-gold transition-colors">
                {feature.link}
                <ArrowUpRight className="ml-2 w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
