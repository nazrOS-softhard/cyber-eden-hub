import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  subtitle: string;
  page: string;
  accent?: "neon" | "cyan" | "acid";
  delay?: number;
}

export function ArticleCard({ tag, title, subtitle, page, accent = "neon", delay = 0 }: Props) {
  const accentClass =
    accent === "cyan" ? "text-cyan" : accent === "acid" ? "text-acid" : "text-neon";
  const glowVar =
    accent === "cyan" ? "var(--cyan)" : accent === "acid" ? "var(--acid)" : "var(--neon)";

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group relative block cursor-pointer rounded-lg border border-border bg-background/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-color)] hover:bg-background/60"
      style={{ ["--accent-color" as never]: glowVar }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 24px ${glowVar}55, inset 0 0 0 1px ${glowVar}55`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
    >
      <div className="mb-2 inline-block rounded-sm border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground group-hover:border-[var(--accent-color)] group-hover:text-foreground">
        {tag}
      </div>
      <div className="font-display text-base font-bold leading-tight tracking-tight">
        {title.split(" / ").map((part, i) => (
          <div key={i} className={i === 1 ? accentClass : ""}>{part}</div>
        ))}
      </div>
      <p className="mt-2 line-clamp-2 text-[11px] uppercase tracking-wide text-muted-foreground">
        {subtitle}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className={`font-mono text-[10px] ${accentClass}`}>СТР. {page}</span>
        <span className="font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          OPEN →
        </span>
      </div>
    </motion.a>
  );
}
