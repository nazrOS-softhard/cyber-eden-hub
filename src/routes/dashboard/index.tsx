import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";

// Данные киберов
const cybers = [
  { id: 1, name: "CyberUser_01", role: "Наблюдатель", xp: 1240, status: "online" },
  { id: 2, name: "CyberUser_02", role: "Наблюдатель", xp: 980, status: "offline" },
  { id: 3, name: "CyberUser_03", role: "Оператор", xp: 3450, status: "online" },
  { id: 4, name: "CyberUser_04", role: "Оператор", xp: 2780, status: "online" },
  { id: 5, name: "CyberUser_05", role: "Архитектор ядра", xp: 8920, status: "online" },
  { id: 6, name: "CyberUser_06", role: "Архитектор ядра", xp: 7540, status: "offline" },
  { id: 7, name: "CyberUser_07", role: "Главный разработчик", xp: 12450, status: "online" },
  { id: 8, name: "CyberUser_08", role: "Главный разработчик", xp: 10320, status: "online" },
];

export const Route = createFileRoute("/dashboard")({
  component: () => {
    const [selectedRole, setSelectedRole] = useState("Все");

    const filteredCybers = selectedRole === "Все"
      ? cybers
      : cybers.filter((c) => c.role === selectedRole);

    return (
      <PageShell
        tag="nazrOS · dashboard · live"
        title={<><span className="text-cyan">даш</span>борд</>}
        subtitle="кибер-кабинет · XP · миссии · активность"
      >
        {/* Верхняя часть — статистика */}
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

        {/* Таблица киберов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-[min(880px,90vw)] mt-12"
        >
          <h2 className="text-lg font-bold font-display text-foreground/80 mb-4">
            СПИСОК КИБЕРОВ
          </h2>

          {/* Фильтры */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["Все", "Наблюдатель", "Оператор", "Архитектор ядра", "Главный разработчик"].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider transition ${
                  selectedRole === role
                    ? "bg-[var(--neon)]/20 border border-[var(--neon)] text-[var(--neon)]"
                    : "bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Таблица */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-gray-500">Кибер</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-gray-500">Роль</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-gray-500">XP</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-gray-500">Статус</th>
                </tr>
              </thead>
              <tbody>
                {filteredCybers.map((cyber) => (
                  <tr key={cyber.id} className="border-b border-gray-800 hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 text-sm font-display">{cyber.name}</td>
                    <td className="py-3 px-4 text-sm text-cyan">{cyber.role}</td>
                    <td className="py-3 px-4 text-sm text-neon">{cyber.xp}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${
                        cyber.status === "online" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {cyber.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </PageShell>
    );
  },
});
