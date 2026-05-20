import { motion } from "framer-motion";
import { useState } from "react";

// Категории товаров
const categories = ["Все", "Устройства", "OS", "Софт", "Аксессуары"];

// Данные продуктов (с точными названиями файлов из public/market/)
const products = [
  {
    id: 1,
    name: "CyberDeck Pro X1",
    description: "Ноутбук с открытым железом и нейросетевым ускорителем",
    price: 89900,
    category: "Устройства",
    type: "device",
    image: "/market/clon.png",
    inStock: true,
  },
  {
    id: 2,
    name: "NullPhone v2",
    description: "Смартфон с GraphQL OS и шифрованным каналом",
    price: 34900,
    category: "Устройства",
    type: "device",
    image: "/market/grothN.png",
    inStock: true,
  },
  {
    id: 3,
    name: "nazrOS Core",
    description: "Основной дистрибутив экосистемы nazrOS",
    price: 0,
    category: "OS",
    type: "os",
    image: "/market/pin.png",
    inStock: true,
  },
  {
    id: 4,
    name: "PITerminal Kit",
    description: "Портативный хакинг-компьютер на базе RPi5",
    price: 12900,
    category: "Устройства",
    type: "device",
    image: "/market/biohN.png",
    inStock: true,
  },
  {
    id: 5,
    name: "Shadow Protocol Bundle",
    description: "Набор инструментов для пентеста и OSINT",
    price: 5900,
    category: "Софт",
    type: "software",
    image: "/market/blaN.png",
    inStock: false,
  },
  {
    id: 6,
    name: "Neon Keycap Set",
    description: "Клавиатурные кейкапы в стиле киберпанк",
    price: 3200,
    category: "Аксессуары",
    type: "accessory",
    image: "/market/clon_full.png",
    inStock: true,
  },
];

export default function MarketPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProducts = selectedCategory === "Все"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-white pt-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-2">
          МАРКЕТ
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          Цифровые продукты и устройства экосистемы nazrOS
        </p>

        {/* Фильтр по категориям */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-[var(--neon)] text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="group bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden hover:border-[var(--neon)]/50 transition-all"
            >
              {/* Картинка товара */}
              <div className="h-48 bg-gray-800 relative">
                <img
                  src={product.image || "https://via.placeholder.com/400x200?text=+"}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10">
                  {product.category}
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm uppercase tracking-widest">
                      Нет в наличии
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold font-display">{product.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[var(--neon)] font-bold text-lg">
                    {product.price > 0 ? `${product.price} XP` : "FREE"}
                  </span>
                  <button
                    disabled={!product.inStock}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                      product.inStock
                        ? "bg-[var(--neon)]/20 hover:bg-[var(--neon)]/40 text-[var(--neon)] border border-[var(--neon)]/30"
                        : "bg-gray-700 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Приобрести" : "Нет в наличии"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
