import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/login")({
  component: () => (
    <PageShell
      tag="auth · secure channel"
      title={<>в<span className="text-neon">ход</span></>}
      subtitle="войти в nazrOS"
    >
      <div className="flex flex-col gap-2 w-[min(360px,90vw)]">
        <button className="rounded-full border border-[var(--neon)] bg-[var(--neon)]/15 px-6 py-2.5 text-xs uppercase tracking-[0.25em] hover:bg-[var(--neon)]/30">
          email · код
        </button>
        <button className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-xs uppercase tracking-[0.25em] backdrop-blur-xl hover:border-[var(--cyan)]">
          google
        </button>
      </div>
    </PageShell>
  ),
});
