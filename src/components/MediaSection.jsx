import { motion } from 'framer-motion';

const MediaSection = () => {
  const videos = [
    {
      id: "yLP5kSUssLo",
      title: "A Visual Walk-Through",
      thumbnail: "https://img.youtube.com/vi/yLP5kSUssLo/hqdefault.jpg"
    },
    {
      id: "VdltLXf44OQ",
      title: "Trident Academy Techlabs",
      thumbnail: "https://img.youtube.com/vi/VdltLXf44OQ/hqdefault.jpg"
    }
  ];

  return (
    <section id="tour" className="py-24 bg-[#f8fafc]/50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pop font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4 flex-wrap mb-4 font-sans text-primary uppercase tracking-tight"
          >
            <span className="text-inst-green">Institutional</span>
            <span className="font-serif italic font-medium text-inst-yellow lowercase">Media</span>
          </motion.h2>
          <p className="text-[#665b55] max-w-xl mx-auto font-light">Take a visual journey through Trident Academy of Technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${vid.id}?autoplay=0`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 text-center bg-white border-t border-primary/5">
                <h4 className="text-xl font-bold font-sans text-accent tracking-widest uppercase group-hover:text-primary transition-colors">{vid.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
