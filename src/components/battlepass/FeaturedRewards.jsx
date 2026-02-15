import { motion as Motion } from "framer-motion";

const FeaturedRewards = () => {
  return (
    <section className="relative bg-black py-20 sm:py-24 text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12"
        >
          <div>
            <p className="text-red-600 text-xs uppercase tracking-[0.3em] mb-3">High Tier Rewards</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic leading-tight">Ronin's Arsenal</h2>
          </div>

          <button className="text-xs sm:text-sm uppercase tracking-widest hover:text-red-600 transition">View All Rewards</button>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden border border-white/10"
          >
            <img
              src="/battlepass/reward-left.jpg"
              alt="Cursed Muramasa"
              className="w-full h-[380px] sm:h-[420px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

            <div className="absolute bottom-0 p-6 w-full">
              <p className="text-red-600 text-xs uppercase tracking-[0.3em] mb-2">Reactive Skin</p>
              <h3 className="text-xl sm:text-2xl font-bold uppercase">Cursed Muramasa</h3>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden border border-white/10"
          >
            <img
              src="/battlepass/reward-right.jpg"
              alt="Shadow Oni Set"
              className="w-full h-[380px] sm:h-[420px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

            <div className="absolute bottom-0 p-6 w-full">
              <p className="text-red-600 text-xs uppercase tracking-[0.3em] mb-2">Premium Legend</p>
              <h3 className="text-xl sm:text-2xl font-bold uppercase">Shadow Oni Set</h3>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRewards;
