import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Check Eligibility",
      text: "Review the specific academic requirements for your desired program.",
      className: "md:col-span-2 md:row-span-2 bg-inst-blue text-white"
    },
    {
      num: "02",
      title: "Entrance Exam",
      text: "Appear for JEE Main for B.Tech or OJEE.",
      className: "md:col-span-1 md:row-span-1 bg-inst-green/90 text-white"
    },
    {
      num: "03",
      title: "Merit Evaluation",
      text: "Evaluation based on your entrance test performance and records.",
      className: "md:col-span-1 md:row-span-1 bg-inst-yellow text-inst-blue"
    },
    {
      num: "04",
      title: "Confirmation",
      text: "Secure admission by completing documentation and fee payment.",
      className: "md:col-span-2 md:row-span-1 bg-inst-blue/90 text-white"
    },
    {
      num: "05",
      title: "Counseling Support",
      text: "Receive comprehensive guidance and support before classes officially begin.",
      className: "md:col-span-4 md:row-span-1 bg-inst-green/90 text-white"
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pop font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Your Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4 flex-wrap mb-4 font-sans text-primary uppercase tracking-tight"
          >
            <span className="text-inst-green">Enrolment</span>
            <span className="font-serif italic font-medium text-inst-yellow lowercase">Process</span>
          </motion.h2>
          <p className="text-[#665b55] max-w-xl mx-auto font-light">A seamless 5-step journey from application to enrollment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl flex flex-col justify-end relative overflow-hidden group shadow-lg backdrop-blur-xl border border-white/20 ${step.className}`}
            >
              <span className="absolute top-8 left-8 text-6xl md:text-8xl font-serif font-black opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                {step.num}
              </span>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold font-sans mb-3 group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-widest leading-none">
                  {step.title}
                </h4>
                <p className="text-sm font-light leading-relaxed opacity-80">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
