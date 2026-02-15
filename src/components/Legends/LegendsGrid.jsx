import { motion as Motion, AnimatePresence } from "framer-motion";

const legends = [
  { name: "Wraith", role: "Skirmisher", image: "/legends/FirstHero.png" },
  { name: "Bloodhound", role: "Recon", image: "/legends/secHero.png" },
  { name: "Pathfinder", role: "Skirmisher", image: "/legends/TrdHero.png" },
  { name: "Gibraltar", role: "Support", image: "/legends/FrtHero.png" },
  { name: "Lifeline", role: "Support", image: "/legends/FifHero.png" },
];

const LegendsGrid = ({ activeFilter = "All" }) => {
  const filtered = activeFilter === "All" ? legends : legends.filter((legend) => legend.role === activeFilter);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <AnimatePresence>
            {filtered.map((legend) => (
              <Motion.div
                key={legend.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden border border-white/10 bg-[#111]"
              >
                <img
                  src={legend.image}
                  alt={legend.name}
                  className="w-full h-[320px] sm:h-[350px] lg:h-[380px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <h3 className="text-xl sm:text-2xl font-bold italic text-white uppercase">{legend.name}</h3>

                  <p className="text-xs text-red-600 font-bold uppercase tracking-widest mt-1">{legend.role}</p>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  );
};

export default LegendsGrid;
