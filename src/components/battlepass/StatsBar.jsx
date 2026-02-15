import { motion as Motion } from "framer-motion";

const StatsBar = () => {
  const stats = [
    { label: "Total Rewards", value: "100+" },
    { label: "Apex Coins", value: "1,200" },
    { label: "Crafting Metals", value: "2,400" },
    { label: "Legendary Items", value: "5" },
  ];

  return (
    <section className="relative border-y border-white/10 bg-black py-10 sm:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {stats.map((stat, index) => (
          <Motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">{stat.label}</p>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-black italic text-red-600 group-hover:scale-110 transition duration-300">{stat.value}</p>

            <div className="w-8 h-[2px] bg-red-600 mx-auto md:mx-0 mt-4 group-hover:w-16 transition-all duration-500"></div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
