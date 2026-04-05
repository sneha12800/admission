import { motion } from 'framer-motion';
import { Download, Phone, Mail, MapPin, Send } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section id="downloads" className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Downloads Pane */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold flex items-center gap-4 flex-wrap mb-4 font-sans text-primary">
                <span className="bg-inst-blue text-white px-6 py-2 rounded-lg uppercase text-[0.8em]">Official</span>
                <span className="font-serif italic font-medium text-inst-yellow">Resources</span>
              </h2>
              <p className="text-[#665b55] text-lg font-light leading-relaxed">Download official admission brochures and required forms.</p>
            </motion.div>

            <div className="space-y-4">
              {[
                { title: "Admission Brochure 2024", size: "PDF, 2.4 MB" },
                { title: "Admission Guidelines", size: "PDF, 1.1 MB" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 md:p-8 bg-inst-pink/20 border border-primary/5 rounded-2xl hover:border-primary/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Download size={32} />
                  </div>
                  <div className="flex-grow">
                    <span className="block text-xl font-bold font-sans text-accent tracking-widest uppercase group-hover:text-primary transition-colors">{item.title}</span>
                    <span className="text-sm font-medium text-primary uppercase tracking-[.2em]">{item.size}</span>
                  </div>
                  <div className="text-2xl font-black text-primary opacity-20 group-hover:opacity-100 transition-opacity">↓</div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact / Inquiry Pane */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent p-8 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
              <h2 className="text-3xl md:text-4xl font-extrabold flex items-center flex-wrap gap-x-4 mb-6 relative z-10">
                <span className="bg-white text-primary px-5 py-1.5 rounded-lg uppercase text-[0.7em]">Admission</span>
                <span className="font-serif italic font-medium text-inst-yellow">Inquiry</span>
              </h2>
              <p className="text-white/80 font-light mb-10 leading-relaxed">Fill out the form below or reach out to our admission team for immediate assistance.</p>

              <form className="space-y-4 relative z-10">
                <input type="text" placeholder="Name (required)" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 focus:border-inst-yellow outline-none transition-all" required />
                <input type="tel" placeholder="Mobile Number (required)" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 focus:border-inst-yellow outline-none transition-all" required />
                <input type="email" placeholder="Email (required)" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 focus:border-inst-yellow outline-none transition-all" required />
                <textarea placeholder="Query details" rows="3" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl placeholder-white/30 focus:border-inst-yellow outline-none transition-all"></textarea>
                <button type="submit" className="w-full py-4 bg-primary hover:bg-inst-blue text-white rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors">
                  Submit Query <Send size={18} />
                </button>
              </form>

              <div className="mt-12 space-y-4 border-t border-white/10 pt-10">
                {[
                  { name: "Mr. Tushar Ranjan Panda", role: "Head of Admissions", initial: "T" },
                  { name: "Mr. Rudra Pratap Mohanty", role: "Admissions (Jharkhand)", initial: "R" }
                ].map((agent, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">{agent.initial}</div>
                    <div className="flex-grow">
                      <span className="block font-bold text-sm tracking-widest uppercase">{agent.name}</span>
                      <span className="text-[11px] font-medium text-white/50 uppercase tracking-[.2em]">{agent.role}</span>
                    </div>
                    <a href="tel:+919776462430" className="px-5 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all">Contact</a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
