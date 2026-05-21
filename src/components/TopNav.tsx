import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const items = [
  { label: "Главная", to: "/" },
  { label: "Дашборд", to: "/dashboard" },
  { label: "Журнал", to: "/journal" },
  { label: "Трансляции", to: "/streams" },
  { label: "События", to: "/events" },
  { label: "Маркет", to: "/market" },
] as const;

export function TopNav() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="absolute inset-x-0 top-0 z-30 h-16"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 md:px-8 bg-black/80 backdrop-blur-xl border-b border-white/10"
          >
            {/* Логотип — сурикен через <img> с вращением */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10">
                <motion.img
                  src="/cybereden-logo.svg"
                  alt="Сурикен nazrOS"
                  className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-mono text-[9px] tracking-[0.35em] text-foreground/50">NAZROS // OS</div>
                <div className="font-display text-base font-bold leading-none tracking-tight">
                  киберэдэ<span className="text-neon">Н</span>
                </div>
              </div>
            </Link>

            {/* Центральное меню */}
            <nav className="pointer-events-auto hidden items-center gap-1 rounded-full border border-border bg-background/30 px-2 py-1.5 backdrop-blur-xl md:flex">
              {items.map((it) => (
                <Link
                  key={it.label}
                  to={it.to}
                  className="relative rounded-full px-4 py-1.5 text-xs uppercase tracking-wider text-foreground/70 transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-[var(--neon)]/15 shadow-[0_0_18px_var(--neon)]/30" }}
                  activeOptions={{ exact: true }}
                >
                  {it.label}
                </Link>
              ))}
            </nav>

            {/* Аватарка в правом углу */}
            <Link to="/profile" className="group relative flex items-center gap-3 rounded-full border border-border bg-background/30 py-1 pl-3 pr-1 backdrop-blur-xl transition-all hover:border-[var(--cyan)]/60">
              <div className="hidden text-right md:block">
                <div className="font-mono text-[9px] tracking-widest text-foreground/50">USER</div>
                <div className="text-xs text-cyan">0xnazr</div>
              </div>
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--cyan)]/60 shadow-[0_0_18px_var(--cyan)]/50">
                <div className="absolute inset-0 bg-[conic-gradient(from_120deg,var(--neon),var(--cyan),var(--acid),var(--neon))] opacity-90" />
                <div className="absolute inset-[2px] grid place-items-center rounded-full bg-background font-mono text-[10px] text-foreground">
                  N
                </div>
              </div>
            </Link>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}
