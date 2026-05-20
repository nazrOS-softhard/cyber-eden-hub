import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const items = [
  { label: "Главная", to: "/" },
  { label: "Дашборд", to: "/" },
  { label: "Журнал", to: "/" },
  { label: "Трансляции", to: "/" },
  { label: "События", to: "/" },
];

export function TopNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-4 md:px-8"
    >
      {/* Logo top-left — neon star */}
      <Link to="/" className="group flex items-center gap-3">
        <div className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--neon)]/60 bg-background/40 backdrop-blur-md shadow-[0_0_24px_var(--neon)]/50 transition-all group-hover:shadow-[0_0_32px_var(--neon)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[var(--neon)]" strokeWidth="2" strokeLinejoin="round">
            <path d="M12 2 14.4 9.2 22 9.6 16.2 14.4 18 22 12 17.8 6 22 7.8 14.4 2 9.6 9.6 9.2Z" />
          </svg>
        </div>
        <div className="hidden sm:block">
          <div className="font-mono text-[9px] tracking-[0.35em] text-foreground/50">NAZROS // OS</div>
          <div className="font-display text-base font-bold leading-none tracking-tight">
            киберэдэ<span className="text-neon">Н</span>
          </div>
        </div>
      </Link>

      {/* Center nav */}
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

      {/* Avatar top-right */}
      <button className="group relative flex items-center gap-3 rounded-full border border-border bg-background/30 py-1 pl-3 pr-1 backdrop-blur-xl transition-all hover:border-[var(--cyan)]/60">
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
      </button>
    </motion.header>
  );
}
