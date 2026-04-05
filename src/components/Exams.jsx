import { motion } from 'framer-motion';

const Exams = () => {
  return (
    <section id="exams" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pop font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Important
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4 flex-wrap mb-4 font-sans text-primary"
          >
            <span className="bg-inst-blue text-white px-6 py-2 rounded-lg uppercase text-[0.8em]">Mandatory</span>
            <span className="font-serif italic font-medium text-inst-yellow">Examinations</span>
          </motion.h2>
          <p className="text-[#665b55] max-w-xl mx-auto font-light">Admission to our programs is strictly through recognized entrance exams.</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
          {[
            {
              icon: "📝",
              title: "JEE Main",
              items: ["1st Year B.Tech", "1st Year Integrated 5 Years M.Tech"]
            },
            {
              icon: "🎓",
              title: "OJEE",
              items: ["Lateral Entry B.Tech (Diploma & B.Sc.)", "M.Tech", "MCA", "MBA"]
            }
          ].map((exam, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 min-w-[300px] bg-inst-pink/30 p-12 rounded-3xl border border-primary/20 text-center hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{exam.icon}</div>
              <h3 className="text-3xl font-serif font-medium text-accent mb-6 leading-tight uppercase tracking-widest">{exam.title}</h3>
              <p className="text-sm font-bold text-primary italic uppercase tracking-widest mb-4">Mandatory for admission into:</p>
              <ul className="space-y-4">
                {exam.items.map((item, i) => (
                  <li key={i} className="text-[#665b55] font-sans font-medium text-lg leading-relaxed flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exams;
