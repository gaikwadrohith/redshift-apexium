import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-900 py-24 sm:py-28 border-t border-red-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest mb-4"
        >
          戦場を支配せよ
        </Motion.h2>

        <Motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tight mb-6"
        >
          Master The Arena
        </Motion.h3>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          A new legend awakens in the shadows of the arena. Will you answer the call?
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <button
            onClick={() => navigate("/seasons")}
            className="px-10 py-4 bg-black text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition duration-300 shadow-xl"
          >
            View Seasons
          </button>

          <button className="px-10 py-4 bg-white text-red-700 border border-white uppercase tracking-widest text-sm font-bold hover:bg-black hover:text-white hover:border-white transition duration-300 shadow-xl">
            Download Now
          </button>
        </Motion.div>
      </div>
    </section>
  );
};

export default CTA;
