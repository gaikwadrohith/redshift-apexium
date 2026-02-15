import { useState } from "react";
import { motion as Motion } from "framer-motion";

const levels = Array.from({ length: 10 }, (_, i) => i + 1);

const ProgressTracker = () => {
  const [activeLevel, setActiveLevel] = useState(2);

  return (
    <section
      className="relative py-20 sm:py-24 bg-black text-white overflow-hidden"
      style={{
        backgroundImage: "url('/battlepass/progress-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-400 mb-10 text-center sm:text-left"
        >
          Progress Tracker
        </Motion.h3>

        <div className="overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-6 min-w-max relative">
            <div className="absolute top-8 left-0 right-0 h-[2px] bg-white/10"></div>

            <Motion.div layout className="absolute top-8 left-0 h-[2px] bg-red-600" style={{ width: `${(activeLevel - 1) * 88}px` }} transition={{ type: "spring", stiffness: 120 }} />

            {levels.map((level, index) => (
              <Motion.div
                key={level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveLevel(level)}
                className="relative z-10 group cursor-pointer flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border transition-all duration-300
                  ${activeLevel === level ? "border-red-600 bg-red-600/20 shadow-lg shadow-red-600/40" : "border-white/10 bg-black hover:border-red-600"}`}
                >
                  <span
                    className={`text-xs sm:text-sm font-bold transition
                    ${activeLevel === level ? "text-red-500" : "text-gray-500 group-hover:text-white"}`}
                  >
                    {level}
                  </span>
                </div>

                <span
                  className={`mt-3 text-[10px] sm:text-xs uppercase tracking-widest transition
                  ${activeLevel === level ? "text-red-600" : "text-gray-600 group-hover:text-gray-300"}`}
                >
                  Level {level}
                </span>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
