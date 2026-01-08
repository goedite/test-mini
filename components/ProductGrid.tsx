
import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'r',
    name: 'PurePlate R',
    price: '280.00 EUR',
    description: 'The perfect combination of functionality and aesthetic design that transforms your bathroom into a stylish oasis.',
    image: 'https://picsum.photos/id/20/800/800'
  },
  {
    id: 's',
    name: 'PurePlate S',
    price: '280.00 EUR',
    description: 'A sleek, slender design for minimalist environments where space and clean lines are of the essence.',
    image: 'https://picsum.photos/id/21/800/800'
  },
  {
    id: 'l',
    name: 'PurePlate L',
    price: '280.00 EUR',
    description: 'Generous dimensions for a bold statement in architectural bathroom design. Engineered for excellence.',
    image: 'https://picsum.photos/id/22/800/800'
  }
];

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
        <div>
          <span className="text-clanea-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">PurePlate</span>
          <h2 className="font-serif text-4xl md:text-5xl">The products</h2>
        </div>
        <button className="mt-4 md:mt-0 text-xs uppercase tracking-widest border-b border-clanea-dark pb-1 hover:text-clanea-gold hover:border-clanea-gold transition-all">View All Products</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group bg-clanea-beige">
            <div className="relative aspect-square overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-clanea-dark/0 group-hover:bg-clanea-dark/5 transition-all"></div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-serif text-xl">{product.name}</h3>
                <span className="text-sm font-medium">{product.price}</span>
              </div>
              <p className="text-clanea-gray text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <button className="w-full py-3 border border-clanea-dark uppercase tracking-widest text-[10px] font-bold hover:bg-clanea-dark hover:text-white transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
