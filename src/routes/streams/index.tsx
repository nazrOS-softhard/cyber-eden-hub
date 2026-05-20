import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/streams")({
  component: () => (
    <PageShell
      tag="ПРЯМЫЕ ТРАНСЛЯЦИИ"
      title={<><span className="text-neon">СТРИ</span>МЫ</>}
      subtitle="КИБЕРПРОСТРАНСТВО • LIVE • АКТИВНОСТЬ"
    >
      {/* Заголовок — появляется сразу */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-gray-400 text-sm mb-8">
          Здесь будут отображаться трансляции киберов.
          <br />
          Наполнение контентом — следующий шаг.
        </p>
      </motion.div>

      {/* Карточки стримов — появляются при скролле */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-4">
            <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
              <span className="text-gray-500 text-xs">LIVE • Превью</span>
            </div>
            <h3 className="text-lg font-bold font-display">Стрим {i}</h3>
            <p className="text-sm text-gray-400">Никнейм стримера...</p>
          </div>
        ))}
      </motion.div>
    </PageShell>
  ),
});
