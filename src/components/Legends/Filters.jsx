import { useState } from "react"
import { motion as Motion} from "framer-motion"

const Filters = ({ onFilter }) => {
  const filters = ["All", "Skirmisher", "Recon", "Support", "Assault"]
  const [active, setActive] = useState("All")

  const handleClick = (item) => {
    setActive(item)
    onFilter && onFilter(item)
  }

  return (
    <section className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div className="relative flex flex-wrap gap-3">

          {filters.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="relative px-5 py-2 text-xs font-bold uppercase tracking-widest z-10"
            >
              {active === item && (
                <Motion.span
                  layoutId="activeLegendFilter"
                  className="absolute inset-0 bg-red-600 rounded-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span
                className={`relative ${
                  active === item
                    ? "text-white"
                    : "text-gray-600 hover:text-black"
                } transition`}
              >
                {item}
              </span>
            </button>
          ))}

        </div>

        <Motion.input
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          type="text"
          placeholder="Search Legends..."
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 text-sm outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
        />

      </div>
    </section>
  )
}

export default Filters