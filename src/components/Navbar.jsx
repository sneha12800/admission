import React, { useState, useEffect } from 'react';
import { Menu, X, Users } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'https://about-tat.tekkzy.com/' },
    { name: 'Admissions', href: 'https://admissions-tat.tekkzy.com/' },
    { name: 'Academics', href: 'https://academics-tat.tekkzy.com/' },
    { name: 'Research', href: 'https://research-tat.tekkzy.com/' },
    { name: 'Campus Life', href: 'https://campuslife-tat.tekkzy.com/' },
    { name: 'Activities', href: 'https://activities-tat.tekkzy.com/' },
    { name: 'Contact Us', href: 'https://contactus-tat.tekkzy.com/' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[1050]">
      {/* 1. UTILITY BAR */}
      <div className={cn(
        "bg-[#253386] border-b border-white/10 transition-all duration-500 overflow-hidden",
        isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2.5 opacity-100"
      )}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-[11px] font-bold text-white/80 tracking-widest uppercase">
          <span className="truncate">
            Affiliated to BPUT <span className="mx-2 text-[#FBB03B]">|</span> NAAC 'A' Accredited
          </span>
          <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Users size={12} />
            Alumni
          </a>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className={cn("bg-white transition-all duration-500 relative z-50", isScrolled ? "py-3 shadow-lg" : "py-5")}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO WORDMARK */}
          <a href="/" className="flex items-center gap-3.5 group">
            <img src="https://admissions-tat-tekkzy.netlify.app/logo.png" alt="Logo" className="w-[52px] h-[52px] object-contain" />
            <div className="hidden lg:flex flex-col">
              <div className="font-serif text-[24px] font-black text-[#1E293B] tracking-wider uppercase leading-none">Trident</div>
              <div className="w-full h-[1.5px] bg-[#1B4D8E] my-1" />
              <div className="text-[10px] font-bold text-[#1B4D8E] tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={cn(
                    "relative text-[14px] font-extrabold uppercase tracking-[0.14em] py-2 transition-all duration-300",
                    link.name === 'Admissions' 
                      ? "text-[#253386] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#253386]" 
                      : "text-[#1E293B] hover:text-[#253386]"
                  )}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA & MOBILE MENU BUTTON */}
          <div className="flex items-center gap-4">
            <a href="https://apply-now.tekkzy.com/" className="hidden sm:block bg-[#E63946] hover:bg-[#c92f3a] text-white text-[12px] font-bold px-7 py-3 rounded uppercase transition-all duration-300 shadow-sm hover:shadow-md">
              Apply Now
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#253386] hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ease-in-out transform",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="flex flex-col h-full pt-32 px-8 pb-10">
          <nav className="flex-1">
            <ul className="space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={cn(
                      "text-2xl font-black uppercase tracking-wider transition-all",
                      link.name === 'Admissions' ? "text-[#253386]" : "text-[#1E293B]"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto">
            <a 
              href="https://apply-now.tekkzy.com/" 
              className="block w-full text-center bg-[#E63946] text-white font-bold py-4 rounded-lg uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
