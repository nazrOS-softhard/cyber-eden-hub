import { motion } from "framer-motion";
import { Activity, Zap, Shield, Lock, Box, Cog, Globe } from "lucide-react";

export function AccessPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass rounded-lg p-4 neon-border animate-pulse-neon"
    >
      <div className="flex items-center gap-2 font-mono text-[11px]">
        <span className="text-muted-foreground">{">"}</span>
        <span className="text-acid">ACCESS GRANTED</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[10px] text-foreground/80">
        <div>LEVEL: <span className="text-neon">08 · АРХИТЕКТОР</span></div>
        <div>TRUST: <span className="text-cyan">94</span></div>
        <div>XP: <span className="text-acid">8700 / 12000</span></div>
        <div>CORE: <span className="text-neon">v1.8.7</span></div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-background/60">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "72%" }}
          transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--neon), var(--cyan))", boxShadow: "0 0 10px var(--neon)" }}
        />
      </div>
      <div className="mt-2 flex items-end gap-[2px]">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="w-[3px] rounded-sm"
            style={{
              height: `${4 + Math.abs(Math.sin(i * 0.7)) * 14}px`,
              background: i < 22 ? "var(--neon)" : "var(--border)",
              boxShadow: i < 22 ? "0 0 4px var(--neon)" : "none",
            }}
          />
        ))}
        <span className="ml-auto font-mono text-[9px] text-acid animate-flicker">● online</span>
      </div>
    </motion.div>
  );
}

const actions = [
  { icon: Lock, label: "SECURE" },
  { icon: Box, label: "BUILD" },
  { icon: Cog, label: "COMPETE" },
  { icon: Globe, label: "EXPLORE" },
  { icon: Zap, label: "REWRITE" },
];

export function ActionBar() {
  return (
    <div className="glass rounded-lg p-2 flex items-center justify-between gap-1">
      {actions.map((a, i) => (
        <motion.button
          key={a.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.05 }}
          whileHover={{ scale: 1.06 }}
          className="group flex flex-1 flex-col items-center gap-1 rounded-md px-2 py-2 transition-colors hover:bg-primary/10"
        >
          <a.icon className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-[var(--neon)] group-hover:drop-shadow-[0_0_6px_var(--neon)]" />
          <span className="font-mono text-[9px] tracking-widest text-foreground/70 group-hover:text-foreground">{a.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

export function ActivityFeed() {
  const items = [
    { icon: Shield, text: "XDR.sentinel задеплоен", time: "12с" },
    { icon: Activity, text: "Team Yandex · LIVE стрим", time: "1м" },
    { icon: Zap, text: "Mission 'Bypass' завершена · +320 XP", time: "4м" },
  ];
  return (
    <div className="glass rounded-lg p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground">// LIVE FEED</div>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--acid)] shadow-[0_0_8px_var(--acid)] animate-pulse" />
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="flex items-center gap-2 text-xs"
          >
            <it.icon className="h-3 w-3 text-[var(--cyan)]" />
            <span className="flex-1 truncate text-foreground/85">{it.text}</span>
            <span className="font-mono text-[9px] text-muted-foreground">{it.time}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
