import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/streams")({
  component: () => (
    <PageShell
      tag="ПРЯМЫЕ ТРАНСЛЯЦИИ"
      title={<><span className="text-neon">СТРИ</span>МЫ</>}
      subtitle="КИБЕРПРОСТРАНСТВО • LIVE • АКТИВНОСТЬ"
    >
      <div className="text-gray-400 text-sm">
        Здесь будут отображаться трансляции киберов.
        <br />
        Наполнение контентом — следующий шаг.
      </div>
    </PageShell>
  ),
});
