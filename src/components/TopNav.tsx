import { Link } from "@tanstack/react-router";

const items = [
  { label: "ГЛАВНАЯ", to: "/" },
  { label: "ДАШБОРД", to: "/dashboard" },
  { label: "ЖУРНАЛ", to: "/journal" },
  { label: "ТРАНСЛЯЦИИ", to: "/streams" },
  { label: "СОБЫТИЯ", to: "/events" },
  { label: "МАРКЕТ", to: "/market" },
] as const;

export function TopNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-4 md:px-8 bg-black/80 backdrop-blur-xl border-b border-white/10">
      {/* Логотип */}
      <Link to="/" className="group flex items-center gap-3">
        <div className="relative h-10 w-10">
          <img
            src="/cybereden-logo.svg"
            alt="Сурикен nazrOS"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-1">
            <span className="font-bold text-lg">Кибер</span>
            <span className="text-neon font-bold text-lg">эдэН</span>
          </div>
        </div>
      </Link>

      {/* Центральное меню */}
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

      {/* Аватарка */}
      <Link to="/profile" className="flex items-center gap-3 rounded-full border border-border bg-background/30 py-1 pl-3 pr-1 backdrop-blur-xl hover:border-[var(--cyan)]/60">
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
    </header>
  );
}