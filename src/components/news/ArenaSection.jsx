import { motion as Motion } from "framer-motion";

const ArenaSection = () => {
  return (
    <section className="relative bg-[#140808] border-y border-white/10 py-20 sm:py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <Motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic uppercase mb-6 leading-tight">The Arena</h2>

          <p className="text-gray-400 mb-6 text-sm sm:text-base">Inspired by Kyoto’s ancient spirit. Narrow alleys, blooming gardens.</p>

          <p className="text-red-600 text-xs uppercase tracking-[0.3em] font-bold">Kyoto District, Neo-Outlands</p>
        </Motion.div>

        <Motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:w-2/3 relative group">
          <div className="relative h-64 sm:h-80 lg:h-96 border border-white/10 overflow-hidden">
            <img src="/news/map.jpg" alt="Arena" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-1000" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent_70%)]"></div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ArenaSection;
