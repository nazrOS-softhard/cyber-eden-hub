import { motion } from "framer-motion";
import {
  Shield, Gamepad2, Trophy, Terminal, Sparkles,
  Mic, Cpu, Brain, Wrench, Home,
} from "lucide-react";

const items = [
  { icon: Home, label: "Главная", code: "00" },
  { icon: Shield, label: "Кибербезопасность", code: "01" },
  { icon: Gamepad2, label: "Gamedev", code: "02" },
  { icon: Trophy, label: "Киберспорт", code: "03" },
  { icon: Terminal, label: "Хакинг", code: "04" },
  { icon: Sparkles, label: "Digital Culture", code: "05" },
  { icon: Mic, label: "Интервью", code: "06" },
  { icon: Cpu, label: "Разработка", code: "07" },
  { icon: Brain, label: "AI", code: "08" },
  { icon: Wrench, label: "Инженерные", code: "09" },
];

export function Sidebar() {
  return (
    <aside className="relative z-20 hidden h-full w-[240px] shrink-0 flex-col border-r border-border glass md:flex">
      <div className="px-5 py-5 border-b border-border">
        <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">NAZROS // OS</div>
        <div className="mt-1 font-display text-xl font-bold tracking-tight">
          киберэдэ<span className="text-neon">Н</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {items.map((it, i) => (
          <motion.button
            key={it.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.04 * i }}
            whileHover={{ x: 4 }}
            className="group relative flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm text-foreground/80 transition-colors hover:bg-primary/10 hover:text-foreground"
          >
            <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-[var(--neon)] shadow-[0_0_10px_var(--neon)] transition-all duration-300 group-hover:h-6" />
            <it.icon className="h-4 w-4 text-foreground/60 transition-colors group-hover:text-[var(--neon)]" />
            <span className="flex-1 truncate">{it.label}</span>
            <span className="font-mono text-[10px] text-muted-foreground">{it.code}</span>
          </motion.button>
        ))}
      </nav>

      <div className="border-t border-border px-4 py-3">
        <div className="font-mono text-[10px] text-muted-foreground">DEPARTMENTS</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {["LOSHADKA","Portal","Signal","GAMMA","CXEMA"].map((d) => (
            <span key={d} className="rounded-sm border border-border bg-background/50 px-1.5 py-0.5 font-mono text-[9px] text-foreground/70 hover:border-[var(--neon)] hover:text-[var(--neon)] cursor-pointer transition-colors">
              {d}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
