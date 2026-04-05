import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1817] text-[#EFE7DF]/80 pt-24 pb-12 relative overflow-hidden font-sans border-t-4 border-inst-yellow">
      
      {/* Skewed Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/[0.02] -skew-x-12 translate-x-20 pointer-events-none"></div>
      
      {/* Subtle Background Logo Watermark */}
      <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] flex items-end justify-end">
        <img src="/logo.png" alt="" className="w-[400px] h-[400px] object-contain transform translate-y-16 translate-x-16" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Subscription block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-16 mb-24 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-inst-yellow"></div>
          
          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl md:text-4xl font-black text-white mb-6 leading-tight uppercase tracking-widest">
              Stay informed, <br/>stay <span className="text-inst-yellow">ahead.</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-light italic">
              Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-8 py-5 rounded-xl flex-grow outline-none focus:border-inst-yellow transition-all"
                />
                <button className="bg-inst-yellow hover:bg-[#c99535] text-[#1A1817] px-10 py-5 rounded-xl font-black text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 whitespace-nowrap group shadow-lg">
                  Subscribe 
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
             <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest italic opacity-50">No spam. Only updates that matter.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 mb-10 group">
              <img src="/logo.png" alt="TAT Logo" className="w-[64px] h-[64px] object-contain group-hover:scale-110 transition-transform" />
              <div className="h-12 w-[1px] bg-white/10 mx-2"></div>
              <div className="flex flex-col justify-center">
                <div className="font-serif text-[28px] text-white leading-none font-black uppercase tracking-wider">Trident</div>
                <div className="text-[10px] font-bold text-[#8B6E66] tracking-[.3em] uppercase mt-2">Academy of Technology</div>
              </div>
            </div>
            
            <p className="text-gray-400 text-[16px] leading-[1.8] mb-10 font-light opacity-90 cursor-default">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 text-gray-400 group cursor-default">
                <MapPin className="text-primary mt-1" size={20} />
                <div className="text-sm font-medium leading-relaxed uppercase tracking-widest text-[0.8em]">F2/A, Chandaka Industrial Estate,<br/>In front of Infocity, Bhubaneswar,<br/>Odisha, Pin: 751024, India</div>
              </div>
              <a href="tel:+919861191195" className="flex items-center gap-4 hover:text-white transition-colors group">
                <Phone className="text-primary" size={20} />
                <div className="text-sm font-bold uppercase tracking-widest text-[0.8em]">+91 98611 91195</div>
              </a>
              <a href="mailto:info@trident.ac.in" className="flex items-center gap-4 hover:text-white transition-colors group">
                <Mail className="text-primary" size={20} />
                <div className="text-sm font-bold uppercase tracking-widest text-[0.8em]">info@trident.ac.in</div>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Academics",
                links: ["Undergraduate Studies", "Postgraduate Studies", "Doctoral Programs", "Research Centers", "Academic Calendar"]
              },
              {
                title: "Campus Life",
                links: ["Student Hostels", "Clubs & Societies", "Sports & Recreation", "Health & Wellness", "Campus Safety"]
              },
              {
                title: "Resources",
                links: ["Admissions Portal", "Alumni Network", "Career Placements", "NIRF Data", "Tenders & Notices"]
              }
            ].map((col, idx) => (
              <div key={idx}>
                <div className="relative mb-10 overflow-hidden">
                   <div className="absolute -left-4 top-0 w-8 h-8 bg-[#8B6E66]/10 -skew-x-12"></div>
                   <h5 className="font-serif text-white font-black text-[15px] uppercase tracking-[0.2em] relative z-10">{col.title}</h5>
                </div>
                <ul className="space-y-5 list-none p-0 m-0">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-[14px] font-bold text-gray-500 hover:text-inst-yellow transition-all flex items-center gap-3 group uppercase tracking-widest text-[0.8em]">
                        <span className="w-0 h-[1px] bg-inst-yellow group-hover:w-4 transition-all duration-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <span className="text-[10px] font-black uppercase tracking-[.25em] text-gray-600">
              © 2026 Trident Academy of Technology. All rights reserved.
            </span>
            <div className="flex gap-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest italic opacity-50">
                 <a href="#" className="hover:text-inst-yellow transition-colors">Privacy Policy</a>
                 <a href="#" className="hover:text-inst-yellow transition-colors">Disclaimer</a>
                 <a href="#" className="hover:text-inst-yellow transition-colors">Terms of Use</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <span className="text-[10px] font-black uppercase tracking-[.25em] text-gray-600 italic">
              Crafted with Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
