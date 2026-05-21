import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

const allItems = [
  { label: "ГЛАВНАЯ", to: "/" },
  { label: "ДАШБОРД", to: "/dashboard" },
  { label: "ЖУРНАЛ", to: "/journal" },
  { label: "ТРАНСЛЯЦИИ", to: "/streams" },
  { label: "СОБЫТИЯ", to: "/events" },
  { label: "МАРКЕТ", to: "/market" },
] as const;

const leftItems = allItems.slice(0, 3);
const rightItems = allItems.slice(3);

export function TopNav() {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="absolute inset-x-0 top-0 z-30 h-24"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Стрелка — появляется при наведении, ровно по центру */}
      <div
        className="absolute inset-x-0 top-0 z-40 h-24 cursor-pointer flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: isHovering ? 10 : -30, opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src="/arrow.svg"
            alt="Меню"
            className="h-6 w-6 object-contain"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>

      {/* Аватарка (Кабинет кибера) */}
      <Link to="/profile" className="absolute top-4 right-4 z-30 flex items-center gap-3 rounded-full border border-border bg-background/30 py-1 pl-3 pr-1 backdrop-blur-xl transition-all hover:border-[var(--cyan)]/60">
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

      {/* Меню — выезжает при клике */}
      <AnimatePresence>
        {isOpen && (
          <motion.header
            ref={menuRef}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 md:px-8 bg-black/80 backdrop-blur-xl border-b border-white/10"
          >
            {/* Сурикен в левом верхнем углу (с вращением) */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10">
                <motion.img
                  src="/cybereden-logo.svg"
                  alt="Сурикен nazrOS"
                  className="h-full w-full object-contain"
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

            {/* Меню (кликабельное) */}
            <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/30 px-4 py-2 backdrop-blur-xl">
              {leftItems.map((it) => (
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
              
              {/* Разделитель — пустое место */}
              <span className="w-6" />

              {/* Правая группа */}
              {rightItems.map((it) => (
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