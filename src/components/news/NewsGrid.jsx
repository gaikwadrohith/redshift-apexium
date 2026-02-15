import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import NewsFilters from "./NewsFilters";

const newsItems = [
  {
    title: "Update v4.2: Honor & Steel",
    tag: "Patch Notes",
    img: "/news/news1.jpg",
  },
  {
    title: "Art of the Outlands",
    tag: "Community",
    img: "/news/news2.jpg",
  },
  {
    title: "The Crimson Moon Festival",
    tag: "Event",
    img: "/news/news3.jpg",
  },
];

const NewsGrid = () => {
  const [filtered, setFiltered] = useState(newsItems);

  const handleFilter = (category) => {
    if (category === "All News") {
      setFiltered(newsItems);
    } else {
      setFiltered(newsItems.filter((item) => item.tag === category));
    }
  };

  return (
    <>
      <NewsFilters onFilter={handleFilter} />

      <section className="bg-black py-20 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10 sm:mb-12 border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase flex items-center gap-3">
              <span className="w-1 h-6 sm:h-8 bg-red-600"></span>
              Latest Updates
            </h2>
          </div>

          <Motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <Motion.article
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="group border border-white/10 bg-[#111] hover:border-red-600 transition overflow-hidden"
                >
                  <div className="h-56 sm:h-64 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <span className="text-red-600 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">{item.tag}</span>

                    <h3 className="mt-4 text-lg sm:text-xl font-bold group-hover:text-red-600 transition leading-snug">{item.title}</h3>
                  </div>
                </Motion.article>
              ))}
            </AnimatePresence>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default NewsGrid;