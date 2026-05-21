import { motion } from "framer-motion";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

const products = [
  {
    id: 1,
    name: "cloN ver. 1.0",
    description: "Устройство клоН по типу флип-дисплея с открытым железом и нейросетевым ускорителем",
    price: 89900,
    category: "УСТРОЙСТВА",
    type: "DEVICE",
    image: "/market/clon.png",
    inStock: true,
  },
  {
    id: 2,
    name: "GrowthN ver. 1.0",
    description: "Домашняя теплица ростН — автоматизированный комплекс для выращивания зелени с управлением через смартфон",
    price: 34900,
    category: "УСТРОЙСТВА",
    type: "DEVICE",
    image: "/market/grothN.png",
    inStock: true,
  },
  {
    id: 3,
    name: "biohN ver. 1.0",
    description: "Урбанистическая пасика биохН — компактный модуль для пчеловодства в городе с датчиками и системой мониторинга",
    price: 12900,
    category: "УСТРОЙСТВА",
    type: "DEVICE",
    image: "/market/biohN.png",
    inStock: true,
  },
  {
    id: 4,
    name: "blaN ver. 1.0",
    description: "Ноутбук разработчика блаН — многофункциональный инструмент с интегрированными модулями для обжимки кабелей, пультом управления манипуляторами и встроенным анализатором сигналов",
    price: 4900,
    category: "СОФТ",
    type: "SOFTWARE",
    image: "/market/blaN.png",
    inStock: true,
  },
  {
    id: 5,
    name: "nazrOS Core",
    description: "Основной дистрибутив экосистемы nazrOS",
    price: 0,
    category: "OS BUILDER",
    type: "OS",
    image: "/market/pin.png",
    inStock: true,
  },
  {
    id: 6,
    name: "nazrOS Sleath",
    description: "Privacy-first дистрибутив с hardened ядром",
    price: 0,
    category: "OS BUILDER",
    type: "OS",
    image: "/market/pin.png",
    inStock: true,
  },
  {
    id: 7,
    name: "nazrOS Dev Edition",
    description: "Версия для разработчиков с предустановленными инструментами",
    price: 0,
    category: "OS BUILDER",
    type: "OS",
    image: "/market/pin.png",
    inStock: true,
  },
];

export const Route = createFileRoute("/market")({
  component: () => {
    const [selectedCategory, setSelectedCategory] = useState("ВСЕ ИНВЕНТАРЬ");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = selectedCategory === "ВСЕ ИНВЕНТАРЬ"
      ? products
      : products.filter((p) => p.category === selectedCategory);

    return (
      <PageShell
        tag="КИБЕРСИСТЕМА nazrOS – ВЗЛОМАЙ РЕАЛЬНОСТЬ"
        title={<span className="text-3xl md:text-5xl font-bold text-neon">МАРКЕТ</span>}
        subtitle="ЦИФРОВЫЕ ПРОДУКТЫ И УСТРОЙСТВА"
      >
        <div className="mt-32">
          {/* Фильтры */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {["ВСЕ ИНВЕНТАРЬ", "УСТРОЙСТВА", "СОФТ", "OS BUILDER"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs tracking-wider transition ${
                  selectedCategory === cat
                    ? "bg-[var(--neon)]/20 border border-[var(--neon)] text-[var(--neon)]"
                    : "bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Сетка товаров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0d0d0d] border border-gray-800 rounded-lg overflow-hidden hover:border-[var(--neon)]/50 transition-all cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-32 bg-gray-900 relative">
                  <img
                    src={product.image || "https://via.placeholder.com/200x200?text=+"}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider text-gray-400 border border-white/10">
                    {product.type}
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-bold font-display">{product.name}</h3>
                    <span className="text-[var(--neon)] font-bold text-sm">
                      {product.price > 0 ? `${product.price} XP` : "FREE"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{product.description}</p>
                  <button className="mt-2 w-full bg-[var(--neon)]/80 hover:bg-[var(--neon)] text-black font-bold py-1 rounded text-xs tracking-wider transition">
                    [ ПРИОБРЕСТИ ]
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Модальное окно с полным описанием */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-[#0d0d0d] border border-[var(--neon)]/50 rounded-lg w-full min-h-screen flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Стрелка для закрытия */}
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
                onClick={() => setSelectedProduct(null)}
              >
                <img src="/arrow.svg" alt="Закрыть" className="h-8 w-8 object-contain rotate-90 opacity-60 hover:opacity-100 transition" />
              </div>

              {/* Фото на весь экран */}
              <div className="flex-1 relative">
                <img
                  src={selectedProduct.image || "https://via.placeholder.com/800x600?text=+"}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Кнопка и описание */}
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-2xl font-bold font-display mb-2">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{selectedProduct.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--neon)] font-bold">
                    {selectedProduct.price > 0 ? `${selectedProduct.price} XP` : "FREE"}
                  </span>
                  <button className="px-4 py-1 bg-[var(--neon)]/80 hover:bg-[var(--neon)] text-black font-bold text-xs tracking-wider rounded transition">
                    [ ПРИОБРЕСТИ ]
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageShell>
    );
  },
});