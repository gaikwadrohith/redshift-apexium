import { motion as Motion } from "framer-motion";

const NewsHero = () => {
  return (
    <section className="relative min-h-[85vh] lg:h-screen flex items-end overflow-hidden border-b border-red-600/20">
      <div className="absolute inset-0">
        <img src="/news/hero.jpg" alt="Japanese Landscape" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 sm:pb-24 w-full">
        <Motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-red-600 text-white text-[10px] sm:text-xs px-3 py-1 uppercase tracking-[0.3em] font-bold">Featured Event</span>

            <span className="text-gray-400 text-[10px] sm:text-sm uppercase tracking-[0.3em]">Season 12 Chronicles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight uppercase text-white">
            The Way of <br />
            <span className="text-red-600">The Blade</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl text-sm sm:text-base lg:text-lg">Walk the path of the Ronin. Master the steel, embrace the shadows.</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-red-600 px-8 py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-red-700 transition shadow-lg">Read The Chronicle</button>

            <button className="border border-white/20 px-8 py-4 uppercase tracking-widest text-xs sm:text-sm text-red-200 hover:border-red-600 hover:text-white transition">Watch Trailer</button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default NewsHero;