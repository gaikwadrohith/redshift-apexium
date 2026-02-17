import { motion as Motion } from "framer-motion";
import { Shield, Swords, Gem, MessageSquare, Share2, HelpCircle, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeClan = () => {
  const navigate = useNavigate();

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full  mx-auto bg-gradient-to-br from-[#120707] via-[#0b0505] to-[#160909] border border-red-900/40 shadow-[0_0_100px_rgba(220,38,38,0.18)] overflow-hidden font-body rounded-xl"
    >
      <header className="flex items-center justify-between px-6 md:px-10 py-6 bg-gradient-to-r from-[#140909] via-black/80 to-[#140909] backdrop-blur-md border-b border-red-800/40">
        <div className="flex items-center gap-3">
          <Shield className="text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.7)]" size={26} />
          <h2 className="font-game text-lg md:text-xl tracking-widest uppercase text-white">
            <span className="text-red-500">REDSHIFT</span> APEXIUM
          </h2>
        </div>

        <div className="text-[10px] md:text-xs tracking-[0.4em] text-red-500 font-bold uppercase">Operator ID: 8824</div>
      </header>

      <div className="relative h-[380px] md:h-[460px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_top] scale-105"
          style={{
            backgroundImage: "linear-gradient(to top,#0b0505 10%,transparent 70%),linear-gradient(to right,rgba(0,0,0,0.95),transparent 55%),url('/auth/samuraiii.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(220,38,38,0.35),transparent_60%)]" />

        <Motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="absolute bottom-10 left-6 md:left-12 max-w-xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-[2px] w-14 bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
            <span className="text-red-400 tracking-[0.4em] text-xs uppercase font-semibold">Access Granted</span>
          </div>

          <h1 className="font-game text-4xl md:text-6xl leading-[0.9] uppercase text-white">
            Welcome To <br />
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]">Redshift APEXIUM</span>
          </h1>
        </Motion.div>
      </div>

      <div className="px-6 md:px-12 py-14 space-y-16 bg-gradient-to-b from-transparent to-black/30">
        <Motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-5">
          <div className="w-[3px] bg-gradient-to-b from-red-500 via-red-600 to-transparent shadow-[0_0_12px_rgba(220,38,38,0.6)]"></div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4 text-white">Your Mission Begins</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              In Redshift Apexium, precision is survival. Strategy defines elite operators. Discipline builds legends in the Outlands. Only those who adapt dominate.
            </p>
          </div>
        </Motion.section>

        <Motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.7)]" size={22} />
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-white">Operator Rewards</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-[#140909] to-black border border-red-800/30 p-7 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)] transition duration-500 rounded-lg">
              <Swords className="text-red-500 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.7)] transition" size={30} />
              <h4 className="font-semibold uppercase text-sm tracking-wide text-white">Crimson Edge</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Tactical Starter Weapon</p>
            </div>

            <div className="group bg-gradient-to-br from-[#140909] to-black border border-red-800/30 p-7 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)] transition duration-500 rounded-lg">
              <Gem className="text-red-500 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.7)] transition" size={30} />
              <h4 className="font-semibold uppercase text-sm tracking-wide text-white">500 Apexium Credits</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Deployment Bonus</p>
            </div>
          </div>
        </Motion.section>

        <Motion.section initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} className="flex justify-center pt-8">
          <button
            onClick={() => navigate("/legends")}
            className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-12 md:px-16 py-4 font-game tracking-[0.3em] uppercase text-xs md:text-base transition duration-300 shadow-[0_0_50px_rgba(220,38,38,0.6)] rounded-md text-white"
          >
            ENTER NOW
          </button>
        </Motion.section>
      </div>

      <footer className="bg-gradient-to-r from-[#120707] via-black to-[#120707] border-t border-red-800/40 px-6 md:px-10 py-12 text-center">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] mb-8">Redshift Apexium Command</p>

        <div className="flex justify-center gap-8 mb-8 text-gray-400">
          <MessageSquare size={18} className="hover:text-red-500 transition" />
          <Share2 size={18} className="hover:text-red-500 transition" />
          <HelpCircle size={18} className="hover:text-red-500 transition" />
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed mb-8">© 2026 Redshift Apexium Interactive. Secure transmission for registered operators only.</p>

        <div className="flex justify-center gap-8 text-[10px] uppercase tracking-widest text-gray-500">
          <button className="hover:text-red-500 transition">Operator Policy</button>
          <button className="hover:text-red-500 transition">Security Protocol</button>
        </div>
      </footer>
    </Motion.div>
  );
};

export default WelcomeClan;
