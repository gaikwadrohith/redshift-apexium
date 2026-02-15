import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Phone, Instagram, Github, Linkedin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050202] text-white overflow-hidden pt-24 pb-12 border-t border-white/5">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none text-[240px] font-serif">武</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-red-600"></div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-red-600">The Visionary</h3>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black leading-tight uppercase">
              Crafting Experiences Through The Lens Of <span className="text-red-600 italic">Bushido.</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed max-w-md">
              In every frame, we seek honor. In every line of code, we forge precision. More than developers — warriors of the digital frontier.
            </p>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="md:col-span-3 flex flex-col gap-8">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">The Archives</h3>

            <nav className="flex flex-col gap-4 text-lg font-medium">
              {["Legends", "Seasons", "Battle Pass", "News"].map((item) => (
                <NavLink key={item} to={`/${item.toLowerCase().replace(" ", "")}`} className="group flex items-center gap-3 hover:text-red-600 transition">
                  <span className="w-0 h-[1px] bg-red-600 transition-all group-hover:w-4"></span>
                  {item}
                </NavLink>
              ))}
            </nav>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:col-span-4 flex flex-col gap-8">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Connect In Shadow</h3>

            <div className="flex gap-4">
              <a
                href="tel:+919881914654"
                className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Phone size={18} />
              </a>

              <a
                href="https://instagram.com/rohittt._gaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://github.com/gaikwadrohith"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/gaikwad-rohith"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-red-600/20 flex items-center justify-center border border-red-600/30">
                  <ShieldCheck className="text-red-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase">Seal of Honor</p>
                  <p className="text-[10px] text-white/40 italic">Digital Signature Verified</p>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/30">
          <p>© 2026 REDSHIFT APEXIUM. Forged In Honor.</p>

          <div className="flex gap-8">
            <NavLink to="#" className="hover:text-white transition">
              Privacy Scroll
            </NavLink>
            <NavLink to="#" className="hover:text-white transition">
              Combat Terms
            </NavLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;