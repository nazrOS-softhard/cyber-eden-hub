import { motion } from "framer-motion";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/market")({
  component: () => {
    const [selectedCategory, setSelectedCategory] = useState("ВСЕ ИНВЕНТАРЬ");

    const filteredProducts = selectedCategory === "ВСЕ ИНВЕНТАРЬ"
      ? products
      : products.filter((p) => p.category === selectedCategory);

    return (
      <PageShell
        tag="МАРКЕТПЛЕЙС"
        title={<><span className="text-neon">МАР</span>КЕТ</>}
        subtitle="ЦИФРОВЫЕ ПРОДУКТЫ И УСТРОЙСТВА"
      >
        {/* Фильтр — появляется сразу */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-8 justify-center"
        >
          {["ВСЕ ИНВЕНТАРЬ", "УСТРОЙСТВА", "СОФТ", "OS BUILDER"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded border text-sm tracking-wider transition ${
                selectedCategory === cat
                  ? "bg-[var(--neon)]/20 border-[var(--neon)] text-[var(--neon)]"
                  : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Сетка товаров — появляется при скролле */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * product.id, duration: 0.5 }}
              className="group flex flex-col bg-[#0d0d0d] border border-gray-800 rounded overflow-hidden hover:border-[var(--neon)]/50 transition-all"
            >
              {/* Картинка товара */}
              <div className="h-48 bg-gray-900 relative flex items-center justify-center">
                <img
                  src={product.image || "https://via.placeholder.com/200x200?text=+"}
                  alt={product.name}
                  className="w-24 h-24 object-contain opacity-70 group-hover:opacity-100 transition"
                />
                <div className="absolute top-3 left-3 bg-black/60 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider text-gray-400 border border-white/10">
                  {product.type}
                </div>
              </div>

              <div className="p-4 text-left">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold font-display text-white">{product.name}</h3>
                  <span className="text-[var(--neon)] font-bold text-sm">
                    {product.price > 0 ? `${product.price} XP` : "FREE"}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{product.description}</p>
                <button className="mt-3 w-full bg-[var(--neon)]/80 hover:bg-[var(--neon)] text-black font-bold py-2 rounded text-xs tracking-wider transition">
                  [ ПРИОБРЕСТИ ]
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageShell>
    );
  },
});
