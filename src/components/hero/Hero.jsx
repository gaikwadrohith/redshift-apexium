import { motion as Motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center">
      <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-red-600 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-start mb-12 lg:mb-0"
        >
          <div className="relative group">
            <Motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-red-600 rounded-full blur-3xl"
            ></Motion.div>

            <Motion.img src="/hero.png" alt="Main Character" animate={{ y: [0, 0, 0] }} className="relative w-[280px] sm:w-[350px] lg:w-[420px] object-contain z-10 rounded-3xl cursor-pointer" />

            {/* <button className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50"
              >
                <FaPlay className="text-white text-lg ml-1" />
              </Motion.div>
            </button> */}
          </div>
        </Motion.div>

        <Motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="flex-1 text-center lg:text-left">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-wider uppercase leading-tight">
            Rise from the <span className="text-red-600">ashes to fight back</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg mx-auto lg:mx-0">Experience an immersive warrior saga built for modern battle arenas. Command strength, precision and legacy.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Motion.button
              onClick={() => navigate("/legends")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 transition duration-300 rounded-full font-semibold shadow-lg shadow-red-600/20"
            >
              Enter Now
            </Motion.button>

            <Motion.button
              whileHover={{ scale: 1.05, borderColor: "#dc2626" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-600 transition duration-300 rounded-full font-semibold"
            >
              Watch Trailer
            </Motion.button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
