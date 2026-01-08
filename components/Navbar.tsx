
import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-clanea-beige py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Menu className="w-6 h-6" />
        </div>

        {/* Links Left */}
        <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-clanea-gold transition-colors">Home</a>
          <a href="#products" className="hover:text-clanea-gold transition-colors">Products</a>
          <a href="#" className="hover:text-clanea-gold transition-colors">For Businesses</a>
        </div>

        {/* Logo */}
        <div className="text-center">
          <h1 className={`font-serif text-3xl tracking-tighter transition-all duration-500 ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}>
            CLANEA<span className="text-clanea-gold">®</span>
          </h1>
        </div>

        {/* Links/Icons Right */}
        <div className="flex items-center space-x-6 text-clanea-dark">
          <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-medium mr-4">
            <a href="#" className="hover:text-clanea-gold transition-colors">About</a>
            <a href="#" className="hover:text-clanea-gold transition-colors">Contact</a>
          </div>
          <Search className="w-5 h-5 cursor-pointer hover:text-clanea-gold transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-clanea-gold transition-colors" />
          <div className="relative cursor-pointer group">
            <ShoppingBag className="w-5 h-5 group-hover:text-clanea-gold transition-colors" />
            <span className="absolute -top-1 -right-1 bg-clanea-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
