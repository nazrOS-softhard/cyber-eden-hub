import { motion } from "framer-motion";
import { ReactNode } from "react";
import { RainBackground } from "@/components/RainBackground";
import { TopNav } from "@/components/TopNav";

interface Props {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export function PageShell({ tag, title, subtitle, children }: Props) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.12_295_/_0.35),transparent_60%),radial-gradient(ellipse_at_bottom_right,oklch(0.32_0.18_220_/_0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] hud-grid opacity-20" />
      <RainBackground />
      <div className="pointer-events-none absolute inset-0 z-[3] scanline" />

      <TopNav />

      <main className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--acid)] shadow-[0_0_10px_var(--acid)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
            {tag}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display text-[clamp(48px,9vw,130px)] font-extrabold leading-[0.9] tracking-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 max-w-xl font-mono text-[11px] uppercase tracking-[0.35em] text-foreground/60"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </main>
    </div>
  );
}
