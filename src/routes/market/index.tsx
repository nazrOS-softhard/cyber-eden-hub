import { motion } from "framer-motion";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

// Данные продуктов
const products = [
  {
    id: 1,
    name: "CyberDeck Pro X1",
    description: "Ноутбук с открытым железом и нейросетевым ускорителем",
    price: 89900,
    category: "УСТРОЙСТВА",
    type: "DEVICE",
    image: "/market/clon.png",
    inStock: true,
  },
  {
    id: 2,
    name: "NullPhone v2",
    description: "Смартфон с GraphQL OS и шифрованным каналом",
    price: 34900,
    category: "УСТРОЙСТВА",
    type: "DEVICE",
    image: "/market/grothN.png",
    inStock: true,
  },
  {
    id: 3,
    name: "PITerminal Kit",
    description: "Портативный хакинг-компьютер на базе RPi5",
    price: 12900,
    category: "УСТРОЙСТВА",
    type: "DEVICE",
    image: "/market/biohN.png",
    inStock: true,
  },
  {
    id: 4,
    name: "nazrOS Core",
    description: "Основной дистрибутив экосистемы nazrOS",
    price: 0,
    category: "OS BUILDER",
    type: "OS",
    image: "/market/pin.png",
    inStock: true,
  },
  {
    id: 5,
    name: "nazrOS Sleath",
    description: "Privacy-first дистрибутив с hardened ядром",
    price: 0,
    category: "OS BUILDER",
    type: "OS",
    image: "/market/pin.png",
    inStock: true,
  },
  {
    id: 6,
    name: "nazrOS Dev Edition",
    description: "Версия для разработчиков с предустановленными инструментами",
    price: 0,
    category: "OS BUILDER",
    type: "OS",
    image: "/market/pin.png",
    inStock: true,
  },
  {
    id: 7,
    name: "CipherScan Pro",
    description: "Десктоп-утилита для пентеста и анализа кода",
    price: 4900,
    category: "СОФТ",
    type: "SOFTWARE",
    image: "/market/blaN.png",
    inStock: true,
  },
  {
    id: 8,
    name: "PixelForge Studio",
    description: "Редактор для создания пиксельной графики",
    price: 2900,
    category: "СОФТ",
    type: "SOFTWARE",
    image: "/market/blaN.png",
    inStock: true,
  },
  {
    id: 9,
    name: "DataVault",
    description: "Персональный менеджер паролей",
    price: 1900,
    category: "СОФТ",
    type: "SOFTWARE",
    image: "/market/blaN.png",
    inStock: true,
  },
  {
    id: 10,
    name: "NetWatch Dashboard",
    description: "Панель управления сетью",
    price: 3500,
    category: "СОФТ",
    type: "SOFTWARE",
    image: "/market/blaN.png",
    inStock: true,
  },
];

export const Route = createFileRoute("/market")({
  component: () => {
    const [selectedCategory, setSelectedCategory] = useState("ВСЕ ИНВЕНТАРЬ");

    const filteredProducts = selectedCategory === "ВСЕ ИНВЕНТАРЬ"
      ? products
      : products.filter((p) => p.category === selectedCategory);

    return (
      <PageShell
        tag="МАРКЕТПЛЕЙС // ЦИФРОВЫЕ ПРОДУКТЫ"
        title={<><span className="text-neon">МАР</span>КЕТ</>}
        subtitle="ЭКОСИСТЕМА NAZROS — ПОДДЕРЖИВАЙ РАЗРАБОТЧИКОВ"
      >
        {/* Фильтры — сдвинуты ниже и активны */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center mt-24">
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
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col bg-[#0d0d0d] border border-gray-800 rounded overflow-hidden hover:border-[var(--neon)]/50 transition-all"
            >
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
        </div>
      </PageShell>
    );
  },
});
