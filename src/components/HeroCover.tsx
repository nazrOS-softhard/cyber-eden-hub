import { motion } from "framer-motion";
import cover from "@/assets/nazros-cover.png";

export function HeroCover() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border glass">
      {/* Camera-drift image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.img
          src={cover}
          alt="nazrOS cover figure"
          className="h-full w-full object-cover object-center"
          animate={{ x: [0, -8, 0], y: [0, 4, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      <div className="absolute inset-0 hud-grid opacity-40" />

      {/* Top meta bar */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-5 py-3 font-mono text-[10px] tracking-[0.25em] text-foreground/70">
        <div className="flex gap-3">
          <span>CYBERSECURITY</span><span className="text-foreground/30">/</span>
          <span>GAMEDEV</span><span className="text-foreground/30">/</span>
          <span>ESPORTS</span><span className="text-foreground/30">/</span>
          <span>HACKING</span><span className="text-foreground/30">/</span>
          <span>DIGITAL CULTURE</span>
        </div>
        <div className="text-right">
          <div className="text-neon">№08 (23)</div>
          <div className="text-foreground/50">AUTUMN 2024</div>
        </div>
      </div>

      {/* Big logo */}
      <div className="absolute left-5 top-14">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-[clamp(56px,9vw,140px)] font-extrabold leading-[0.85] tracking-tight"
        >
          <span className="bg-gradient-to-br from-white to-foreground/60 bg-clip-text text-transparent">nazr</span>
          <span className="inline-block rounded-lg border border-[var(--neon)] px-3 text-neon animate-flicker">OS</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-foreground/70"
        >
          операционная среда реальности —
        </motion.div>
      </div>

      {/* Theme of issue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-5 left-5 max-w-[280px]"
      >
        <div className="mb-1 inline-block rounded-sm border border-border bg-background/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
          Тема номера
        </div>
        <div className="font-display text-2xl font-bold leading-tight">
          <div>ВЗЛОМАТЬ</div>
          <div className="text-neon">РЕАЛЬНОСТЬ</div>
        </div>
        <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
          границы между игрой, технологией и человеком
        </p>
      </motion.div>

      {/* Floating QR-ish chip */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 right-5 glass rounded-md p-2 text-center"
      >
        <div className="h-14 w-14 rounded-sm bg-[conic-gradient(from_0deg,var(--neon),var(--cyan),var(--acid),var(--neon))] opacity-90" />
        <div className="mt-1 font-mono text-[8px] text-acid">NAZROS.COM</div>
      </motion.div>

      <div className="scanline absolute inset-0" />
    </div>
  );
}
