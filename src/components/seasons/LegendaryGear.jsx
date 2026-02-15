import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const gear = [
  { title: "Blood Moon Oni", type: "Mythic Skin", img: "/seasons/gear1.jpg" },
  { title: "The Unbroken Blade", type: "Heirloom", img: "/seasons/gear2.jpg" },
  { title: "Shadow Shogun", type: "Legendary Skin", img: "/seasons/gear3.jpg" },
  { title: "Gateway of Death", type: "Weapon Charm", img: "/seasons/gear4.jpg" },
];

const LegendaryGear = () => {
  return (
    <section className="relative py-24 sm:py-28 bg-gradient-to-b from-black to-[#0b0000] text-white border-t border-red-600/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,17,17,0.18),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic mb-6 tracking-tight">Legendary Gear</h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">Custom-forged armor and weapons inspired by the Edo period. Precision. Power. Prestige.</p>
        </Motion.div>

        <Motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {gear.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] border border-white/10 overflow-hidden transition duration-500 hover:border-red-600 bg-black/70"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(212,17,17,0.3),transparent_70%)]"></div>

              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700 opacity-70 group-hover:opacity-100"
              />

              <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-red-600 text-xs uppercase tracking-[0.3em] block mb-2">{item.type}</span>

                <h4 className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-wide">{item.title}</h4>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-center mt-14 sm:mt-16">
          <Link
            to="/battlepass"
            className="inline-block px-12 sm:px-14 py-4 bg-red-600/20 border border-red-600 hover:bg-red-600 hover:text-black transition duration-300 uppercase tracking-widest font-bold text-xs sm:text-sm"
          >
            View Battle Pass
          </Link>
        </Motion.div>
      </div>
    </section>
  );
};

export default LegendaryGear;
