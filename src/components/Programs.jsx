import { motion } from 'framer-motion';

const programData = [
  {
    title: "B.Tech (1st Year)",
    description: "4-Year Undergraduate Engineering Program.",
    tags: ["Biotechnology", "Civil", "CSE", "CSE (AI & ML)", "CSE (Data Science)", "ETC", "EE (VLSI)", "EEE", "Mechanical"]
  },
  {
    title: "Integrated M.Tech (5 Years)",
    description: "5-Year dual degree program.",
    tags: ["Biotechnology", "Computer Science & Engineering"]
  },
  {
    title: "M.Tech",
    description: "Postgraduate programs in advanced engineering.",
    tags: ["CSE", "ETC", "CSE (AI & ML)", "Data Science", "EE (VLSI)", "EV Technology", "Energy & Env.", "Environmental", "Industrial Safety", "Structural"]
  },
  {
    title: "MCA",
    description: "Master of Computer Applications focusing on advanced computing logic and application development.",
    tags: ["MCA"]
  },
  {
    title: "MBA",
    description: "Master of Business Administration designing the next generation of business leaders.",
    tags: ["MBA"]
  },
  {
    title: "Diploma in Engineering",
    description: "Foundational engineering programs in Civil, Electrical, and Mechanical disciplines.",
    tags: ["Civil", "Electrical", "Mechanical"]
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-inst-blue text-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-inst-yellow font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Academics
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4 flex-wrap mb-4 uppercase tracking-tight"
          >
            <span className="text-white">Academic</span>
            <span className="font-serif italic font-medium text-inst-yellow lowercase">Programs</span>
          </motion.h2>
          <p className="text-white/70 max-w-2xl mx-auto font-light">Discover our comprehensive range of undergraduate and postgraduate degree programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              <h3 className="text-2xl font-serif font-medium mb-4 text-white">{program.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">{program.description}</p>
              <div className="flex flex-wrap gap-2">
                {program.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
