import { motion as Motion } from "framer-motion";

const SeasonHero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-black text-white overflow-hidden border-t border-red-600/30">
      <div className="absolute inset-0">
        <img src="/seasons/samurai.jpg" alt="Samurai" className="w-full h-full object-cover grayscale brightness-110 scale-105" />
      </div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.35),transparent_65%)]"></div>

      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 text-red-600 text-xs tracking-[0.6em] opacity-50 writing-mode-vertical-rl">武士道</div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-red-600 text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 font-bold">
          Season 22: Ronin's Vengeance
        </Motion.h3>

        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic uppercase tracking-tight leading-tight"
        >
          Honor is <span className="text-red-600">Earned</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-300 mt-8 leading-relaxed text-sm sm:text-base"
        >
          Experience the ultimate fusion of futuristic combat and ancient tradition. Rise as a legend in the new frontier of the Outlands.
        </Motion.p>

        <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <button className="px-10 py-4 bg-red-600 hover:bg-red-700 transition font-bold uppercase tracking-widest text-sm shadow-lg">Preorder Now</button>

          <button className="px-10 py-4 border border-white/20 hover:border-red-600 transition font-bold uppercase tracking-widest text-sm">Watch Trailer</button>
        </Motion.div>
      </div>
    </section>
  );
};

export default SeasonHero;
