import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion as Motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Legends", path: "/legends" },
    { name: "Seasons", path: "/seasons" },
    { name: "Battle Pass", path: "/battlepass" },
    { name: "News", path: "/news" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-lg">
            <span className="text-white font-bold">RA</span>
          </div>
          <span className="text-white font-bold tracking-wider">
            <span className="text-red-600">REDSHIFT </span>APEXIUM
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `navLink ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 border border-white/20 text-xs uppercase tracking-widest text-white hover:border-red-600 transition">
            Sign In
          </button>
          <button className="px-5 py-2 bg-red-600 text-xs uppercase tracking-widest text-white hover:bg-red-700 transition">
            Play Free
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest transition ${
                      isActive
                        ? "text-red-600"
                        : "text-white/70 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <button className="px-4 py-2 border border-white/20 text-xs uppercase tracking-widest text-white hover:border-red-600 transition">
                  Sign In
                </button>
                <button className="px-5 py-2 bg-red-600 text-xs uppercase tracking-widest text-white hover:bg-red-700 transition">
                  Play Free
                </button>
              </div>

            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
