import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="py-24 md:py-32 relative">
      <div className="container relative z-10 glass-panel p-16 md:p-24 rounded-[40px] text-center border-white/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="block font-sans text-sm font-bold uppercase tracking-widest text-[#E63946] mb-4">Welcome</span>
          <h2 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4 flex-wrap mb-10 text-inst-blue uppercase tracking-tight">
            <span className="text-inst-green">Institutional</span>
            <span className="font-serif italic font-medium text-inst-yellow lowercase">Overview</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-[#2C1E16]/80 font-light italic">
            We are excited to guide you through your application. At Trident Academy of Technology, 
            we foster a transformative academic environment. Join a vibrant community committed 
            to innovation, leadership, and uncompromised academic rigor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
