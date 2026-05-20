import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <PageShell
      tag="nazros • dashboard • live"
      title={<><span className="text-cyan">даш</span>борд</>}
      subtitle="кибер-кабинет • XP • миссии • активность"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { label: "XP", value: "18,420", color: "text-neon" },
          { label: "RANK", value: "S-07", color: "text-cyan" },
          { label: "MISSIONS", value: "12 / 30", color: "text-acid" },
          { label: "STREAK", value: "47д", color: "text-neon" },
        ].map((s) => (
          <div key={s.label} className="border border-border bg-background/40 p-4 rounded-lg backdrop-blur-md">
            <div className="font-mono text-[9px] tracking-widest text-foreground/50">{s.label}</div>
            <div className={`mt-1 font-display text-xl font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
    </PageShell>
  ),
});
