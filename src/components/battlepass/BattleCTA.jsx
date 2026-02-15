import { motion as Motion } from "framer-motion";

const BattleCTA = () => {
  return (
    <section className="relative bg-black py-24 sm:py-28 text-center text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_70%)]"></div>

      <div className="relative max-w-3xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 mx-auto mb-8 flex items-center justify-center shadow-lg shadow-red-600/40"
        >
          <span className="text-white text-lg font-bold">⚔</span>
        </Motion.div>

        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic mb-6 leading-tight"
        >
          Honor Your Destiny
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base mb-10 max-w-xl mx-auto"
        >
          Purchase the Season Battle Pass and unlock exclusive rewards.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 sm:px-10 py-4 bg-red-600 hover:bg-red-700 transition uppercase tracking-widest font-bold text-sm sm:text-base shadow-lg">Purchase Now</button>

          <button className="px-8 sm:px-10 py-4 border border-white/20 hover:border-red-600 transition uppercase tracking-widest font-bold text-sm sm:text-base">Compare Tiers</button>
        </Motion.div>
      </div>
    </section>
  );
};

export default BattleCTA;