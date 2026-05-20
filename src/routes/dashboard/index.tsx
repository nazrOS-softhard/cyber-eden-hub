import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <PageShell
      tag="nazrOS · dashboard · live"
      title={<><span className="text-cyan">даш</span>борд</>}
      subtitle="кибер-кабинет · XP · миссии · активность"
    >
      {/* Верхняя часть — появляется сразу */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid w-[min(880px,90vw)] grid-cols-2 gap-3 md:grid-cols-4"
      >
        {[
          { l: "XP", v: "18,420", c: "text-neon" },
          { l: "RANK", v: "S-07", c: "text-cyan" },
          { l: "MISSIONS", v: "12 / 30", c: "text-acid" },
          { l: "STREAK", v: "47д", c: "text-neon" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-border bg-background/40 px-4 py-3 backdrop-blur-md">
            <div className="font-mono text-[9px] tracking-widest text-foreground/50">{s.l}</div>
            <div className={`mt-1 font-display text-xl font-bold ${s.c}`}>{s.v}</div>
          </div>
        ))}
      </motion.div>

      {/* Нижняя часть — появляется при скролле */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 w-[min(880px,90vw)]"
      >
        <h2 className="text-lg font-bold font-display text-foreground/80 mb-4">
          СТАТИСТИКА АКТИВНОСТИ
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Прочитано статей", value: "47", color: "text-cyan" },
            { label: "Просмотрено интервью", value: "12", color: "text-neon" },
            { label: "Выполнено миссий", value: "8", color: "text-acid" },
            { label: "Загружено 3D моделей", value: "3", color: "text-cyan" },
            { label: "Часов в эфире", value: "14h", color: "text-neon" },
            { label: "Заработано XP", value: "4,200", color: "text-acid" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-4 text-center"
            >
              <div className="font-mono text-[9px] tracking-widest text-gray-500">{stat.label}</div>
              <div className={`mt-1 font-display text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageShell>
  ),
});
