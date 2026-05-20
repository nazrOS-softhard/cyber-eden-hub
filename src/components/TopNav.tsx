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
            {/* Логотип — анимированный сурикен */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="h-10 w-10 animate-spin-slow drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
                  style={{ animationDuration: '6s' }}
                >
                  <defs>
                    <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff0066" />
                      <stop offset="50%" stopColor="#ff3366" />
                      <stop offset="100%" stopColor="#ff0066" />
                    </linearGradient>
                    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00ffff" />
                      <stop offset="50%" stopColor="#ff00ff" />
                      <stop offset="100%" stopColor="#00ffff" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Внешний круг */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#ff0040" strokeWidth="2" strokeDasharray="10 5" opacity="0.4" />
                  
                  {/* Первый лепесток (верхний) */}
                  <path
                    d="M100 10 Q140 50 130 90 Q120 70 100 60 Q80 70 70 90 Q60 50 100 10Z"
                    fill="none"
                    stroke="url(#neonGrad)"
                    strokeWidth="3"
                    filter="url(#glow)"
                  />
                  
                  {/* Второй лепесток (правый) */}
                  <path
                    d="M190 100 Q150 140 110 130 Q130 120 140 100 Q130 80 110 70 Q150 60 190 100Z"
                    fill="none"
                    stroke="url(#neonGrad)"
                    strokeWidth="3"
                    filter="url(#glow)"
                  />
                  
                  {/* Третий лепесток (нижний) */}
                  <path
                    d="M100 190 Q60 150 70 110 Q80 130 100 140 Q120 130 130 110 Q140 150 100 190Z"
                    fill="none"
                    stroke="url(#neonGrad)"
                    strokeWidth="3"
                    filter="url(#glow)"
                  />
                  
                  {/* Четвёртый лепесток (левый) */}
                  <path
                    d="M10 100 Q50 60 90 70 Q70 80 60 100 Q70 120 90 130 Q50 140 10 100Z"
                    fill="none"
                    stroke="url(#neonGrad)"
                    strokeWidth="3"
                    filter="url(#glow)"
                  />
                  
                  {/* Текст в центре */}
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="bold"
                    fill="url(#textGrad)"
                    fontFamily="monospace"
                    className="select-none"
                  >
                    nazrOS
                  </text>
                  
                  {/* Центральная точка (свечение) */}
                  <circle cx="100" cy="100" r="3" fill="#ffffff" filter="url(#glow)" />
                </svg>
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