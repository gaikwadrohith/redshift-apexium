import { motion as Motion } from "framer-motion";

const WarriorPath = () => {
  const items = [
    {
      title: "The Stance",
      desc: "Master traditional defensive postures to deflect incoming fire.",
    },
    {
      title: "The Blade",
      desc: "Unleash devastating close-quarters melee strikes.",
    },
    {
      title: "The Spirit",
      desc: "Harness ancestral energy to reveal hidden enemies.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-28 bg-gradient-to-b from-[#140606] to-black text-white border-t border-red-600/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,17,17,0.18),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 sm:mb-20"
        >
          <div>
            <span className="text-red-600 uppercase text-xs tracking-[0.4em] block mb-4">Gameplay Mechanics</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic leading-tight">The Path of the Warrior</h2>
          </div>

          <span className="hidden md:block text-red-600 text-5xl lg:text-6xl opacity-50 writing-mode-vertical-rl">剣術</span>
        </Motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-black/70 backdrop-blur-md border border-white/5 p-8 sm:p-10 hover:border-red-600 transition duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(212,17,17,0.3),transparent_70%)]"></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-6 tracking-wide">{item.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">{item.desc}</p>

                <div className="w-12 h-1 bg-red-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarriorPath;