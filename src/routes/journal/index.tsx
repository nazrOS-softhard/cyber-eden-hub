import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/journal")({
  component: () => (
    <PageShell
      tag="БАЗА ЗНАНИЙ СИНДИКАТА"
      title={<><span className="text-cyan">КИБЕР</span>ЖУРНАЛ</>}
      subtitle="СТАТЬИ • ИНТЕРВЬЮ • ИССЛЕДОВАНИЯ"
    >
      {/* Заголовок и теги — появляются сразу */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-gray-400 text-sm mb-8">
          Здесь будут статьи, интервью и исследования.
          <br />
          Наполнение контентом — следующий шаг.
        </p>
      </motion.div>

      {/* Контент — появляется при скролле */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-4">
              <div className="h-32 bg-gray-800 mb-4 rounded"></div>
              <h3 className="text-lg font-bold font-display">Статья {i}</h3>
              <p className="text-sm text-gray-400">Краткое описание статьи...</p>
            </div>
          ))}
        </div>
      </motion.div>
    </PageShell>
  ),
});
