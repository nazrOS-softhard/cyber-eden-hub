import { motion } from "framer-motion";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

// Данные статей (можно заменить на реальные позже)
const articles = [
  { id: 1, title: "Статья 1", category: "Кибербезопасность", description: "Краткое описание статьи..." },
  { id: 2, title: "Статья 2", category: "Геймдев", description: "Краткое описание статьи..." },
  { id: 3, title: "Статья 3", category: "Киберспорт", description: "Краткое описание статьи..." },
  { id: 4, title: "Статья 4", category: "Хакинг", description: "Краткое описание статьи..." },
  { id: 5, title: "Статья 5", category: "Цифровая культура", description: "Краткое описание статьи..." },
];

export const Route = createFileRoute("/journal")({
  component: () => {
    const [filterCategory, setFilterCategory] = useState("Все");

    const filteredArticles = filterCategory === "Все"
      ? articles
      : articles.filter((a) => a.category === filterCategory);

    return (
      <PageShell
        tag="БАЗА ЗНАНИЙ СИНДИКАТА"
        title={<><span className="text-cyan">КИБЕР</span>ЖУРНАЛ</>}
      >
        <div className="mt-12">
          {/* Фильтры */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {["Все", "Кибербезопасность", "Геймдев", "Киберспорт", "Хакинг", "Цифровая культура"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider transition ${
                  filterCategory === cat
                    ? "bg-[var(--neon)]/20 border border-[var(--neon)] text-[var(--neon)]"
                    : "bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Сетка статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-4">
                <div className="h-32 bg-gray-800 mb-4 rounded"></div>
                <h3 className="text-lg font-bold font-display">{article.title}</h3>
                <p className="text-sm text-gray-400">{article.description}</p>
                <span className="text-xs text-cyan">{article.category}</span>
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    );
  },
});
