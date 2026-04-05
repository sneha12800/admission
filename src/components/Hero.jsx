import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-b-[40px] m-5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
        style={{ backgroundImage: 'url("https://trident-assets-bucket.s3.us-east-2.amazonaws.com/academics.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/30 z-10" />
      </div>

      <div className="container relative z-20 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 drop-shadow-lg leading-tight">
            Admissions
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed mb-10 text-white/90">
            Embark on a journey of excellence. Discover our premium B.Tech, M.Tech, MCA, 
            and MBA programs designed to shape the next generation of global leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#process" 
              className="px-10 py-4 bg-primary text-white rounded-full uppercase tracking-widest font-semibold hover:bg-accent transition-all shadow-lg hover:-translate-y-1"
            >
              Apply Now
            </a>
            <a 
              href="#downloads" 
              className="px-10 py-4 border border-white/50 text-white rounded-full uppercase tracking-widest font-semibold hover:bg-white hover:text-accent transition-all"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
