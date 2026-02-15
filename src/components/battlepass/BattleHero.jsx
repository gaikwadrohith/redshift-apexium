import { motion as Motion } from "framer-motion";

const BattleHero = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen bg-black text-white overflow-hidden flex items-end">
      <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/battlepass/hero.jpg')" }}></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pb-16 sm:pb-20 w-full">
        <div className="max-w-3xl">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border-l-4 border-red-600 bg-red-600/20 px-4 py-1 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Live Now</span>
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight tracking-tight"
          >
            Chapter 20:
            <br />
            <span className="text-red-600">Bushido</span>
          </Motion.h1>

          <Motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base">
            Master the blade with 100+ exclusive rewards including Cursed Katana skins and legendary longbows.
          </Motion.p>

          <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="px-8 sm:px-10 py-4 bg-red-600 hover:bg-red-700 transition font-bold uppercase tracking-widest text-sm sm:text-base shadow-lg">Get the Battle Pass</button>

            <button className="px-8 sm:px-10 py-4 border border-white/20 hover:border-red-600 transition font-bold uppercase tracking-widest text-sm sm:text-base">Watch Trailer</button>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default BattleHero;
