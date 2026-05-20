import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RainBackground } from "@/components/RainBackground";
import { TopNav } from "@/components/TopNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "киберэдэН — nazrOS · операционная среда реальности" },
      {
        name: "description",
        content:
          "Интерактивная цифровая платформа экосистемы nazrOS: журнал, дев-хаб, киберспорт, трансляции и cyberpunk-соцсеть.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Full-screen cyber-hero background */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src="/cyber-hero.png"
          alt="киберэдэН — фигура в капюшоне с фиолетовым неоновым символом nazrOS"
          className="h-full w-full object-cover object-center"
          animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Atmospheric layers */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] hud-grid opacity-20" />
      <RainBackground />
      <div className="pointer-events-none absolute inset-0 z-[3] scanline" />

      {/* Top nav (logo left, nav center, avatar right) */}
      <TopNav />

      {/* Hero content */}
      <main className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--acid)] shadow-[0_0_10px_var(--acid)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
            nazrOS · sys.online · node kyiv-03
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-[clamp(64px,12vw,180px)] font-extrabold leading-[0.85] tracking-tight"
        >
          <span className="bg-gradient-to-br from-white via-foreground/80 to-foreground/40 bg-clip-text text-transparent">
            кибер
          </span>
          <span className="text-neon animate-flicker">эдэН</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 max-w-xl font-mono text-[11px] uppercase tracking-[0.35em] text-foreground/60"
        >
          операционная среда реальности — взломать реальность
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button className="group relative overflow-hidden rounded-full border border-[var(--neon)] bg-[var(--neon)]/15 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground shadow-[0_0_24px_var(--neon)]/40 transition-all hover:bg-[var(--neon)]/30 hover:shadow-[0_0_36px_var(--neon)]/70">
            войти в систему
          </button>
          <button className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground/80 backdrop-blur-xl transition-colors hover:border-[var(--cyan)] hover:text-cyan">
            смотреть журнал
          </button>
        </motion.div>
      </main>

      {/* Bottom HUD strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-5 py-3 font-mono text-[10px] tracking-widest text-foreground/50 md:px-8"
      >
        <div className="flex items-center gap-4">
          <span>UPLINK · 1.2 Gbit</span>
          <span className="text-foreground/30">|</span>
          <span className="hidden sm:inline">XP · 18,420</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neon animate-flicker">REC ●</span>
          <span className="hidden sm:inline text-cyan">user_0xnazr</span>
        </div>
      </motion.div>
    </div>
  );
}
