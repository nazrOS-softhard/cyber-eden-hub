
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

// Данные продуктов (можно заменить на реальные)
const products = [
  {
    id: 1,
    name: "CyberDeck Pro X1",
    description: "Ноутбук с открытым железом и нейросетевым ускорителем",
    price: 89900,
    type: "device",
    image: "/market/cyberdeck.jpg",
  },
  {
    id: 2,
    name: "NullPhone v2",
    description: "Смартфон с GraphQL OS и шифрованным каналом",
    price: 34900,
    type: "device",
    image: "/market/nullphone.jpg",
  },
  {
    id: 3,
    name: "nazrOS Core",
    description: "Основной дистрибутив экосистемы nazrOS",
    price: 0,
    type: "os",
    image: "/market/core.png",
  },
  {
    id: 4,
    name: "PITerminal Kit",
    description: "Портативный хакинг-компьютер на базе RPi5",
    price: 12900,
    type: "device",
    image: "/market/pi-kit.jpg",
  },
];

export function MarketPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
                  {product.type === "device" ? "Устройство" : "OS"}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold font-display">{product.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[var(--neon)] font-bold text-lg">
                    {product.price > 0 ? `${product.price} XP` : "FREE"}
                  </span>
                  <button className="px-4 py-1.5 bg-[var(--neon)]/20 hover:bg-[var(--neon)]/40 text-[var(--neon)] border border-[var(--neon)]/30 rounded-full text-sm font-medium transition">
                    Приобрести
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
