import { motion } from 'framer-motion';

const Eligibility = () => {
  return (
    <section id="eligibility" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4 flex-wrap mb-4 font-sans text-primary uppercase tracking-tight"
          >
            <span className="text-inst-blue">Admissions</span>
            <span className="font-serif italic font-medium text-inst-yellow lowercase">Eligibility</span>
          </motion.h2>
          <p className="text-accent underline-offset-8">Find the specific requirements for your chosen program before you apply.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "B.Tech & Integrated M.Tech (1st Year)",
              items: [
                "Passed 10+2 Science examination with Physics and Mathematics as compulsory subjects.",
                "Chemistry/Biotechnology/Biology/Technical Vocational as optional subjects.",
                "*For Biotechnology, Mathematics is optional; Biology/Biotechnology is required.",
                "Minimum 45% marks (40% for reserved category).",
                "Must appear for JEE-Main conducted by CBSE."
              ]
            },
            {
              title: "Lateral Entry (2nd Year)",
              items: [
                "Diploma Holders: Passed 3-year diploma in Engineering/Technology with min 45% (40% for SC/ST).",
                "B.Sc / +3 Sc Students: Passed 3-year Bachelor's Degree in Science with min 45% and passed XII with Mathematics.",
                "Must appear for O-JEE."
              ]
            },
            {
              title: "PG Programs (M.Tech, MCA, MBA)",
              items: [
                "M.Tech: B.Tech/M.Sc in relevant field with min 50% (45% for SC/ST).",
                "MCA/MBA: Bachelor's Degree (min 3 years) with min 50% (45% for SC/ST).",
                "MCA requires Mathematics at 10+2 or Graduate level.",
                "*There is no age limit for admission to MCA or MBA courses.",
                "Must appear for O-JEE."
              ]
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 rounded-2xl border-t-8 border-inst-blue shadow-xl hover:translate-y-[-5px] transition-transform duration-300 h-full border-white/40"
            >
              <h4 className="text-xl font-bold font-sans text-accent mb-6 leading-tight">{card.title}</h4>
              <ul className="space-y-4">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#665b55] leading-relaxed">
                    <span className="text-primary font-bold">→</span>
                    <span>{item}</span>
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

export default Eligibility;
