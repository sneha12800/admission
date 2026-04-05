import { useState, useEffect } from 'react';
import { Menu, X, UserCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'https://tat.tekkzy.com/#about' },
    { name: 'Admissions', href: '#overview' },
    { name: 'Academics', href: 'https://tat.tekkzy.com/#academics' },
    { name: 'Research', href: 'https://tat.tekkzy.com/#research' },
    { name: 'Campus Life', href: 'https://tat.tekkzy.com/#campus-life' },
    { name: 'Activities', href: 'https://tat.tekkzy.com/#activities' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}>
      {/* Utility Bar */}
      <div className={`bg-primary border-b border-primary/20 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0' : 'max-h-20 py-2.5 hidden lg:block'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white/80">
          <span className="text-[11px] font-semibold tracking-widest uppercase">
            Affiliated to BPUT | NAAC 'A' Accredited
          </span>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <UserCheck size={12} />
              Alumni
            </a>
          </div>
        </div>
      </div>

      <header className={`relative transition-all duration-500 bg-white ${isScrolled ? 'py-3 shadow-lg' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="TAT Logo" className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain flex-shrink-0" />
            <div className="hidden sm:flex flex-col">
              <div className="font-serif text-[22px] md:text-[24px] font-black text-[#3E3A36] leading-none uppercase tracking-wide">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-primary to-transparent my-1"></div>
              <div className="text-[9px] md:text-[10px] font-semibold text-primary tracking-[.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[13px] uppercase tracking-[0.12em] font-extrabold text-[#3E3A36] hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href="/apply" className="bg-pop hover:bg-accent text-white transition-all text-[11px] font-bold px-7 py-3 rounded-full uppercase tracking-widest">Apply Now</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-primary p-2 bg-[#F8FAFC] rounded-lg relative z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[100vh] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-6 flex flex-col gap-4 pb-8">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3.5 text-[15px] font-extrabold text-[#3E3A36] uppercase tracking-[0.14em] border-b border-primary/10 transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className={`pt-4 transition-all duration-700 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a href="/apply" className="bg-pop text-center block text-white text-[13px] font-extrabold py-4 rounded-xl shadow-xl">START APPLICATION</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
