import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/journal")({
  component: () => (
    <PageShell
      tag="БАЗА ЗНАНИЙ СИНДИКАТА"
      title={<><span className="text-cyan">КИБЕР</span>ЖУРНАЛ</>}
      subtitle="СТАТЬИ • ИНТЕРВЬЮ • ИССЛЕДОВАНИЯ"
    >
      <div className="text-gray-400 text-sm">
        Здесь будут статьи, интервью и исследования.
        <br />
        Наполнение контентом — следующий шаг.
      </div>
    </PageShell>
  ),
});
