import { motion } from 'framer-motion';

const StoryBanner = ({ image, title, text, reversed = false }) => {
  const isRight = reversed;

  return (
    <section className="relative h-[500px] flex items-center overflow-hidden w-full group">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className={`absolute inset-0 bg-gradient-to-r ${isRight ? 'from-transparent to-accent/90' : 'from-accent/90 to-transparent'} z-10`} />
      
      <div className={`container relative z-20 flex ${isRight ? 'justify-end text-right' : 'justify-start'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isRight ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <h2 className="text-5xl font-serif font-medium mb-6">{title}</h2>
          <p className="text-lg font-sans font-light leading-relaxed opacity-90">{text}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryBanner;
