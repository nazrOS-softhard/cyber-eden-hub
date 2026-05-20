import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <PageShell
      tag="nazrOS · dashboard · live"
      title={<><span className="text-cyan">даш</span>борд</>}
      subtitle="кибер-кабинет · XP · миссии · активность"
    >
      <div className="grid w-[min(880px,90vw)] grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { l: "XP", v: "18,420", c: "text-neon" },
          { l: "RANK", v: "S-07", c: "text-cyan" },
          { l: "MISSIONS", v: "12 / 30", c: "text-acid" },
          { l: "STREAK", v: "47д", c: "text-neon" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-border bg-background/40 px-4 py-3 backdrop-blur-md">
            <div className="font-mono text-[9px] tracking-widest text-foreground/50">{s.l}</div>
            <div className={`mt-1 font-display text-xl font-bold ${s.c}`}>{s.v}</div>
          </div>
        ))}
      </div>
    </PageShell>
  ),
});
