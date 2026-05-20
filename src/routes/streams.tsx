import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/streams")({
  component: () => (
    <PageShell
      tag="live · uplink secured"
      title={<>транс<span className="text-cyan">ляции</span></>}
      subtitle="вещание камеры · микрофона · экрана"
    >
      <button className="rounded-full border border-[var(--neon)] bg-[var(--neon)]/15 px-6 py-2.5 text-xs uppercase tracking-[0.25em] shadow-[0_0_24px_var(--neon)]/40 transition-all hover:bg-[var(--neon)]/30">
        начать вещание
      </button>
    </PageShell>
  ),
});
