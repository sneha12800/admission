import React, { useState, useEffect } from 'react';
import { Menu, X, Users } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      {/* 1. UTILITY BAR (The blue top bar in your image) */}
      <div className={cn(
        "bg-[#253386] border-b border-white/10 transition-all duration-500 overflow-hidden",
        isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2.5 opacity-100"
      )}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-[11px] font-bold text-white/80 tracking-widest uppercase">
          <span>
            Affiliated to BPUT <span className="mx-2 text-[#FBB03B]">|</span> NAAC 'A' Accredited
          </span>
          <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Users size={12} />
            Alumni
          </a>
        </div>
      </div>

      {/* 2. MAIN HEADER (Logo and Navigation) */}
      <header className={cn("bg-white transition-all duration-500", isScrolled ? "py-3 shadow-lg" : "py-5")}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO WORDMARK */}
          <a href="/" className="flex items-center gap-3.5 group">
            <img src="https://admissions-tat-tekkzy.netlify.app/logo.png" alt="Logo" className="w-[52px] h-[52px]" />
            <div className="hidden sm:flex flex-col">
              <div className="font-serif text-[24px] font-black text-[#3E3A36] tracking-wider uppercase leading-none">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#1B4D8E] to-transparent my-1" />
              <div className="text-[10px] font-bold text-[#1B4D8E] tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </a>

          {/* NAVIGATION LINKS */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={cn(
                    "text-[13px] font-black uppercase tracking-[0.18em] py-1 transition-all",
                    // ACTIVE STATE (Underline shown in your image)
                    link.name === 'Admissions' 
                      ? "text-[#253386] border-b-[4px] border-[#253386]" 
                      : "text-[#3E3A36] hover:text-[#253386]"
                  )}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA BUTTON */}
          <a href="https://apply-now.tekkzy.com/" className="bg-[#E63946] hover:bg-[#c92f3a] text-white text-[12px] font-bold px-7 py-3 rounded uppercase transition-colors">
            Apply Now
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
