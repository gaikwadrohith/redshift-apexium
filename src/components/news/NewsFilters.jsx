import { useState } from "react"
import { motion as Motion } from "framer-motion"

const categories = ["All News", "Patch Notes", "Community", "Events"]

const NewsFilters = ({ onFilter }) => {
  const [active, setActive] = useState("All News")

  const handleClick = (category) => {
    setActive(category)
    onFilter(category)
  }

  return (
    <section className="bg-black border-b border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className="relative uppercase text-sm tracking-widest font-semibold"
          >
            {active === category && (
              <Motion.span
                layoutId="activeFilter"
                className="absolute inset-0 bg-red-600/20 border border-red-600"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <span
              className={`relative px-6 py-2 transition ${
                active === category
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {category}
            </span>
          </button>
        ))}

      </div>
    </section>
  )
}

export default NewsFilters
