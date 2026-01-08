
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-clanea-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-3xl mb-6 tracking-tighter uppercase">CLANEA<span className="text-clanea-gold">®</span></h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Precision Swiss engineering for the modern bathroom. We specialize in flush-mounted architectural solutions that blend seamlessly with any high-end surface.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-clanea-gold transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-clanea-gold transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-clanea-gold transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-clanea-gold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">PurePlate Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Architecture Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showrooms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnership Program</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-clanea-gold mb-8">Customer Care</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Installation Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-clanea-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-clanea-gold" />
                <span>CLANEA AG<br />Village Market 9<br />3065 Bolligen, Switzerland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-clanea-gold" />
                <a href="mailto:info@clanea.ch" className="hover:text-white transition-colors">info@clanea.ch</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
          <p>© 2024 Clanea. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
