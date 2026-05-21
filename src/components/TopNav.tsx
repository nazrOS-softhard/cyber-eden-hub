import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const items = [
  { label: "ГЛАВНАЯ", to: "/" },
  { label: "ДАШБОРД", to: "/dashboard" },
  { label: "ЖУРНАЛ", to: "/journal" },
  { label: "ТРАНСЛЯЦИИ", to: "/streams" },
  { label: "СОБЫТИЯ", to: "/events" },
  { label: "МАРКЕТ", to: "/market" },
] as const;

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="absolute inset-x-0 top-0 z-30 h-24"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Логотип — вращается только сурикен */}
      <Link to="/" className="absolute left-0 top-0 z-40 p-4">
        <div className="relative w-24 h-24">
          {/* Вращающийся сурикен */}
          <motion.img
            src="/cybereden-logo.svg"
            alt="Сурикен nazrOS"
            className="h-full w-full object-contain"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          {/* Текст внутри (не вращается) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-sm text-white">КиберэдэН</span>
          </div>
        </div>
      </Link>

      {/* Аватарка — в правом углу */}
      <Link to="/profile" className="absolute right-0 top-0 z-40 p-4">
        <div className="flex items-center gap-3 rounded-full border border-border bg-background/30 py-1 pl-3 pr-1 backdrop-blur-xl hover:border-[var(--cyan)]/60">
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
        </div>
      </Link>

      {/* Меню — выезжает при наведении */}
      <AnimatePresence>
        {isOpen && (
          <motion.header
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-0 flex items-center justify-center bg-black/80 backdrop-blur-xl border-b border-white/10"
          >
            <nav className="flex items-center gap-2 rounded-full border border-border bg-background/30 px-4 py-2 backdrop-blur-xl">
              {items.map((it) => (
                <Link
                  key={it.label}
                  to={it.to}
                  className="relative rounded-full px-4 py-1.5 text-xs uppercase tracking-wider text-foreground/70 transition-colors hover:text-foreground hover:bg-[var(--neon)]/10"
                  activeProps={{ className: "text-foreground bg-[var(--neon)]/15 shadow-[0_0_18px_var(--neon)]/30" }}
                  activeOptions={{ exact: true }}
                >
                  {it.label}
                </Link>
              ))}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}